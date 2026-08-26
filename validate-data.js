#!/usr/bin/env node
/*
 * Investment Book —— 轻量数据校验器。  用法：  node validate-data.js
 * 无依赖、无框架。它把 manifest + 各公司数据文件加载进一个假的 window，
 * 然后检查一批常见错误，大幅降低批量更新十几家公司时悄悄弄坏数据的概率。
 * error → 退出码 1；warning → 只提示、不失败。
 */
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const COMP_DIR = path.join(ROOT, "data", "companies");

const errors = [];
const warnings = [];
const err = (t, m) => errors.push(`[${t}] ${m}`);
const warn = (t, m) => warnings.push(`[${t}] ${m}`);

// enums (keep in sync with app.js)
const STATUS = ["Strong", "Healthy", "Strengthening", "Watching", "Weakening", "Invalidated"];
const TREND = ["up", "flat", "down", "warn"];
const TAG = ["FACT", "INFERENCE", "THESIS", "UNKNOWN"];
const TIER = ["core", "active", "watch"];
const HOLDING = ["held", "watchlist", "exited", "not-held"];
const THREAT = ["High", "Medium", "Low"];

const dateOk = (d) => typeof d === "string" && /^\d{4}(-\d{2}(-\d{2})?)?$/.test(d) && !/x/i.test(d);

// --- load ---
global.window = {};
function req(f) {
  delete require.cache[require.resolve(f)];
  require(f);
}
req(path.join(ROOT, "data", "manifest.js"));
const manifest = global.window.IB_MANIFEST || [];
if (!manifest.length) err("manifest", "IB_MANIFEST 为空或缺失");

manifest.forEach((t) => {
  const file = path.join(COMP_DIR, t.toLowerCase() + ".js");
  if (!fs.existsSync(file)) {
    err(t, `manifest 引用的文件不存在: data/companies/${t.toLowerCase()}.js`);
    return;
  }
  try {
    req(file);
  } catch (e) {
    err(t, `解析失败: ${e.message}`);
  }
});

const DATA = global.window.IB_DATA || {};

manifest.forEach((t) => {
  const c = DATA[t];
  if (!c) {
    err(t, "文件已加载但未在 window.IB_DATA 上注册（检查对象 key）");
    return;
  }
  // ticker consistency
  if (c.ticker !== t) err(t, `ticker 字段 "${c.ticker}" 与 manifest/文件名 "${t}" 不一致`);
  if (!c.name) warn(t, "缺少 name");

  // enums
  if (c.tier && !TIER.includes(c.tier)) err(t, `未知 tier: ${c.tier}`);
  if (!c.holdingStatus) warn(t, "缺少 holdingStatus（默认按 watchlist 处理）");
  else if (!HOLDING.includes(c.holdingStatus)) err(t, `未知 holdingStatus: ${c.holdingStatus}`);
  if (c.thesisStatus && !STATUS.includes(c.thesisStatus)) err(t, `未知 thesisStatus: ${c.thesisStatus}`);
  if (c.updated && !dateOk(c.updated)) err(t, `updated 日期格式非法: ${c.updated}`);

  // placeholder position participating in held return calc
  const p = c.position || {};
  const isHeld = (c.holdingStatus || "watchlist") === "held";
  const placeholder = p.note && /占位|placeholder/i.test(p.note);
  if (isHeld && placeholder && p.avgCost != null && p.currentPrice != null) {
    warn(t, "holdingStatus=held 但 position.note 仍标「占位」——首页/收益在用占位成本计算，替换成真实数字或改成 watchlist");
  }

  // theses
  const ids = {};
  (c.theses || []).forEach((th, i) => {
    const where = `thesis#${i + 1}${th.title ? " 「" + th.title + "」" : ""}`;
    if (th.id) {
      if (ids[th.id]) err(t, `重复的 thesis id: ${th.id}`);
      ids[th.id] = true;
    }
    if (th.status && !STATUS.includes(th.status)) err(t, `${where} 未知 status: ${th.status}`);
    if (th.trend && !TREND.includes(th.trend)) err(t, `${where} 未知 trend: ${th.trend}`);
    if (!th.invalidation) warn(t, `${where} 缺少 invalidation（证伪条件）`);
    if (th.pillar == null) warn(t, `${where} 缺少 pillar（健康度/风险派生要用）`);
    if (th.updated && !dateOk(th.updated)) err(t, `${where} updated 日期非法: ${th.updated}`);
    ["supporting", "contrary"].forEach((k) => {
      (th[k] || []).forEach((ev) => {
        if (typeof ev === "string") return;
        if (ev.tag && !TAG.includes(ev.tag)) err(t, `${where} 未知证据 tag: ${ev.tag}`);
        if (ev.asOf && !dateOk(ev.asOf)) err(t, `${where} 证据 asOf 日期非法: ${ev.asOf}`);
        if (ev.source && !(c.sources && c.sources[ev.source]))
          err(t, `${where} 证据引用了未登记的 source: "${ev.source}"（在 sources 里补上）`);
        // 只对「真正的数字型指标」提示缺 source（%/$/亿万/倍/Qn），避免 M365、CS-4 这类产品名误报。
        const NUMERIC = /(\d[\d,.]*\s*[%％])|([$￥]\s*\d)|(\d[\d,.]*\s*(亿|万|万亿|倍|bps))|(\bQ[1-4]\b)/i;
        if (ev.tag === "FACT" && !ev.source && NUMERIC.test(ev.text || "") && !/待核实/.test(ev.text || ""))
          warn(t, `${where} 含数字指标的 FACT 缺少 source: 「${(ev.text || "").slice(0, 30)}…」`);
      });
    });
  });

  // competition threat
  (c.competition || []).forEach((x, i) => {
    if (x.threat && !THREAT.includes(x.threat)) err(t, `competition#${i + 1} 未知 threat: ${x.threat}`);
  });

  // timeline dates
  (c.timeline || []).forEach((e, i) => {
    if (e.date && !dateOk(e.date)) err(t, `timeline#${i + 1} 日期非法（不要用 2026-08-xx，用 "2026-08" + datePrecision:"month"）: ${e.date}`);
    if (e.thesisImpact && !TREND.includes(e.thesisImpact)) err(t, `timeline#${i + 1} 未知 thesisImpact: ${e.thesisImpact}`);
  });

  // sources sanity
  Object.entries(c.sources || {}).forEach(([k, s]) => {
    if (!s.url) warn(t, `source "${k}" 缺少 url`);
    if (s.date && !dateOk(s.date)) err(t, `source "${k}" 日期非法: ${s.date}`);
  });
});

// --- report ---
console.log(`\n检查了 ${manifest.length} 家公司。`);
if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} 个 warning:`);
  warnings.forEach((w) => console.log("  " + w));
}
if (errors.length) {
  console.log(`\n✗ ${errors.length} 个 error:`);
  errors.forEach((e) => console.log("  " + e));
  console.log("");
  process.exit(1);
}
console.log(errors.length ? "" : "\n✓ 没有 error。" + (warnings.length ? "（有 warning，见上）" : ""));
