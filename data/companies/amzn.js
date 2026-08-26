/*
 * Investment Book —— AMZN 数据文件。枚举 key 英文，界面中文。
 * 时效数字标 (待核实)；持仓为「占位」示例。代码/FCF/CapEx/P/E 等保留英文。
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA.AMZN = {
  ticker: "AMZN",
  name: "Amazon.com Inc.",
  tier: "core",
  holdingStatus: "held",
  tagline: "AWS 印钱、广告加速、零售回血——三条腿的复利机器。",
  oneLiner:
    "一台被当成「零售公司」定价、实则由 AWS 和广告驱动利润的复利机器。真正的悬念是：AWS 能否在 AI 时代二次加速，零售利润率的结构性改善能否延续。",
  updated: "2026-08-26",
  thesisStatus: "Healthy",
  statusNote:
    "AWS 是利润引擎，广告是隐藏的高毛利增长极，零售利润率在结构性改善。开放风险集中在 AWS 增速与 AI 份额、以及巨额 capex 的回报。市场常低估「非零售」利润的占比。",

  currentDecision: "持有",
  decisionReason:
    "AWS + 广告的利润质量被合并报表低估；零售利润率在改善。关注 AWS 的 AI 份额与 capex 回报。当前不动仓位。",
  nextDecisionTriggers: [
    "AWS 增速持续低于云同侪、或营业利润率下滑",
    "广告增速大幅放缓至个位数",
    "零售营业利润率重新转负（且无一次性因素）",
    "CapEx 持续攀升而 FCF 长期为负",
  ],

  sources: {
    "px-2026-08-12": { label: "大型科技股行情（Motley Fool 汇总）", url: "https://www.fool.com/investing/2026/08/12/alphabet-amazon-meta-platforms-and-microsoft-this/", date: "2026-08-12", type: "media" },
  },

  whyIOwnIt: [
    "AWS 印钱——云第一名，且靠 Bedrock + 自研 Trainium 在 AI 时代二次加速。",
    "广告是被低估的高毛利增长极，附着在零售与 Prime Video 的一等流量上。",
    "零售利润率结构性改善（物流杠杆 + 自动化），把低毛利业务变成现金流。",
  ],

  position: {
    note: "占位——请替换成真实数字。质量和估值分开。",
    shares: 60,
    avgCost: 150.0,
    currentPrice: 267.28, // 2026-08-12 网络行情快照，非实时
    priceAsOf: "2026-08-12",
    portfolioWeight: 8.0,
    targetWeight: 9.0,
    addRange: "回撤到成本附近、或非结构性 15%+ 回调时加仓",
    reduceRange: "仓位超过组合约 12%、或 AWS 增速持续低于云同侪时减仓",
    qualityNote: "质量：高。多引擎、AWS 高毛利、物流护城河、长期主义资本配置。",
    valuationNote: "估值：看用哪块。按 AWS + 广告的利润看并不贵；市场常被合并的低零售毛利误导。",
  },

  theses: [
    {
      id: "aws-engine",
      title: "AWS 是利润引擎，且在 AI 时代二次加速",
      pillar: "AWS 引擎",
      status: "Strong",
      trend: "up",
      statement:
        "AWS 贡献了公司绝大部分营业利润。AI 工作负载（Bedrock、SageMaker、自研 Trainium/Inferentia）给了它把 AI capex 转成高毛利经常性收入的新引擎。",
      marketMisunderstanding: "市场按「零售低毛利」给整体定价，低估了 AWS + 广告的利润质量。",
      supporting: [
        { text: "AWS 贡献了绝大部分营业利润。", tag: "FACT" },
        { text: "自研 Trainium/Inferentia 意在降低对 NVDA 的成本依赖（实际采纳规模与降本幅度待验证）。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "Azure、Google Cloud 增速更快，AI 心智一度领先。", tag: "FACT" },
        { text: "AWS 增速若持续落后于云同侪，是逻辑的警报。", tag: "INFERENCE" },
      ],
      keyMetrics: ["AWS 增速", "AWS 营业利润率", "AI 服务采纳"],
      invalidation: "若 AWS 增速持续低于云同侪、且营业利润率下滑，则 利润引擎逻辑转弱。",
      updated: "2026-08-26",
    },
    {
      id: "ads-growth",
      title: "广告是被低估的高毛利增长极",
      pillar: "广告",
      status: "Strengthening",
      trend: "up",
      statement:
        "亚马逊广告附着在最高意图的购物查询和 Prime Video 流量上，是高毛利、快增长的一块，且几乎不需要额外获客成本。",
      marketMisunderstanding: "广告的利润贡献常被合并报表掩盖，市场给它的估值不足。",
      supporting: [
        { text: "广告持续高速增长，毛利率远高于零售。", tag: "FACT" },
        { text: "购物查询是转化率极高的广告场景。", tag: "FACT" },
      ],
      contrary: [{ text: "宏观广告预算波动会传导。", tag: "INFERENCE" }],
      keyMetrics: ["广告收入增速", "广告占比"],
      invalidation: "若 广告增速大幅放缓至个位数，则 高毛利增长极逻辑减弱。",
      updated: "2026-08-26",
    },
    {
      id: "retail-margin",
      title: "零售利润率结构性改善",
      pillar: "零售利润率",
      status: "Healthy",
      trend: "up",
      statement:
        "区域化物流网络 + 自动化 + 第三方卖家占比上升，把长期低毛利的零售变成一台产生现金流的机器。",
      marketMisunderstanding: "市场惯性把零售当成拖累；实际它正在从「烧钱换增长」转向「盈利」。",
      supporting: [
        { text: "北美零售营业利润率逐年改善。", tag: "FACT" },
        { text: "物流区域化降低了单均成本。", tag: "FACT" },
      ],
      contrary: [{ text: "消费疲软或价格战会回吐利润率。", tag: "INFERENCE" }],
      keyMetrics: ["北美零售营业利润率", "单均物流成本", "第三方占比"],
      invalidation: "若 零售营业利润率重新转负、且无一次性因素，则 改善逻辑逆转。",
      updated: "2026-08-26",
    },
    {
      id: "custom-silicon",
      title: "自研芯片降本并抗 NVDA 依赖",
      pillar: "自研芯片",
      status: "Strengthening",
      trend: "up",
      statement:
        "Trainium/Inferentia 让 AWS 在 AI 训练/推理上有更低的成本曲线，并减少对 NVDA 的采购依赖，长期改善 AI 云的单位经济。",
      marketMisunderstanding: "多数人只把 AWS 当 NVDA 的客户；其实它也是「去 NVDA 化」的推动者之一。",
      supporting: [{ text: "自研芯片扩大自用部署。", tag: "FACT" }],
      contrary: [
        { text: "自研芯片生态与 CUDA 相比仍不成熟。", tag: "FACT" },
        { text: "多数前沿训练仍依赖 NVDA。", tag: "FACT" },
      ],
      keyMetrics: ["自研芯片部署", "AI 服务毛利"],
      invalidation: "若 自研芯片采纳停滞、且 AI 云毛利未改善，则 降本逻辑减弱。",
      updated: "2026-08-26",
    },
    {
      id: "capex-regulation",
      title: "capex 强度与监管是主要风险",
      pillar: "CapEx / 监管",
      status: "Watching",
      trend: "warn",
      statement:
        "AI + 物流 capex 处于高位；反垄断（零售平台、AWS 捆绑）带来政策不确定性。都不致命，但会压制自由现金流和估值。",
      marketMisunderstanding: "多头默认 capex 天然是好事；我把它当成需 FCF 验证的变量。",
      supporting: [{ text: "亚马逊自由现金流历史上有较大波动，capex 是主因。", tag: "FACT" }],
      contrary: [
        { text: "capex 高位抬升压制 FCF。", tag: "FACT" },
        { text: "反垄断诉讼引入结构性不确定性。", tag: "FACT" },
      ],
      keyMetrics: ["CapEx", "自由现金流 FCF", "反垄断进展"],
      invalidation: "若 capex 持续攀升而 FCF 长期为负、且 AWS 未加速，则 资本回报逻辑转弱→减仓。",
      updated: "2026-08-26",
    },
  ],

  business: [
    { name: "AWS", role: "利润引擎", howItMakesMoney: "云计算、数据与 AI（EC2、Bedrock、Trainium）按消费计费。", note: "公司绝大部分营业利润来源。" },
    { name: "广告", role: "高毛利增长极", howItMakesMoney: "针对购物查询与 Prime Video 投放广告。", note: "被低估的利润引擎。" },
    { name: "北美 / 国际零售", role: "现金流机器", howItMakesMoney: "自营 + 第三方市场 + 物流服务费。", note: "利润率结构性改善中。" },
    { name: "订阅（Prime）", role: "黏性护城河", howItMakesMoney: "Prime 会员费 + 内容/物流锁定。", note: "把零售、广告、内容串成飞轮。" },
  ],

  aiMoat: {
    summary: "核心问题：AWS 能否在 AI 时代守住云领导地位、并把 AI 转成高毛利经常性收入？",
    verdict: "我的判断：净受益——AWS 分发 + 自研芯片 + Bedrock 模型中立，是把 AI 变现的强通道。风险在 AI 心智一度落后于 Azure/Google，需要执行追上。",
    factors: [
      { name: "AWS 分发", note: "最大的云客户基础，AI 服务的现成渠道。", direction: "up" },
      { name: "自研 Trainium/Inferentia", note: "降本 + 抗 NVDA 依赖。", direction: "up" },
      { name: "Bedrock 模型中立", note: "多模型市场，不押单一模型。", direction: "up" },
      { name: "AI 心智", note: "一度落后于 Azure/Google，需执行追赶。", direction: "warn" },
    ],
    cannibalization: "张力：AWS 既大量采购 NVDA，又推自研芯片去替代它。要盯自研芯片的实际采纳与 AI 云毛利的改善。",
  },

  drivers: [
    { name: "企业云支出", why: "AWS 增长随企业 IT 与 AI 采纳。", direction: "up" },
    { name: "广告需求", why: "高毛利广告随电商与 CTV 预算。", direction: "up" },
    { name: "消费支出", why: "零售基本盘随宏观消费。", direction: "flat" },
    { name: "物流自动化", why: "决定零售利润率的斜率。", direction: "up" },
    { name: "AI capex", why: "增长燃料，也是 FCF 拖累。", direction: "warn" },
  ],

  ecosystem: {
    upstream: [
      { name: "NVDA GPU", note: "AWS AI 算力" },
      { name: "自研 Trainium/Inferentia", note: "降本" },
      { name: "物流 / 仓储网络", note: "零售基础设施" },
    ],
    self: [
      { name: "AWS", note: "云 + AI" },
      { name: "广告", note: "高毛利增长" },
      { name: "零售市场", note: "自营 + 第三方" },
      { name: "Prime", note: "订阅飞轮" },
    ],
    downstream: [
      { name: "企业 / 开发者", note: "AWS 客户" },
      { name: "广告主", note: "购物广告买家" },
      { name: "消费者", note: "零售 + Prime 用户" },
      { name: "第三方卖家", note: "市场生态" },
    ],
  },

  competition: [
    { name: "Microsoft（Azure）", attacking: "企业云 + AI。", moatTargeted: "AWS 份额与 AI 心智。", evidence: "Azure 增速与 OpenAI 关系。", threat: "High", thesisImpact: "施压 AWS 引擎逻辑。" },
    { name: "Google（Cloud）", attacking: "云 AI + 自研 TPU。", moatTargeted: "AWS 份额。", evidence: "GCP 增速快、AI 全栈。", threat: "Medium", thesisImpact: "分食 AI 云增量。" },
    { name: "Walmart / 零售商", attacking: "电商 + 零售媒体广告。", moatTargeted: "零售与广告份额。", evidence: "沃尔玛电商与广告增长。", threat: "Medium", thesisImpact: "压制零售与广告增量。" },
    { name: "NVDA（对自研芯片而言）", attacking: "GPU 生态领先。", moatTargeted: "自研芯片的替代空间。", evidence: "CUDA 生态成熟。", threat: "Medium", thesisImpact: "限制自研芯片降本速度。" },
  ],

  metrics: [
    { label: "AWS 增速", latest: "高位增长 (待核实)", spark: [17, 19, 20, 19, 20, 21], unit: "% 同比", good: "up", note: "利润引擎的核心信号。", judgment: true },
    { label: "AWS 营业利润率", latest: "约 35% (待核实)", spark: [30, 33, 35, 37, 36, 35], unit: "%", good: "up", note: "利润质量。", judgment: true },
    { label: "广告收入增速", latest: "约 20%+ (待核实)", spark: [24, 22, 20, 22, 21, 20], unit: "% 同比", good: "up", note: "隐藏的高毛利增长极。", judgment: true },
    { label: "北美零售营业利润率", latest: "改善中 (待核实)", spark: [2, 4, 5, 6, 6, 7], unit: "%", good: "up", note: "结构性改善的读数。", judgment: true },
    { label: "CapEx", latest: "高位 (待核实)", spark: [16, 20, 24, 28, 30, 32], unit: "$B/季", note: "AI + 物流成本——有歧义（中性线）。", judgment: true },
  ],

  financials: {
    note: "约数 / 示意——依赖前请对照财报核实。",
    rows: [
      { label: "收入", values: ["约 $638B", "约 $700B", "约 $770B"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "营业利润率", values: ["约 11%", "约 12%", "约 12%"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "AWS 营业利润", values: ["约 $40B", "约 $50B", "—"], periods: ["FY24", "FY25", ""] },
      { label: "自由现金流 FCF", values: ["约 $38B", "约 $45B", "—"], periods: ["FY24", "FY25", ""] },
      { label: "CapEx", values: ["约 $80B", "约 $110B", "—"], periods: ["FY24", "FY25", ""] },
      { label: "P/E（前瞻）", values: ["—", "约 35x", "—"], periods: ["", "当前", ""] },
    ],
    impliedExpectations: "按合并 P/E 看似贵，但利润高度集中在 AWS + 广告；若按分部估值（SOTP），零售几乎白送。价格隐含 AWS 维持高个位到双位数增长。",
  },

  timeline: [
    { date: "2026-08-26", event: "为 AMZN 开立投资账本（起点）", whyItMatters: "基线快照。", node: "全部", thesisImpact: "flat", action: "不动仓位——建立记录。", source: null, related: null },
    { date: "2026-08", datePrecision: "month", event: "占位——财报（AWS 增速/利润率、广告、零售利润率）", whyItMatters: "对三条核心逻辑的主要检验。", node: "AWS / 广告 / 零售", thesisImpact: "flat", action: "确认前不动仓位。", source: null, related: { label: "Stock Why 维基", url: "https://belindasun.github.io/stock-why-wiki/" } },
  ],

  thesisEvolution: [
    { date: "2015 前", label: "烧钱换增长的电商", note: "被视为不赚钱的零售商，靠规模扩张。" },
    { date: "2015–2022", label: "AWS 重估 + 广告崛起", note: "AWS 成为利润引擎，广告成第三极，公司被重新定价为科技巨头。" },
    { date: "2023–2025", label: "降本增效 + AI 云", note: "物流区域化改善零售利润率；Bedrock + 自研芯片切入 AI。" },
    { date: "2026（当前）", label: "健康，聚焦 AWS 二次加速", note: "关注 AWS 的 AI 份额、广告延续、capex 回报。仓位接近目标。" },
    { date: "2026-08-26", label: "AI 辅助初稿（待认领）", note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」。" },
    { date: "未来", label: "什么会让我改变主意", note: "留白。AWS 增速或零售利润率的实质变化时更新。" },
  ],

  // 逐条证伪条件在各 thesis 的 invalidation（唯一真相来源，页面自动派生）。此处只留跨逻辑 / 存续性风险。AMZN 暂无。
  risks: [],

  stockWhy: { label: "AMZN · Stock Why 维基", url: "https://belindasun.github.io/stock-why-wiki/", note: "市场波动的因果溯源在 Stock Why 维基；这本账本只问它是否改变了逻辑。" },
};
