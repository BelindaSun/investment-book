/*
 * Investment Book —— TSM 数据文件。tier: active。枚举 key 英文，界面中文。
 * 部分数据来自 2026-08 网络行情/新闻（已在时间线标注来源）；持仓为「占位」示例。
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA.TSM = {
  ticker: "TSM",
  name: "Taiwan Semiconductor (TSMC)",
  tier: "active",
  holdingStatus: "held",
  tagline: "所有人的芯片都在这里流片——AI 时代的收费站，但坐在地缘断层线上。",
  oneLiner:
    "全球先进制程近乎垄断的代工厂。NVDA、AAPL、AMD、超大厂自研芯片全在这里流片。悬念不在需求，而在两件事：高毛利（2026 Q2 约 67.7%）与高 capex 的平衡，以及台湾的地缘尾部风险。",
  updated: "2026-08-26",
  thesisStatus: "Strong",
  statusNote:
    "先进制程与 CoWoS 封装近乎垄断，是整条 AI 供应链的收费站。2026 Q2 收入 $40.2B、毛利率 67.7%，均超预期，并上调全年增长指引至略高于 40%、capex 升至 $18.75–20B（AI 需求强劲）。唯一的重大尾部是台湾地缘风险。",

  currentDecision: "持有",
  decisionReason:
    "先进制程/CoWoS 近乎垄断、定价权强，Q2 超预期确认 AI 需求；主要变量是 capex 强度与地缘。当前不动仓位。",
  nextDecisionTriggers: [
    "竞争对手在先进节点实现规模量产并抢走大客户",
    "capex 持续攀升而毛利率结构性下滑",
    "台湾地缘风险实质升级",
  ],

  sources: {
    "q2-2026": { label: "TSMC 2026 Q2 业绩（以官方 IR 为准）", url: "https://investor.tsmc.com/", date: "2026-07", type: "IR" },
    "px-2026-08-24": { label: "TSM 行情（stockanalysis 汇总）", url: "https://stockanalysis.com/stocks/tsm/", date: "2026-08-24", type: "media" },
  },

  whyIOwnIt: [
    "先进制程近乎垄断——几乎所有 AI 芯片都必须经过它，是「卖铲人的卖铲人」。",
    "CoWoS 先进封装产能是 AI 芯片的瓶颈，掌控它=掌控供给上限，定价权强。",
    "客户越先进越离不开它；技术领先 + 规模构成难以逾越的护城河。",
  ],

  position: {
    note: "占位——请替换成真实数字。质量和估值分开。",
    shares: 50,
    avgCost: 180.0,
    currentPrice: 407.39, // 2026-08-24 网络行情快照，非实时
    priceAsOf: "2026-08-24",
    portfolioWeight: 7.0,
    targetWeight: 8.0,
    addRange: "地缘恐慌杀出的非基本面下跌、或回撤到成本附近时加仓",
    reduceRange: "仓位超过组合约 10%、或地缘风险实质升级时减仓",
    qualityNote: "质量：极高。技术垄断、定价权、执行力顶尖、AI 超级周期核心受益者。",
    valuationNote: "估值：相对其护城河与增长不算贵，但地缘风险构成永久性折价——这不是普通公司的估值题。",
  },

  theses: [
    {
      id: "process-monopoly",
      title: "先进制程近乎垄断，定价权强",
      pillar: "制程垄断",
      status: "Strong",
      trend: "up",
      statement:
        "在最先进制程和 CoWoS 封装上，TSMC 几乎没有对手（三星、Intel 代工落后）。所有想要最强 AI 芯片的客户都必须来，赋予它罕见的定价权。",
      marketMisunderstanding: "市场把它当「周期性代工厂」；实际它在先进节点上是近乎垄断的收费站。",
      supporting: [
        { text: "2026 Q2 毛利率 67.7%、收入 $40.2B，双双超预期。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "上调 2026 全年增长指引至略高于 40%。", tag: "FACT", source: "q2-2026", asOf: "2026-07" },
        { text: "CoWoS 封装产能是 AI 芯片的行业瓶颈。", tag: "FACT" },
      ],
      contrary: [
        { text: "Intel/三星若在先进节点追上，垄断溢价会被侵蚀。", tag: "INFERENCE" },
      ],
      keyMetrics: ["先进制程收入占比", "毛利率", "CoWoS 产能利用"],
      invalidation: "若 竞争对手在先进节点实现规模量产、且抢走大客户，则 制程垄断逻辑削弱。",
      updated: "2026-08-26",
    },
    {
      id: "ai-demand-vs-capex",
      title: "AI 需求强劲，但 capex 强度是平衡木",
      pillar: "AI 需求 vs capex",
      status: "Healthy",
      trend: "up",
      statement:
        "AI 芯片需求把 TSMC 的产能拉满，但维持技术领先需要巨额 capex（2026 指引升至 $18.75–20B）。增长与资本强度的平衡，决定自由现金流的质量。",
      marketMisunderstanding: "多头只看增长，空头只看 capex；关键是两者的净效果——高毛利能否覆盖高投入。",
      supporting: [
        { text: "AI 需求推动产能满载与提价。", tag: "FACT" },
        { text: "毛利率维持在约 67–70% 的高位（2026 Q2 为 67.7%）。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "capex 逐年抬升，压制短期自由现金流。", tag: "FACT" },
        { text: "半导体历史强周期，AI 需求未必线性。", tag: "INFERENCE" },
      ],
      keyMetrics: ["收入增速", "毛利率", "CapEx / 收入"],
      invalidation: "若 capex 持续攀升而毛利率结构性下滑，则 增长/资本平衡逻辑转弱。",
      updated: "2026-08-26",
    },
    {
      id: "geopolitics",
      title: "台湾地缘风险是最大的尾部",
      pillar: "地缘",
      status: "Watching",
      trend: "down",
      statement:
        "TSMC 的核心产能集中在台湾。两岸紧张、美国出口管制、以及被迫的产能外迁（美国/日本，成本更高），都构成对估值的永久性折价和真实尾部风险。",
      marketMisunderstanding: "牛市里地缘风险被忽视；但它是这只票区别于普通优质公司的关键变量。",
      supporting: [{ text: "亚利桑那/日本设厂推进产能多元化。", tag: "FACT" }],
      contrary: [
        { text: "核心先进产能仍高度集中在台湾。", tag: "FACT" },
        { text: "海外产能成本更高，摊薄毛利。", tag: "FACT" },
      ],
      keyMetrics: ["台湾产能占比", "海外产能进度", "地缘紧张度"],
      invalidation: "若 地缘风险实质升级（冲突/封锁/严厉管制），则 整个投资逻辑面临重大重估。",
      updated: "2026-08-26",
    },
  ],

  timeline: [
    { date: "2026-08-26", event: "为 TSM 开立投资账本（起点）", whyItMatters: "基线快照。", node: "全部", thesisImpact: "flat", action: "不动仓位——建立记录。", source: null, related: null },
    { date: "2026-07", datePrecision: "month", event: "Q2 财报超预期：收入 $40.2B、毛利率 67.7%，上调全年指引至 >40%、capex 升至 $18.75–20B", whyItMatters: "确认 AI 需求强劲、定价权稳固；capex 上调需盯毛利与 FCF 平衡。", node: "制程垄断 / AI 需求 vs capex", thesisImpact: "up", action: "不动仓位；逻辑得到强化。", source: { label: "TSMC IR（官方为准）", url: "https://investor.tsmc.com/" }, related: { label: "Stock Why 维基：TSM", url: "https://belindasun.github.io/stock-why-wiki/" } },
  ],

  thesisEvolution: [
    { date: "2026-08-26", label: "AI 辅助初稿（待认领）", note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」。" },
  ],

  // 逐条证伪条件在各 thesis 的 invalidation（唯一真相来源，页面自动派生）。
  // 台湾地缘属存续性风险，但已作为一条独立 thesis（含 invalidation）处理，故此处不重复。
  risks: [],

  stockWhy: { label: "TSM · Stock Why 维基", url: "https://belindasun.github.io/stock-why-wiki/", note: "TSM 的市场波动因果溯源在 Stock Why 维基（那边已有 TSM 档案）；这本账本只问它是否改变了逻辑。" },
};
