/*
 * Investment Book —— CBRS (Cerebras) 数据文件。tier: watch（仅概览）。
 * 高波动的投机性标的，先观察、不重仓。数据来自 2026-08 网络行情；持仓为「占位」示例。
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA.CBRS = {
  ticker: "CBRS",
  name: "Cerebras Systems",
  tier: "watch",
  tagline: "晶圆级推理芯片的高波动挑战者——高估值容不下瑕疵。",
  oneLiner:
    "用整片晶圆做一颗巨型芯片，主打 AI 推理的速度与性价比，是「非 NVDA」叙事的纯玩标的。但盈利波动大、估值高、股价剧烈——目前只作观察，不重仓。",
  updated: "2026-08-26",
  thesisStatus: "Watching",
  statusNote:
    "投机性 AI 硬件挑战者。晶圆级（wafer-scale）架构在特定推理负载上有速度优势，2026-08 发布 CS-4（Supernova 2026），ARK 等机构有买入。但股价极度波动（2026-08 单周内 -12% 到 +15% 都出现过），高估值容不下任何瑕疵。观察层：先看它能否把技术优势转成可持续的营收与毛利。",

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

  stockWhy: { label: "CBRS · Stock Why 维基", url: "https://belindasun.github.io/stock-why-wiki/", note: "CBRS 的市场波动因果溯源在 Stock Why 维基（那边已有 CBRS 档案，含此前暴跌分析）；这本账本只问它是否改变了逻辑。" },
};
