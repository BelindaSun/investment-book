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
    "一台被当成「零售公司」定价、实则由 AWS 和广告驱动利润的复利机器。Q2 AWS 已从「等 AI 再加速」进入「收入、利润、自研芯片、模型平台同时加速」；真正的新悬念是：这种增长能否覆盖 $169B 级资本投入、重新转化为自由现金流。",
  updated: "2026-08-27",
  thesisStatus: "Healthy",
  statusNote:
    "整体 Healthy、方向改善（Improving），但资本回报压力显著上升。Q2 经营证据很强：总收入 $2006亿(+20%)、AWS +37%（18 季最快）、AWS 营业利润 $166亿(+64%)/利润率约 39.4%、广告 +26% 到 $198亿、零售继续盈利、TTM 经营现金流 $1614亿(+33%)。但同时：TTM 净 capex 约 $1690亿(+64%)、TTM FCF 已转负至 -$76亿、大量 GAAP 净利来自 Anthropic 股权重估（非经营）。主要新问题不再是「AWS 能不能重回增长」，而是「这种增长能否覆盖 $169B 级资本开支并重新转化为自由现金流」。",

  currentDecision: "持有",
  decisionReason:
    "AWS 二次加速 + 芯片/模型平台商业化 + 广告增长，经营逻辑强化；但 TTM FCF 已转负、资本回报张力最尖锐。当前不动仓位，盯 TTM FCF 与回报兑现，别把 Anthropic 股权收益当经营利润。",
  nextDecisionTriggers: [
    "AWS 增长与营业利润率明显下降、而 capex 维持高位，TTM FCF 长期为负",
    "自研芯片 / Bedrock 采用兑现不及承诺",
    "广告增速大幅放缓至个位数",
    "北美零售营业利润率连续数季明显下降、履约成本增速高于收入",
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

  // 2026-08-27 Q2 calibration（Belinda review 后）：五条核心逻辑，监管移到 risks。
  theses: [
    {
      id: "aws-engine",
      title: "AWS AI 二次加速与利润引擎",
      pillar: "AWS 引擎",
      status: "Strong",
      trend: "up",
      statement:
        "AWS 不只是守住云领导地位，而是在 AI 基础设施、芯片和多模型平台推动下重新加速，同时保持接近 40% 的营业利润率。Q2 +37% 是 18 个季度以来最快。",
      marketMisunderstanding: "市场按「零售低毛利」给整体定价，低估了 AWS + 广告的利润质量。",
      supporting: [
        { text: "Q2 2026 AWS 收入 $422 亿、+37% 同比——18 季最快；年化 run rate 约 $1690亿。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Q2 AWS 营业利润 $166 亿（+64%）、营业利润率约 39.4%；AWS 是最大单一利润来源，约占合并营业利润 60%。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "AWS AI 业务年化收入超过 $250亿、仍三位数增长；新增容量被真实需求承接。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "AWS 增速仍低于 Azure、Google Cloud（但 AWS 基数远大、且创下自身 18 季最快）。", tag: "FACT" },
        { text: "AI 收入对少数 frontier labs 和超大型合同的依赖需要观察。", tag: "INFERENCE" },
      ],
      keyMetrics: ["AWS 增速", "AWS 营业利润率", "AWS 占合并营业利润比"],
      invalidation: "若 AWS 增速重新掉回同侪之下、且营业利润率结构性下滑，则 利润引擎逻辑转弱。",
      updated: "2026-08-27",
    },
    {
      id: "custom-silicon",
      title: "自研芯片 + Bedrock 多模型平台",
      pillar: "自研芯片 / 平台",
      status: "Strengthening",
      trend: "up",
      statement:
        "自研芯片扩大 AWS 的算力供给、产品选择和潜在成本控制能力，并降低对单一芯片供应商的边际依赖。它已从内部降本工具，发展成 AWS 的独立产品与平台差异化。",
      marketMisunderstanding: "多数人只把 AWS 当 NVDA 的客户；其实它也在用自研芯片扩大供给与议价，并把芯片变成对外产品。",
      supporting: [
        { text: "AI 与芯片业务各自年化 run rate 超 $250亿、三位数增长。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Anthropic、OpenAI 都作出多年、多吉瓦的 Trainium 承诺（Anthropic 新增超 $100B、约 10 年——为承诺，交付/使用/集中度仍有不确定性）；客户从 frontier labs 扩散到创业公司与 Uber、Pinterest 等企业。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Graviton 已被前 1000 大 EC2 客户中的约 98% 采用。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "AWS 仍大量依赖 Nvidia GPU，未全面「去 Nvidia 化」。", tag: "FACT" },
        { text: "公司未披露足够单位经济数据——不能断言 Trainium 成本一定低于 Nvidia、或已改善 AWS 毛利率。", tag: "INFERENCE" },
      ],
      keyMetrics: ["芯片 / AI 服务 run rate", "Trainium 客户扩散", "Graviton 采用"],
      invalidation: "若 自研芯片采纳停滞、且 AI 云毛利未改善，则 降本 / 平台逻辑减弱。",
      updated: "2026-08-27",
    },
    {
      id: "ads-growth",
      title: "广告成为第三个规模化增长引擎",
      pillar: "广告",
      status: "Strengthening",
      trend: "up",
      statement:
        "亚马逊广告附着在最高意图的购物查询和 Prime Video 流量上，快速增长；Q2 +26%、较此前约 22% 进一步加快。",
      marketMisunderstanding: "广告的利润贡献常被合并报表掩盖——它可能是高增量利润的收入来源，但公司不单独披露其利润率，所以不宜当作已确认事实。",
      supporting: [
        { text: "Q2 2026 广告收入 $198 亿、+26% 同比（较此前约 22% 进一步加快）。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "购物查询是转化率极高的广告场景。", tag: "FACT" },
      ],
      contrary: [
        { text: "广告业务通常具有较低的增量履约成本、可能是利润率较高的收入来源之一；但公司未单独披露其利润率。", tag: "INFERENCE" },
        { text: "宏观广告预算波动会传导。", tag: "INFERENCE" },
      ],
      keyMetrics: ["广告收入增速", "广告占比"],
      invalidation: "若 广告增速大幅放缓至个位数，则 增长引擎逻辑减弱。",
      updated: "2026-08-27",
    },
    {
      id: "retail-margin",
      title: "零售与物流效率改善",
      pillar: "零售 / 物流效率",
      status: "Healthy",
      trend: "flat",
      statement:
        "区域化物流、配送速度和规模效率继续支撑零售盈利，但运输成本上涨，需要观察利润率能否进一步扩张。",
      marketMisunderstanding: "市场惯性把零售当成拖累；实际它稳定盈利——但本季利润率大致平稳、并未像 AWS 那样大幅扩张。",
      supporting: [
        { text: "Q2 北美营业利润 $91 亿、国际营业利润 $17 亿，零售继续盈利。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "物流区域化 + 自动化降低单均成本。", tag: "FACT" },
      ],
      contrary: [
        { text: "单季利润率大致稳定、并未大幅扩张；运输成本上涨。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "消费疲软或价格战会回吐利润率。", tag: "INFERENCE" },
      ],
      keyMetrics: ["北美零售营业利润率", "配送 / 履约成本增速", "单均物流成本"],
      invalidation: "若 北美零售营业利润率连续数季明显下降，同时配送和履约成本增速高于收入，则 零售效率逻辑转弱。",
      updated: "2026-08-27",
    },
    {
      id: "capex-fcf",
      title: "巨额 AI CapEx → FCF / ROIC",
      pillar: "CapEx → FCF / ROIC",
      status: "Watching",
      trend: "warn",
      statement:
        "Amazon 当前产生极强的经营现金流（TTM $1614亿、+33%），却把更多现金重新投入基础设施（TTM 净 capex 约 $1690亿、+64%），导致股东层面的剩余现金转负（TTM FCF -$76亿，上年同期 +$182亿）。这不是普通的 FCF 波动，而是三家里资本回报张力最尖锐的一条。",
      marketMisunderstanding: "多头默认「投 AI = 好」；空头一看 FCF 转负就喊危机。现实居中：经营现金流极强、AWS 加速到 +37%、利润率近 40%，说明投入有需求和利润承接——但股东剩余现金已转负，要盯回报兑现。",
      supporting: [
        { text: "AWS 加速到 +37%、利润率近 40%、AI 收入三位数增长，说明投入有明显需求和利润承接。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "TTM 经营现金流 $1614亿(+33%)，但 TTM 净 capex 约 $1690亿(+64%)，导致 TTM FCF 转负至 -$76亿（上年同期 +$182亿）。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Q2 单季 cash capex 约 $531亿；主要投向 AWS/AI，物流网络也是一部分。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
      ],
      keyMetrics: ["TTM 经营现金流", "TTM cash CapEx", "TTM FCF", "AWS 营业利润 / cash CapEx", "客户合同兑现速度"],
      invalidation: "若未来数季 AWS 增长和营业利润率明显下降，而资本开支继续维持高位，导致 TTM FCF 长期为负、经营现金流增长也开始放缓，则 资本回报逻辑转为 Weakening。",
      updated: "2026-08-27",
    },
  ],

  business: [
    { name: "AWS", role: "最大单一利润来源", howItMakesMoney: "云、数据与 AI（EC2、Bedrock、Trainium）按消费计费。Q2 +37%、营业利润 $166亿、利润率 39.4%，约占合并营业利润 60%。", note: "二次加速兑现。" },
    { name: "广告", role: "快速增长的高增量利润业务", howItMakesMoney: "针对购物查询与 Prime Video 投放广告。Q2 +26% 到 $198亿。", note: "增量履约成本低（但公司不单独披露利润率）。" },
    { name: "第三方卖家与零售基础设施", role: "规模和现金流基础", howItMakesMoney: "自营 + 第三方市场 + 物流/履约服务费。", note: "规模效率支撑盈利；本季利润率大致平稳。" },
    { name: "订阅（Prime）", role: "客户关系连接层", howItMakesMoney: "Prime 会员费 + 内容/物流锁定。", note: "连接零售、广告、视频和物流。" },
  ],

  aiMoat: {
    summary: "核心问题：AWS 能否在 AI 时代守住云领导地位、并把 AI 转成高毛利经常性收入？",
    verdict: "更准确的 moat 不是「AWS 分发 + 自研芯片」，而是：Cloud distribution + proprietary silicon + multi-model platform + customer workloads + infrastructure scale。Q2 AWS 加速到 +37%、AI 与芯片业务年化各超 $250亿，说明「AI 心智落后」的担忧正被执行力追平。风险转向 capex 回报。",
    factors: [
      { name: "AWS 分发 + 基础设施规模", note: "最大的云客户基础 + 规模；OpenAI、Anthropic 都是客户。", direction: "up" },
      { name: "自研芯片（Trainium/Graviton）", note: "扩供给 + 产品化 + 潜在成本控制；Graviton 前 1000 大 EC2 客户 98% 采用。", direction: "up" },
      { name: "Bedrock 多模型平台", note: "已有数十万客户；Q2 客户消费超过此前所有季度总和；多模型不押单一。", direction: "up" },
      { name: "AI 增长动能", note: "Q2 AWS +37%（18 季最快）、AI 收入三位数增长。", direction: "up" },
    ],
    cannibalization: "张力：AWS 既大量采购 NVDA，又推自研芯片去替代它。要盯自研芯片的实际采纳、Bedrock 消费的持续，以及 AI 云毛利的改善。",
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
      { name: "NVDA GPU", note: "AWS AI 算力（关键供应商，也是 Trainium 的替代对象）" },
      { name: "自研 Trainium / Graviton", note: "扩供给 + 产品化" },
      { name: "Bedrock 模型供应商", note: "OpenAI、Anthropic 等——「模型中立」生态" },
      { name: "电力 / 数据中心 / 芯片制造", note: "AI 扩张的上游约束" },
    ],
    self: [
      { name: "AWS", note: "云 + AI + 芯片 + Bedrock 平台" },
      { name: "广告", note: "高增量利润增长" },
      { name: "零售市场", note: "自营 + 第三方" },
      { name: "Prime", note: "客户关系连接层" },
    ],
    downstream: [
      { name: "企业 / 开发者", note: "AWS + Bedrock 客户" },
      { name: "AI 实验室", note: "Anthropic、OpenAI（Trainium / Bedrock 客户）" },
      { name: "广告主", note: "购物广告买家" },
      { name: "消费者 / 第三方卖家", note: "零售 + Prime + 市场生态" },
    ],
  },

  competition: [
    { name: "Microsoft（Azure）", attacking: "企业云 + AI。", moatTargeted: "AWS 份额与 AI 心智。", evidence: "Azure 增速与 OpenAI 关系。", threat: "High", thesisImpact: "施压 AWS 引擎逻辑。" },
    { name: "Google（Cloud + TPU + Gemini）", attacking: "云 AI + 自研 TPU 全栈。", moatTargeted: "AWS 份额与云成本结构。", evidence: "Google Cloud 高增速、TPU/Gemini 全栈已构成更直接竞争。", threat: "Medium", thesisImpact: "威胁等级上升（Rising）——对 AI 云增量与成本结构的竞争在增强。" },
    { name: "Walmart / 零售商", attacking: "电商 + 零售媒体广告。", moatTargeted: "零售与广告份额。", evidence: "沃尔玛电商与广告增长。", threat: "Medium", thesisImpact: "压制零售与广告增量。" },
    { name: "Nvidia", attacking: "既是关键供应商，也是 Trainium 的替代对象 + CUDA 生态竞争者。", moatTargeted: "自研芯片的替代空间与生态。", evidence: "CUDA 生态成熟、AWS 仍大量采购 NVDA GPU。", threat: "Medium", thesisImpact: "限制自研芯片替代速度；关系是「供应商 + 被替代者 + 生态对手」三重。" },
  ],

  metrics: [
    { label: "AWS 增速", latest: "Q2 2026 +37%（18 季最快）", spark: [17, 19, 20, 25, 31, 37], unit: "% 同比", good: "up", note: "利润引擎的核心信号——二次加速兑现。", judgment: true },
    { label: "AWS 营业利润率", latest: "Q2 约 39.4%（利润 $166亿）", spark: [30, 33, 35, 37, 38, 39.4], unit: "%", good: "up", note: "利润质量高位。", judgment: true },
    { label: "广告收入增速", latest: "Q2 +26%（$198亿）", spark: [24, 22, 20, 24, 25, 26], unit: "% 同比", good: "up", note: "隐藏的高毛利增长极。", judgment: true },
    { label: "TTM 自由现金流 FCF", latest: "已转负 -$76亿（上年同期 +$182亿）", spark: [18.2, 15, 10, 3, -3, -7.6], unit: "$B/TTM", good: "up", note: "看 TTM 而非单季：极强经营现金流被更大的 capex 吃掉——最尖锐的信号。", judgment: true },
    { label: "TTM 经营现金流 / cash CapEx", latest: "OCF $1614亿(+33%) vs cash capex ~$1690亿(+64%)", spark: [110, 120, 135, 150, 160, 169], unit: "$B/TTM", note: "capex 增速快于经营现金流——有歧义（中性线）。", judgment: true },
  ],

  financials: {
    note: "约数 / 示意——依赖前请对照财报核实。Strategic Investments 提示：Q2 净利含约 $53.4B 非经营性税前收益，主要来自 Anthropic 投资重估——不是 AWS 收入、营业利润、现金流，也不可重复。估值 AMZN 要区分经营利润与 Anthropic 非现金股权收益；不要用 Q2 GAAP EPS $5.75 直接算核心经营 P/E。",
    rows: [
      { label: "收入（季度）", values: ["约 $638B", "约 $700B", "Q2 $201B(+20%)"], periods: ["FY24", "FY25", "2026Q2"] },
      { label: "合并营业利润率", values: ["约 11%", "约 12%", "Q2 13.7%"], periods: ["FY24", "FY25", "2026Q2"] },
      { label: "TTM 经营现金流", values: ["—", "—", "$1614亿(+33%)"], periods: ["", "", "TTM"] },
      { label: "TTM 净 CapEx", values: ["—", "—", "~$1690亿(+64%)"], periods: ["", "", "TTM"] },
      { label: "TTM 自由现金流 FCF", values: ["—", "+$182亿", "-$76亿"], periods: ["", "上年同期", "TTM"] },
      { label: "Anthropic 股权收益（非经营，非现金）", values: ["—", "—", "Q2 ~$53.4B"], periods: ["", "", "2026Q2"] },
      { label: "GAAP EPS（含股权收益，勿直接算 P/E）", values: ["—", "—", "Q2 $5.75"], periods: ["", "", "2026Q2"] },
    ],
    impliedExpectations: "合并估值容易掩盖 AWS、广告、第三方卖家服务与零售业务之间不同的增长和利润结构（利润高度集中在 AWS + 广告）。Q2 已兑现 AWS 加速 + 芯片/模型平台商业化，价格隐含 AWS 维持高增长；真正的风险是 $169B 级资本投入能否重新转化为自由现金流——别把 Anthropic 股权重估当成经营利润，也别用 GAAP EPS 直接估值。",
  },

  timeline: [
    { date: "2026-08-26", event: "为 AMZN 开立投资账本（起点）", whyItMatters: "基线快照。", node: "全部", thesisImpact: "flat", action: "不动仓位——建立记录。", source: null, related: null },
    { date: "2026-07-31", event: "Q2 2026 财报：AWS +37%（18 季最快）、利润率 39.4%、广告 +26%；但 TTM FCF 转负 -$76亿", whyItMatters: "经营端很强（AWS 二次加速、芯片/模型平台商业化、广告高增），但 Amazon 进入极重资本投入阶段——TTM 净 capex ~$1690亿(+64%) 把 TTM FCF 从 +$182亿 拖成 -$76亿。另：GAAP 净利被约 $53.4B Anthropic 股权重估推高（非经营、非现金）。", node: "AWS / 芯片 / CapEx→FCF", thesisImpact: "up", action: "不动仓位——经营逻辑强化 vs 资本回报张力升高。盯 TTM FCF；估值看剔除 Anthropic 收益后的核心经营利润（别用 GAAP EPS $5.75 直接算 P/E）。", source: { label: "Amazon Q2 2026 IR / Yahoo", url: "https://finance.yahoo.com/markets/stocks/articles/amazon-q2-2026-earnings-aws-204411872.html" }, related: { label: "Stock Why · AMZN 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/AMZN#2026-08-24" } },
  ],

  thesisEvolution: [
    { date: "2015 前", label: "烧钱换增长的电商", note: "被视为不赚钱的零售商，靠规模扩张。" },
    { date: "2015–2022", label: "AWS 重估 + 广告崛起", note: "AWS 成为利润引擎，广告成第三极，公司被重新定价为科技巨头。" },
    { date: "2023–2025", label: "降本增效 + AI 云", note: "物流区域化改善零售利润率；Bedrock + 自研芯片切入 AI。" },
    { date: "2026（当前）", label: "健康、方向改善，但资本回报张力最尖锐", note: "Q2 2026：AWS 从「等 AI 再加速」进入「收入、利润、自研芯片、模型平台同时加速」（+37%、18 季最快）；广告 +26%、零售继续盈利。但 TTM 净 capex ~$1690亿(+64%) 把 TTM FCF 拖成 -$76亿。焦点：这些客户承诺和芯片采用能否产生超过 $169B 资本投入的长期回报。把 Anthropic 股权收益与经营利润分开看。仓位接近目标。" },
    { date: "2026-08-26", label: "AI 辅助初稿（待认领）", note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」。" },
    { date: "未来", label: "什么会让我改变主意", note: "留白。AWS 增速或零售利润率的实质变化时更新。" },
  ],

  // 逐条证伪条件在各 thesis 的 invalidation（页面自动派生）。此处只放无法归属单一 thesis 的跨逻辑 / 存续性风险。
  risks: [
    {
      thesis: "监管 / 反垄断",
      condition: "若 反垄断（零售平台自我优待、AWS 捆绑等）出现结构性拆分或强制行为补救，则 相关业务的经济价值与估值承压。（与 CapEx→FCF 无同一因果链，故独立于 thesis 之外。）",
      status: "Watching",
    },
  ],

  stockWhy: { label: "AMZN · Stock Why 维基", url: "https://stock-why-wiki-site.vercel.app/stocks/AMZN", note: "市场波动的因果溯源在 Stock Why 维基；这本账本只问它是否改变了逻辑。" },
};
