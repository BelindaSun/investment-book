/*
 * Investment Book —— MSFT 数据文件。枚举 key 英文，界面中文。
 * 时效数字标 (待核实)；持仓为「占位」示例。代码/FCF/CapEx/P/E 等保留英文。
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA.MSFT = {
  ticker: "MSFT",
  name: "Microsoft Corp.",
  tier: "core",
  tagline: "把 AI 塞进每一个企业工作流，靠 Azure + Copilot 收租。",
  oneLiner:
    "全世界最强的企业分发渠道，正试图把它变成 AI 的收费入口。真正的悬念不是「AI 强不强」，而是 Copilot 能否规模化变现，以及与 OpenAI 的关系到底是资产还是风险。",
  updated: "2026-08-26",
  thesisStatus: "Healthy",
  statusNote:
    "核心引擎（Azure、M365、Windows）稳健且高毛利，企业分发是把 AI 变现的最短路径。开放风险集中在三处：Copilot 变现的实际留存、OpenAI 关系的竞合与治理、以及巨额 AI capex 的回报节奏。",

  whyIOwnIt: [
    "全球企业软件的默认底座——把 AI 卖给已经在付费的数亿座席，几乎零获客成本。",
    "Azure + OpenAI 让它坐上 AI 云的头等舱，同时自研 Maia 芯片对冲成本。",
    "多引擎高毛利现金流（Azure、M365、Windows、LinkedIn、Gaming），资本配置理性。",
  ],

  position: {
    note: "占位——请替换成真实数字。质量和估值分开：好公司不等于任何价格都能买。",
    shares: 40,
    avgCost: 380.0,
    currentPrice: 492.43, // 2026-08-12 网络行情快照，非实时
    priceAsOf: "2026-08-12",
    portfolioWeight: 9.0,
    targetWeight: 10.0,
    addRange: "回撤到成本附近、或非结构性的 15%+ 回调时加仓",
    reduceRange: "仓位超过组合约 13%、或 Azure 增速与 Copilot 变现同时转弱时减仓",
    qualityNote: "质量：极高。宽护城河、企业锁定、多引擎高毛利、执行与资本配置一流。",
    valuationNote: "估值：偏高但不极端。倍数里定价了 Azure 持续高增长 + Copilot 变现兑现。",
  },

  theses: [
    {
      id: "enterprise-distribution",
      title: "企业分发是把 AI 变现的最短路径",
      pillar: "企业分发",
      status: "Strong",
      trend: "up",
      statement:
        "Copilot 骑在 Windows + Office + Teams + GitHub 的数亿装机之上。别人要先获客，微软只需在已付费的座席上加价。这是变现 AI 最短、最便宜的一条路。",
      marketMisunderstanding:
        "市场爱争「谁的模型最强」。我的看法：企业 AI 的胜负更取决于分发和嵌入工作流，而这正是微软的主场。",
      supporting: [
        { text: "Copilot 直接嵌入企业已在用的 M365 / Teams / GitHub。", tag: "FACT" },
        { text: "企业采购倾向于既有供应商，降低了微软的销售摩擦。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "座席级加价能否转化为高留存收入仍需验证。", tag: "INFERENCE" },
        { text: "Google Workspace + Gemini 在同一战场直接竞争。", tag: "FACT" },
      ],
      keyMetrics: ["Copilot 座席数", "M365 商业增速", "留存/续约"],
      invalidation: "若 Copilot 座席增长停滞、且续约率下滑，则 企业分发变现逻辑转弱。",
      updated: "2026-08-26",
    },
    {
      id: "azure-ai",
      title: "Azure + OpenAI 坐上 AI 云头等舱",
      pillar: "Azure AI",
      status: "Strengthening",
      trend: "up",
      statement:
        "Azure 借 OpenAI 独家关系和 AI 工作负载，把增长与心智都拉到云市场前列，同时用自研 Maia 芯片对冲对 NVDA 的成本依赖。",
      marketMisunderstanding:
        "空头担心 capex 吞噬利润。我的看法：只要 AI 消费转化为经常性 Azure 收入，capex 就是在铺高毛利的租金管道。",
      supporting: [
        { text: "Azure 增速由 AI 工作负载明显拉动。", tag: "FACT" },
        { text: "自研 Maia 芯片降低长期算力成本。", tag: "FACT" },
      ],
      contrary: [
        { text: "AWS 更大、Google Cloud 增速也快，竞争激烈。", tag: "FACT" },
        { text: "Azure 增长高度依赖持续的大额 capex。", tag: "FACT" },
      ],
      keyMetrics: ["Azure 增速", "Azure AI 贡献", "云毛利率"],
      invalidation: "若 Azure 增速掉档、同时云毛利率下滑，则 AI 云逻辑进入观察。",
      updated: "2026-08-26",
    },
    {
      id: "copilot-monetization",
      title: "Copilot 变现仍待验证",
      pillar: "Copilot 变现",
      status: "Watching",
      trend: "warn",
      statement:
        "$30/座席的定价看起来诱人，但企业能否证明生产力提升、进而长期续费，是这条逻辑的关键，也是最容易失望的地方。",
      marketMisunderstanding: "多头默认 Copilot 会自动放量。我把它当成需要留存数据证明的变量。",
      supporting: [{ text: "早期采纳与试点数量可观。", tag: "FACT" }],
      contrary: [
        { text: "ROI 证明不足可能导致试点不转正。", tag: "INFERENCE" },
        { text: "AI 助手同质化，定价权未必稳固。", tag: "INFERENCE" },
      ],
      keyMetrics: ["Copilot 座席数", "试点转化率", "每用户增量收入"],
      invalidation: "若 Copilot 试点大面积不转正、或被迫降价，则 变现逻辑削弱。",
      updated: "2026-08-26",
    },
    {
      id: "openai-dependence",
      title: "对 OpenAI 的依赖是把双刃剑",
      pillar: "OpenAI 依赖",
      status: "Watching",
      trend: "warn",
      statement:
        "OpenAI 关系既是微软 AI 领先的来源，也带来治理、成本和竞合风险——OpenAI 既是伙伴，也在向企业直接扩张，可能与微软争食。",
      marketMisunderstanding: "市场时而把 OpenAI 当纯资产、时而当纯风险；现实是两者兼有，需要动态看。",
      supporting: [{ text: "独家云关系 + 优先技术获取带来领先。", tag: "FACT" }],
      contrary: [
        { text: "OpenAI 直接做企业产品，与微软存在竞合。", tag: "FACT" },
        { text: "OpenAI 治理动荡曾外溢到微软叙事。", tag: "FACT" },
      ],
      keyMetrics: ["OpenAI 竞合动向", "Azure 对 OpenAI 依赖度", "自研模型进展"],
      invalidation: "若 OpenAI 转向竞争、且微软自研模型未能补位，则 AI 领先来源受损。",
      updated: "2026-08-26",
    },
    {
      id: "capex-return",
      title: "巨额 AI capex 要转化成回报",
      pillar: "CapEx → 回报",
      status: "Watching",
      trend: "warn",
      statement:
        "AI 数据中心 capex 大幅抬升，折旧成为对利润率的拖累。这盘赌只有在 Azure 收入和 Copilot 变现真正兑现时才成立。",
      marketMisunderstanding: "多头默认「投 AI = 好」。我把 capex 当成未经证实，直到经营现金流确认回报。",
      supporting: [{ text: "微软仍产出可观自由现金流。", tag: "FACT" }],
      contrary: [
        { text: "capex 逐季抬升，折旧压制报表利润率。", tag: "FACT" },
        { text: "AI 需求若降温有过度建设风险。", tag: "INFERENCE" },
      ],
      keyMetrics: ["CapEx", "自由现金流 FCF", "云毛利率"],
      invalidation: "若 capex 连续攀升而 FCF 停滞、且 Azure 未加速，则 资本回报逻辑转弱→减仓。",
      updated: "2026-08-26",
    },
  ],

  business: [
    { name: "智能云（Azure 等）", role: "增长引擎", howItMakesMoney: "按消费售卖云计算、数据与 AI（Azure、OpenAI API、Fabric）。", note: "AI capex 变现的主战场。" },
    { name: "生产力与业务流程（M365 + Copilot、LinkedIn）", role: "高毛利现金牛", howItMakesMoney: "订阅 M365、Teams、LinkedIn，Copilot 在其上加价。", note: "企业分发的核心资产。" },
    { name: "更多个人计算（Windows、设备、Gaming）", role: "稳定配角", howItMakesMoney: "Windows 授权、Surface、Xbox/动视暴雪。", note: "现金牛，增长看游戏与内容。" },
  ],

  aiMoat: {
    summary: "核心问题：微软能否把企业分发和 OpenAI 关系，转化成难以撼动的 AI 变现护城河？",
    verdict: "我的判断：企业侧净扩大——分发 + 工作流嵌入是别人难复制的。风险在 Copilot 变现的深度，以及 OpenAI 关系从资产滑向竞合。",
    factors: [
      { name: "企业分发", note: "数亿 M365/Windows/GitHub 座席，零获客加价。", direction: "up" },
      { name: "OpenAI 关系", note: "领先来源，但竞合与治理是风险。", direction: "warn" },
      { name: "Azure + 自研 Maia", note: "AI 云 + 自研芯片对冲成本。", direction: "up" },
      { name: "Copilot 工作流嵌入", note: "嵌得越深、切换成本越高。", direction: "up" },
      { name: "Copilot 变现深度", note: "座席加价能否转化为留存收入，未定。", direction: "warn" },
    ],
    cannibalization: "张力：OpenAI 既是微软最大的 AI 资产，也在直接向企业扩张，可能与 Copilot 争食。要盯 OpenAI 的企业产品动向与微软自研模型的补位速度。",
  },

  drivers: [
    { name: "企业 IT 预算", why: "云与订阅收入随企业 IT 支出。", direction: "flat" },
    { name: "Azure 消费", why: "AI 工作负载是增长主引擎。", direction: "up" },
    { name: "Copilot 座席采纳", why: "决定 AI 变现的斜率。", direction: "up" },
    { name: "AI capex", why: "既是增长的燃料，也是利润率的拖累。", direction: "warn" },
    { name: "OpenAI 关系", why: "领先来源 + 竞合风险的双重变量。", direction: "flat" },
  ],

  ecosystem: {
    upstream: [
      { name: "NVDA GPU", note: "Azure AI 算力主力" },
      { name: "自研 Maia 芯片", note: "对冲算力成本" },
      { name: "OpenAI 模型", note: "前沿能力来源" },
    ],
    self: [
      { name: "Azure", note: "云 + AI" },
      { name: "M365 + Copilot", note: "生产力现金牛" },
      { name: "Windows / 设备", note: "个人计算" },
      { name: "GitHub / LinkedIn", note: "开发者 + 职业网络" },
    ],
    downstream: [
      { name: "企业", note: "云 + 生产力客户" },
      { name: "开发者", note: "GitHub / Azure 生态" },
      { name: "消费者", note: "Windows / Office / Xbox" },
    ],
  },

  competition: [
    { name: "Google（Cloud + Workspace + Gemini）", attacking: "企业生产力 + 云 AI。", moatTargeted: "M365 / Azure。", evidence: "Workspace + Gemini 直接对标。", threat: "High", thesisImpact: "施压企业分发与 Azure 两条逻辑。" },
    { name: "Amazon（AWS）", attacking: "云领导地位。", moatTargeted: "Azure 份额。", evidence: "AWS 仍是云第一。", threat: "High", thesisImpact: "压制 Azure 份额上限。" },
    { name: "OpenAI（竞合）", attacking: "直接向企业提供 AI 产品。", moatTargeted: "Copilot 企业变现。", evidence: "OpenAI 扩张企业业务。", threat: "Medium", thesisImpact: "把伙伴关系推向竞合。" },
    { name: "Salesforce / 其他 SaaS", attacking: "各自嵌入 AI 助手。", moatTargeted: "工作流入口。", evidence: "各家都在做 Agent/Copilot。", threat: "Medium", thesisImpact: "分散 AI 助手心智。" },
  ],

  metrics: [
    { label: "Azure 增速", latest: "高位增长 (待核实)", spark: [28, 30, 31, 33, 34, 33], unit: "% 同比", good: "up", note: "AI 云逻辑的核心信号。", judgment: true },
    { label: "Copilot 座席数", latest: "增长中 (待核实)", spark: [5, 9, 14, 20, 27, 33], unit: "指数", good: "up", note: "AI 变现的斜率。", judgment: true },
    { label: "云毛利率", latest: "约 70% (待核实)", spark: [72, 71, 70, 70, 69, 70], unit: "%", good: "up", note: "capex 与折旧的净效果体现在这里。", judgment: true },
    { label: "CapEx", latest: "高位上升 (待核实)", spark: [12, 15, 18, 22, 26, 30], unit: "$B/季", note: "AI 下注成本——单看有歧义（中性线）。", judgment: true },
  ],

  financials: {
    note: "约数 / 示意——微软财年约在 6 月结束。依赖前请对照财报核实。",
    rows: [
      { label: "收入", values: ["约 $245B", "约 $280B", "约 $310B"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "营业利润率", values: ["约 44%", "约 45%", "约 44%"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "EPS", values: ["约 $11.8", "约 $13.5", "约 $15"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "自由现金流 FCF", values: ["约 $70B", "约 $75B", "—"], periods: ["FY24", "FY25", ""] },
      { label: "CapEx", values: ["约 $55B", "约 $80B", "约 $95B"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "P/E（前瞻）", values: ["—", "约 32x", "—"], periods: ["", "当前", ""] },
    ],
    impliedExpectations: "倍数隐含 Azure 持续高增长 + Copilot 变现兑现。若两者之一失速，估值缺乏安全垫。相对同侪，它的确定性溢价来自企业锁定。",
  },

  timeline: [
    { date: "2026-08-26", event: "为 MSFT 开立投资账本（起点）", whyItMatters: "基线快照。", node: "全部", thesisImpact: "flat", action: "不动仓位——建立记录。", source: null, related: null },
    { date: "2026-08-xx", event: "占位——财报（Azure 增速 / Copilot 采纳 / capex 指引）", whyItMatters: "对 Azure 与 Copilot 变现两条逻辑的主要检验。", node: "Azure / Copilot", thesisImpact: "flat", action: "确认前不动仓位。", source: null, related: { label: "Stock Why 维基", url: "https://belindasun.github.io/stock-why-wiki/" } },
  ],

  thesisEvolution: [
    { date: "2014 前", label: "Windows / Office 的围墙花园", note: "以授权为主，被视为增长见顶的老牌软件公司。" },
    { date: "2014–2022", label: "Nadella 的云转型", note: "Azure + 订阅化把公司重塑为云巨头，重回增长与重估。" },
    { date: "2023–2025", label: "OpenAI + Copilot 的 AI 时代", note: "抢先接入 OpenAI，Copilot 铺向全线产品，AI 叙事领先。" },
    { date: "2026（当前）", label: "健康，聚焦变现与 capex 回报", note: "关注 Copilot 留存、OpenAI 竞合、capex→FCF。仓位接近目标。" },
    { date: "未来", label: "什么会让我改变主意", note: "留白。Copilot 变现或 OpenAI 关系的实质变化时更新。" },
  ],

  risks: [
    { thesis: "企业分发", condition: "若 Copilot 座席增长停滞、且续约率下滑，则 企业分发变现逻辑转弱。", status: "Watching" },
    { thesis: "Azure AI", condition: "若 Azure 增速掉档、同时云毛利率下滑，则 AI 云逻辑进入观察。", status: "Strengthening" },
    { thesis: "Copilot 变现", condition: "若 Copilot 试点大面积不转正、或被迫降价，则 变现逻辑削弱。", status: "Watching" },
    { thesis: "OpenAI 依赖", condition: "若 OpenAI 转向竞争、且自研模型未能补位，则 AI 领先来源受损。", status: "Watching" },
    { thesis: "CapEx 回报", condition: "若 capex 连续攀升而 FCF 停滞、且 Azure 未加速，则 资本回报逻辑转弱→减仓。", status: "Watching" },
  ],

  stockWhy: { label: "MSFT · Stock Why 维基", url: "https://belindasun.github.io/stock-why-wiki/", note: "市场波动的因果溯源在 Stock Why 维基；这本账本只问它是否改变了逻辑。" },
};
