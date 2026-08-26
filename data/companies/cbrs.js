/*
 * Investment Book —— CBRS (Cerebras) 数据文件。tier: watch（仅概览）。
 * 高波动的投机性标的，先观察、不重仓。数据来自 2026-08 网络行情；持仓为「占位」示例。
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA.CBRS = {
  ticker: "CBRS",
  name: "Cerebras Systems",
  tier: "watch",
  holdingStatus: "watchlist", // 尚未真实持有——观察名单（页面会把「为什么持有」自动显示为「为什么关注」）
  tagline: "晶圆级推理芯片的高波动挑战者——高估值容不下瑕疵。",
  oneLiner:
    "用整片晶圆做一颗巨型芯片，主打 AI 推理的速度与性价比，是「非 NVDA」叙事的纯玩标的。但盈利波动大、估值高、股价剧烈——目前只作观察，不重仓。",
  updated: "2026-08-26",
  thesisStatus: "Watching",
  statusNote:
    "投机性 AI 硬件挑战者。晶圆级（wafer-scale）架构在特定推理负载上有速度优势，2026-08 发布 CS-4（Supernova 2026）。但股价极度波动（2026-08 单周内约 -12% 到 +15% 都出现过），高估值容不下任何瑕疵。观察层：先看它能否把技术优势转成可持续的营收与毛利。（注：机构买入等资金面属情绪，不作为基本面证据。）",

  currentDecision: "观察",
  decisionReason:
    "技术有亮点但商业化/盈利稳定性未证实、估值脆弱、股价对消息极敏感。仅作观察，不建仓；如要参与也只宜极小仓。",
  nextDecisionTriggers: [
    "拿下标杆客户、或营收/毛利出现可持续兑现的证据",
    "估值消化到能容错的水平",
  ],

  whyIOwnIt: [
    "晶圆级架构在低延迟推理上有独特卖点，是「非 NVDA」推理叙事的纯玩标的。",
    "若 AI 推理需求爆发、且它拿下标杆客户，弹性可能很大——但这是高风险的小仓观察，不是核心持仓。",
    "作为观察对象，它是跟踪「推理专用芯片能否挑战 GPU」这一主题的最佳窗口之一。",
  ],

  position: {
    note: "占位——投机性标的，建议仅小仓观察。请替换成真实数字。",
    shares: 10,
    avgCost: 230.0,
    currentPrice: 250.0, // 2026-08 网络行情（极度波动，约 $220–253），示意
    priceAsOf: "2026-08-25",
    portfolioWeight: 1.0,
    targetWeight: 1.0,
    addRange: "只在有明确基本面改善（标杆客户/营收兑现）时，才考虑从观察转小仓",
    reduceRange: "任何时候仓位都不宜超过组合约 2%；估值/波动是主要约束",
    qualityNote: "质量：未证实。技术有亮点，但商业化、客户集中、盈利稳定性都待验证。",
    valuationNote: "估值：高且脆弱。高倍数下容不下任何一次 miss，股价对消息极度敏感。",
  },

  stockWhy: { label: "CBRS · Stock Why 维基", url: "https://stock-why-wiki-site.vercel.app/stocks/CBRS", note: "CBRS 的市场波动因果溯源在 Stock Why 维基（那边已有 CBRS 档案，含此前暴跌分析）；这本账本只问它是否改变了逻辑。" },
};
