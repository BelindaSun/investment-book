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
    "全世界最强的企业分发渠道，正试图把它变成 AI 的收费入口。Q4 FY26 Azure 加速到 +43%、Copilot 付费座席翻倍到 30M+——AI 商业化正在兑现；新的悬念转向 capex 的回报节奏，以及重构后（27% 股权）的 OpenAI 关系怎么演化。",
  updated: "2026-08-27",
  thesisStatus: "Healthy",
  statusNote:
    "Q4 FY26（7/29）明显强化了 AI 商业化：Azure +43%（固定汇率、大超指引，全年破 $1000亿）、Copilot 付费座席翻倍到 30M+、股价跳涨 ~17%。同时 OpenAI 关系重构落地——微软持约 27%（~$1350亿）、独家结束、但 OpenAI 承诺采购 $2500亿 Azure。开放焦点转向：capex $50B+/季的回报节奏，以及一处盈利质量提示——数据中心折旧年限从 15 年延长到 25 年，会压低当期折旧、抬高近期利润。",

  currentDecision: "持有",
  decisionReason:
    "Azure 大加速、Copilot 座席翻倍，AI 变现正在兑现；OpenAI 关系重构后更清晰（股权 + $2500亿 Azure 承诺）。开放焦点是 capex 回报与折旧口径变化。当前不动仓位。",
  nextDecisionTriggers: [
    "Azure 增速掉档、或云毛利率（剔除折旧口径变化后）下滑",
    "Copilot 座席增长或续约率出现明显拐点",
    "OpenAI 进一步多云化 / 转向竞争，侵蚀 Azure 承诺或企业变现",
    "capex 持续攀升而经营现金流 / FCF 未能同步",
  ],

  sources: {
    "px-2026-08-12": { label: "大型科技股行情（Motley Fool 汇总）", url: "https://www.fool.com/investing/2026/08/12/alphabet-amazon-meta-platforms-and-microsoft-this/", date: "2026-08-12", type: "media" },
    "q4fy26": { label: "Microsoft FY26 Q4 业绩（2026-07-29；以官方 IR 为准）", url: "https://www.cnbc.com/2026/07/29/microsoft-msft-q4-earnings-report-2026.html", date: "2026-07-29", type: "media" },
    "msft-openai-2025-10": { label: "微软官方博客：微软–OpenAI 合作新篇章", url: "https://blogs.microsoft.com/blog/2025/10/28/the-next-chapter-of-the-microsoft-openai-partnership/", date: "2025-10-28", type: "IR" },
    "openai-terms-2026": { label: "微软–OpenAI 结束独家、股权 27%（Yahoo/Forbes）", url: "https://finance.yahoo.com/news/microsoft-and-openais-new-for-profit-deal-gives-windows-maker-27-stake-142521255.html", date: "2026-04-27", type: "media" },
  },

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
        { text: "Copilot 付费座席翻倍到 30M+（4 月还是 20M+）；GitHub Copilot 达 50M 用户。", tag: "FACT", source: "q4fy26", asOf: "2026-06-30" },
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
      title: "Azure 坐稳 AI 云头等舱，增长加速",
      pillar: "Azure AI",
      status: "Strong",
      trend: "up",
      statement:
        "Azure 的 AI 工作负载把增长与心智都拉到云市场前列。Q4 FY26 增速加速到 +43%（需求超过产能），全年首破 $1000亿；重构后的 OpenAI 还承诺采购 $2500亿 Azure，进一步锁定前瞻收入。自研 Maia 芯片试图对冲对 NVDA 的成本依赖。",
      marketMisunderstanding:
        "空头担心 capex 吞噬利润。我的看法：只要 AI 消费转化为经常性 Azure 收入，capex 就是在铺高毛利的租金管道——而 +43% 与 $2500亿 承诺正是在兑现这一点。",
      supporting: [
        { text: "Q4 FY26 Azure +43%（固定汇率），大超指引；全年 Azure 首破 $1000亿。下季指引 ~45%。", tag: "FACT", source: "q4fy26", asOf: "2026-06-30" },
        { text: "OpenAI 承诺采购 $2500亿 Azure 服务，锁定巨额前瞻收入。", tag: "FACT", source: "openai-terms-2026", asOf: "2025-10-28" },
        { text: "自研 Maia 芯片旨在降低长期算力成本（实际部署规模与经济性尚待验证）。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "AWS 规模仍更大、Google Cloud 也在高增长，竞争激烈。", tag: "FACT" },
        { text: "Azure 增长高度依赖持续的大额 capex；需求受产能约束。", tag: "FACT" },
      ],
      keyMetrics: ["Azure 增速", "Azure AI 贡献", "云毛利率（剔除折旧口径变化）"],
      invalidation: "若 Azure 增速明显掉档、同时云毛利率（剔除折旧口径变化后）下滑，则 AI 云逻辑进入观察。",
      updated: "2026-08-27",
    },
    {
      id: "copilot-monetization",
      title: "Copilot 变现开始兑现（座席翻倍）",
      pillar: "Copilot 变现",
      status: "Strengthening",
      trend: "up",
      statement:
        "变现从「待验证」进入「初步兑现」：付费座席从 4 月的 20M+ 翻倍到 30M+。采纳与放量得到证据支持；但真正决定长期价值的「留存 / 续约 / 每座席增量收入」仍待验证——所以是增强中，而非完全证明。",
      marketMisunderstanding: "空头曾担心 Copilot 只是试点、变不了现。座席翻倍说明放量是真的；剩下要看的是留存深度。",
      supporting: [
        { text: "付费座席从 20M+（4 月）翻倍到 30M+；GitHub Copilot 50M 用户。", tag: "FACT", source: "q4fy26", asOf: "2026-06-30" },
        { text: "嵌入既有工作流，切换成本高，利于续约。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "留存 / 续约 / 每座席增量收入尚未充分披露，长期价值仍需验证。", tag: "INFERENCE" },
        { text: "AI 助手同质化，定价权未必稳固。", tag: "INFERENCE" },
      ],
      keyMetrics: ["Copilot 付费座席数", "留存 / 续约率", "每座席增量收入"],
      invalidation: "若 座席增长停滞、续约率走低、或被迫降价，则 变现逻辑重新转弱。",
      updated: "2026-08-27",
    },
    {
      id: "openai-dependence",
      title: "OpenAI 关系：从独家依赖到股权 + 锁定采购",
      pillar: "OpenAI 关系",
      status: "Watching",
      trend: "flat",
      statement:
        "关系已从「独家依赖」重构为一种更清晰、更平衡的结构：微软持约 27% 股权（~$1350亿的资产）、拿到 OpenAI $2500亿 Azure 采购承诺、保留转售权到 2032；代价是独家结束、营收分成封顶、OpenAI 转向多云（与 AWS 大额合作）。净效果是「依赖」下降、「货币化」上升，但 OpenAI 作为竞争者的一面更明确。",
      marketMisunderstanding: "市场时而把 OpenAI 当纯资产、时而当纯风险；重构后现实更清楚——是一份大额股权 + 锁定的 Azure 收入，叠加一个不再独家、正在多云化的合作方。",
      supporting: [
        { text: "微软持 OpenAI（PBC）约 27%、估值约 $1350亿；OpenAI 承诺采购 $2500亿 Azure。", tag: "FACT", source: "openai-terms-2026", asOf: "2025-10-28" },
        { text: "保留 OpenAI 技术转售权到 2032。", tag: "FACT", source: "msft-openai-2025-10", asOf: "2025-10-28" },
      ],
      contrary: [
        { text: "独家关系结束、Azure 独家取消、营收分成封顶；OpenAI 转向多云（与 AWS 大额合作）。", tag: "FACT", source: "openai-terms-2026", asOf: "2026-04-27" },
        { text: "OpenAI 直接做企业产品，与 Copilot 存在竞合。", tag: "FACT" },
      ],
      keyMetrics: ["OpenAI Azure 消耗兑现度", "OpenAI 多云 / 竞合动向", "微软自研模型进展"],
      invalidation: "若 OpenAI 大幅转向竞争 / 削减 Azure 采购，且微软自研模型未能补位，则 AI 领先来源与 Azure 承诺同时受损。",
      updated: "2026-08-27",
    },
    {
      id: "capex-return",
      title: "巨额 AI capex 要转化成回报",
      pillar: "CapEx → 回报",
      status: "Watching",
      trend: "warn",
      statement:
        "AI 数据中心 capex 大幅抬升（Q4 $410亿、下季指引 >$500亿），这盘赌只有在 Azure 收入和 Copilot 变现真正兑现时才成立。目前 Azure +43% 与座席翻倍提供了正面证据，但 capex 的绝对规模和折旧口径变化，让「回报兑现」仍需持续验证。",
      marketMisunderstanding: "多头默认「投 AI = 好」。我把 capex 当成未经证实，直到经营现金流确认回报——尤其要剔除折旧口径变化带来的账面美化。",
      supporting: [
        { text: "Azure +43%、Copilot 座席翻倍，为「capex 有真实需求承接」提供了正面证据。", tag: "FACT", source: "q4fy26", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "Q4 capex $410亿、下季指引 >$500亿；约 2/3 投向 GPU/CPU 等短周期资产。", tag: "FACT", source: "q4fy26", asOf: "2026-06-30" },
        { text: "盈利质量提示：数据中心 / 办公楼折旧年限从 15 年延长到 25 年——压低当期折旧、抬高近期利润，需从毛利率中剔除后再判断。", tag: "FACT", source: "q4fy26", asOf: "2026-06-30" },
        { text: "AI 需求若降温有过度建设风险。", tag: "INFERENCE" },
      ],
      keyMetrics: ["CapEx", "经营现金流 / FCF", "云毛利率（剔除折旧口径变化）"],
      invalidation: "若 capex 继续快速攀升、而经营现金流 / FCF 未能同步、且 Azure 增长掉档，则 资本回报逻辑转为 Weakening。",
      updated: "2026-08-27",
    },
  ],

  business: [
    { name: "智能云（Azure 等）", role: "增长引擎", howItMakesMoney: "按消费售卖云计算、数据与 AI（Azure、OpenAI API、Fabric）。Q4 Azure +43%、全年破 $1000亿；OpenAI 承诺采购 $2500亿。", note: "AI capex 变现的主战场，正在加速兑现。" },
    { name: "生产力与业务流程（M365 + Copilot、LinkedIn）", role: "高毛利现金牛", howItMakesMoney: "订阅 M365、Teams、LinkedIn，Copilot 在其上加价。", note: "企业分发的核心资产。" },
    { name: "更多个人计算（Windows、设备、Gaming）", role: "稳定配角", howItMakesMoney: "Windows 授权、Surface、Xbox/动视暴雪。", note: "现金牛，增长看游戏与内容。" },
  ],

  aiMoat: {
    summary: "核心问题：微软能否把企业分发和 OpenAI 关系，转化成难以撼动的 AI 变现护城河？",
    verdict: "我的判断：企业侧净扩大——分发 + 工作流嵌入是别人难复制的，Q4 的 Azure +43% 与 Copilot 座席翻倍在兑现。风险从「OpenAI 依赖」转为「OpenAI 多云化 / 竞合」与 capex 回报。",
    factors: [
      { name: "企业分发", note: "数亿 M365/Windows/GitHub 座席，零获客加价；Copilot 付费座席 30M+。", direction: "up" },
      { name: "OpenAI 关系（重构后）", note: "持约 27% 股权（~$1350亿）+ $2500亿 Azure 承诺；但独家结束、OpenAI 转向多云。", direction: "flat" },
      { name: "Azure + 自研 Maia", note: "AI 云加速（+43%）+ 自研芯片对冲成本。", direction: "up" },
      { name: "Copilot 工作流嵌入", note: "嵌得越深、切换成本越高；座席已翻倍。", direction: "up" },
      { name: "Copilot 变现深度", note: "放量已兑现；留存 / 每座席收入仍待验证。", direction: "up" },
    ],
    cannibalization: "张力：OpenAI 既是微软的大额股权资产 + Azure 大客户，也在直接向企业扩张、并转向多云。要盯 OpenAI 的 Azure 采购兑现、企业产品动向与微软自研模型的补位速度。",
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
    { label: "Azure 增速（固定汇率）", latest: "Q4 FY26 +43%（下季指引 ~45%）", spark: [28, 30, 33, 37, 40, 43], unit: "% 同比", good: "up", note: "AI 云逻辑的核心信号；大超指引、全年破 $1000亿。", judgment: true },
    { label: "Copilot 付费座席", latest: "30M+（4 月 20M+ 翻倍）", spark: [5, 9, 14, 20, 25, 30], unit: "M 座席", good: "up", note: "AI 变现的斜率——放量已兑现。", judgment: true },
    { label: "云毛利率", latest: "约 70%（注意折旧口径变化）", spark: [72, 71, 70, 70, 69, 70], unit: "%", good: "up", note: "折旧年限 15→25 年会美化当期——判断要剔除口径变化。", judgment: true },
    { label: "CapEx", latest: "Q4 $410亿，下季指引 >$500亿", spark: [18, 22, 28, 34, 41, 50], unit: "$B/季", note: "AI 下注成本——单看有歧义（中性线）。约 2/3 是 GPU/CPU 短周期资产。", judgment: true },
  ],

  financials: {
    note: "约数 / 示意——微软财年 6 月底结束。注意两点盈利质量：① 数据中心 / 办公楼折旧年限从 15 年延长到 25 年，压低当期折旧、抬高近期利润率，比较时需还原口径；② 持有的 OpenAI 股权（约 $1350亿）是非经营性资产，会随 OpenAI 估值波动影响 GAAP 净利，别当经营利润。",
    rows: [
      { label: "收入（FY26 全年）", values: ["约 $245B", "约 $280B", "约 $320B"], periods: ["FY24", "FY25", "FY26"] },
      { label: "营业利润率", values: ["约 44%", "约 45%", "约 45%（含折旧口径顺风）"], periods: ["FY24", "FY25", "FY26"] },
      { label: "Azure 全年收入", values: ["—", "—", "首破 $100B"], periods: ["", "", "FY26"] },
      { label: "CapEx（季度）", values: ["约 $14B", "约 $22B", "$41B→>$50B"], periods: ["FY24", "FY25", "Q4→Q1e"] },
      { label: "OpenAI 股权（约 27%，非经营性）", values: ["—", "—", "约 $135B"], periods: ["", "", "当前"] },
      { label: "P/E（前瞻）", values: ["—", "约 32x", "—"], periods: ["", "当前", ""] },
    ],
    impliedExpectations: "倍数隐含 Azure 持续高增长 + Copilot 变现兑现——Q4 两者都在兑现，支撑了财报后 ~17% 跳涨。剩下的风险是 capex $50B+/季 的回报节奏，以及别把折旧口径变化和 OpenAI 股权重估当成经营质量。估值应看剔除这两项后的核心经营利润与现金流。",
  },

  timeline: [
    { date: "2026-08-26", event: "为 MSFT 开立投资账本（起点）", whyItMatters: "基线快照。", node: "全部", thesisImpact: "flat", action: "不动仓位——建立记录。", source: null, related: null },
    { date: "2025-10-28", event: "微软–OpenAI 关系重构：微软持约 27%（~$1350亿），独家结束，OpenAI 承诺 $2500亿 Azure 采购", whyItMatters: "把「独家依赖」变成「股权 + 锁定采购」；OpenAI 转向多云（AWS）。净效果：依赖下降、货币化上升，竞合更明确。", node: "OpenAI 关系 / Azure", thesisImpact: "flat", action: "不动仓位——关系结构更清晰，正反面并存。", source: { label: "微软官方博客 2025-10-28", url: "https://blogs.microsoft.com/blog/2025/10/28/the-next-chapter-of-the-microsoft-openai-partnership/" }, related: { label: "Stock Why · MSFT 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/MSFT#2026-08-24" } },
    { date: "2026-07-29", event: "Q4 FY26 财报：Azure +43%（全年破 $1000亿）、Copilot 座席翻倍到 30M+，股价跳涨 ~17%", whyItMatters: "AI 商业化强确认：Azure 大加速、Copilot 放量兑现。焦点转向 capex $50B+/季 的回报，与折旧年限 15→25 年的盈利质量提示。", node: "Azure / Copilot / CapEx", thesisImpact: "up", action: "不动仓位——逻辑强化，但 capex 回报与折旧口径要继续盯。", source: { label: "Microsoft FY26 Q4 IR / CNBC", url: "https://www.cnbc.com/2026/07/29/microsoft-msft-q4-earnings-report-2026.html" }, related: { label: "Stock Why · MSFT 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/MSFT#2026-08-24" } },
  ],

  thesisEvolution: [
    { date: "2014 前", label: "Windows / Office 的围墙花园", note: "以授权为主，被视为增长见顶的老牌软件公司。" },
    { date: "2014–2022", label: "Nadella 的云转型", note: "Azure + 订阅化把公司重塑为云巨头，重回增长与重估。" },
    { date: "2023–2025", label: "OpenAI + Copilot 的 AI 时代", note: "抢先接入 OpenAI，Copilot 铺向全线产品，AI 叙事领先。" },
    { date: "2026（当前）", label: "健康，AI 商业化兑现，焦点转向 capex 回报", note: "Q4 FY26：Azure +43%、Copilot 座席翻倍、股价 +17%；OpenAI 关系重构为股权 + $2500亿 Azure 承诺。焦点从「变现能否兑现」转到「capex $50B+/季 的回报 + 折旧口径」。仓位接近目标。" },
    { date: "2026-08-26", label: "AI 辅助初稿（待认领）", note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」。" },
    { date: "未来", label: "什么会让我改变主意", note: "留白。Copilot 变现或 OpenAI 关系的实质变化时更新。" },
  ],

  // 逐条证伪条件在各 thesis 的 invalidation（唯一真相来源，页面自动派生）。此处只留跨逻辑 / 存续性风险。MSFT 暂无。
  risks: [],

  stockWhy: { label: "MSFT · Stock Why 维基", url: "https://stock-why-wiki-site.vercel.app/stocks/MSFT", note: "市场波动的因果溯源在 Stock Why 维基；这本账本只问它是否改变了逻辑。" },
};
