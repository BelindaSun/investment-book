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
  updated: "2026-08-27",
  thesisStatus: "Strong",
  statusNote:
    "先进制程与 CoWoS 封装近乎垄断，是整条 AI 供应链的收费站。2026 Q2 收入 $40.2B(+36%)、毛利率 67.7%、营业利润率 60.3%、净利 +77.4%，均超预期；上调全年增长指引至略高于 40%、2026 capex 升至 $60–64B、并追加 $100B 亚利桑那投资（AI 需求超过产能）。HPC 已占 66% 收入、2nm 开始放量（3%）；7 月营收 +44.7% 同比，动能延续。唯一的重大尾部是台湾地缘风险。",

  currentDecision: "持有",
  decisionReason:
    "先进制程/CoWoS 近乎垄断、定价权强，Q2 超预期 + 7 月 +44.7% 确认 AI 需求超过产能；主要变量是 $60–64B capex 强度与地缘。当前不动仓位。",
  nextDecisionTriggers: [
    "竞争对手在先进节点实现规模量产并抢走大客户",
    "capex 持续攀升而毛利率结构性下滑",
    "台湾地缘风险实质升级",
  ],

  sources: {
    "q2-2026": { label: "TSMC 2026 Q2 业绩（官方 IR）", url: "https://investor.tsmc.com/", date: "2026-07-16", type: "IR" },
    "jul-2026": { label: "TSMC 7 月营收 +44.7%、上调 capex（CNBC）", url: "https://www.cnbc.com/2026/08/10/tsmc-revenue-surge-ai-chip-big-tech.html", date: "2026-08-10", type: "media" },
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
        { text: "2026 Q2 毛利率 67.7%、营业利润率 60.3%、收入 $40.2B(+36%)，均超预期。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "节点结构：2nm 已占晶圆收入 3%（开始放量）、3nm 30%、5nm 33%、7nm 11%——先进节点占比高。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "CoWoS 封装产能是 AI 芯片的行业瓶颈。", tag: "FACT" },
      ],
      contrary: [
        { text: "Intel/三星若在先进节点追上，垄断溢价会被侵蚀。", tag: "INFERENCE" },
      ],
      keyMetrics: ["先进制程收入占比", "毛利率 / 营业利润率", "CoWoS 产能利用"],
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
        "AI 芯片需求把 TSMC 的产能拉满（HPC 已占 66% 收入），需求甚至超过产能；但维持技术领先需要巨额 capex（2026 指引升至 $60–64B，并追加 $100B 亚利桑那投资）。增长与资本强度的平衡，决定自由现金流的质量——目前毛利率约 67.7% 足以覆盖投入。",
      marketMisunderstanding: "多头只看增长，空头只看 capex；关键是两者的净效果——约 67.7% 的毛利率目前能覆盖高投入。",
      supporting: [
        { text: "AI 需求超过产能：HPC 平台收入环比 +20%、已占总收入 66%；全年增长指引上调至略高于 40%。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "7 月营收 +44.7% 同比（环比 +5.6%），动能延续。", tag: "FACT", source: "jul-2026", asOf: "2026-07-31" },
        { text: "毛利率维持在约 67–70% 的高位（2026 Q2 为 67.7%）。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "2026 capex 上调到 $60–64B、并追加 $100B 亚利桑那投资，压制短期自由现金流。", tag: "FACT", source: "jul-2026", asOf: "2026-08-10" },
        { text: "半导体历史强周期，AI 需求未必线性。", tag: "INFERENCE" },
      ],
      keyMetrics: ["收入增速", "毛利率", "CapEx / 收入", "HPC 收入占比"],
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
      supporting: [{ text: "追加 $100B 亚利桑那投资，进一步推进产能多元化、缓解「全在台湾」的尾部。", tag: "FACT", source: "jul-2026", asOf: "2026-08-10" }],
      contrary: [
        { text: "核心先进产能仍高度集中在台湾；海外产能爬坡需时间。", tag: "FACT" },
        { text: "海外产能成本更高，摊薄毛利（多元化是有代价的对冲）。", tag: "FACT" },
      ],
      keyMetrics: ["台湾产能占比", "海外产能进度", "地缘紧张度"],
      invalidation: "若 地缘风险实质升级（冲突/封锁/严厉管制），则 整个投资逻辑面临重大重估。",
      updated: "2026-08-26",
    },
  ],

  timeline: [
    { date: "2026-08-26", event: "为 TSM 开立投资账本（起点）", whyItMatters: "基线快照。", node: "全部", thesisImpact: "flat", action: "不动仓位——建立记录。", source: null, related: null },
    { date: "2026-07-16", event: "Q2 财报超预期：收入 $40.2B(+36%)、毛利率 67.7%、营业利润率 60.3%；上调全年指引 >40%、capex 升至 $60–64B、追加 $100B 亚利桑那投资", whyItMatters: "确认 AI 需求强劲（HPC 占 66%）、定价权稳固；capex 大幅上调需盯毛利与 FCF 平衡；亚利桑那追加投资缓解地缘尾部。", node: "制程垄断 / AI 需求 vs capex / 地缘", thesisImpact: "up", action: "不动仓位；三条逻辑均得到信息更新（含修正此前 capex 数据）。", source: { label: "TSMC IR（官方为准）", url: "https://investor.tsmc.com/" }, related: { label: "Stock Why · TSM 2026-08-23", url: "https://stock-why-wiki-site.vercel.app/stocks/TSM#2026-08-23" } },
    { date: "2026-08-10", event: "7 月营收 +44.7% 同比（环比 +5.6%）", whyItMatters: "月度数据显示 AI 需求动能延续，超过产能——为「需求 vs capex」逻辑提供高频佐证。", node: "AI 需求 vs capex", thesisImpact: "up", action: "不动仓位；动能确认。", source: { label: "CNBC 2026-08-10", url: "https://www.cnbc.com/2026/08/10/tsmc-revenue-surge-ai-chip-big-tech.html" }, related: { label: "Stock Why · TSM 2026-08-23", url: "https://stock-why-wiki-site.vercel.app/stocks/TSM#2026-08-23" } },
  ],

  thesisEvolution: [
    { date: "2026-08-26", label: "AI 辅助初稿（待认领）", note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」。" },
  ],

  // 逐条证伪条件在各 thesis 的 invalidation（唯一真相来源，页面自动派生）。
  // 台湾地缘属存续性风险，但已作为一条独立 thesis（含 invalidation）处理，故此处不重复。
  risks: [],

  stockWhy: { label: "TSM · Stock Why 维基", url: "https://stock-why-wiki-site.vercel.app/stocks/TSM", note: "TSM 的市场波动因果溯源在 Stock Why 维基（那边已有 TSM 档案）；这本账本只问它是否改变了逻辑。" },
};
