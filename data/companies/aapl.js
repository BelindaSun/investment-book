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
  tagline: "全球最强装机护城河，AI 从延期进入产品验证期。",
  oneLiner:
    "全世界最赚钱、黏性最高的消费硬件+服务生态。FY26 Q3 硬件、服务、中国全面恢复双位数增长；Siri AI 已发布并进入测试，从「持续延期」进入「等待用户采用与商业验证」。核心悬念：Siri AI 能否把装机分发优势转化为真实产品价值。",
  updated: "2026-08-29",
  thesisStatus: "Healthy",
  statusNote:
    "FY26 Q3 Healthy / Improving——硬件需求、服务年金、中国恢复与资本回报逻辑均明显强化。总营收 $1094亿(+16%)、iPhone $543亿(+22%)、Mac $104亿(+29%)、Services $307亿(+12%)、Greater China $188亿(+22%)、所有地区双位数增长、EPS $2.02(+29%)、九个月经营现金流约 $1170亿、九个月回购约 $618亿。AI 端：Siri AI 已在 WWDC26 发布并进入开发者测试，从延期项目进入产品验证阶段。注意：毛利率 50.1% 含约2个百分点关税退款顺风，EPS 含约 $0.11 关税退款影响；Services 增长主要来自广告和云服务，增长质量需分层理解。",

  currentDecision: "持有",
  decisionReason:
    "硬件、服务、中国全面恢复双位数增长；Siri AI 已发布进入测试。但毛利率含关税退款顺风、AI 产品效果待验证、集中风险未消除。当前不动仓位，盯 Siri AI 采用与服务增速趋势。",
  nextDecisionTriggers: [
    "Services 增速连续放缓，或 App Store 抽成 / Google 默认付费被监管实质削减",
    "Siri AI 正式上线后反响不佳、未能提高换机意愿与服务黏性",
    "大中华区收入重新走弱、或 iPhone 需求转弱",
  ],

  sources: {
    "q3fy26": { label: "Apple FY26 Q3 财报（2026-07-30；以官方 IR 为准）", url: "https://www.macrumors.com/2026/07/30/apple-3q-2026-earnings/", date: "2026-07-30", type: "media" },
    "wwdc26-siri": { label: "WWDC 2026：新一代 Siri AI 发布（2026-06-08）", url: "https://www.cnn.com/2026/01/12/tech/apple-google-gemini-siri", date: "2026-06-08", type: "media" },
    "antitrust-2025-09": { label: "美国 v. Google 搜索案裁决：保留非独家默认付费（DOJ/Fortune）", url: "https://fortune.com/2025/09/02/google-antitrust-remedy-ruling-exclusive-search-distribution-deals-chrome/", date: "2025-09-02", type: "gov" },
  },

  whyIOwnIt: [
    "全球超过 20 亿活跃设备的装机护城河，切换成本极高，正持续转化为超过75%毛利率的服务收入——从硬件周期走向经常性现金流复利。",
    "FY26 Q3 硬件、服务、中国全面恢复双位数增长，经营现金流与回购仍是堡垒。",
    "Siri AI 已发布并进入测试，20 亿设备的分发优势有机会把 AI 转化为产品价值——虽尚待验证。",
  ],

  position: {
    note: "占位——请替换成真实数字。质量和估值分开。",
    shares: 40,
    avgCost: 190.0,
    currentPrice: 302.25,
    priceAsOf: "2026-08-12",
    portfolioWeight: 6.0,
    targetWeight: 6.0,
    addRange: "回撤到成本附近、或 Siri AI 采用出现实质正面信号且估值回落时加仓",
    reduceRange: "仓位超过组合约 9%、或 iPhone/中国出现结构性转弱时减仓",
    qualityNote: "质量：极高。装机护城河、服务年金、品牌与资本回报一流；FY26 Q3 全面恢复双位数增长。",
    valuationNote: "估值：偏贵。倍数不低，部分增长含关税退款顺风，AI 产品效果待验证，安全垫有限。",
  },

  theses: [
    {
      id: "installed-base-services",
      title: "装机量 + 服务是复利护城河",
      pillar: "装机 / 服务",
      status: "Strong",
      trend: "up",
      statement:
        "超过 20 亿活跃设备构成极高切换成本，服务（App Store、订阅、支付、广告、云服务）在其上以超过75%毛利率变现，把一次性硬件销售转成经常性年金。",
      marketMisunderstanding: "空头盯着 iPhone 销量的周期；但服务的经常性收入才是价值的复利来源——即便硬件增速放缓，服务年金仍在累积。",
      supporting: [
        { text: "FY26 Q3 Services 收入 $307亿，+12%，创季度纪录。", tag: "FACT", source: "q3fy26", asOf: "2026-06-30" },
        { text: "九个月 Services 收入 $917亿，+14%。", tag: "FACT", source: "q3fy26", asOf: "2026-06-30" },
        { text: "Services 毛利率 75.6%，同比持平——服务经济质量稳定。", tag: "FACT", source: "q3fy26", asOf: "2026-06-30" },
        { text: "反垄断裁决保留了（非独家的）默认搜索付费——Google 对 Apple 的巨额年付得以延续。", tag: "FACT", source: "antitrust-2025-09", asOf: "2025-09-02" },
        { text: "生态锁定（iMessage、健康、支付）抬高切换成本。", tag: "FACT" },
      ],
      contrary: [
        { text: "App Store 抽成面临全球监管与诉讼压力。", tag: "FACT" },
        { text: "Google 默认搜索付费虽保留但仍是长期监管风险。", tag: "FACT" },
        { text: "Services 增长部分依赖广告和默认分发收入，其质量不能全部按纯软件订阅理解——内部各业务的监管风险、经常性和利润质量不完全相同。", tag: "INFERENCE" },
      ],
      keyMetrics: ["服务收入增速", "活跃设备数", "服务毛利率"],
      invalidation: "若 服务增速大幅放缓、且 App Store 抽成或 Google 付费被监管实质削减，则 服务年金逻辑转弱。",
      updated: "2026-08-29",
    },
    {
      id: "siri-ai",
      title: "Siri AI：分发优势能否转化为产品价值",
      pillar: "AI 产品",
      status: "Watching",
      trend: "up",
      statement:
        "Apple 已从「只有分发、没有足够 AI 产品」走到「Siri AI 产品架构和功能已经发布」。但在大规模上线、使用频率、用户满意度和换机贡献得到验证前，仍不能认为追赶成功。核心问题：Siri AI 能否提高设备价值、换机意愿、服务收入和生态黏性，同时让 Apple 继续掌握用户关系与经济价值。",
      marketMisunderstanding: "多头说「Apple 有 20 亿设备，AI 一上就赢」；空头说它彻底落后。现实已推进到中间地带——产品已发布，但效果未验证。",
      supporting: [
        { text: "超过 20 亿活跃设备提供巨大 AI 分发入口。", tag: "FACT" },
        { text: "Siri AI 已在 WWDC26（2026-06-08）公开发布并进入开发者测试，具备 personal context、onscreen awareness、跨应用操作和 broad world knowledge。", tag: "FACT", source: "wwdc26-siri", asOf: "2026-06-08" },
        { text: "Siri 深度整合操作系统、个人数据和跨应用操作，这是独立聊天机器人难以复制的结构性优势。", tag: "INFERENCE" },
        { text: "Apple Silicon 与端侧处理支持隐私和低延迟。", tag: "FACT" },
      ],
      contrary: [
        { text: "Siri AI 尚未大规模正式上线，仍处于测试阶段。", tag: "FACT", source: "wwdc26-siri", asOf: "2026-06-08" },
        { text: "尚无可靠的用户采用、留存和换机贡献数据。", tag: "FACT" },
        { text: "中国和欧盟部分 AI 功能仍面临监管或推出限制。", tag: "FACT" },
        { text: "部分通用知识能力可能依赖第三方模型——这既是模块化采购策略，也是自研能力的局限。关键是 Apple 是否仍掌握用户界面、个人数据、系统动作和最终经济价值。", tag: "INFERENCE" },
        { text: "OpenAI、Google 等对手已有更成熟的用户行为与开发者生态。", tag: "FACT" },
      ],
      keyMetrics: ["Siri AI 采纳率与口碑", "AI 驱动的换机贡献", "AI 功能对服务收入的影响"],
      invalidation: "若 Siri AI 正式上线后持续令人失望、未能提高换机意愿与生态黏性，则 AI 从「短板」升级为「护城河侵蚀」。",
      updated: "2026-08-29",
    },
    {
      id: "iphone-china",
      title: "iPhone 与中国集中风险",
      pillar: "iPhone / 中国",
      status: "Watching",
      trend: "up",
      statement:
        "iPhone 仍约占公司收入一半，是最大的单一业务和生态入口；中国既是关键市场也是关键产能地。集中风险本身没有消除，但本季没有出现风险兑现，反而出现了显著恢复。",
      marketMisunderstanding: "牛市把稳定当理所当然；但收入与供应链的双重集中，是被低估的尾部——一季强劲反弹不等于长期风险消除。",
      supporting: [
        { text: "FY26 Q3 iPhone $543亿，+22%。", tag: "FACT", source: "q3fy26", asOf: "2026-06-30" },
        { text: "Greater China $188亿，+22%；九个月 Greater China +30%。", tag: "FACT", source: "q3fy26", asOf: "2026-06-30" },
        { text: "中国增长主要由 iPhone 推动；人民币升值提供了部分顺风。", tag: "FACT", source: "q3fy26", asOf: "2026-06-30" },
        { text: "供应链多元化（印度等）在缓慢推进。", tag: "FACT" },
      ],
      contrary: [
        { text: "iPhone 约占总收入 49.6%——仍是最大的单一依赖。", tag: "FACT", source: "q3fy26", asOf: "2026-06-30" },
        { text: "华为与中国本土品牌竞争加剧。", tag: "FACT" },
        { text: "中国监管与地缘风险持续存在。", tag: "FACT" },
        { text: "AI 功能在中国的可用性仍面临限制。", tag: "FACT" },
        { text: "需观察增长是否来自可持续需求，而非单一产品周期或汇率顺风。", tag: "INFERENCE" },
      ],
      keyMetrics: ["iPhone 收入占比与增速", "大中华区收入", "供应链多元化进度"],
      invalidation: "若 iPhone 收入连续数季下降，同时 Greater China 恢复逆转、Services 无法抵消硬件疲弱，则 集中风险开始侵蚀整体增长。",
      updated: "2026-08-29",
    },
  ],

  metrics: [
    { label: "总营收增速", latest: "FY26 Q3 +16%（$1094亿）", spark: [5, 6, 5, 8, 12, 16], unit: "% 同比", good: "up", note: "全面恢复双位数增长。" },
    { label: "Services 收入", latest: "Q3 $307亿（+12%）；九个月 $917亿（+14%）", spark: [22, 24, 25, 27, 29, 30.7], unit: "$B/季", good: "up", note: "创季度纪录；毛利率 75.6% 持平。增长主要来自广告和云服务。" },
    { label: "毛利率（报告）", latest: "Q3 50.1%（含约2pp关税退款顺风）", spark: [45, 46, 47, 48, 49, 50.1], unit: "%", good: "up", note: "报告数字强劲，但剔除关税退款后核心毛利率约 48%。Products 毛利率 40.1% 受产品组合与关税退款帮助；Services 75.6% 更能反映服务经济质量。", judgment: true },
    { label: "EPS", latest: "Q3 $2.02（+29%；含约 $0.11 关税退款影响）", spark: [1.4, 1.5, 1.53, 1.64, 1.82, 2.02], unit: "$/季", good: "up", note: "剔除关税退款后核心 EPS 仍强劲，但没有报告数字显示得那么夸张。", judgment: true },
    { label: "经营现金流（九个月）", latest: "约 $1170亿", spark: [80, 85, 90, 100, 110, 117], unit: "$B", good: "up", note: "现金流堡垒。" },
    { label: "回购（九个月）", latest: "约 $618亿", spark: [40, 45, 50, 55, 60, 61.8], unit: "$B", good: "up", note: "持续大规模回购。" },
  ],

  timeline: [
    { date: "2026-08-29", event: "FY26 Q3 财报后整改：thesis 措辞与数据更新", whyItMatters: "三条核心 thesis（装机+服务 Strong ↑、Siri AI Watching ↑、iPhone/中国 Watching ↑）全部更新。AI thesis 从「明显落后」改为「产品验证待定」，iPhone/中国趋势从 warn 改为 improving。盈利质量拆分关税退款影响。", node: "全部", thesisImpact: "up", action: "不动仓位——thesis 措辞调整，非交易信号。", source: null, related: null },
    { date: "2026-08-26", event: "为 AAPL 开立投资账本（起点）", whyItMatters: "基线快照。", node: "全部", thesisImpact: "flat", action: "不动仓位——建立记录。", source: null, related: null },
    { date: "2025-09-02", event: "反垄断搜索案裁决：保留（非独家的）默认搜索付费", whyItMatters: "Google 对 Apple 的巨额年付（服务收入的一大块）得以延续——对服务年金逻辑是利好，此前的一个尾部风险有利解除。", node: "服务 / 装机", thesisImpact: "up", action: "不动仓位；服务年金的一个尾部风险解除。", source: { label: "DOJ / Fortune 2025-09-02", url: "https://fortune.com/2025/09/02/google-antitrust-remedy-ruling-exclusive-search-distribution-deals-chrome/" }, related: { label: "Stock Why · AAPL 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/AAPL#2026-08-24" } },
    { date: "2026-06-08", event: "WWDC 2026：新一代 Siri AI 发布（personal context、onscreen awareness、跨应用操作）", whyItMatters: "AI thesis 从「什么都不交付」进入「产品已发布、等待验证」。Siri AI 进入开发者测试，计划稍后向用户提供 beta。", node: "AI 产品", thesisImpact: "up", action: "不动仓位；AI thesis 由 Watching ↓ 调整为 Watching ↑，等待正式上线和用户验证。", source: { label: "WWDC 2026 / CNN", url: "https://www.cnn.com/2026/01/12/tech/apple-google-gemini-siri" }, related: null },
    { date: "2026-07-30", event: "FY26 Q3 财报：总营收 $1094亿(+16%)、iPhone $543亿(+22%)、Services $307亿(+12%)、Greater China $188亿(+22%)、所有地区双位数增长", whyItMatters: "Healthy / Improving——硬件、服务、中国全面恢复双位数增长。EPS $2.02(+29%)，但毛利率 50.1% 含约2pp关税退款顺风、EPS 含约 $0.11 关税退款。九个月经营现金流约 $1170亿、回购约 $618亿。", node: "服务 / iPhone / 中国", thesisImpact: "up", action: "不动仓位——全面恢复，但关税退款顺风与 AI 待验证。盯服务增速与 Siri AI 采用。", source: { label: "Apple FY26 Q3 IR / MacRumors", url: "https://www.macrumors.com/2026/07/30/apple-3q-2026-earnings/" }, related: { label: "Stock Why · AAPL 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/AAPL#2026-08-24" } },
  ],

  thesisEvolution: [
    { date: "2026（当前）", label: "Healthy / Improving：全面恢复 + AI 进入验证期", note: "FY26 Q3：总营收 +16%、iPhone +22%、Mac +29%、Services +12%（创纪录）、Greater China +22%、所有地区双位数增长。Siri AI 已发布进入测试。Apple 不再是「增长平淡、AI 完全没交作业」的公司。核心悬念从「Apple 有没有 AI」转向「Siri AI 能否提高设备价值、换机意愿和服务黏性」。注意毛利率含关税退款顺风。" },
    { date: "2026-08-26", label: "AI 辅助初稿（待认领）", note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」——从那一刻起才开始真正追踪信念随证据的演变。" },
  ],

  risks: [],

  stockWhy: { label: "AAPL · Stock Why 维基", url: "https://stock-why-wiki-site.vercel.app/stocks/AAPL", note: "市场波动的因果溯源在 Stock Why 维基；这本账本只问它是否改变了逻辑。" },
};
