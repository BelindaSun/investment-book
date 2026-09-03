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
    "全球先进逻辑制程拥有难以复制的规模、良率与客户信任优势的代工厂。NVDA、AAPL、AMD、超大厂自研芯片全在这里流片。核心悬念：$60–64B 年度 CapEx 能否持续转化为先进制程收入、定价权与自由现金流，以及台湾集中度与海外扩产的结构性矛盾。",
  updated: "2026-08-29",
  thesisStatus: "Strong",
  statusNote:
    "Strong / ↑——先进制程与 CoWoS 封装领先地位稳固，AI 需求持续拉满产能。Q2 收入 $40.2B(+33.7%)、毛利率 67.7%、营业利润率 60.3%；2nm 已贡献 3% 晶圆收入、7nm 及以下先进制程占 77%、HPC 占 66%。全年增长指引上调至略高于 40%、CapEx $60–64B。Q2 经营现金流约 NT$783B、CapEx 约 NT$496B、FCF 约 NT$287B（仍为正）。注意：毛利率 67.7% 受产能利用率提升与成本改善帮助，Q3 指引 65–67%；2nm 爬坡将稀释约 3–4pp、海外工厂早期稀释约 2–3pp。主要尾部风险包括台湾地缘、海外扩产毛利稀释、AI 资本开支周期与客户集中、出口管制、高额 CapEx 回报兑现。",

  currentDecision: "持有",
  decisionReason:
    "先进制程领先、定价权强，Q2 超预期确认 AI 需求超过产能；CapEx 高但 FCF 仍为正、毛利率足以覆盖。主要变量是 CapEx 回报兑现节奏、毛利率稀释幅度与地缘。当前不动仓位。",
  nextDecisionTriggers: [
    "竞争对手在先进节点实现规模量产并抢走大客户",
    "CapEx 持续攀升而先进制程收入、产能利用率和 FCF 未同步增长，或毛利率出现超出爬坡期的结构性下降",
    "台湾地缘风险实质升级",
  ],

  sources: {
    "q2-2026": { label: "TSMC 2026 Q2 业绩（官方 IR）", url: "https://investor.tsmc.com/", date: "2026-07-16", type: "IR" },
    "jul-2026": { label: "TSMC 7 月营收 +44.7%、上调 capex（CNBC）", url: "https://www.cnbc.com/2026/08/10/tsmc-revenue-surge-ai-chip-big-tech.html", date: "2026-08-10", type: "media" },
  },

  whyIOwnIt: [
    "先进逻辑制程拥有难以复制的规模、良率、制造执行与客户信任优势——几乎所有 AI 芯片都必须经过它。",
    "CoWoS 先进封装产能是当前 AI 芯片的供应瓶颈，掌控供给上限赋予强定价权。",
    "客户越先进越离不开它；技术领先 + 规模构成难以逾越的护城河。CapEx 高但 FCF 仍为正，增长有现金流支撑。",
  ],

  position: {
    note: "占位——请替换成真实数字。质量和估值分开。",
    shares: 50,
    avgCost: 180.0,
    currentPrice: 407.39,
    priceAsOf: "2026-08-24",
    portfolioWeight: 7.0,
    targetWeight: 8.0,
    addRange: "地缘恐慌杀出的非基本面下跌、或回撤到成本附近时加仓",
    reduceRange: "仓位超过组合约 10%、或地缘风险实质升级时减仓",
    qualityNote: "质量：极高。先进制程领先、定价权、执行力顶尖、AI 超级周期核心受益者。",
    valuationNote: "估值：相对其护城河与增长不算贵，但地缘风险与海外扩产毛利稀释构成永久性折价。",
  },

  theses: [
    {
      id: "process-moat",
      title: "先进制程 + 制造执行护城河",
      pillar: "制程领先",
      status: "Strong",
      trend: "up",
      statement:
        "TSMC 在先进逻辑制程拥有难以复制的规模、良率、制造执行与客户信任优势，并通过 CoWoS 等先进封装进一步扩大系统级壁垒。所有想要最强 AI 芯片的客户都必须来，赋予它罕见的定价权。",
      marketMisunderstanding: "市场把它当「周期性代工厂」；实际它在先进节点上拥有极深的技术与规模壁垒，竞争对手（三星、Intel 代工）短期内难以追上。",
      supporting: [
        { text: "Q2 毛利率 67.7%、营业利润率 60.3%、收入 $40.2B(+33.7%)，均超预期。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "7nm 及以下先进制程占晶圆收入 77%：2nm 3%、3nm 30%、5nm 33%、7nm 11%。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "CoWoS 先进封装产能是当前 AI 芯片的行业供应瓶颈，供不应求。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "2nm 已开始放量（3% 晶圆收入），制程路线图执行力持续验证。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "Intel/三星若在先进节点追上，技术溢价会被侵蚀——当前领先不等于永久垄断。", tag: "INFERENCE" },
        { text: "CoWoS 当前供不应求，但短缺和由此产生的定价权不会永久存在。", tag: "INFERENCE" },
      ],
      keyMetrics: ["先进制程收入占比", "毛利率 / 营业利润率", "CoWoS 产能利用与扩产进度", "2nm 爬坡进度"],
      invalidation: "若 竞争对手在先进节点实现规模量产、且抢走大客户，则 制程领先逻辑削弱。",
      updated: "2026-08-29",
    },
    {
      id: "ai-capex-returns",
      title: "AI 需求 → 产能变现与 CapEx 回报",
      pillar: "AI 需求 / 资本效率",
      status: "Strengthening",
      trend: "up",
      statement:
        "TSMC 能否把 $60–64B 的年度 CapEx 持续转化为先进制程收入、定价权与自由现金流？AI 芯片需求把产能拉满（HPC 占 66% 收入），需求超过产能；CapEx 大幅增加但不是无现金流支撑的扩张——Q2 FCF 仍为正。管理层明确把高 CapEx 与未来数年增长机会联系起来。需要持续验证回报。",
      marketMisunderstanding: "多头只看增长，空头只看 CapEx；关键是两者的净效果——当前毛利率与现金流能覆盖高投入，但需要持续验证。",
      supporting: [
        { text: "AI 需求超过产能：HPC 收入环比 +20%、已占总收入 66%；全年增长指引上调至略高于 40%。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "7 月营收 +44.7% 同比（环比 +5.6%），动能延续。", tag: "FACT", source: "jul-2026", asOf: "2026-07-31" },
        { text: "Q2 经营现金流约 NT$783B、CapEx 约 NT$496B、FCF 约 NT$287B——高 CapEx 下 FCF 仍为正。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "2026 全年 CapEx $60–64B（Q2 单季 $15.7B、上半年 $26.8B），约 70–80% 投向先进制程、10–20% 投向先进封装与测试。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "Q3 毛利率指引 65–67%（低于 Q2 的 67.7%）；2nm 快速爬坡将在下半年稀释毛利率约 3–4pp。", tag: "FACT", source: "q2-2026", asOf: "2026-07-16" },
        { text: "海外工厂（美国/日本）早期稀释毛利率约 2–3pp，后期可能扩大至 3–4pp——地理分散的代价是结构性的。", tag: "FACT", source: "q2-2026", asOf: "2026-07-16" },
        { text: "67.7% 毛利率受产能利用率提升与成本改善帮助，不宜外推为长期底部。", tag: "INFERENCE" },
        { text: "半导体历史强周期，AI 需求未必线性；客户集中（大型超大厂）本身也是风险。", tag: "INFERENCE" },
        { text: "追加 $100B 亚利桑那投资，长期资本强度显著。", tag: "FACT", source: "jul-2026", asOf: "2026-08-10" },
      ],
      keyMetrics: ["收入增速", "毛利率（含爬坡与海外稀释跟踪）", "CapEx / 收入", "FCF", "HPC 收入占比", "先进制程产能利用率"],
      invalidation: "若 CapEx 长期高增，但先进制程收入、产能利用率和 FCF 未同步增长，或毛利率出现超出爬坡期的结构性下降，则 资本效率逻辑转弱。",
      updated: "2026-08-29",
    },
    {
      id: "taiwan-overseas",
      title: "台湾集中度与海外扩产的结构性矛盾",
      pillar: "地缘 / 扩产",
      status: "Watching",
      trend: "warn",
      statement:
        "TSMC 的核心产能集中在台湾。海外扩产（美国/日本）能够降低部分运营集中度，但短中期无法复制台湾完整的研发、供应链与制造集群；分散风险本身又会牺牲毛利率和资本效率。这是 TSMC 真正的结构性矛盾：地理分散 ↑ → 韧性 ↑，但成本与资本强度 ↑ → 毛利率与回报承压。",
      marketMisunderstanding: "牛市里地缘风险被忽视；但它是这只票区别于普通优质公司的关键变量——而且分散的代价（毛利稀释）也在同时发生。",
      supporting: [
        { text: "追加 $100B 亚利桑那投资，进一步推进产能多元化、降低集中度。", tag: "FACT", source: "jul-2026", asOf: "2026-08-10" },
        { text: "日本工厂也在推进，地理分散正在执行。", tag: "FACT" },
      ],
      contrary: [
        { text: "核心先进产能仍高度集中在台湾；海外产能爬坡需时间，短中期无法复制台湾集群。", tag: "FACT" },
        { text: "海外工厂早期稀释毛利率约 2–3pp、后期可能 3–4pp——多元化是有结构性代价的对冲。", tag: "FACT", source: "q2-2026", asOf: "2026-07-16" },
        { text: "美国出口管制对客户范围和技术输出构成限制。", tag: "FACT" },
        { text: "两岸紧张构成对估值的永久性折价和真实尾部风险。", tag: "FACT" },
      ],
      keyMetrics: ["台湾产能占比", "海外产能进度与成本", "海外工厂毛利率影响", "地缘紧张度"],
      invalidation: "若 地缘风险实质升级（冲突/封锁/严厉管制），则 整个投资逻辑面临重大重估。",
      updated: "2026-08-29",
    },
  ],

  metrics: [
    { label: "收入增速", latest: "Q2 $40.2B（+33.7%）", spark: [20, 25, 28, 30, 33, 33.7], unit: "% 同比", good: "up", note: "AI 需求持续拉满产能。" },
    { label: "毛利率", latest: "Q2 67.7%（Q3 指引 65–67%）", spark: [55, 58, 60, 63, 66, 67.7], unit: "%", good: "up", note: "受产能利用率与成本改善帮助；2nm 爬坡稀释约 3–4pp、海外工厂稀释约 2–3pp。不宜外推为长期底部。", judgment: true },
    { label: "先进制程占比", latest: "7nm 及以下占 77%（2nm 3%、3nm 30%、5nm 33%）", spark: [55, 60, 65, 70, 74, 77], unit: "%", good: "up", note: "先进节点持续提升占比。" },
    { label: "HPC 收入占比", latest: "66%", spark: [45, 50, 55, 58, 62, 66], unit: "%", good: "up", note: "AI/HPC 成为收入主驱动。" },
    { label: "CapEx（全年指引）", latest: "$60–64B（Q2 单季 $15.7B、上半年 $26.8B）", spark: [18, 28, 36, 44, 52, 62], unit: "$B/年", note: "约 70–80% 投向先进制程。方向有歧义。" },
  ],

  timeline: [
    { date: "2026-08-29", event: "财报后整改：thesis 措辞校正与数据修正", whyItMatters: "修正 CapEx 数据（全年 $60–64B、Q2 单季 $15.7B）；thesis 结构调整为三条（制程领先 Strong ↑、AI 需求/资本效率 Strengthening ↑、台湾/海外扩产 Watching ⚠）；补入毛利率稀释（2nm 爬坡 3–4pp、海外 2–3pp）与 FCF 数据。", node: "全部", thesisImpact: "flat", action: "不动仓位——事实校正与 thesis 校准，非交易信号。", source: null, related: null },
    { date: "2026-08-26", event: "为 TSM 开立投资账本（起点）", whyItMatters: "基线快照。", node: "全部", thesisImpact: "flat", action: "不动仓位——建立记录。", source: null, related: null },
    { date: "2026-07-16", event: "Q2 财报超预期：收入 $40.2B(+33.7%)、毛利率 67.7%、营业利润率 60.3%；上调全年指引 >40%、CapEx $60–64B、追加 $100B 亚利桑那投资", whyItMatters: "确认 AI 需求强劲（HPC 占 66%）、定价权稳固；CapEx 高但 FCF 仍为正（Q2 FCF 约 NT$287B）；海外扩产将稀释毛利率 2–4pp。", node: "制程领先 / AI 需求 / 地缘", thesisImpact: "up", action: "不动仓位；三条逻辑均得到信息更新。", source: { label: "TSMC IR（官方为准）", url: "https://investor.tsmc.com/" }, related: { label: "Stock Why · TSM 2026-08-23", url: "https://stock-why-wiki-site.vercel.app/stocks/TSM#2026-08-23" } },
    { date: "2026-08-10", event: "7 月营收 +44.7% 同比（环比 +5.6%）", whyItMatters: "月度数据显示 AI 需求动能延续，超过产能——为需求/资本效率逻辑提供高频佐证。", node: "AI 需求 / 资本效率", thesisImpact: "up", action: "不动仓位；动能确认。", source: { label: "CNBC 2026-08-10", url: "https://www.cnbc.com/2026/08/10/tsmc-revenue-surge-ai-chip-big-tech.html" }, related: { label: "Stock Why · TSM 2026-08-23", url: "https://stock-why-wiki-site.vercel.app/stocks/TSM#2026-08-23" } },
  ],

  thesisEvolution: [
    { date: "2026（当前）", label: "Strong / ↑：AI 需求拉满产能，资本效率待持续验证", note: "Q2：收入 $40.2B(+33.7%)、毛利率 67.7%、先进制程占 77%、HPC 占 66%、2nm 开始放量。CapEx $60–64B 但 FCF 仍为正。核心张力：$60–64B CapEx 能否持续转化为收入与 FCF，以及海外扩产的毛利稀释（2–4pp）与地缘风险分散之间的结构性矛盾。" },
    { date: "2026-08-26", label: "AI 辅助初稿（待认领）", note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」。" },
  ],

  risks: [],

  stockWhy: { label: "TSM · Stock Why 维基", url: "https://stock-why-wiki-site.vercel.app/stocks/TSM", note: "TSM 的市场波动因果溯源在 Stock Why 维基（那边已有 TSM 档案）；这本账本只问它是否改变了逻辑。" },
};
