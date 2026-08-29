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
  updated: "2026-08-27",
  thesisStatus: "Watching",
  statusNote:
    "投机性 AI 硬件挑战者。Q2 2026（8/12）核心营收 $210M（同比翻倍多）、云业务 +281%（成增长引擎）、亏损大幅收窄（调整后每股亏 5¢ vs 预期 -17¢）、上调全年指引到 $880–890M；但股价盘后仍跌约 17%——「超预期却下跌」正是高估值容不下瑕疵的典型。观察层：技术有亮点、商业化在提速，但估值脆弱、股价对消息极敏感。（注：机构买入等资金面属情绪，不作为基本面证据。）",

  currentDecision: "观察",
  decisionReason:
    "Q2 营收翻倍、云业务 +281%、亏损收窄——商业化在提速；但盈利仍未转正、估值脆弱、股价对消息极敏感（超预期仍跌 17%）。仅作观察，如参与也只宜极小仓。",
  nextDecisionTriggers: [
    "云业务高增长延续、且路径走向盈利（营收/毛利可持续兑现）",
    "估值消化到能容错的水平",
  ],

  sources: {
    "q2-2026": { label: "Cerebras Q2 2026 财报（2026-08-12；CNBC）", url: "https://www.cnbc.com/2026/08/12/cerebras-cbrs-q2-earnings-report-2026.html", date: "2026-08-12", type: "media" },
  },

  whyIOwnIt: [
    "晶圆级架构在低延迟推理上有独特卖点，是「非 NVDA」推理叙事的纯玩标的；Q2 云业务 +281% 显示需求在起量。",
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
