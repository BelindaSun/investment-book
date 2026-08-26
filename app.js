/* =========================================================================
   Investment Book — render engine.
   Loads each company's data file (listed in data/manifest.js), then renders
   the currently-selected company into the 12 sections. No framework, no build.
   ========================================================================= */
(function () {
  "use strict";

  // ---- tiny helpers ----------------------------------------------------
  const $ = (sel, root) => (root || document).querySelector(sel);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const esc = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const TREND = { up: "↑", down: "↓", warn: "⚠", flat: "→" };
  const statusClass = (s) => "status-" + String(s || "").toLowerCase().replace(/[^a-z]/g, "");
  const trendClass = (t) => "trend " + (["up", "down", "warn", "flat"].includes(t) ? t : "flat");

  // Display labels (Chinese). The underlying enum keys stay English for CSS + logic.
  const STATUS_LABEL = { Strong: "强劲", Healthy: "健康", Strengthening: "增强中", Watching: "观察中", Weakening: "转弱", Invalidated: "已证伪" };
  const TAG_LABEL = { FACT: "事实", INFERENCE: "推断", THESIS: "判断", UNKNOWN: "未知" };
  const THREAT_LABEL = { High: "高", Medium: "中", Low: "低" };
  const statusText = (s) => STATUS_LABEL[s] || s || "—";

  // holdingStatus (是否真正持有) is SEPARATE from tier (研究深度).
  const HOLDING_LABEL = { held: "持有", watchlist: "观察", exited: "已退出", "not-held": "未持有" };
  const holdingOf = (c) => {
    const h = c && c.holdingStatus ? String(c.holdingStatus).toLowerCase() : "watchlist";
    return HOLDING_LABEL[h] ? h : "watchlist";
  };
  const isHeld = (c) => holdingOf(c) === "held";
  const whyLabelOf = (c) => ({ held: "我为什么持有", watchlist: "我为什么关注", exited: "当初为什么持有 / 为什么退出", "not-held": "我为什么关注" }[holdingOf(c)]);

  // Date precision — never fabricate a fake day. "2026-08" (month) renders as-is.
  const fmtDate = (date, precision) => {
    if (!date) return "";
    const s = String(date);
    if (precision === "year") return s.slice(0, 4);
    if (precision === "month") return s.slice(0, 7);
    return s;
  };

  // Evidence line: tag + text + optional "截至 <asOf>" and a source link from the
  // company's `sources` registry. Not every FACT needs a source; important ones do.
  const eviLine = (item, sources) => {
    if (typeof item === "string") return esc(item);
    const tag = item.tag ? `<span class="etag etag-${esc(item.tag)}">${esc(TAG_LABEL[item.tag] || item.tag)}</span>` : "";
    const bits = [];
    if (item.asOf) bits.push("截至 " + esc(item.asOf));
    const src = item.source && sources && sources[item.source];
    if (src) bits.push(`<a class="evi-src" href="${esc(src.url || "")}" target="_blank" rel="noopener" title="${esc(src.label || "")}${src.type ? " · " + esc(src.type) : ""}${src.date ? " · " + esc(src.date) : ""}">来源↗</a>`);
    else if (item.source) bits.push(`<span class="evi-src missing" title="未登记的来源引用: ${esc(item.source)}">来源?</span>`);
    const meta = bits.length ? ` <span class="evi-meta">· ${bits.join(" · ")}</span>` : "";
    return tag + esc(item.text) + meta;
  };

  // ---- section registry -------------------------------------------------
  // id, number, label, and a render(company) → HTML string
  // `has(company)` decides whether a section shows at all. Sparse companies
  // (Watch/starter tier) simply don't fill the deeper sections, and the nav +
  // page skip them — depth scales with how much the company earns your attention.
  // Section numbers are fixed identities, so a sparse company shows e.g. 01/09/12.
  const nonEmpty = (a) => !!(a && a.length);
  const SECTIONS = [
    { id: "overview", n: "01", label: "概览", render: renderOverview, has: () => true },
    { id: "thesis", n: "02", label: "核心逻辑", render: renderThesis, has: (c) => nonEmpty(c.theses) },
    { id: "business", n: "03", label: "业务", render: renderBusiness, has: (c) => nonEmpty(c.business) },
    { id: "ai-moat", n: "04", label: "AI 与护城河", render: renderAiMoat, has: (c) => !!c.aiMoat },
    { id: "drivers", n: "05", label: "驱动与生态位", render: renderDrivers, has: (c) => nonEmpty(c.drivers) || !!c.ecosystem },
    { id: "competition", n: "06", label: "竞争格局", render: renderCompetition, has: (c) => nonEmpty(c.competition) },
    { id: "metrics", n: "07", label: "关键指标", render: renderMetrics, has: (c) => nonEmpty(c.metrics) },
    { id: "financials", n: "08", label: "财务与估值", render: renderFinancials, has: (c) => !!(c.financials && nonEmpty(c.financials.rows)) },
    { id: "timeline", n: "09", label: "时间线", render: renderTimeline, has: (c) => nonEmpty(c.timeline) },
    { id: "evolution", n: "10", label: "逻辑演变", render: renderEvolution, has: (c) => nonEmpty(c.thesisEvolution) },
    { id: "risks", n: "11", label: "风险 / 证伪", render: renderRisks, has: (c) => (c.theses && c.theses.some((t) => t.invalidation)) || nonEmpty(c.risks) },
    { id: "position", n: "12", label: "我的持仓", render: renderPosition, has: (c) => !!c.position },
  ];

  // ---- tiers + staleness ------------------------------------------------
  const STALE_DAYS = 45; // a thesis untouched longer than this gets a review flag
  const TIERS = [
    { key: "core", label: "核心持仓", short: "核心" },
    { key: "active", label: "在场持仓", short: "在场" },
    { key: "watch", label: "观察 / 试仓", short: "观察" },
  ];
  const tierOf = (c) => {
    const t = c && c.tier ? String(c.tier).toLowerCase() : "active";
    return TIERS.some((x) => x.key === t) ? t : "active";
  };
  function daysSince(dateStr) {
    if (!dateStr) return null;
    let s = String(dateStr);
    if (/^\d{4}-\d{2}$/.test(s)) s += "-01"; // month precision → first of month
    if (/^\d{4}$/.test(s)) s += "-01-01"; // year precision
    const d = new Date(s + "T00:00:00");
    if (isNaN(d.getTime())) return null;
    return Math.floor((Date.now() - d.getTime()) / 86400000);
  }

  // ---- boot: load company data files, then render -----------------------
  function loadCompanies(tickers) {
    return Promise.all(
      tickers.map(
        (t) =>
          new Promise((resolve) => {
            const s = document.createElement("script");
            s.src = "data/companies/" + t.toLowerCase() + ".js";
            s.onload = () => resolve(t);
            s.onerror = () => {
              console.warn("Investment Book: could not load data for " + t);
              resolve(null);
            };
            document.head.appendChild(s);
          })
      )
    );
  }

  let currentTickers = [];
  let currentTicker; // undefined = nothing rendered yet; null = portfolio home; string = a company

  const manifest = window.IB_MANIFEST || [];
  loadCompanies(manifest).then((loaded) => {
    currentTickers = loaded.filter(Boolean).filter((t) => window.IB_DATA && window.IB_DATA[t]);
    if (!currentTickers.length) {
      $("#main").innerHTML =
        '<div class="section"><h1 class="section-title">还没有加载任何公司数据</h1>' +
        '<p class="section-lede">在 <code>data/manifest.js</code> 里加一个代码，并在 <code>data/companies/</code> 里放一个对应的文件。</p></div>';
      return;
    }
    buildSwitcher();
    wireChrome();
    route();
    window.addEventListener("hashchange", route);
  });

  // ---- routing: home (#/) vs company (#/TICKER) -------------------------
  function route() {
    const m = (location.hash || "").match(/^#\/([A-Za-z0-9.\-]+)$/);
    const target = m && window.IB_DATA[m[1].toUpperCase()] ? m[1].toUpperCase() : null;
    if (target === currentTicker) return; // already showing this view
    if (target) selectCompany(target);
    else showHome();
  }

  // ---- sidebar: company switcher (grouped by tier) ----------------------
  function buildSwitcher() {
    const wrap = $("#companySwitcher");
    wrap.innerHTML = "";
    TIERS.forEach((tier) => {
      const items = currentTickers.filter((t) => tierOf(window.IB_DATA[t]) === tier.key);
      if (!items.length) return;
      wrap.appendChild(el("div", "switch-tier", esc(tier.short)));
      items.forEach((t) => {
        const c = window.IB_DATA[t];
        const btn = el("button", "company-btn", `<span class="cb-ticker">${esc(t)}</span><span class="cb-name">${esc(c.name || "")}</span>`);
        btn.dataset.ticker = t;
        btn.addEventListener("click", () => selectCompany(t));
        wrap.appendChild(btn);
      });
    });
  }

  function buildNav(sections) {
    const nav = $("#sectionNav");
    nav.innerHTML = "";
    sections.forEach((s) => {
      const a = el("a", null, `<span class="n">${s.n}</span><span>${esc(s.label)}</span>`);
      a.href = "#" + s.id;
      a.dataset.section = s.id;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const node = document.getElementById(s.id);
        if (node) node.scrollIntoView();
        closeNav();
      });
      nav.appendChild(a);
    });
  }

  // ---- portfolio home ---------------------------------------------------
  function showHome() {
    currentTicker = null;
    document.querySelectorAll(".company-btn").forEach((b) => b.classList.remove("active"));
    $("#homeLink").classList.add("active");
    $("#sectionNav").innerHTML = "";
    $("#topbarTitle").textContent = "投资账本";
    document.title = "我的投资账本";
    const main = $("#main");
    main.innerHTML = renderHome();
    main.querySelectorAll(".pf-row").forEach((r) => r.addEventListener("click", () => selectCompany(r.dataset.ticker)));
    if (spyObserver) spyObserver.disconnect();
    if (location.hash !== "#/") location.hash = "#/";
    window.scrollTo(0, 0);
  }

  function renderHome() {
    const companies = currentTickers.map((t) => window.IB_DATA[t]);
    const tracked = companies.length;
    const heldList = companies.filter(isHeld);
    // Only HELD positions contribute to total weight — watchlist names don't fake it.
    const totalWeight = heldList.reduce((s, c) => s + num(c.position && c.position.portfolioWeight), 0);
    const staleCount = companies.filter((c) => {
      const d = daysSince(c.updated);
      return d != null && d > STALE_DAYS;
    }).length;

    const groups = TIERS.map((tier) => {
      const rows = companies.filter((c) => tierOf(c) === tier.key);
      if (!rows.length) return "";
      return `<div class="tier-group">
        <div class="tier-head">${esc(tier.label)} <span class="tier-count">${rows.length}</span></div>
        <div class="pf-rows">${rows.map(homeRow).join("")}</div>
      </div>`;
    }).join("");

    const bits = [`${tracked} 个跟踪标的`];
    bits.push(`${heldList.length} 家持有`);
    if (totalWeight) bits.push(`已持仓仓位 ${totalWeight.toFixed(0)}%`);
    if (staleCount) bits.push(`<span class="stale-inline">${staleCount} 个待复盘</span>`);

    return `
      <div class="home-head">
        <div class="eyebrow">投资组合</div>
        <h1 class="section-title">我的投资账本</h1>
        <p class="section-lede">${bits.join(" · ")}</p>
      </div>
      <div class="pf-head"><span></span><span>标的</span><span>逻辑</span><span>仓位</span><span>收益 / 状态</span><span>更新</span><span>一句话</span></div>
      ${groups}
    `;
  }

  function homeRow(c) {
    const p = c.position || {};
    const held = isHeld(c);
    const ret =
      held && p.avgCost != null && p.currentPrice != null && num(p.avgCost)
        ? ((num(p.currentPrice) - num(p.avgCost)) / num(p.avgCost)) * 100
        : null;
    const d = daysSince(c.updated);
    const stale = d != null && d > STALE_DAYS;
    const age = d == null ? "—" : d <= 0 ? "今天" : d + " 天";
    const weightCell = held && p.portfolioWeight != null ? p.portfolioWeight + "%" : "—";
    const retCell = held
      ? `<span class="pf-return ${ret == null ? "" : ret >= 0 ? "pos" : "neg"}">${ret == null ? "—" : (ret >= 0 ? "+" : "") + ret.toFixed(0) + "%"}</span>`
      : `<span class="pf-hold hold-${holdingOf(c)}">${esc(HOLDING_LABEL[holdingOf(c)])}</span>`;
    return `<button class="pf-row" data-ticker="${esc(c.ticker)}">
      <span class="pf-dot ${statusClass(c.thesisStatus)}"><span class="dot"></span></span>
      <span class="pf-id"><span class="pf-ticker">${esc(c.ticker)}</span><span class="pf-name">${esc(c.name || "")}</span></span>
      <span class="pf-thesis ${statusClass(c.thesisStatus)}">${esc(statusText(c.thesisStatus))}</span>
      <span class="pf-weight">${weightCell}</span>
      ${retCell}
      <span class="pf-age ${stale ? "stale" : ""}" title="${d == null ? "" : d + " 天前更新"}">${stale ? "⚠ " : ""}${age}</span>
      <span class="pf-why">${esc(c.tagline || c.oneLiner || "")}</span>
    </button>`;
  }

  // ---- company view -----------------------------------------------------
  function selectCompany(t) {
    currentTicker = t;
    const c = window.IB_DATA[t];
    $("#homeLink").classList.remove("active");
    document.querySelectorAll(".company-btn").forEach((b) => b.classList.toggle("active", b.dataset.ticker === t));
    $("#topbarTitle").textContent = t + " · 投资账本";
    document.title = t + " · 投资账本";
    const sections = SECTIONS.filter((s) => s.has(c));
    buildNav(sections);
    renderCompany(c, sections);
    if (location.hash !== "#/" + t) location.hash = "#/" + t;
    window.scrollTo(0, 0);
  }

  function renderCompany(c, sections) {
    const main = $("#main");
    main.innerHTML = "";
    sections.forEach((s) => {
      const wide = ["financials"].includes(s.id);
      const sec = el("section", "section" + (wide ? " wide" : ""));
      sec.id = s.id;
      sec.innerHTML = s.render(c) || "";
      main.appendChild(sec);
    });
    // sparklines (need DOM)
    main.querySelectorAll("[data-spark]").forEach(drawSpark);
    setupScrollSpy();
  }

  // =====================================================================
  //  SECTION RENDERERS
  // =====================================================================

  function renderOverview(c) {
    const p = c.position || {};
    const held = isHeld(c);
    // Return % is price-based (cost vs price) — independent of shares.
    const retPct = num(p.avgCost) && p.currentPrice != null ? ((num(p.currentPrice) - num(p.avgCost)) / num(p.avgCost)) * 100 : null;
    const retCls = retPct == null ? "" : retPct >= 0 ? "pos" : "neg";

    const posItems = [
      ["成本", p.avgCost != null ? "$" + fmt(p.avgCost) : "—"],
      ["现价", p.currentPrice != null ? "$" + fmt(p.currentPrice) : "—"],
      ["仓位", p.portfolioWeight != null ? p.portfolioWeight + "%" : "—"],
      ["收益", retPct == null ? "—" : `<span class="${retCls}">${retPct >= 0 ? "+" : ""}${retPct.toFixed(1)}%</span>`],
    ]
      .map(([k, v]) => `<div class="pos-item"><div class="k">${k}</div><div class="v">${v}</div></div>`)
      .join("");

    // Non-held names never show a fabricated position — just the watch state + last price.
    const posBody = held
      ? `<div class="pos-grid">${posItems}</div>${p.priceAsOf ? `<div class="pos-asof">价格为手动快照 · 截至 ${esc(p.priceAsOf)}</div>` : ""}`
      : `<div class="not-held">
           <span class="hold-badge hold-${holdingOf(c)}">${esc(HOLDING_LABEL[holdingOf(c)])}</span>
           <span class="not-held-text">${holdingOf(c) === "exited" ? "已退出，不再持有。" : "尚未持有 —— 观察名单。"}${p.currentPrice != null ? ` 现价 $${fmt(p.currentPrice)}${p.priceAsOf ? "（截至 " + esc(p.priceAsOf) + "）" : ""}` : ""}</span>
         </div>`;

    const why = (c.whyIOwnIt || []).map((w) => `<li>${esc(w)}</li>`).join("");

    // Thesis Health is DERIVED from the theses — one source of truth, can't drift.
    // (Falls back to an explicit thesisHealth array only if a company has no theses.)
    const healthRows =
      c.theses && c.theses.length
        ? c.theses.map((t) => ({ label: t.pillar || t.title, status: t.status, trend: t.trend }))
        : c.thesisHealth || [];
    const health = healthRows
      .map(
        (h) => `<div class="health-row">
          <span class="health-label">${esc(h.label)}</span>
          <span class="health-state ${statusClass(h.status)}"><span class="${trendClass(h.trend)}">${TREND[h.trend] || ""}</span>${esc(statusText(h.status))}</span>
        </div>`
      )
      .join("");

    const evi = (c.timeline || [])
      .slice(0, 4)
      .map(
        (e) => `<div class="evi-row">
          <span class="evi-date">${esc(fmtDate(e.date, e.datePrecision))}</span>
          <span class="evi-text">${esc(e.event)}</span>
          <span class="${trendClass(e.thesisImpact)}">${TREND[e.thesisImpact] || ""}</span>
        </div>`
      )
      .join("");

    return `
      <div class="cockpit-head">
        <div class="cockpit-ticker">${esc(c.ticker)}</div>
        <div class="cockpit-name">${esc(c.name || "")}</div>
        <p class="cockpit-oneliner">${esc(c.oneLiner || "")}</p>
        <div class="statusline">
          <span class="status-pill ${statusClass(c.thesisStatus)}"><span class="dot"></span>逻辑 ${esc(statusText(c.thesisStatus))}</span>
          <span class="hold-badge hold-${holdingOf(c)}">${esc(HOLDING_LABEL[holdingOf(c)])}</span>
          <span style="font-family:var(--font-sans);font-size:.82rem;color:var(--text-faint)">更新于 ${esc(fmtDate(c.updated, c.updatedPrecision))}</span>
        </div>
        ${c.statusNote ? `<div class="status-note">${esc(c.statusNote)}</div>` : ""}
      </div>

      ${decisionPanel(c)}

      <div class="cards grid-2">
        <div class="panel">
          <div class="panel-label">${held ? "我的持仓" : "持仓状态"} ${p.note ? '· <span style="text-transform:none;letter-spacing:0">占位</span>' : ""}</div>
          ${posBody}
        </div>
        <div class="panel">
          <div class="panel-label">逻辑健康度</div>
          <div class="health-rows">${health || '<div class="empty-note">还没有投资逻辑 —— 等它从观察升级为在场/核心时再补。</div>'}</div>
        </div>
      </div>

      <div class="panel" style="margin-top:14px">
        <div class="panel-label">${whyLabelOf(c)}</div>
        <ul class="why-list">${why}</ul>
      </div>

      <div class="panel" style="margin-top:14px">
        <div class="panel-label">最新证据</div>
        <div class="evi-feed">${evi || '<div class="evi-text" style="color:var(--text-faint)">还没有事件。</div>'}</div>
      </div>

      ${crosslink(c)}
    `;
  }

  // Decision Signal — Thesis → Decision, without any auto-generated trade action.
  function decisionPanel(c) {
    const trig = (c.nextDecisionTriggers || []).map((t) => `<li>${esc(t)}</li>`).join("");
    if (!c.currentDecision && !c.decisionReason && !trig) return "";
    return `<div class="decision">
      <div class="decision-head"><span class="decision-k">当前决策</span><span class="decision-v">${esc(c.currentDecision || "—")}</span></div>
      ${c.decisionReason ? `<div class="decision-reason">${esc(c.decisionReason)}</div>` : ""}
      ${trig ? `<div class="decision-triggers"><div class="dt-label">下一次真正需要重新决策的触发条件</div><ul>${trig}</ul></div>` : ""}
    </div>`;
  }

  function renderThesis(c) {
    const head = sectionHead("02 · 核心逻辑", "核心逻辑", "我为什么持有它 —— 压缩成几条能拿去和现实对照的判断。每条逻辑都是「活的」：有支持的证据、有反面的证据，还有一个会证明我错了的条件。");
    const cards = (c.theses || [])
      .map((t) => {
        const support = (t.supporting || []).map((x) => `<li>${eviLine(x, c.sources)}</li>`).join("");
        const contra = (t.contrary || []).map((x) => `<li>${eviLine(x, c.sources)}</li>`).join("");
        const metrics = (t.keyMetrics || []).map((m) => `<span class="chip">${esc(m)}</span>`).join("");
        return `<div class="thesis">
          <div class="thesis-head">
            <h3 class="thesis-title">${esc(t.title)}</h3>
            <span class="status-pill ${statusClass(t.status)}"><span class="${trendClass(t.trend)}">${TREND[t.trend] || ""}</span>${esc(statusText(t.status))}</span>
          </div>
          <p class="thesis-statement">${esc(t.statement)}</p>
          ${t.marketMisunderstanding ? `<div class="misunderstanding"><b>市场可能忽略了什么：</b> ${esc(t.marketMisunderstanding)}</div>` : ""}
          <div class="evi-cols">
            <div class="evi-col support"><h4>支持证据</h4><ul>${support || "<li>—</li>"}</ul></div>
            <div class="evi-col contra"><h4>反面证据</h4><ul>${contra || "<li>—</li>"}</ul></div>
          </div>
          <div class="thesis-meta">
            <div><div class="mk">关键指标</div>${metrics || "—"}</div>
            <div><div class="mk">最后更新</div>${esc(t.updated || c.updated || "")}</div>
            ${t.invalidation ? `<div class="invalidation"><div class="mk">证伪条件</div>${esc(t.invalidation)}</div>` : ""}
          </div>
        </div>`;
      })
      .join("");
    return head + cards;
  }

  function renderBusiness(c) {
    const head = sectionHead("03 · 业务", "业务", "不是百科词条。每块业务只回答：它如何创造收入、利润和长期价值。");
    const blocks = (c.business || [])
      .map(
        (b) => `<div class="block">
          <div class="block-head"><span class="block-title">${esc(b.name)}</span><span class="block-role">${esc(b.role || "")}</span></div>
          <div class="block-body">${esc(b.howItMakesMoney || "")}</div>
          ${b.note ? `<div class="block-note">${esc(b.note)}</div>` : ""}
        </div>`
      )
      .join("");
    return head + blocks;
  }

  function renderAiMoat(c) {
    const a = c.aiMoat;
    if (!a) return sectionHead("04 · AI 与护城河", "AI 与护城河", "");
    const head = sectionHead("04 · AI 与护城河", "AI 与护城河", a.summary || "");
    const factors = (a.factors || [])
      .map(
        (f) => `<div class="block">
          <div class="block-head"><span class="block-title" style="font-size:1rem">${esc(f.name)}</span><span class="${trendClass(f.direction)}">${TREND[f.direction] || ""}</span></div>
          <div class="block-note">${esc(f.note || "")}</div>
        </div>`
      )
      .join("");
    return (
      head +
      `<div class="panel" style="margin-bottom:20px"><div class="panel-label">结论</div><p style="margin:0;font-size:1.05rem">${esc(a.verdict || "")}</p></div>` +
      factors +
      (a.cannibalization ? `<div class="misunderstanding" style="margin-top:20px"><b>蚕食风险观察：</b> ${esc(a.cannibalization)}</div>` : "")
    );
  }

  function renderDrivers(c) {
    const head = sectionHead("05 · 驱动与生态位", "驱动与生态位", "真正驱动长期价值的变量，以及这家公司在价值链上的位置。这些天生是「因公司而异」的。");
    const drivers = (c.drivers || [])
      .map(
        (d) => `<div class="block">
          <div class="block-head"><span class="block-title" style="font-size:1rem">${esc(d.name)}</span><span class="${trendClass(d.direction)}">${TREND[d.direction] || ""}</span></div>
          <div class="block-note">${esc(d.why || "")}</div>
        </div>`
      )
      .join("");

    const eco = c.ecosystem;
    let ecoHtml = "";
    if (eco) {
      const tier = (label, nodes, self) =>
        `<div class="eco-tier"><div class="eco-label">${label}</div><div class="eco-nodes">${(nodes || [])
          .map((n) => `<span class="eco-node${self ? " self" : ""}">${esc(n.name)}${n.note ? `<small>${esc(n.note)}</small>` : ""}</span>`)
          .join("")}</div></div>`;
      ecoHtml =
        `<h3 style="margin:34px 0 14px;font-size:1.2rem">价值链</h3><div class="eco">` +
        tier("上游 · 谁供养它", eco.upstream) +
        `<div class="eco-arrow">↓</div>` +
        tier(c.ticker, eco.self, true) +
        `<div class="eco-arrow">↓</div>` +
        tier("下游 · 它供养谁", eco.downstream) +
        `</div>`;
    }
    return head + `<h3 style="margin:0 0 8px;font-size:1.2rem">驱动因素</h3>` + drivers + ecoHtml;
  }

  function renderCompetition(c) {
    const head = sectionHead("06 · 竞争格局", "竞争格局", "只跟踪真正可能改变投资逻辑的公司。每家只回答：进攻什么、针对哪条护城河、证据、威胁等级、对逻辑的影响。");
    const blocks = (c.competition || [])
      .map(
        (x) => `<div class="block">
          <div class="block-head"><span class="block-title">${esc(x.name)}</span><span class="threat threat-${esc(x.threat)}">${esc(THREAT_LABEL[x.threat] || x.threat)}威胁</span></div>
          <div class="block-body"><b>进攻：</b> ${esc(x.attacking)}</div>
          <div class="block-note"><b>针对护城河：</b> ${esc(x.moatTargeted)} &nbsp;·&nbsp; <b>证据：</b> ${esc(x.evidence)}</div>
          <div class="block-note"><b>逻辑影响：</b> ${esc(x.thesisImpact)}</div>
        </div>`
      )
      .join("");
    return head + blocks;
  }

  function renderMetrics(c) {
    const head = sectionHead("07 · 关键指标", "关键指标", "如果一个指标不可能改变投资判断，它就不该在这里。趋势比当前数字更重要。");
    const rows = (c.metrics || [])
      .map((m, i) => {
        const spark = m.spark && m.spark.length ? `<div class="spark" data-spark='${esc(JSON.stringify(m.spark))}'${m.good ? ` data-good="${esc(m.good)}"` : ""}></div>` : "";
        return `<div class="metric">
          <span class="metric-label">${esc(m.label)}</span>
          <span class="metric-latest">${esc(m.latest || "")}</span>
          ${m.note ? `<span class="metric-note">${esc(m.note)}</span>` : ""}
          ${spark}
        </div>`;
      })
      .join("");
    return head + rows;
  }

  function renderFinancials(c) {
    const f = c.financials;
    if (!f) return sectionHead("08 · 财务与估值", "财务与估值", "");
    const head = sectionHead("08 · 财务与估值", "财务与估值", "当前价格对未来隐含了怎样的预期 —— 而不是一个看似精确、实则脆弱的目标价。");
    const periods = (f.rows && f.rows[0] && f.rows[0].periods) || [];
    const cols = periods.length || (f.rows && f.rows[0] && f.rows[0].values.length) || 0;
    const thead = `<tr><th>科目</th>${Array.from({ length: cols }).map((_, i) => `<th>${esc((periods[i] != null ? periods[i] : ""))}</th>`).join("")}</tr>`;
    const body = (f.rows || [])
      .map((r) => `<tr><td>${esc(r.label)}</td>${(r.values || []).map((v) => `<td>${esc(v)}</td>`).join("")}</tr>`)
      .join("");
    return (
      head +
      `<div style="overflow-x:auto"><table class="fin-table"><thead>${thead}</thead><tbody>${body}</tbody></table></div>` +
      (f.note ? `<p class="block-note" style="margin-top:12px">${esc(f.note)}</p>` : "") +
      (f.impliedExpectations ? `<div class="implied"><div class="panel-label">价格隐含的预期</div>${esc(f.impliedExpectations)}</div>` : "")
    );
  }

  function renderTimeline(c) {
    const head = sectionHead("09 · 时间线", "时间线", "只记真正可能重要的事件。每个事件都走同一条环 —— 而且大多数最后都该落在「不动仓位」。");
    const flow = `<div class="flow">
      <span>事件</span><span class="arr">→</span><span>变了什么？</span><span class="arr">→</span>
      <span>影响哪条逻辑？</span><span class="arr">→</span><span>逻辑影响</span><span class="arr">→</span>
      <span>估值影响？</span><span class="arr">→</span><span>仓位动作</span>
    </div>`;
    const items = (c.timeline || [])
      .map((e) => {
        const cls = e.thesisImpact === "warn" ? "warn" : e.thesisImpact === "down" ? "down" : "";
        const links = [];
        if (e.source) links.push(`<a href="${esc(e.source.url)}" target="_blank" rel="noopener">${esc(e.source.label || "来源")}</a>`);
        if (e.related) links.push(`<a href="${esc(e.related.url)}" target="_blank" rel="noopener">↗ ${esc(e.related.label || "Stock Why 维基")}</a>`);
        return `<div class="tl-item ${cls}">
          <div class="tl-date">${esc(fmtDate(e.date, e.datePrecision))}</div>
          <div class="tl-event">${esc(e.event)}</div>
          <div class="tl-why">${esc(e.whyItMatters || "")}</div>
          <div class="tl-meta">
            ${e.node ? `<span class="tl-node">影响：${esc(e.node)}</span>` : ""}
            <span class="tl-impact ${e.thesisImpact || "flat"}"><span class="trend ${e.thesisImpact || "flat"}">${TREND[e.thesisImpact] || ""}</span>${impactWord(e.thesisImpact)}</span>
            ${links.length ? `<span class="tl-links">${links.join(" · ")}</span>` : ""}
          </div>
          ${e.action ? `<div class="tl-action"><b>动作：</b> ${esc(e.action)}</div>` : ""}
        </div>`;
      })
      .join("");
    return head + flow + `<div class="tl">${items}</div>`;
  }

  function renderEvolution(c) {
    const head = sectionHead("10 · 逻辑演变", "逻辑演变", "投资判断如何随着证据的到来而改变。几年之后，这会成为整本账本里最有价值的记录。");
    const items = (c.thesisEvolution || [])
      .map(
        (e) => `<div class="evo-item">
          <div class="evo-date">${esc(e.date)}</div>
          <div class="evo-label">${esc(e.label)}</div>
          <div class="evo-note">${esc(e.note || "")}</div>
        </div>`
      )
      .join("");
    return head + items;
  }

  function renderRisks(c) {
    const head = sectionHead("11 · 风险 / 证伪", "风险 / 证伪", "不是泛泛的风险清单 —— 而是可以验证的证伪条件。若 X 发生，则逻辑 Y 被削弱或证伪。");
    const riskBlock = (thesis, condition, status) => {
      const cond = esc(condition).replace(/若/g, '<span class="kw">若</span>').replace(/则/g, '<span class="kw">则</span>');
      return `<div class="risk">
        <div class="risk-head"><span class="risk-thesis">${esc(thesis)}</span>${status ? `<span class="status-pill ${statusClass(status)}"><span class="dot"></span>${esc(statusText(status))}</span>` : ""}</div>
        <div class="risk-cond">${cond}</div>
      </div>`;
    };
    // Derived from each thesis's own invalidation — single source of truth, no drift.
    const derived = (c.theses || [])
      .filter((t) => t.invalidation)
      .map((t) => riskBlock(t.pillar || t.title, t.invalidation, t.status))
      .join("");
    // Standalone risks are ONLY cross-thesis / existential ones (war, fraud, key-person…).
    const existential = (c.risks || []).map((r) => riskBlock(r.thesis, r.condition, r.status)).join("");
    let html = head;
    if (derived) {
      html += existential ? `<h3 class="risk-subhead">逐条逻辑的证伪条件</h3>` : "";
      html += derived;
    }
    if (existential) {
      html += `<h3 class="risk-subhead">跨逻辑 / 存续性风险</h3>` + existential;
    }
    return html;
  }

  function renderPosition(c) {
    const p = c.position || {};
    const held = isHeld(c);
    const head = sectionHead("12 · 我的持仓", held ? "我的持仓" : "持仓状态", "私人账本。公司质量和股票估值特意分开 —— 好公司不等于任何价格都值得买。");
    const hasShares = num(p.shares) > 0;
    const retPct = num(p.avgCost) && p.currentPrice != null ? ((num(p.currentPrice) - num(p.avgCost)) / num(p.avgCost)) * 100 : null;
    const curVal = num(p.shares) * num(p.currentPrice);
    const pl = curVal - num(p.shares) * num(p.avgCost);
    const plCell =
      hasShares && p.avgCost != null && p.currentPrice != null
        ? `<span class="${pl >= 0 ? "pos" : "neg"}">${pl >= 0 ? "+" : ""}$${fmt(pl)} (${retPct >= 0 ? "+" : ""}${retPct.toFixed(1)}%)</span>`
        : retPct != null
        ? `<span class="${retPct >= 0 ? "pos" : "neg"}">${retPct >= 0 ? "+" : ""}${retPct.toFixed(1)}%</span>`
        : "—";

    // For a non-held name, never render a fabricated position — only the plan + price.
    const heldPanel = held
      ? `<div class="panel"><div class="pos-grid" style="grid-template-columns:repeat(3,1fr)">${[
          ["股数", p.shares != null ? fmt(p.shares) : "—"],
          ["平均成本", p.avgCost != null ? "$" + fmt(p.avgCost) : "—"],
          ["现价", p.currentPrice != null ? "$" + fmt(p.currentPrice) : "—"],
          ["当前市值", hasShares && p.currentPrice != null ? "$" + fmt(curVal) : "—"],
          ["浮动盈亏", plCell],
          ["组合仓位", p.portfolioWeight != null ? p.portfolioWeight + "%" : "—"],
          ["目标仓位", p.targetWeight != null ? p.targetWeight + "%" : "—"],
        ].map(([k, v]) => `<div class="pos-item"><div class="k">${k}</div><div class="v">${v}</div></div>`).join("")}</div>${p.priceAsOf ? `<div class="pos-asof">现价、市值和浮动盈亏用的是手动价格快照 <b>截至 ${esc(p.priceAsOf)}</b> —— 不是实时的。复盘时在数据文件里手动更新。</div>` : ""}</div>`
      : `<div class="panel"><div class="not-held">
           <span class="hold-badge hold-${holdingOf(c)}">${esc(HOLDING_LABEL[holdingOf(c)])}</span>
           <span class="not-held-text">${holdingOf(c) === "exited" ? "已退出，不再持有——以下为记录与观察参数。" : "尚未持有——这是观察名单标的，不计入组合仓位与收益。"}</span>
         </div>${p.currentPrice != null ? `<div class="pos-grid" style="margin-top:14px">${[["现价", "$" + fmt(p.currentPrice)], ["目标仓位", p.targetWeight != null ? p.targetWeight + "%" : "—"]].map(([k, v]) => `<div class="pos-item"><div class="k">${k}</div><div class="v">${v}</div></div>`).join("")}</div>${p.priceAsOf ? `<div class="pos-asof">价格为手动快照 · 截至 ${esc(p.priceAsOf)}</div>` : ""}` : ""}</div>`;

    const planLabel = held ? "加仓 / 减仓计划" : "建仓 / 观察计划";
    const addLabel = held ? "加仓" : "建仓条件";

    return (
      head +
      (p.note ? `<div class="status-note" style="border-color:var(--watch);margin-bottom:20px">${esc(p.note)}</div>` : "") +
      heldPanel +
      `<div class="cards grid-2" style="margin-top:14px">
        <div class="panel"><div class="panel-label">${planLabel}</div>
          <p style="margin:0 0 8px"><b>${addLabel}：</b> ${esc(p.addRange || "—")}</p>
          <p style="margin:0"><b>减仓：</b> ${esc(p.reduceRange || "—")}</p>
        </div>
        <div class="panel"><div class="panel-label">质量 ≠ 估值</div>
          <p style="margin:0 0 8px;font-family:var(--font-sans);font-size:.9rem">${esc(p.qualityNote || "—")}</p>
          <p style="margin:0;font-family:var(--font-sans);font-size:.9rem">${esc(p.valuationNote || "—")}</p>
        </div>
      </div>` +
      (p.notes ? `<div class="panel" style="margin-top:14px"><div class="panel-label">备注</div>${esc(p.notes)}</div>` : "")
    );
  }

  // ---- shared bits ------------------------------------------------------
  function sectionHead(eyebrow, title, lede) {
    return `<div class="eyebrow">${esc(eyebrow)}</div><h2 class="section-title">${esc(title)}</h2>${lede ? `<p class="section-lede">${esc(lede)}</p>` : ""}`;
  }
  function crosslink(c) {
    const s = c.stockWhy;
    if (!s) return "";
    return `<div class="crosslink"><span class="cl-icon">🧭</span><div class="cl-body"><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label || "Stock Why 维基")} ↗</a><div>${esc(s.note || "")}</div></div></div>`;
  }
  const impactWord = (t) => ({ up: "强化", down: "削弱", warn: "可能证伪", flat: "不变" }[t] || "");
  const num = (x) => (typeof x === "number" && isFinite(x) ? x : 0);
  const fmt = (x) => {
    const n = num(x);
    return (Math.abs(n) >= 1000 ? n.toLocaleString("en-US", { maximumFractionDigits: 0 }) : n.toLocaleString("en-US", { maximumFractionDigits: 2 }));
  };

  // ---- sparklines -------------------------------------------------------
  function drawSpark(node) {
    let data;
    try { data = JSON.parse(node.getAttribute("data-spark")); } catch (e) { return; }
    if (!data || data.length < 2) return;
    const w = 260, h = 34, pad = 3;
    const min = Math.min(...data), max = Math.max(...data), span = max - min || 1;
    const pts = data.map((v, i) => {
      const x = pad + (i / (data.length - 1)) * (w - pad * 2);
      const y = h - pad - ((v - min) / span) * (h - pad * 2);
      return [x, y];
    });
    const d = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
    const last = pts[pts.length - 1];
    // Direction ≠ good/bad. Stay neutral unless the metric declares which way is "good".
    const good = node.getAttribute("data-good"); // "up" | "down" | null
    const rising = data[data.length - 1] >= data[0];
    let stroke = "var(--text-faint)"; // neutral: just shows the shape, implies no judgment
    if (good === "up") stroke = rising ? "var(--up)" : "var(--down)";
    else if (good === "down") stroke = rising ? "var(--down)" : "var(--up)";
    node.innerHTML =
      `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" role="img" aria-label="trend">
        <path d="${d}" fill="none" stroke="${stroke}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="${last[0].toFixed(1)}" cy="${last[1].toFixed(1)}" r="2.6" fill="${stroke}"/>
      </svg>`;
  }

  // ---- scroll spy (active nav) -----------------------------------------
  let spyObserver = null;
  function setupScrollSpy() {
    if (spyObserver) spyObserver.disconnect();
    const navLinks = {};
    document.querySelectorAll(".section-nav a").forEach((a) => (navLinks[a.dataset.section] = a));
    spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            Object.values(navLinks).forEach((a) => a.classList.remove("active"));
            const a = navLinks[en.target.id];
            if (a) a.classList.add("active");
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    document.querySelectorAll(".section").forEach((s) => spyObserver.observe(s));
  }

  // ---- chrome: theme + mobile nav --------------------------------------
  const THEMES = ["default", "sepia", "dark"];
  function wireChrome() {
    const saved = safeGet("ib-theme");
    if (saved && THEMES.includes(saved)) document.documentElement.setAttribute("data-theme", saved);
    const cycle = () => {
      const cur = document.documentElement.getAttribute("data-theme") || "default";
      const next = THEMES[(THEMES.indexOf(cur) + 1) % THEMES.length];
      document.documentElement.setAttribute("data-theme", next);
      safeSet("ib-theme", next);
    };
    $("#themeToggle").addEventListener("click", cycle);
    $("#themeToggleMobile").addEventListener("click", cycle);
    $("#hamburger").addEventListener("click", () => $("#app").classList.toggle("nav-open"));
    $("#scrim").addEventListener("click", closeNav);
    const goHome = () => { showHome(); closeNav(); };
    $("#homeLink").addEventListener("click", goHome);
    const brand = $("#brandHome");
    if (brand) brand.addEventListener("click", goHome);
  }
  function closeNav() { $("#app").classList.remove("nav-open"); }

  function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
})();
