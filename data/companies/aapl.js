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
    "全世界最赚钱、黏性最高的消费硬件+服务生态。悬念不在现金流，而在两处逆风：AI 上明显落后（重建版 Siri 靠外包 Google Gemini 才交付），以及对 iPhone 和中国的高度依赖。",
  updated: "2026-08-27",
  thesisStatus: "Healthy",
  statusNote:
    "FY26 Q3（7/30）创 6 月季度纪录：总营收 $1094亿(+16%)、iPhone +22%、大中华 +22%（都强劲反弹、好于此前担忧）。但两点黄灯：Services $307亿 miss 预期（服务年金的关键读数），毛利率 50.1% 含约 2% 关税退款顺风。AI 端：6/8 发布用 Google Gemini 驱动的重建版 Siri——延迟两年后选择外包给竞争对手，坐实落后但务实交付。现金流/回购仍是堡垒。",

  currentDecision: "持有",
  decisionReason:
    "硬件季强劲、iPhone/中国反弹缓解了集中风险；但 Services miss 是服务年金的黄灯，AI 靠外包 Gemini 交付（落后但务实）。当前不动仓位，把相对强势当情绪而非逻辑改善。",
  nextDecisionTriggers: [
    "Services 增速连续放缓，或 App Store 抽成 / Google 默认付费被监管实质削减",
    "Siri（含 Gemini 版）/Apple Intelligence 反响不佳、开始拖累换机与黏性",
    "大中华区收入重新走弱、或 iPhone 需求转弱",
  ],

  sources: {
    "px-2026-08-12": { label: "大型科技股行情（Motley Fool 汇总）", url: "https://www.fool.com/investing/2026/08/12/alphabet-amazon-meta-platforms-and-microsoft-this/", date: "2026-08-12", type: "media" },
    "q3fy26": { label: "Apple FY26 Q3 业绩（2026-07-30；以官方 IR 为准）", url: "https://www.macrumors.com/2026/07/30/apple-3q-2026-earnings/", date: "2026-07-30", type: "media" },
    "siri-gemini-2026": { label: "Apple 用 Google Gemini 驱动重建版 Siri（CNN，WWDC 2026-06-08）", url: "https://www.cnn.com/2026/01/12/tech/apple-google-gemini-siri", date: "2026-06-08", type: "media" },
    "antitrust-2025-09": { label: "美国 v. Google 搜索案裁决：保留非独家默认付费（DOJ/Fortune）", url: "https://fortune.com/2025/09/02/google-antitrust-remedy-ruling-exclusive-search-distribution-deals-chrome/", date: "2025-09-02", type: "gov" },
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
        { text: "FY26 Q3 总营收 $1094亿(+16%)、iPhone +22%，均创 6 月季度纪录；Services 也创纪录。", tag: "FACT", source: "q3fy26", asOf: "2026-06-30" },
        { text: "反垄断裁决保留了（非独家的）默认搜索付费——Google 对 Apple 的巨额年付（服务收入一大块）得以延续。", tag: "FACT", source: "antitrust-2025-09", asOf: "2025-09-02" },
        { text: "生态锁定（iMessage、健康、支付）抬高切换成本。", tag: "FACT" },
      ],
      contrary: [
        { text: "FY26 Q3 Services $307亿虽创纪录、却 miss 预期（$312亿）——年金引擎的增速是要盯的黄灯。", tag: "FACT", source: "q3fy26", asOf: "2026-06-30" },
        { text: "App Store 抽成面临全球监管与诉讼压力。", tag: "FACT" },
      ],
      keyMetrics: ["服务收入增速", "活跃设备数", "服务毛利率"],
      invalidation: "若 服务增速大幅放缓、且 App Store 抽成或 Google 付费被监管实质削减，则 服务年金逻辑转弱。",
      updated: "2026-08-26",
    },
    {
      id: "ai-laggard",
      title: "AI 是明显短板——重建版 Siri 靠外包 Gemini 才交付",
      pillar: "AI 落后",
      status: "Watching",
      trend: "flat",
      statement:
        "延迟两年后，Apple 在 WWDC 2026（6/8）发布了重建版 Siri——但最难的推理任务路由到 Google Gemini（约 $10亿/年多年合约）。这是务实交付（终于有了能用的 AI Siri + 20 亿设备分发），也是战略承认落后（把前沿 AI 外包给竞争对手）。「纸面分发优势」变成了「靠 Google 兑现的分发」。",
      marketMisunderstanding: "多头说「Apple 有 20 亿设备，AI 一上就赢」；空头说它彻底落后。现实居中——它选了速度和成熟能力（Gemini），代价是 AI 上依赖 Google。",
      supporting: [
        { text: "重建版 Siri 已发布（2026-06-08），借 20 亿设备分发 + Gemini 能力，缓解了「什么都不交付」的风险。", tag: "FACT", source: "siri-gemini-2026", asOf: "2026-06-08" },
      ],
      contrary: [
        { text: "把 Siri 最难的推理外包给 Google Gemini——坐实自研前沿 AI 落后，且 AI 上更依赖竞争对手。", tag: "FACT", source: "siri-gemini-2026", asOf: "2026-06-08" },
        { text: "此前 Apple Intelligence 反响平淡、Siri 升级一再延期。", tag: "FACT" },
      ],
      keyMetrics: ["新 Siri 采纳 / 口碑", "AI 驱动的换机", "对 Google 的 AI 依赖度"],
      invalidation: "若 新 Siri（含 Gemini 版）持续令人失望、或对 Google 的 AI 依赖被削弱，且开始拖累换机与生态黏性，则 落后从「短板」升级为「护城河侵蚀」。",
      updated: "2026-08-27",
    },
    {
      id: "iphone-china",
      title: "对 iPhone 与中国的高度依赖是集中风险",
      pillar: "iPhone / 中国",
      status: "Watching",
      trend: "flat",
      statement:
        "iPhone 仍是收入的绝对主体，中国既是关键市场也是关键产能地。任一处的结构性走弱都会放大到整体。FY26 Q3 两处都强劲反弹（iPhone +22%、大中华 +22%），缓解了此前的急迫担忧——但集中度本身没变，仍是要盯的尾部。",
      marketMisunderstanding: "牛市把稳定当理所当然；但收入与供应链的双重集中，是被低估的尾部——即便本季反弹也没消除它。",
      supporting: [
        { text: "FY26 Q3 iPhone +22%、大中华 +22% 到 $188亿——都强劲反弹、好于此前担忧。", tag: "FACT", source: "q3fy26", asOf: "2026-06-30" },
        { text: "供应链多元化（印度等）在缓慢推进。", tag: "FACT" },
      ],
      contrary: [
        { text: "iPhone 占收入比重仍然很高；大中华虽 +22% 但仍略低于分析师预期（$196亿）。", tag: "FACT", source: "q3fy26", asOf: "2026-06-30" },
        { text: "中国本土竞争（华为回归）与地缘风险上升。", tag: "FACT" },
      ],
      keyMetrics: ["iPhone 收入占比", "大中华区收入", "供应链多元化进度"],
      invalidation: "若 大中华区收入结构性下滑、或 iPhone 需求持续走弱且无新增长极，则 集中风险兑现、逻辑削弱。",
      updated: "2026-08-27",
    },
  ],

  timeline: [
    { date: "2026-08-26", event: "为 AAPL 开立投资账本（起点）", whyItMatters: "基线快照。", node: "全部", thesisImpact: "flat", action: "不动仓位——建立记录。", source: null, related: null },
    { date: "2025-09-02", event: "反垄断搜索案裁决：保留（非独家的）默认搜索付费", whyItMatters: "Google 对 Apple 的巨额年付（服务收入的一大块）得以延续——对服务年金逻辑是利好，此前的一个尾部风险有利解除。", node: "服务 / 装机", thesisImpact: "up", action: "不动仓位；服务年金的一个尾部风险解除。", source: { label: "DOJ / Fortune 2025-09-02", url: "https://fortune.com/2025/09/02/google-antitrust-remedy-ruling-exclusive-search-distribution-deals-chrome/" }, related: { label: "Stock Why · AAPL 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/AAPL#2026-08-24" } },
    { date: "2026-06-08", event: "WWDC 2026：重建版 Siri 发布，最难推理外包给 Google Gemini（约 $10亿/年）", whyItMatters: "延迟两年后终于交付能用的 AI Siri（务实），但把前沿 AI 外包给竞争对手——坐实落后、并在 AI 上更依赖 Google。", node: "AI 落后", thesisImpact: "flat", action: "不动仓位；AI 逻辑从「什么都不交付」转为「靠 Google 兑现」，正反面并存。", source: { label: "CNN：Apple–Google Gemini Siri", url: "https://www.cnn.com/2026/01/12/tech/apple-google-gemini-siri" }, related: { label: "Stock Why · AAPL 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/AAPL#2026-08-24" } },
    { date: "2026-07-30", event: "FY26 Q3 财报：总营收 $1094亿(+16%)、iPhone +22%、大中华 +22%（创纪录）；但 Services miss、毛利率含关税退款顺风", whyItMatters: "硬件季强劲、iPhone/中国反弹缓解集中风险；但 Services $307亿 miss 预期（年金引擎黄灯），毛利率 50.1% 含约 2% 关税退款。", node: "服务 / iPhone / 中国", thesisImpact: "up", action: "不动仓位——硬件强化 vs Services 黄灯；盯服务增速。", source: { label: "Apple FY26 Q3 IR / MacRumors", url: "https://www.macrumors.com/2026/07/30/apple-3q-2026-earnings/" }, related: { label: "Stock Why · AAPL 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/AAPL#2026-08-24" } },
    { date: "2026-08-12", event: "2026 年相对大型科技股跑赢（YTD 约 +23%）", whyItMatters: "部分因「低 AI capex 暴露」被当避风港追捧——是情绪驱动，不改变 AI 落后的基本面。", node: "全部 / AI 落后", thesisImpact: "flat", action: "不动仓位；把相对强势当情绪，不当逻辑改善。", source: { label: "Motley Fool 2026-08-12", url: "https://www.fool.com/investing/2026/08/12/alphabet-amazon-meta-platforms-and-microsoft-this/" }, related: { label: "Stock Why · AAPL 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/AAPL#2026-08-24" } },
  ],

  thesisEvolution: [
    { date: "2026-08-26", label: "AI 辅助初稿（待认领）", note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」——从那一刻起才开始真正追踪信念随证据的演变。" },
  ],

  // 逐条证伪条件在各 thesis 的 invalidation（唯一真相来源，页面自动派生）。此处只留跨逻辑 / 存续性风险。AAPL 暂无。
  risks: [],

  stockWhy: { label: "AAPL · Stock Why 维基", url: "https://stock-why-wiki-site.vercel.app/stocks/AAPL", note: "市场波动的因果溯源在 Stock Why 维基；这本账本只问它是否改变了逻辑。" },
};
