/*
 * Investment Book —— MSFT 数据文件。枚举 key 英文，界面中文。
 * 时效数字标 (待核实)；持仓为「占位」示例。代码/FCF/CapEx/P/E 等保留英文。
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA.MSFT = {
  ticker: "MSFT",
  name: "Microsoft Corp.",
  tier: "core",
  holdingStatus: "held",
  tagline: "把 AI 塞进每一个企业工作流，靠 Azure + Copilot 收租。",
  oneLiner:
    "全世界最强的企业分发渠道，正把 Azure、Copilot、GitHub、Foundry、Fabric 拼成一套可规模化收费的企业 AI 平台。Q4 FY26 确认 AI 正转成 Azure 消费、Copilot 座席和增量 ARPU；新的悬念是：这种增长能否在 $50B+ 季度 capex 下产生足够的长期现金回报。",
  updated: "2026-08-27",
  thesisStatus: "Healthy",
  statusNote:
    "整体 Healthy、方向改善（AI monetization strengthening）。FY26 Q4（7/29）明显确认变现：Azure +43%（固定汇率、全年首破 $1000亿）、Microsoft Cloud 收入 $593亿 +27%、M365 Copilot 付费座席超过 30M（当季净新增座席环比翻倍）、GitHub Copilot 50M 用户、新增算力几乎立即被消化；FY26 经营现金流与 FCF 仍强劲。制约三处：Microsoft Cloud 毛利率降到 65%、Q4 capex $410亿（下季 >$500亿）、OpenAI 的 Azure 合同既是资产也是客户集中/合同期限风险。主要争议已从「AI 能否变现」转向「这种增长能否在 $50B+ 季度 capex 下产生足够的长期现金回报」。",

  currentDecision: "持有",
  decisionReason:
    "Azure、Copilot、GitHub、Foundry、Fabric 正形成可规模化收费的企业 AI 平台，变现在兑现；经营现金流仍强。开放焦点是 $50B+ 季度 capex 的回报率与利润率是否被稀释。当前不动仓位。",
  nextDecisionTriggers: [
    "Azure 增速掉档、或 Microsoft Cloud 毛利率进一步下滑",
    "Copilot 从 seat 到 seat+consumption 的 ARPU 提升停滞",
    "OpenAI 多云化侵蚀微软对 API / 模型 / 算力消费入口的经济价值",
    "capex + operating lease 投资持续上升而经营现金流 / FCF 未能同步",
  ],

  sources: {
    "px-2026-08-12": { label: "大型科技股行情（Motley Fool 汇总）", url: "https://www.fool.com/investing/2026/08/12/alphabet-amazon-meta-platforms-and-microsoft-this/", date: "2026-08-12", type: "media" },
    "q4fy26": { label: "Microsoft FY26 Q4 业绩（2026-07-29；以官方 IR 为准）", url: "https://www.cnbc.com/2026/07/29/microsoft-msft-q4-earnings-report-2026.html", date: "2026-07-29", type: "media" },
    "msft-openai-2025-10": { label: "微软官方博客：微软–OpenAI 合作新篇章", url: "https://blogs.microsoft.com/blog/2025/10/28/the-next-chapter-of-the-microsoft-openai-partnership/", date: "2025-10-28", type: "IR" },
    "openai-terms-2026": { label: "微软–OpenAI 关系重构、微软 27% 股权（Yahoo/Forbes）", url: "https://finance.yahoo.com/news/microsoft-and-openais-new-for-profit-deal-gives-windows-maker-27-stake-142521255.html", date: "2026-04-27", type: "media" },
  },

  whyIOwnIt: [
    "全球企业软件的默认底座——把 AI 卖给已经在付费的数亿座席，几乎零获客成本。",
    "Azure + Foundry + Fabric + GitHub + Copilot 正拼成一套可规模化收费的企业 AI 平台（不只依赖 OpenAI）；自研 Maia 是潜在的成本工具，但尚未证明已对冲 Nvidia。",
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
      title: "企业分发与工作流嵌入",
      pillar: "企业分发",
      status: "Strong",
      trend: "up",
      statement:
        "Copilot 骑在 Windows + Office + Teams + GitHub 的数亿装机之上。别人要先获客，微软只需在已付费的座席上加价。这是变现 AI 最短、最便宜的一条路。",
      marketMisunderstanding:
        "市场爱争「谁的模型最强」。我的看法：企业 AI 的胜负更取决于分发和嵌入工作流，而这正是微软的主场。",
      supporting: [
        { text: "M365 Copilot 付费座席超过 30M，当季净新增座席环比翻倍；GitHub Copilot 达 50M 用户（注：users 口径，与 M365 paid seats 不同）。", tag: "FACT", source: "q4fy26", asOf: "2026-06-30" },
        { text: "Copilot 直接嵌入企业已在用的 M365 / Teams / GitHub。", tag: "FACT" },
        { text: "企业采购倾向于既有供应商，降低了微软的销售摩擦。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "座席级加价能否转化为高留存收入、而非一次性试点，仍需时间验证。", tag: "INFERENCE" },
        { text: "Google Workspace + Gemini 在同一战场直接竞争。", tag: "FACT" },
      ],
      keyMetrics: ["Copilot 付费座席数", "M365 商业增速", "留存/续约"],
      invalidation: "若 Copilot 座席增长停滞、且续约率下滑，则 企业分发变现逻辑转弱。",
      updated: "2026-08-26",
    },
    {
      id: "azure-ai",
      title: "Azure AI 基础设施与平台增长",
      pillar: "Azure AI",
      status: "Strong",
      trend: "up",
      statement:
        "Azure 的 AI 工作负载把增长与心智都拉到云市场前列。Q4 FY26 增速加速到 +43%（需求超过产能），全年首破 $1000亿。重要信号：Microsoft Cloud 全年收入超过 $2140亿，其中近 90% 来自 frontier-model 公司之外的客户——说明 AI/云的投资案例并不只依赖 OpenAI。",
      marketMisunderstanding:
        "空头担心 capex 吞噬利润。我的看法：只要 AI 消费转化为经常性 Azure 收入，capex 就是在铺租金管道——而 +43% 与算力被迅速消化正在兑现这一点。",
      supporting: [
        { text: "Q4 FY26 Azure +43%（固定汇率），大超指引；全年 Azure 首破 $1000亿。（Q1 FY27 指引约 +45%——是指引，非已实现。）", tag: "FACT", source: "q4fy26", asOf: "2026-06-30" },
        { text: "Microsoft Cloud 全年收入超过 $2140亿，其中近 90% 来自 OpenAI 等 frontier-model 公司之外的客户。", tag: "FACT", source: "q4fy26", asOf: "2026-06-30" },
        { text: "新增算力几乎立即被客户需求消化。", tag: "FACT", source: "q4fy26", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "AWS 规模仍更大、Google Cloud 也在高增长，竞争激烈。", tag: "FACT" },
        { text: "Microsoft Cloud 毛利率降到 65%，增长伴随利润率稀释。", tag: "FACT", source: "q4fy26", asOf: "2026-06-30" },
        { text: "Azure 增长高度依赖持续的大额 capex；需求受产能约束。", tag: "FACT" },
      ],
      keyMetrics: ["Azure 增速", "Microsoft Cloud 毛利率", "算力消化速度"],
      invalidation: "若 Azure 增速明显掉档、同时 Microsoft Cloud 毛利率持续下滑，则 AI 云逻辑进入观察。",
      updated: "2026-08-27",
    },
    {
      id: "copilot-monetization",
      title: "Copilot：从座席采用走向 seat + consumption 变现",
      pillar: "Copilot 变现",
      status: "Strengthening",
      trend: "up",
      statement:
        "变现从「待验证」进入「深化」：不只是座席数量，更重要的是商业模式从单纯 per-seat 扩展到 seat + consumption。真正决定长期价值的是 ARPU 能否随 consumption 持续抬升，同时覆盖越来越重的算力/折旧/租赁成本——所以是增强中，而非完全证明。",
      marketMisunderstanding: "空头曾担心 Copilot 只是座席试点。真正的证据是变现在深化（seat+consumption、收入加速），而不只是座席计数。",
      supporting: [
        { text: "M365 Copilot 付费座席超过 30M，当季净新增座席环比翻倍。", tag: "FACT", source: "q4fy26", asOf: "2026-06-30" },
        { text: "Copilot 收入环比加速超过 60%；商业模式从 per-seat 扩展到 seat + consumption。", tag: "FACT", source: "q4fy26", asOf: "2026-06-30" },
        { text: "大客户部署明显扩大；达到高使用率所需时间从数月缩短到数天。", tag: "FACT", source: "q4fy26", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "留存 / 续约 / 每座席+consumption 的长期 ARPU 仍需更多季度验证。", tag: "INFERENCE" },
        { text: "AI 助手同质化，定价权未必稳固。", tag: "INFERENCE" },
      ],
      keyMetrics: ["Copilot 付费座席数", "seat + consumption ARPU", "Copilot 收入环比"],
      invalidation: "若 seat + consumption 的 ARPU 提升停滞、续约率走低、或被迫降价，则 变现逻辑重新转弱。",
      updated: "2026-08-27",
    },
    {
      id: "openai-dependence",
      title: "OpenAI：股权 + IP/API 权利 + Azure 合同 + 多云竞合",
      pillar: "OpenAI 关系",
      status: "Watching",
      trend: "flat",
      statement:
        "合作由「全面依赖」转向「有边界的独家权利 + 股权投资 + 大额 Azure 合同 + 更开放的多云竞合」。核心问题从「OpenAI 会不会离开 Azure」升级为「微软能否在 OpenAI 多云化的同时，保住 API、IP、Azure 消费和企业客户关系中的主要经济价值」。",
      marketMisunderstanding: "市场把它简化成「独家结束」；实际微软仍保留 frontier-model 伙伴地位、Azure API 独家（至 AGI）、IP 权利（延至 2032），只是让出了算力优先购买权与部分非 API 产品的多云自由。",
      supporting: [
        { text: "保留：OpenAI 仍是 frontier-model 伙伴；微软保留独家 IP 权利、Azure API 独家（至 AGI）、模型/产品 IP 权利延至 2032。", tag: "FACT", source: "msft-openai-2025-10", asOf: "2025-10-28" },
        { text: "微软持 OpenAI（PBC）约 27%、估值约 $1350亿；OpenAI 另签增量 $2500亿 Azure 服务合同（增量承诺，交付时间/消耗速度/集中度仍有不确定性）。", tag: "FACT", source: "openai-terms-2026", asOf: "2025-10-28" },
      ],
      contrary: [
        { text: "变化：微软失去 OpenAI 算力供应优先购买权；OpenAI 非 API 产品可跑在其他云、可与第三方联合开发；微软也可独立/与第三方推进 AGI。", tag: "FACT", source: "openai-terms-2026", asOf: "2026-04-27" },
        { text: "OpenAI 多云化降低微软对模型、客户需求和算力消费入口的控制。", tag: "INFERENCE" },
      ],
      keyMetrics: ["OpenAI Azure 消耗兑现度", "OpenAI 多云 / 竞合动向", "微软 API/IP 经济价值留存"],
      invalidation: "若 OpenAI 多云化大幅侵蚀微软的 API / Azure 消费 / 企业客户经济价值，且微软自研与生态未能补位，则 AI 领先来源受损。",
      updated: "2026-08-27",
    },
    {
      id: "capex-return",
      title: "AI CapEx → 现金回报与利润率",
      pillar: "CapEx → 回报",
      status: "Watching",
      trend: "warn",
      statement:
        "资本投入极大（Q4 capex $410亿、下季 >$500亿），但当前已有收入、订单和现金流承接：Q4 经营现金流 $554亿(+30%)、FCF $196亿仍为正、商业 RPO $6780亿（剔除 OpenAI 后仍 +25%）。真正的风险是回报率和利润率被持续稀释，而不是目前已经出现现金流危机。",
      marketMisunderstanding: "多头默认「投 AI = 好」；空头一看 FCF 承压就喊危机。现实居中：现金流和订单在承接投入，要盯的是投入的边际回报率与毛利率，而非当下的现金流安全。",
      supporting: [
        { text: "Q4 经营现金流 $554亿（+30%）、自由现金流 $196亿仍为正；新增算力被迅速消化。", tag: "FACT", source: "q4fy26", asOf: "2026-06-30" },
        { text: "商业 RPO 达 $6780亿，剔除 OpenAI 后仍增长 25%——订单为 capex 提供了真实承接。", tag: "FACT", source: "q4fy26", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "Q4 capex $410亿、下季指引 >$500亿；约 2/3 投向 GPU/CPU 等短周期资产。", tag: "FACT", source: "q4fy26", asOf: "2026-06-30" },
        { text: "Microsoft Cloud 毛利率降到 65%——投入正在稀释利润率。", tag: "FACT", source: "q4fy26", asOf: "2026-06-30" },
        { text: "口径提示（非盈利美化）：资产使用年限 15→25 年，对 FY27 营业利润帮助很小；主要影响是未来部分租赁从 finance lease 转为 operating lease，微软据此把 calendar 2026 reported capex 调整到约 $175B，但基础投资计划未变。→ 不能只看 reported capex 判断投资强度。", tag: "FACT", source: "q4fy26", asOf: "2026-07-29" },
      ],
      keyMetrics: ["经营现金流", "FCF", "FCF / CapEx", "Microsoft Cloud 毛利率", "RPO（剔除 OpenAI）", "operating lease 承诺"],
      invalidation: "若 CapEx 与 operating lease 投资持续上升，而 Azure 增速、Cloud 毛利率、经营现金流和剔除 OpenAI 后的订单增长同步转弱，则 该逻辑转为 Weakening。",
      updated: "2026-08-27",
    },
  ],

  business: [
    { name: "智能云（Azure / Foundry / Fabric 等）", role: "规模化 AI 基础设施与平台利润引擎", howItMakesMoney: "按消费售卖云、数据与 AI（Azure、Foundry、Fabric、OpenAI API）。Q4 Azure +43%、全年破 $1000亿；Microsoft Cloud 全年收入 >$2140亿，近 90% 来自 OpenAI 之外的客户。", note: "不只依赖 OpenAI——平台层（Foundry/Fabric）在独立放量。" },
    { name: "生产力与业务流程（M365 + Copilot、LinkedIn）", role: "高毛利现金牛", howItMakesMoney: "订阅 M365、Teams、LinkedIn，Copilot 在其上加价。", note: "企业分发的核心资产。" },
    { name: "更多个人计算（Windows、设备、Gaming）", role: "稳定配角", howItMakesMoney: "Windows 授权、Surface、Xbox/动视暴雪。", note: "现金牛，增长看游戏与内容。" },
  ],

  aiMoat: {
    summary: "核心问题：微软能否把企业分发和 OpenAI 关系，转化成难以撼动的 AI 变现护城河？",
    verdict: "更准确的护城河不是「Azure + OpenAI」，而是：企业分发 + Azure 基础设施 + data estate + 开发者平台 + 工作流嵌入。Q4 最强的证据不是「押中 OpenAI」，而是 Azure、Copilot、GitHub、Foundry、Fabric 正共同形成一套可规模化收费的企业 AI 平台。风险在 capex 回报与利润率稀释。",
    factors: [
      { name: "企业分发", note: "数亿 M365/Windows/GitHub 座席，零获客加价；M365 Copilot 付费座席 30M+。", direction: "up" },
      { name: "Azure 基础设施", note: "AI 云加速（+43%）、算力被迅速消化；近 90% Cloud 收入来自 OpenAI 之外。", direction: "up" },
      { name: "开发者平台（Foundry / Fabric / GitHub）", note: "Foundry 达 10 万客户、收入同比翻倍；Fabric 4 万+ 付费客户；GitHub Copilot 50M 用户。", direction: "up" },
      { name: "Copilot 变现深化", note: "从 seat 扩展到 seat + consumption；收入环比加速 >60%。", direction: "up" },
      { name: "OpenAI 关系（重构后）", note: "持约 27% 股权 + IP/API 独家（至 AGI）+ 增量 $2500亿 Azure；但让出算力优先权、部分产品多云。", direction: "flat" },
      { name: "自研 Maia", note: "潜在的成本与供应控制工具，实际部署规模和经济性尚未充分证明——不能算已成功对冲 Nvidia 成本。", direction: "flat" },
    ],
    cannibalization: "张力：OpenAI 既是微软的大额股权资产 + Azure 大客户 + frontier 伙伴，也在向企业扩张、并转向多云。但 Q4 显示微软的企业 AI 平台已不只依赖 OpenAI（近 90% Cloud 收入来自其他客户）。要盯 OpenAI 的 Azure 采购兑现，以及 Foundry/Fabric/Copilot 的独立变现。",
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
      { name: "自研 Maia 芯片", note: "潜在成本/供应控制（未充分证明）" },
      { name: "OpenAI", note: "股权资产 + Azure 大客户 + frontier 伙伴 + 潜在企业竞争者" },
      { name: "电力 / 数据中心 / operating lease 伙伴", note: "未来算力扩张的重要上游约束" },
    ],
    self: [
      { name: "Azure", note: "云 + AI 基础设施" },
      { name: "Foundry / Fabric / GitHub", note: "AI 应用、数据与开发者平台" },
      { name: "M365 + Copilot", note: "生产力现金牛（seat + consumption）" },
      { name: "Windows / 设备", note: "个人计算" },
    ],
    downstream: [
      { name: "企业", note: "云 + 生产力客户" },
      { name: "开发者", note: "GitHub / Azure 生态" },
      { name: "消费者", note: "Windows / Office / Xbox" },
    ],
  },

  competition: [
    { name: "Google（Cloud + Workspace + Gemini + TPU）", attacking: "Cloud+Gemini 打 Azure AI；Workspace+Gemini 打 M365 Copilot；自研 TPU 可能形成更低成本的垂直整合。", moatTargeted: "Azure / M365 / 云成本结构。", evidence: "Google Cloud 高增长、Gemini in Chrome/Workspace、TPU 全栈。", threat: "High", thesisImpact: "同时施压企业分发、Azure 与 Copilot 三条逻辑。" },
    { name: "Amazon（AWS）", attacking: "云领导地位。", moatTargeted: "Azure 份额。", evidence: "AWS 规模仍居第一、且重新加速。", threat: "High", thesisImpact: "压制 Azure 份额上限。" },
    { name: "OpenAI（竞合）", attacking: "向企业提供 AI 产品，且多云化。", moatTargeted: "Copilot 企业变现 + 微软对模型/需求/算力入口的控制。", evidence: "OpenAI 扩企业业务、非 API 产品可跑其他云。", threat: "Medium", thesisImpact: "风险不只是做企业产品，还包括多云化降低微软对模型、客户需求与算力消费入口的控制。" },
    { name: "Salesforce / 其他 SaaS", attacking: "各自嵌入 AI 助手。", moatTargeted: "工作流入口。", evidence: "各家都在做 Agent/Copilot。", threat: "Medium", thesisImpact: "分散 AI 助手心智。" },
  ],

  metrics: [
    { label: "Azure 增速（固定汇率）", latest: "Q4 FY26 +43%（下季指引 ~45%）", spark: [28, 30, 33, 37, 40, 43], unit: "% 同比", good: "up", note: "AI 云逻辑的核心信号；大超指引、全年破 $1000亿。", judgment: true },
    { label: "M365 Copilot 付费座席", latest: "30M+（当季净新增环比翻倍）", spark: [5, 9, 14, 20, 25, 30], unit: "M 座席", good: "up", note: "AI 变现的斜率；注意是净新增翻倍、非总座席翻倍。", judgment: true },
    { label: "Microsoft Cloud 毛利率", latest: "Q4 65%（此前更高）", spark: [72, 71, 70, 69, 67, 65], unit: "%", good: "up", note: "增长伴随利润率稀释——要盯的信号。", judgment: true },
    { label: "经营现金流 / FCF（季度）", latest: "Q4 OCF $554亿(+30%)、FCF $196亿", spark: [40, 45, 48, 50, 52, 55.4], unit: "$B/季", good: "up", note: "capex 有现金流承接的证据。", judgment: true },
    { label: "CapEx（季度）", latest: "Q4 $410亿，下季指引 >$500亿", spark: [18, 22, 28, 34, 41, 50], unit: "$B/季", note: "AI 下注成本——单看有歧义（中性线）。约 2/3 是 GPU/CPU 短周期资产；部分未来投入转 operating lease，reported capex 口径变化。", judgment: true },
  ],

  financials: {
    note: "约数 / 示意——微软财年 6 月底结束。两点口径提示（非盈利美化）：① 资产使用年限 15→25 年对 FY27 营业利润帮助很小，主要影响是未来部分数据中心租赁从 finance lease 转 operating lease、不再计入传统 capex（微软据此把 calendar 2026 reported capex 调到约 $175B，基础投资未变）——所以别只看 reported capex 判断投资强度；② 持有的 OpenAI 股权（约 $135B）是非经营性资产，随其估值波动影响 GAAP 净利，别当经营利润。",
    rows: [
      { label: "收入（FY26 全年）", values: ["约 $245B", "约 $280B", "$331.8B"], periods: ["FY24", "FY25", "FY26"] },
      { label: "营业利润率", values: ["约 44%", "约 45%", "约 45%"], periods: ["FY24", "FY25", "FY26"] },
      { label: "Azure 全年收入", values: ["—", "—", "首破 $100B"], periods: ["", "", "FY26"] },
      { label: "Microsoft Cloud 毛利率", values: ["—", "—", "Q4 65%"], periods: ["", "", "2026Q4"] },
      { label: "CapEx（季度 / reported）", values: ["约 $14B", "约 $22B", "$41B→>$50B"], periods: ["FY24", "FY25", "Q4→Q1e"] },
      { label: "OpenAI 股权（约 27%，非经营性）", values: ["—", "—", "约 $135B"], periods: ["", "", "当前"] },
      { label: "P/E（前瞻）", values: ["—", "约 32x", "—"], periods: ["", "当前", ""] },
    ],
    impliedExpectations: "倍数隐含 Azure 持续高增长 + Copilot 变现兑现——Q4 两者都在兑现，支撑了财报后 ~17% 跳涨。剩下的风险是 $50B+ 季度 capex 的回报率与利润率稀释（Cloud 毛利率已降到 65%）。估值应看核心经营利润与现金流，别把 OpenAI 股权重估当成经营质量、也别只看 reported capex 判断投资强度。",
  },

  timeline: [
    { date: "2026-08-26", event: "为 MSFT 开立投资账本（起点）", whyItMatters: "基线快照。", node: "全部", thesisImpact: "flat", action: "不动仓位——建立记录。", source: null, related: null },
    { date: "2025-10-28", event: "微软–OpenAI 关系重构：微软持约 27%（~$1350亿）+ IP/API 独家（至 AGI），让出算力优先权、部分产品多云", whyItMatters: "由「全面依赖」转向「有边界的独家权利 + 股权 + 大额 Azure 合同 + 多云竞合」。核心问题升级为：微软能否在 OpenAI 多云化下保住 API/IP/Azure 消费的主要经济价值。", node: "OpenAI 关系 / Azure", thesisImpact: "flat", action: "不动仓位——关系结构更清晰，正反面并存。", source: { label: "微软官方博客 2025-10-28", url: "https://blogs.microsoft.com/blog/2025/10/28/the-next-chapter-of-the-microsoft-openai-partnership/" }, related: { label: "Stock Why · MSFT 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/MSFT#2026-08-24" } },
    { date: "2026-07-29", event: "Q4 FY26 财报：Azure +43%（全年破 $1000亿）、M365 Copilot 付费座席超 30M（净新增翻倍），股价跳涨 ~17%", whyItMatters: "AI 商业化强确认：Azure 大加速、Copilot 从 seat 走向 seat+consumption（收入环比 >60%）。焦点转向 $50B+/季 capex 的回报与利润率稀释（Cloud 毛利率降到 65%）。", node: "Azure / Copilot / CapEx", thesisImpact: "up", action: "不动仓位——逻辑强化，但 capex 回报与毛利率稀释要继续盯。", source: { label: "Microsoft FY26 Q4 IR / CNBC", url: "https://www.cnbc.com/2026/07/29/microsoft-msft-q4-earnings-report-2026.html" }, related: { label: "Stock Why · MSFT 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/MSFT#2026-08-24" } },
  ],

  thesisEvolution: [
    { date: "2014 前", label: "Windows / Office 的围墙花园", note: "以授权为主，被视为增长见顶的老牌软件公司。" },
    { date: "2014–2022", label: "Nadella 的云转型", note: "Azure + 订阅化把公司重塑为云巨头，重回增长与重估。" },
    { date: "2023–2025", label: "OpenAI + Copilot 的 AI 时代", note: "抢先接入 OpenAI，Copilot 铺向全线产品，AI 叙事领先。" },
    { date: "2026（当前）", label: "健康、方向改善：企业 AI 平台成型，焦点转向 capex 现金回报", note: "Q4 FY26：Azure +43%、M365 Copilot 付费座席超 30M（净新增翻倍）、收入从 seat 走向 seat+consumption、股价 +17%；Foundry/Fabric/GitHub 让平台不只依赖 OpenAI。焦点从「AI 能否变现」转到「$50B+ 季度 capex 能否产生足够长期现金回报、利润率会否被稀释」。仓位接近目标。" },
    { date: "2026-08-26", label: "AI 辅助初稿（待认领）", note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」。" },
    { date: "未来", label: "什么会让我改变主意", note: "留白。Copilot 变现或 OpenAI 关系的实质变化时更新。" },
  ],

  // 逐条证伪条件在各 thesis 的 invalidation（唯一真相来源，页面自动派生）。此处只留跨逻辑 / 存续性风险。MSFT 暂无。
  risks: [],

  stockWhy: { label: "MSFT · Stock Why 维基", url: "https://stock-why-wiki-site.vercel.app/stocks/MSFT", note: "市场波动的因果溯源在 Stock Why 维基；这本账本只问它是否改变了逻辑。" },
};
