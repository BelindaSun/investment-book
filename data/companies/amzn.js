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
  updated: "2026-08-27",
  thesisStatus: "Healthy",
  statusNote:
    "Q2 2026（7/31）三条腿全部兑现：AWS 二次加速到 +37%（18 个季度最快）、营业利润率 39.4%；广告 +26% 到 $198亿；合并营业利润率从 11.4% 升到 13.7%。焦点转向 capex——2026 指引上调到 ~$2200亿（Q2 单季 $531亿）。另注：GAAP 净利被约 $53B 的 Anthropic 股权收益大幅推高——非现金、不可重复，估值要看核心经营利润。",

  currentDecision: "持有",
  decisionReason:
    "AWS 大加速、广告与零售利润率同步改善，「非零售利润被低估」的逻辑在兑现。焦点是 capex 上调后的 FCF 回报，以及别把 Anthropic 股权收益当经营利润。当前不动仓位。",
  nextDecisionTriggers: [
    "AWS 增速重新掉档、或营业利润率下滑",
    "广告增速大幅放缓至个位数",
    "零售营业利润率重新转负（且无一次性因素）",
    "capex 持续攀升而经营现金流 / FCF 未能同步",
  ],

  sources: {
    "px-2026-08-12": { label: "大型科技股行情（Motley Fool 汇总）", url: "https://www.fool.com/investing/2026/08/12/alphabet-amazon-meta-platforms-and-microsoft-this/", date: "2026-08-12", type: "media" },
    "q2-2026": { label: "Amazon 2026 Q2 业绩（2026-07-31；以官方 IR 为准）", url: "https://finance.yahoo.com/markets/stocks/articles/amazon-q2-2026-earnings-aws-204411872.html", date: "2026-07-31", type: "media" },
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
        { text: "Q2 2026 AWS 收入 $422 亿、+37% 同比——18 个季度以来最快，二次加速兑现。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Q2 AWS 营业利润 $166 亿（上年 $102 亿），营业利润率约 39.4%。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "自研 Trainium/Inferentia 意在降低对 NVDA 的成本依赖（实际采纳规模与降本幅度待验证）。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "Azure 与 Google Cloud 在增速上仍可比甚至更高，竞争激烈。", tag: "FACT" },
        { text: "39.4% 的营业利润率处高位，若产能/价格竞争加剧可能回落。", tag: "INFERENCE" },
      ],
      keyMetrics: ["AWS 增速", "AWS 营业利润率", "AI 服务采纳"],
      invalidation: "若 AWS 增速重新掉回同侪之下、且营业利润率结构性下滑，则 利润引擎逻辑转弱。",
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
        { text: "Q2 2026 广告收入 $198 亿、+26% 同比——持续高速增长，毛利率远高于零售。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
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
        { text: "Q2 2026 合并营业利润率升到 13.7%（上年 11.4%）、总营业利润 +43% 到 $275 亿；北美 +16%。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "物流区域化 + 自动化降低了单均成本。", tag: "FACT" },
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
      supporting: [
        { text: "AI 与芯片业务各自年化 run rate 已超 $250亿、三位数增长，Anthropic、OpenAI 等大 AI 实验室采用。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "自研芯片生态与 CUDA 相比仍不成熟。", tag: "FACT" },
        { text: "多数前沿训练仍依赖 NVDA。", tag: "FACT" },
      ],
      keyMetrics: ["自研芯片 / AI 服务 run rate", "AI 服务毛利"],
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
      supporting: [
        { text: "AWS 加速到 +37%、AI/芯片 run rate 各超 $250亿，为「capex 有真实需求承接」提供了正面证据。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "2026 现金 capex 指引上调到 ~$2200亿（此前 ~$2000亿）；Q2 单季 $531亿。", tag: "FACT", source: "q2-2026", asOf: "2026-07-31" },
        { text: "capex 高位抬升压制 FCF；亚马逊 FCF 历史上波动大、capex 是主因。", tag: "FACT" },
        { text: "反垄断诉讼（零售平台、AWS 捆绑）引入结构性不确定性。", tag: "FACT" },
      ],
      keyMetrics: ["CapEx", "经营现金流 / FCF", "AWS 营业利润 / CapEx", "反垄断进展"],
      invalidation: "若 capex 继续快速攀升、而经营现金流 / FCF 未能同步、且 AWS 增长掉档，则 资本回报逻辑转为 Weakening。",
      updated: "2026-08-26",
    },
  ],

  business: [
    { name: "AWS", role: "利润引擎", howItMakesMoney: "云计算、数据与 AI（EC2、Bedrock、Trainium）按消费计费。Q2 +37%、营业利润 $166亿、利润率 39.4%。", note: "公司绝大部分营业利润来源，二次加速兑现。" },
    { name: "广告", role: "高毛利增长极", howItMakesMoney: "针对购物查询与 Prime Video 投放广告。", note: "被低估的利润引擎。" },
    { name: "北美 / 国际零售", role: "现金流机器", howItMakesMoney: "自营 + 第三方市场 + 物流服务费。", note: "利润率结构性改善中。" },
    { name: "订阅（Prime）", role: "黏性护城河", howItMakesMoney: "Prime 会员费 + 内容/物流锁定。", note: "把零售、广告、内容串成飞轮。" },
  ],

  aiMoat: {
    summary: "核心问题：AWS 能否在 AI 时代守住云领导地位、并把 AI 转成高毛利经常性收入？",
    verdict: "我的判断：净受益——AWS 分发 + 自研芯片 + Bedrock 模型中立，是把 AI 变现的强通道。Q2 AWS 加速到 +37%、AI/芯片 run rate 各超 $250亿，说明「AI 心智落后」的担忧正在被执行力追平。风险转向 capex 回报。",
    factors: [
      { name: "AWS 分发", note: "最大的云客户基础，AI 服务的现成渠道；OpenAI、Anthropic 都是客户。", direction: "up" },
      { name: "自研 Trainium/Inferentia", note: "降本 + 抗 NVDA 依赖；AI/芯片 run rate 各超 $250亿。", direction: "up" },
      { name: "Bedrock 模型中立", note: "多模型市场，不押单一模型。", direction: "up" },
      { name: "AI 增长动能", note: "Q2 加速到 +37%（18 季最快），落后担忧被追平。", direction: "up" },
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
    { label: "AWS 增速", latest: "Q2 2026 +37%（18 季最快）", spark: [17, 19, 20, 25, 31, 37], unit: "% 同比", good: "up", note: "利润引擎的核心信号——二次加速兑现。", judgment: true },
    { label: "AWS 营业利润率", latest: "Q2 约 39.4%（利润 $166亿）", spark: [30, 33, 35, 37, 38, 39.4], unit: "%", good: "up", note: "利润质量高位。", judgment: true },
    { label: "广告收入增速", latest: "Q2 +26%（$198亿）", spark: [24, 22, 20, 24, 25, 26], unit: "% 同比", good: "up", note: "隐藏的高毛利增长极。", judgment: true },
    { label: "合并营业利润率", latest: "Q2 13.7%（上年 11.4%）", spark: [8, 9, 11, 11.4, 12.5, 13.7], unit: "%", good: "up", note: "零售 + 非零售一起改善的读数。", judgment: true },
    { label: "CapEx（2026 指引）", latest: "上调到 ~$2200亿（Q2 单季 $531亿）", spark: [80, 110, 150, 180, 200, 220], unit: "$B/年", note: "AI + 物流成本——有歧义（中性线）。", judgment: true },
  ],

  financials: {
    note: "约数 / 示意——依赖前请对照财报核实。注意：Q2 GAAP 净利被约 $53B 的 Anthropic 股权收益大幅推高——非现金、不可重复、会造成 GAAP EPS 剧烈波动；估值应看核心经营利润与现金流，别把它当经营质量。",
    rows: [
      { label: "收入（季度）", values: ["约 $638B", "约 $700B", "Q2 $201B(+20%)"], periods: ["FY24", "FY25", "2026Q2"] },
      { label: "合并营业利润率", values: ["约 11%", "约 12%", "Q2 13.7%"], periods: ["FY24", "FY25", "2026Q2"] },
      { label: "AWS 营业利润（季度）", values: ["约 $40B/yr", "约 $50B/yr", "Q2 $16.6B"], periods: ["FY24", "FY25", "2026Q2"] },
      { label: "CapEx（2026 现金指引）", values: ["约 $80B", "约 $110B", "~$220B"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "Anthropic 股权（非经营性）", values: ["—", "—", "Q2 录得 ~$53B 收益"], periods: ["", "", "2026Q2"] },
      { label: "P/E（前瞻，看核心经营）", values: ["—", "约 35x", "—"], periods: ["", "当前", ""] },
    ],
    impliedExpectations: "按合并 P/E 看似贵，但利润高度集中在 AWS + 广告；若按分部估值（SOTP），零售几乎白送。Q2 已兑现 AWS 加速 + 利润率改善，价格隐含 AWS 维持高增长。剩下的风险是 capex 上调到 ~$2200亿的回报节奏——别把 Anthropic 股权重估当成经营利润。",
  },

  timeline: [
    { date: "2026-08-26", event: "为 AMZN 开立投资账本（起点）", whyItMatters: "基线快照。", node: "全部", thesisImpact: "flat", action: "不动仓位——建立记录。", source: null, related: null },
    { date: "2026-07-31", event: "Q2 2026 财报：AWS +37%（18 季最快）、利润率 39.4%；广告 +26%；合并营业利润率 13.7%", whyItMatters: "三条腿全部兑现——AWS 二次加速、广告高增、零售/整体利润率改善。焦点转向 capex 上调到 ~$2200亿；GAAP 净利被约 $53B Anthropic 股权收益推高（非现金）。", node: "AWS / 广告 / 零售 / CapEx", thesisImpact: "up", action: "不动仓位——逻辑强化；盯 capex 回报，估值看剔除 Anthropic 收益后的核心经营利润。", source: { label: "Amazon Q2 2026 IR / Yahoo", url: "https://finance.yahoo.com/markets/stocks/articles/amazon-q2-2026-earnings-aws-204411872.html" }, related: { label: "Stock Why · AMZN 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/AMZN#2026-08-24" } },
  ],

  thesisEvolution: [
    { date: "2015 前", label: "烧钱换增长的电商", note: "被视为不赚钱的零售商，靠规模扩张。" },
    { date: "2015–2022", label: "AWS 重估 + 广告崛起", note: "AWS 成为利润引擎，广告成第三极，公司被重新定价为科技巨头。" },
    { date: "2023–2025", label: "降本增效 + AI 云", note: "物流区域化改善零售利润率；Bedrock + 自研芯片切入 AI。" },
    { date: "2026（当前）", label: "健康，三条腿全部兑现，焦点转向 capex 回报", note: "Q2 2026：AWS 二次加速 +37%（18 季最快）、广告 +26%、合并利润率 13.7%。焦点从「AWS 会不会加速」转到「capex ~$2200亿的回报」，并把 Anthropic 股权收益与经营利润分开看。仓位接近目标。" },
    { date: "2026-08-26", label: "AI 辅助初稿（待认领）", note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」。" },
    { date: "未来", label: "什么会让我改变主意", note: "留白。AWS 增速或零售利润率的实质变化时更新。" },
  ],

  // 逐条证伪条件在各 thesis 的 invalidation（唯一真相来源，页面自动派生）。此处只留跨逻辑 / 存续性风险。AMZN 暂无。
  risks: [],

  stockWhy: { label: "AMZN · Stock Why 维基", url: "https://stock-why-wiki-site.vercel.app/stocks/AMZN", note: "市场波动的因果溯源在 Stock Why 维基；这本账本只问它是否改变了逻辑。" },
};
