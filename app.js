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

  // Evidence tag with FACT/INFERENCE/THESIS/UNKNOWN label
  const eviLine = (item) => {
    if (typeof item === "string") return esc(item);
    const tag = item.tag ? `<span class="etag etag-${esc(item.tag)}">${esc(item.tag)}</span>` : "";
    return tag + esc(item.text);
  };

  // ---- section registry -------------------------------------------------
  // id, number, label, and a render(company) → HTML string
  // `has(company)` decides whether a section shows at all. Sparse companies
  // (Watch/starter tier) simply don't fill the deeper sections, and the nav +
  // page skip them — depth scales with how much the company earns your attention.
  // Section numbers are fixed identities, so a sparse company shows e.g. 01/09/12.
  const nonEmpty = (a) => !!(a && a.length);
  const SECTIONS = [
    { id: "overview", n: "01", label: "Overview", render: renderOverview, has: () => true },
    { id: "thesis", n: "02", label: "Core Thesis", render: renderThesis, has: (c) => nonEmpty(c.theses) },
    { id: "business", n: "03", label: "Business", render: renderBusiness, has: (c) => nonEmpty(c.business) },
    { id: "ai-moat", n: "04", label: "AI & Moat", render: renderAiMoat, has: (c) => !!c.aiMoat },
    { id: "drivers", n: "05", label: "Drivers & Ecosystem", render: renderDrivers, has: (c) => nonEmpty(c.drivers) || !!c.ecosystem },
    { id: "competition", n: "06", label: "Competition", render: renderCompetition, has: (c) => nonEmpty(c.competition) },
    { id: "metrics", n: "07", label: "Key Metrics", render: renderMetrics, has: (c) => nonEmpty(c.metrics) },
    { id: "financials", n: "08", label: "Financials & Valuation", render: renderFinancials, has: (c) => !!(c.financials && nonEmpty(c.financials.rows)) },
    { id: "timeline", n: "09", label: "Timeline", render: renderTimeline, has: (c) => nonEmpty(c.timeline) },
    { id: "evolution", n: "10", label: "Thesis Evolution", render: renderEvolution, has: (c) => nonEmpty(c.thesisEvolution) },
    { id: "risks", n: "11", label: "Risks / Invalidation", render: renderRisks, has: (c) => nonEmpty(c.risks) },
    { id: "position", n: "12", label: "My Position", render: renderPosition, has: (c) => !!c.position },
  ];

  // ---- tiers + staleness ------------------------------------------------
  const STALE_DAYS = 45; // a thesis untouched longer than this gets a review flag
  const TIERS = [
    { key: "core", label: "Core conviction", short: "Core" },
    { key: "active", label: "Active", short: "Active" },
    { key: "watch", label: "Watch / starter", short: "Watch" },
  ];
  const tierOf = (c) => {
    const t = c && c.tier ? String(c.tier).toLowerCase() : "active";
    return TIERS.some((x) => x.key === t) ? t : "active";
  };
  function daysSince(dateStr) {
    if (!dateStr) return null;
    const d = new Date(dateStr + "T00:00:00");
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
        '<div class="section"><h1 class="section-title">No company data loaded</h1>' +
        '<p class="section-lede">Add a ticker to <code>data/manifest.js</code> and a matching file in <code>data/companies/</code>.</p></div>';
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
    $("#topbarTitle").textContent = "Investment Book";
    document.title = "My Investment Book";
    const main = $("#main");
    main.innerHTML = renderHome();
    main.querySelectorAll(".pf-row").forEach((r) => r.addEventListener("click", () => selectCompany(r.dataset.ticker)));
    if (spyObserver) spyObserver.disconnect();
    if (location.hash !== "#/") location.hash = "#/";
    window.scrollTo(0, 0);
  }

  function renderHome() {
    const companies = currentTickers.map((t) => window.IB_DATA[t]);
    const holdings = companies.length;
    const totalWeight = companies.reduce((s, c) => s + num(c.position && c.position.portfolioWeight), 0);
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

    return `
      <div class="home-head">
        <div class="eyebrow">Portfolio</div>
        <h1 class="section-title">My Investment Book</h1>
        <p class="section-lede">${holdings} holding${holdings === 1 ? "" : "s"} · ${totalWeight ? totalWeight.toFixed(0) + "% of portfolio tracked" : "weights not set"}${staleCount ? ` · <span class="stale-inline">${staleCount} need${staleCount === 1 ? "s" : ""} review</span>` : ""}</p>
      </div>
      <div class="pf-head"><span></span><span>Holding</span><span>Thesis</span><span>Weight</span><span>Return</span><span>Updated</span><span>Why</span></div>
      ${groups}
    `;
  }

  function homeRow(c) {
    const p = c.position || {};
    const ret =
      p.avgCost != null && p.currentPrice != null && num(p.avgCost)
        ? ((num(p.currentPrice) - num(p.avgCost)) / num(p.avgCost)) * 100
        : null;
    const d = daysSince(c.updated);
    const stale = d != null && d > STALE_DAYS;
    const age = d == null ? "—" : d <= 0 ? "today" : d + "d";
    return `<button class="pf-row" data-ticker="${esc(c.ticker)}">
      <span class="pf-dot ${statusClass(c.thesisStatus)}"><span class="dot"></span></span>
      <span class="pf-id"><span class="pf-ticker">${esc(c.ticker)}</span><span class="pf-name">${esc(c.name || "")}</span></span>
      <span class="pf-thesis ${statusClass(c.thesisStatus)}">${esc(c.thesisStatus || "—")}</span>
      <span class="pf-weight">${p.portfolioWeight != null ? p.portfolioWeight + "%" : "—"}</span>
      <span class="pf-return ${ret == null ? "" : ret >= 0 ? "pos" : "neg"}">${ret == null ? "—" : (ret >= 0 ? "+" : "") + ret.toFixed(0) + "%"}</span>
      <span class="pf-age ${stale ? "stale" : ""}" title="${d == null ? "" : "updated " + d + " days ago"}">${stale ? "⚠ " : ""}${age}</span>
      <span class="pf-why">${esc(c.tagline || c.oneLiner || "")}</span>
    </button>`;
  }

  // ---- company view -----------------------------------------------------
  function selectCompany(t) {
    currentTicker = t;
    const c = window.IB_DATA[t];
    $("#homeLink").classList.remove("active");
    document.querySelectorAll(".company-btn").forEach((b) => b.classList.toggle("active", b.dataset.ticker === t));
    $("#topbarTitle").textContent = t + " · Investment Book";
    document.title = t + " · Investment Book";
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
    // Return % is price-based (cost vs price) — independent of shares, so it works
    // for a watch position that has no share count yet.
    const retPct = num(p.avgCost) && p.currentPrice != null ? ((num(p.currentPrice) - num(p.avgCost)) / num(p.avgCost)) * 100 : null;
    const retCls = retPct == null ? "" : retPct >= 0 ? "pos" : "neg";

    const posItems = [
      ["Avg cost", p.avgCost != null ? "$" + fmt(p.avgCost) : "—"],
      ["Current", p.currentPrice != null ? "$" + fmt(p.currentPrice) : "—"],
      ["Weight", p.portfolioWeight != null ? p.portfolioWeight + "%" : "—"],
      ["Return", retPct == null ? "—" : `<span class="${retCls}">${retPct >= 0 ? "+" : ""}${retPct.toFixed(1)}%</span>`],
    ]
      .map(([k, v]) => `<div class="pos-item"><div class="k">${k}</div><div class="v">${v}</div></div>`)
      .join("");

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
          <span class="health-state ${statusClass(h.status)}"><span class="${trendClass(h.trend)}">${TREND[h.trend] || ""}</span>${esc(h.status)}</span>
        </div>`
      )
      .join("");

    const evi = (c.timeline || [])
      .slice(0, 4)
      .map(
        (e) => `<div class="evi-row">
          <span class="evi-date">${esc(e.date)}</span>
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
          <span class="status-pill ${statusClass(c.thesisStatus)}"><span class="dot"></span>Thesis ${esc(c.thesisStatus || "—")}</span>
          <span style="font-family:var(--font-sans);font-size:.82rem;color:var(--text-faint)">Updated ${esc(c.updated || "")}</span>
        </div>
        ${c.statusNote ? `<div class="status-note">${esc(c.statusNote)}</div>` : ""}
      </div>

      <div class="cards grid-2">
        <div class="panel">
          <div class="panel-label">My Position ${p.note ? '· <span style="text-transform:none;letter-spacing:0">placeholder</span>' : ""}</div>
          <div class="pos-grid">${posItems}</div>
          ${p.priceAsOf ? `<div class="pos-asof">Price is a manual snapshot · as of ${esc(p.priceAsOf)}</div>` : ""}
        </div>
        <div class="panel">
          <div class="panel-label">Thesis Health</div>
          <div class="health-rows">${health || '<div class="empty-note">No theses yet — add them when this graduates from a watch position.</div>'}</div>
        </div>
      </div>

      <div class="panel" style="margin-top:14px">
        <div class="panel-label">Why I Own It</div>
        <ul class="why-list">${why}</ul>
      </div>

      <div class="panel" style="margin-top:14px">
        <div class="panel-label">Latest Evidence</div>
        <div class="evi-feed">${evi || '<div class="evi-text" style="color:var(--text-faint)">No events yet.</div>'}</div>
      </div>

      ${crosslink(c)}
    `;
  }

  function renderThesis(c) {
    const head = sectionHead("02 · Core Thesis", "Core Thesis", "Why I hold this — compressed to a few claims that can be checked against reality. Each thesis is alive: it has evidence for, evidence against, and a condition that would prove me wrong.");
    const cards = (c.theses || [])
      .map((t) => {
        const support = (t.supporting || []).map((x) => `<li>${eviLine(x)}</li>`).join("");
        const contra = (t.contrary || []).map((x) => `<li>${eviLine(x)}</li>`).join("");
        const metrics = (t.keyMetrics || []).map((m) => `<span class="chip">${esc(m)}</span>`).join("");
        return `<div class="thesis">
          <div class="thesis-head">
            <h3 class="thesis-title">${esc(t.title)}</h3>
            <span class="status-pill ${statusClass(t.status)}"><span class="${trendClass(t.trend)}">${TREND[t.trend] || ""}</span>${esc(t.status)}</span>
          </div>
          <p class="thesis-statement">${esc(t.statement)}</p>
          ${t.marketMisunderstanding ? `<div class="misunderstanding"><b>What the market may be missing:</b> ${esc(t.marketMisunderstanding)}</div>` : ""}
          <div class="evi-cols">
            <div class="evi-col support"><h4>Supporting evidence</h4><ul>${support || "<li>—</li>"}</ul></div>
            <div class="evi-col contra"><h4>Contrary evidence</h4><ul>${contra || "<li>—</li>"}</ul></div>
          </div>
          <div class="thesis-meta">
            <div><div class="mk">Key metrics</div>${metrics || "—"}</div>
            <div><div class="mk">Last updated</div>${esc(t.updated || c.updated || "")}</div>
            ${t.invalidation ? `<div class="invalidation"><div class="mk">Invalidation condition</div>${esc(t.invalidation)}</div>` : ""}
          </div>
        </div>`;
      })
      .join("");
    return head + cards;
  }

  function renderBusiness(c) {
    const head = sectionHead("03 · Business", "Business", "Not an encyclopedia entry. For each segment: how it creates revenue, profit, and long-term value.");
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
    if (!a) return sectionHead("04 · AI & Moat", "AI & Moat", "");
    const head = sectionHead("04 · AI & Moat", "AI & Moat", a.summary || "");
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
      `<div class="panel" style="margin-bottom:20px"><div class="panel-label">Verdict</div><p style="margin:0;font-size:1.05rem">${esc(a.verdict || "")}</p></div>` +
      factors +
      (a.cannibalization ? `<div class="misunderstanding" style="margin-top:20px"><b>Cannibalization watch:</b> ${esc(a.cannibalization)}</div>` : "")
    );
  }

  function renderDrivers(c) {
    const head = sectionHead("05 · Drivers & Ecosystem", "Drivers & Ecosystem", "The variables that actually move long-term value, and where the company sits in its value chain. These are company-specific by design.");
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
        `<h3 style="margin:34px 0 14px;font-size:1.2rem">Value chain</h3><div class="eco">` +
        tier("Upstream — what feeds it", eco.upstream) +
        `<div class="eco-arrow">↓</div>` +
        tier(c.ticker, eco.self, true) +
        `<div class="eco-arrow">↓</div>` +
        tier("Downstream — who it feeds", eco.downstream) +
        `</div>`;
    }
    return head + `<h3 style="margin:0 0 8px;font-size:1.2rem">Drivers</h3>` + drivers + ecoHtml;
  }

  function renderCompetition(c) {
    const head = sectionHead("06 · Competition", "Competition", "Only companies that could actually change the thesis. For each: what they attack, which moat, the evidence, threat level, and thesis impact.");
    const blocks = (c.competition || [])
      .map(
        (x) => `<div class="block">
          <div class="block-head"><span class="block-title">${esc(x.name)}</span><span class="threat threat-${esc(x.threat)}">${esc(x.threat)} threat</span></div>
          <div class="block-body"><b>Attacking:</b> ${esc(x.attacking)}</div>
          <div class="block-note"><b>Moat targeted:</b> ${esc(x.moatTargeted)} &nbsp;·&nbsp; <b>Evidence:</b> ${esc(x.evidence)}</div>
          <div class="block-note"><b>Thesis impact:</b> ${esc(x.thesisImpact)}</div>
        </div>`
      )
      .join("");
    return head + blocks;
  }

  function renderMetrics(c) {
    const head = sectionHead("07 · Key Metrics", "Key Metrics", "If a metric can't change the investment judgment, it isn't here. Trend matters more than the current number.");
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
    if (!f) return sectionHead("08 · Financials & Valuation", "Financials & Valuation", "");
    const head = sectionHead("08 · Financials & Valuation", "Financials & Valuation", "What the price implies about the future — not a precise, fragile target price.");
    const periods = (f.rows && f.rows[0] && f.rows[0].periods) || [];
    const cols = periods.length || (f.rows && f.rows[0] && f.rows[0].values.length) || 0;
    const thead = `<tr><th>Line</th>${Array.from({ length: cols }).map((_, i) => `<th>${esc((periods[i] != null ? periods[i] : ""))}</th>`).join("")}</tr>`;
    const body = (f.rows || [])
      .map((r) => `<tr><td>${esc(r.label)}</td>${(r.values || []).map((v) => `<td>${esc(v)}</td>`).join("")}</tr>`)
      .join("");
    return (
      head +
      `<div style="overflow-x:auto"><table class="fin-table"><thead>${thead}</thead><tbody>${body}</tbody></table></div>` +
      (f.note ? `<p class="block-note" style="margin-top:12px">${esc(f.note)}</p>` : "") +
      (f.impliedExpectations ? `<div class="implied"><div class="panel-label">What the price implies</div>${esc(f.impliedExpectations)}</div>` : "")
    );
  }

  function renderTimeline(c) {
    const head = sectionHead("09 · Timeline", "Timeline", "Only events that could matter. Every event runs through the same loop — and most should end in “no position change.”");
    const flow = `<div class="flow">
      <span>Event</span><span class="arr">→</span><span>What changed?</span><span class="arr">→</span>
      <span>Which thesis?</span><span class="arr">→</span><span>Thesis impact</span><span class="arr">→</span>
      <span>Valuation impact?</span><span class="arr">→</span><span>Position action</span>
    </div>`;
    const items = (c.timeline || [])
      .map((e) => {
        const cls = e.thesisImpact === "warn" ? "warn" : e.thesisImpact === "down" ? "down" : "";
        const links = [];
        if (e.source) links.push(`<a href="${esc(e.source.url)}" target="_blank" rel="noopener">${esc(e.source.label || "Source")}</a>`);
        if (e.related) links.push(`<a href="${esc(e.related.url)}" target="_blank" rel="noopener">↗ ${esc(e.related.label || "Stock Why")}</a>`);
        return `<div class="tl-item ${cls}">
          <div class="tl-date">${esc(e.date)}</div>
          <div class="tl-event">${esc(e.event)}</div>
          <div class="tl-why">${esc(e.whyItMatters || "")}</div>
          <div class="tl-meta">
            ${e.node ? `<span class="tl-node">Affects: ${esc(e.node)}</span>` : ""}
            <span class="tl-impact ${e.thesisImpact || "flat"}"><span class="trend ${e.thesisImpact || "flat"}">${TREND[e.thesisImpact] || ""}</span>${impactWord(e.thesisImpact)}</span>
            ${links.length ? `<span class="tl-links">${links.join(" · ")}</span>` : ""}
          </div>
          ${e.action ? `<div class="tl-action"><b>Action:</b> ${esc(e.action)}</div>` : ""}
        </div>`;
      })
      .join("");
    return head + flow + `<div class="tl">${items}</div>`;
  }

  function renderEvolution(c) {
    const head = sectionHead("10 · Thesis Evolution", "Thesis Evolution", "How the investment judgment has changed as evidence arrived. Over years, this becomes the most valuable record in the book.");
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
    const head = sectionHead("11 · Risks / Invalidation", "Risks / Invalidation", "Not a generic risk list — falsifiable conditions. IF X happens, THEN thesis Y is weakened or invalidated.");
    const blocks = (c.risks || [])
      .map((r) => {
        const cond = esc(r.condition).replace(/\bIF\b/g, '<span class="kw">IF</span>').replace(/\bTHEN\b/g, '<span class="kw">THEN</span>');
        return `<div class="risk">
          <div class="risk-head"><span class="risk-thesis">${esc(r.thesis)}</span><span class="status-pill ${statusClass(r.status)}"><span class="dot"></span>${esc(r.status)}</span></div>
          <div class="risk-cond">${cond}</div>
        </div>`;
      })
      .join("");
    return head + blocks;
  }

  function renderPosition(c) {
    const p = c.position || {};
    const head = sectionHead("12 · My Position", "My Position", "The private ledger. Company quality and stock valuation are kept separate on purpose — a great company is not a buy at any price.");
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

    const rows = [
      ["Shares", p.shares != null ? fmt(p.shares) : "—"],
      ["Average cost", p.avgCost != null ? "$" + fmt(p.avgCost) : "—"],
      ["Current price", p.currentPrice != null ? "$" + fmt(p.currentPrice) : "—"],
      ["Current value", hasShares && p.currentPrice != null ? "$" + fmt(curVal) : "—"],
      ["Unrealized P/L", plCell],
      ["Portfolio weight", p.portfolioWeight != null ? p.portfolioWeight + "%" : "—"],
      ["Target weight", p.targetWeight != null ? p.targetWeight + "%" : "—"],
    ]
      .map(([k, v]) => `<div class="pos-item"><div class="k">${k}</div><div class="v">${v}</div></div>`)
      .join("");

    return (
      head +
      (p.note ? `<div class="status-note" style="border-color:var(--watch);margin-bottom:20px">${esc(p.note)}</div>` : "") +
      `<div class="panel"><div class="pos-grid" style="grid-template-columns:repeat(3,1fr)">${rows}</div>${p.priceAsOf ? `<div class="pos-asof">Current price, value and unrealized P/L use a manual price snapshot <b>as of ${esc(p.priceAsOf)}</b> — not live. Update it in the data file when you review.</div>` : ""}</div>` +
      `<div class="cards grid-2" style="margin-top:14px">
        <div class="panel"><div class="panel-label">Add / reduce plan</div>
          <p style="margin:0 0 8px"><b>Add:</b> ${esc(p.addRange || "—")}</p>
          <p style="margin:0"><b>Reduce:</b> ${esc(p.reduceRange || "—")}</p>
        </div>
        <div class="panel"><div class="panel-label">Quality ≠ Valuation</div>
          <p style="margin:0 0 8px;font-family:var(--font-sans);font-size:.9rem">${esc(p.qualityNote || "—")}</p>
          <p style="margin:0;font-family:var(--font-sans);font-size:.9rem">${esc(p.valuationNote || "—")}</p>
        </div>
      </div>` +
      (p.notes ? `<div class="panel" style="margin-top:14px"><div class="panel-label">Notes</div>${esc(p.notes)}</div>` : "")
    );
  }

  // ---- shared bits ------------------------------------------------------
  function sectionHead(eyebrow, title, lede) {
    return `<div class="eyebrow">${esc(eyebrow)}</div><h2 class="section-title">${esc(title)}</h2>${lede ? `<p class="section-lede">${esc(lede)}</p>` : ""}`;
  }
  function crosslink(c) {
    const s = c.stockWhy;
    if (!s) return "";
    return `<div class="crosslink"><span class="cl-icon">🧭</span><div class="cl-body"><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label || "Stock Why Wiki")} ↗</a><div>${esc(s.note || "")}</div></div></div>`;
  }
  const impactWord = (t) => ({ up: "Strengthened", down: "Weakened", warn: "Possible invalidation", flat: "Unchanged" }[t] || "");
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
