/*
 * Investment Book —— AAPL 数据文件。tier: active（概览 + 逻辑 + 时间线 + 风险 + 持仓）。
 * 枚举 key 英文，界面中文。时效数字标 (待核实)；持仓为「占位」示例。
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA.AAPL = {
  ticker: "AAPL",
  name: "Apple Inc.",
  tier: "active",
  holdingStatus: "held",
  tagline: "全球最强装机护城河，但在 AI 上是追赶者。",
  oneLiner:
    "全世界最赚钱、黏性最高的消费硬件+服务生态。悬念不在现金流，而在两处逆风：AI 上明显落后，以及对 iPhone 和中国的高度依赖。",
  updated: "2026-08-26",
  thesisStatus: "Healthy",
  statusNote:
    "装机量 + 服务是台复利机器，现金流和回购极其稳健。但 AI 是明显短板（Apple Intelligence 平淡、Siri 延期），且高度依赖 iPhone 与中国。2026 年它相对大型科技股跑赢（YTD 约 +23%），部分因为「没重仓 AI capex」反而讨喜——这本身就值得警惕。",

  currentDecision: "持有",
  decisionReason:
    "装机+服务的复利护城河稳健、现金流强；但 AI 落后是真实逆风，且高度依赖 iPhone/中国。当前不动仓位，把相对强势当情绪而非逻辑改善。",
  nextDecisionTriggers: [
    "服务增速大幅放缓，或 App Store 抽成/Google 默认付费被监管实质削减",
    "AI 功能持续令人失望并开始拖累换机/黏性",
    "大中华区收入结构性下滑，或 iPhone 需求持续走弱",
  ],

  sources: {
    "px-2026-08-12": { label: "大型科技股行情（Motley Fool 汇总）", url: "https://www.fool.com/investing/2026/08/12/alphabet-amazon-meta-platforms-and-microsoft-this/", date: "2026-08-12", type: "media" },
  },

  whyIOwnIt: [
    "全球约 20+ 亿活跃设备的装机护城河，切换成本极高，是服务收入的复利底座。",
    "服务业务高毛利、经常性、持续增长——把硬件用户变成年金。",
    "现金流与回购的堡垒；即便增长平淡，股东回报也稳。",
  ],

  position: {
    note: "占位——请替换成真实数字。质量和估值分开。",
    shares: 40,
    avgCost: 190.0,
    currentPrice: 302.25, // 2026-08-12 网络行情快照，非实时
    priceAsOf: "2026-08-12",
    portfolioWeight: 6.0,
    targetWeight: 6.0,
    addRange: "回撤到成本附近、或 AI 追赶出现实质进展且估值回落时加仓",
    reduceRange: "仓位超过组合约 9%、或 iPhone/中国出现结构性转弱时减仓",
    qualityNote: "质量：极高。装机护城河、服务年金、品牌与资本回报一流。",
    valuationNote: "估值：偏贵。作为「低 AI 暴露的避风港」被追捧，倍数不低而增长平淡，安全垫有限。",
  },

  theses: [
    {
      id: "installed-base-services",
      title: "装机量 + 服务是复利护城河",
      pillar: "装机 / 服务",
      status: "Strong",
      trend: "up",
      statement:
        "约 20+ 亿活跃设备构成极高切换成本，服务（App Store、订阅、支付、广告）在其上高毛利变现，把一次性硬件销售转成经常性年金。",
      marketMisunderstanding: "空头盯着 iPhone 销量的周期；但服务的经常性收入才是价值的复利来源。",
      supporting: [
        { text: "活跃设备与服务收入持续创新高。", tag: "FACT" },
        { text: "生态锁定（iMessage、健康、支付）抬高切换成本。", tag: "FACT" },
      ],
      contrary: [
        { text: "App Store 抽成面临全球监管与诉讼压力。", tag: "FACT" },
        { text: "Google 默认搜索付费（服务收入的一大块）受反垄断威胁。", tag: "FACT" },
      ],
      keyMetrics: ["服务收入增速", "活跃设备数", "服务毛利率"],
      invalidation: "若 服务增速大幅放缓、且 App Store 抽成或 Google 付费被监管实质削减，则 服务年金逻辑转弱。",
      updated: "2026-08-26",
    },
    {
      id: "ai-laggard",
      title: "AI 是明显短板——追赶者而非领导者",
      pillar: "AI 落后",
      status: "Watching",
      trend: "down",
      statement:
        "Apple Intelligence 反响平淡、Siri 升级一再延期。装机量给了它「AI 分发」的潜在优势，但产品端至今没兑现。这是最大的相对逆风。",
      marketMisunderstanding: "多头说「Apple 有 20 亿设备，AI 一上就赢」；但迟迟不兑现的分发优势只是纸面优势。",
      supporting: [
        { text: "庞大装机量是 AI 功能的现成分发渠道。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "Apple Intelligence 与 Siri 升级明显落后同侪。", tag: "FACT" },
        { text: "可能被迫依赖第三方模型（Google/OpenAI）供给 AI。", tag: "FACT" },
      ],
      keyMetrics: ["Apple Intelligence 采纳", "Siri 升级进度", "AI 驱动的换机"],
      invalidation: "若 AI 功能持续令人失望、且开始拖累换机与生态黏性，则 落后从「短板」升级为「护城河侵蚀」。",
      updated: "2026-08-26",
    },
    {
      id: "iphone-china",
      title: "对 iPhone 与中国的高度依赖是集中风险",
      pillar: "iPhone / 中国",
      status: "Watching",
      trend: "warn",
      statement:
        "iPhone 仍是收入的绝对主体，中国既是关键市场也是关键产能地。任一处的结构性走弱（需求、竞争、地缘、供应链）都会放大到整体。",
      marketMisunderstanding: "牛市把稳定当理所当然；但收入与供应链的双重集中，是被低估的尾部。",
      supporting: [{ text: "供应链多元化（印度等）在缓慢推进。", tag: "FACT" }],
      contrary: [
        { text: "iPhone 占收入比重仍然很高。", tag: "FACT" },
        { text: "中国本土竞争（华为回归）与地缘风险上升。", tag: "FACT" },
      ],
      keyMetrics: ["iPhone 收入占比", "大中华区收入", "供应链多元化进度"],
      invalidation: "若 大中华区收入结构性下滑、或 iPhone 需求持续走弱且无新增长极，则 集中风险兑现、逻辑削弱。",
      updated: "2026-08-26",
    },
  ],

  timeline: [
    { date: "2026-08-26", event: "为 AAPL 开立投资账本（起点）", whyItMatters: "基线快照。", node: "全部", thesisImpact: "flat", action: "不动仓位——建立记录。", source: null, related: null },
    { date: "2026-08-12", event: "2026 年相对大型科技股跑赢（YTD 约 +23%）", whyItMatters: "部分因「低 AI capex 暴露」被当避风港追捧——是情绪驱动，不改变 AI 落后的基本面。", node: "全部 / AI 落后", thesisImpact: "flat", action: "不动仓位；把相对强势当情绪，不当逻辑改善。", source: { label: "Motley Fool 2026-08-12", url: "https://www.fool.com/investing/2026/08/12/alphabet-amazon-meta-platforms-and-microsoft-this/" }, related: { label: "Stock Why 维基", url: "https://belindasun.github.io/stock-why-wiki/" } },
  ],

  thesisEvolution: [
    { date: "2026-08-26", label: "AI 辅助初稿（待认领）", note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」——从那一刻起才开始真正追踪信念随证据的演变。" },
  ],

  // 逐条证伪条件在各 thesis 的 invalidation（唯一真相来源，页面自动派生）。此处只留跨逻辑 / 存续性风险。AAPL 暂无。
  risks: [],

  stockWhy: { label: "AAPL · Stock Why 维基", url: "https://belindasun.github.io/stock-why-wiki/", note: "市场波动的因果溯源在 Stock Why 维基；这本账本只问它是否改变了逻辑。" },
};
