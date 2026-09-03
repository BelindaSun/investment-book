/*
 * Investment Book —— META 数据文件。枚举 key 英文，界面中文。
 * 时效数字标 (待核实)；持仓为「占位」示例。代码/FCF/CapEx/P/E 等保留英文。
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA.META = {
  ticker: "META",
  name: "Meta Platforms Inc.",
  tier: "core",
  holdingStatus: "held",
  tagline: "AI 增强的全球广告机器，正把利润换未来平台。",
  oneLiner:
    "地球上最大的注意力平台，AI 已经可量化地提升广告效率。核心张力已从「AI 能否改善广告」转向「AI 带来的增量利润能否持续超过它消耗的算力、人才和基础设施资本」。",
  updated: "2026-08-29",
  thesisStatus: "Healthy",
  statusNote:
    "Q2 2026 Healthy / Mixed——经营逻辑强化，资本回报恶化。广告 +27% 到 $594亿（展示量 +14%、单价 +12%），Family DAP 3.60B，Instagram 使用时长双位数增长，AI 广告工具产生可量化经营效果；但总费用 +55%，FoA 营业利润反降6%，合并营业利润率从43%降至31%，Q2 CapEx $311亿，FCF 仅 $7.84亿，长期债务升至 $837亿，上半年未回购。即使剔除 $24亿法律费用与 $12亿裁员费用，资本投入压力仍真实存在。",

  currentDecision: "持有",
  decisionReason:
    "核心广告靠 AI 持续增强、护城河深；但收入增长28%的同时费用增长55%，Q2 FCF 仅 $7.84亿。当前不动仓位，盯 AI 投入能否转化为超过成本的增量利润。",
  nextDecisionTriggers: [
    "广告增速转负、或参与时长结构性下滑",
    "AI 带来的广告效率提升（展示量 / 单价 / 转化率）停滞",
    "FoA 营业利润、利润率和 FCF 连续数季下降，且新增 Agent/API/算力业务无法形成可观收入",
    "一次平台政策/监管变化结构性削弱广告定向",
  ],

  sources: {
    "px-2026-08-12": { label: "大型科技股行情（Motley Fool 汇总）", url: "https://www.fool.com/investing/2026/08/12/alphabet-amazon-meta-platforms-and-microsoft-this/", date: "2026-08-12", type: "media" },
    "q2-2026": { label: "Meta 2026 Q2 业绩（2026-07-29；以官方 IR 为准）", url: "https://www.cnbc.com/2026/07/29/meta-q2-earnings-report-2026.html", date: "2026-07-29", type: "media" },
  },

  whyIOwnIt: [
    "全球 3.60B 日活构成的注意力护城河，广告定价权强；AI 推荐与广告工具已产生可量化的经营效果（展示量 +14%、单价 +12%、Advantage+ 年化 run rate 超 $750亿）。",
    "Meta AI、Business Agents 和付费 API 正在把模型能力从内部广告工具扩展为潜在的独立收入平台——虽尚未证明，但分发入口（WhatsApp/Messenger/Instagram）已具备。",
    "现金流仍为正、现金 $902亿，能支撑大规模 AI 投入和 Reality Labs 长久期期权；但资本纪律成为核心盯点。",
  ],

  position: {
    note: "占位——请替换成真实数字。质量和估值分开。",
    shares: 30,
    avgCost: 300.0,
    currentPrice: 578.85,
    priceAsOf: "2026-08-12",
    portfolioWeight: 6.0,
    targetWeight: 7.0,
    addRange: "回撤到成本附近、或市场再次为 AI capex / Reality Labs 恐慌杀估值时加仓",
    reduceRange: "仓位超过组合约 10%、或广告增速与参与度同时转弱时减仓",
    qualityNote: "质量：高。注意力护城河、AI 提效、强广告增长；瑕疵在费用增速远超收入增速、FCF 被压缩。",
    valuationNote: "估值：META 主要依赖 Family of Apps 广告现金流定价，Reality Labs 与新 AI 平台业务的价值高度不确定；当前资本开支显著增加了估值对长期回报假设的敏感度。",
  },

  theses: [
    {
      id: "ads-moat",
      title: "全球注意力与广告分发护城河",
      pillar: "广告护城河",
      status: "Strong",
      trend: "up",
      statement:
        "Meta 能否继续拥有用户注意力和广告需求？Instagram + Facebook + WhatsApp + Threads 的注意力池是双边网络护城河，用户规模与参与时长持续增长，广告量价齐升。",
      marketMisunderstanding: "空头周期性担心「用户见顶/年轻人流失」；但变现效率的提升与新产品扩展（Threads、WhatsApp Status 广告），往往比用户数更能驱动收入。",
      supporting: [
        { text: "Q2 2026 广告收入 $594亿、+27% 同比；展示量 +14%、单均价 +12%——量价齐升。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Family DAP 3.60B，+3% 同比。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Instagram 使用时长保持双位数增长。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Facebook 视频时长 +9%。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Threads 已完成全球广告扩展。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "WhatsApp Status 广告正在推进。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "TikTok 争夺年轻用户注意力。", tag: "FACT" },
        { text: "宏观广告预算波动会传导；Q3 指引 $610–640亿（含 1% 汇率逆风）偏软。", tag: "FACT", source: "q2-2026", asOf: "2026-07-29" },
      ],
      keyMetrics: ["广告收入增速", "展示量 / 单均价", "Family DAP", "参与时长"],
      invalidation: "若 广告增速转负、且参与时长结构性下滑，则 广告护城河逻辑转弱。",
      updated: "2026-08-29",
    },
    {
      id: "ai-advertising",
      title: "AI 推荐与广告效率提升",
      pillar: "AI 广告",
      status: "Strong",
      trend: "up",
      statement:
        "AI 是否让相同流量产生更高的广告价值？本季已有具体经营证据：AI 不仅是隐形加速器，而是通过更高参与度、广告匹配、转化率和自动化工具进入了核心广告经济。",
      marketMisunderstanding: "市场把「AI 变现」想成新产品；Meta 的 AI 变现最直接的形式是让既有广告机器更值钱——而且已经在发生。",
      supporting: [
        { text: "新广告模型令 Facebook 广告点击量提高8.3%、转化率提高15.7%。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Instagram 相关试验令 app-event conversions 提高1%。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Advantage+ 年化收入 run rate 超过 $750亿。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "超过 9M 小企业使用至少一种 AI 广告创意工具。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "AI 图片生成工具当季采用量翻倍。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Q2 展示量 +14% 且单均价 +12% 同时发生——量价齐升。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "AI 提效的边际收益可能递减。", tag: "INFERENCE" },
        { text: "平均广告价格增长也受宏观环境、汇率、广告负载、地区与产品组合影响——不能把所有广告增长都归因于 AI。", tag: "INFERENCE" },
      ],
      keyMetrics: ["展示量增速", "单均价增速", "转化率改善", "Advantage+ 收入 run rate", "AI 广告工具采用率"],
      invalidation: "若 AI 带来的广告效率提升（展示量 / 单价 / 转化率）停滞，则 AI 广告逻辑减弱。",
      updated: "2026-08-29",
    },
    {
      id: "ai-platform",
      title: "Meta AI / Agents / API：新收入平台",
      pillar: "AI 平台",
      status: "Strengthening",
      trend: "up",
      statement:
        "Meta 能否把模型、Agent 与算力从内部广告工具扩展为新的独立收入平台？Meta AI、Muse 系列模型、Business Agents、付费 API 和潜在的算力服务正在形成——但尚未证明规模化收入能力。",
      marketMisunderstanding: "有人仍用「免费开源怎么赚钱」的旧框架看 Meta AI 战略；但 Meta 正在通过竞争性 API、订阅和企业服务直接收费，「开放权重」不再是整个战略的充分概括。",
      supporting: [
        { text: "Meta AI 重建后，每日互动用户增长60%。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "超过 1M 企业每周使用 Meta Business Agents。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Meta 已推出付费模型 API（Muse Spark API）。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "WhatsApp/Messenger 已成为 Business Agents 的分发入口。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "管理层提出订阅、按量计费、按效果收费和直接出售算力等多种变现模式。", tag: "FACT", source: "q2-2026", asOf: "2026-07-29" },
        { text: "FoA other revenue 首次达到 $10亿，+73%，主要由 WhatsApp paid messaging 和 subscriptions 推动。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Llama 仍是被广泛采用的开源模型之一，支撑开发者生态。", tag: "FACT" },
      ],
      contrary: [
        { text: "新业务收入目前仍不够重大——FoA other revenue $10亿 vs 广告 $594亿。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "模型和 Agent 竞争激烈（OpenAI、Google、Amazon 等）。", tag: "FACT" },
        { text: "大量第三方 AI token 成本正在增加费用。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Muse/Meta AI 能否建立稳定开发者生态仍未证明。", tag: "INFERENCE" },
      ],
      keyMetrics: ["Meta AI 活跃用户", "Business Agents 企业数", "FoA other revenue 增速", "API 收入", "Llama 采用度"],
      invalidation: "若 Meta AI / Agents / API 持续无法形成可观独立收入，而 AI 投入成本持续攀升，则新平台逻辑减弱。",
      updated: "2026-08-29",
    },
    {
      id: "reality-labs",
      title: "AI 眼镜与下一代计算平台",
      pillar: "下一代入口",
      status: "Watching",
      trend: "flat",
      statement:
        "AI 眼镜能否成为真正的下一代消费入口，并最终产生足以覆盖 Reality Labs 长期亏损的收入与平台价值？真实期权仍在，但经济回报遥远。",
      marketMisunderstanding: "多头因 AI 眼镜增长就说 Reality Labs 期权正在兑现；但 Quest/VR 疲弱、整体巨亏未收窄——不能混淆产品信号与财务回报。",
      supporting: [
        { text: "Reality Labs Q2 收入 $4.31亿，+16%；AI 眼镜收入增长强劲。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "AI 眼镜出现早期正面产品信号。", tag: "INFERENCE", source: "q2-2026", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "Reality Labs Q2 营业亏损 $46.2亿（略高于上年同期 $45.3亿），未见收窄。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Quest 销量下降。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "收入 $4.31亿 vs 亏损 $46.2亿——经济回报极其遥远。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
      ],
      keyMetrics: ["Reality Labs 收入增速", "Reality Labs 季度亏损", "AI 眼镜出货量与用户反馈", "Quest 销量"],
      invalidation: "若 AI 眼镜未能成为有用户粘性的消费入口、且 Reality Labs 亏损加速扩大，则期权逻辑转为 Weakening。",
      updated: "2026-08-29",
    },
    {
      id: "ai-capex-fcf",
      title: "AI CapEx → 营业利润与 FCF",
      pillar: "资本回报",
      status: "Watching",
      trend: "warn",
      statement:
        "AI 投入必须转化为增量营业利润与自由现金流。Meta 已证明 AI 可以提高广告收入和参与度，但尚未证明这些增量收益能持续超过模型、人才、芯片、数据中心和第三方云服务的成本。",
      marketMisunderstanding: "多头把烧钱当「投未来」，空头当纯毁灭。现实取决于广告增量利润能否赶上或超过 AI 投入的增速——不是赌方向，是比速度。",
      supporting: [
        { text: "广告收入 +27%（$594亿），AI 广告效率提升已产生可量化经营效果。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "公司预计 FY26 营业利润仍高于2025年。", tag: "FACT", source: "q2-2026", asOf: "2026-07-29" },
        { text: "现金 $902亿，暂时扛得住高投入节奏。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "Q2 CapEx $311亿；FY26 CapEx 指引 $1300–1450亿。", tag: "FACT", source: "q2-2026", asOf: "2026-07-29" },
        { text: "Q2 经营现金流 $319亿，但 FCF 仅 $7.84亿——几乎全部被 capex 吞掉。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "上半年 FCF $132亿，低于上年同期 $189亿。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "总费用同比增长55%；研发费用达 $217亿，+67%。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "FoA 营业利润反降6%，合并营业利润降8%，营业利润率从43%降至31%。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "长期债务升至 $837亿；上半年未回购股票。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "基础设施成本、第三方云支出和第三方 AI token 成本均在上升。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
      ],
      keyMetrics: ["CapEx", "经营现金流 OCF", "自由现金流 FCF", "FoA 营业利润率", "研发 / 收入比", "基础设施成本增速", "广告增量收入 vs AI 投入增速", "长期债务与外部基础设施融资义务"],
      invalidation: "若广告收入与参与度仍增长，但 FoA 营业利润、利润率和 FCF 连续数季下降，且新增 Agent/API/算力业务无法形成可观收入，则 AI 投入开始从护城河建设转为价值稀释。",
      updated: "2026-08-29",
    },
    {
      id: "platform-regulation",
      title: "平台依赖与监管是持续风险",
      pillar: "平台 / 监管",
      status: "Watching",
      trend: "down",
      statement:
        "Meta 的广告受制于第三方平台（Apple ATT 曾重创定向），并长期暴露于隐私、反垄断和青少年安全监管。是持续的税与摩擦，而非致命伤。",
      marketMisunderstanding: "标题党把每次监管都当致命；现实是摩擦 + 罚款，外加平台政策变化的尾部风险。",
      supporting: [{ text: "Meta 已从 ATT 冲击中靠 AI 定向部分恢复。", tag: "FACT" }],
      contrary: [
        { text: "Apple 等平台政策变化可再次冲击定向；Apple 在下一代 AI 设备与平台入口上也是潜在竞争者。", tag: "FACT" },
        { text: "全球隐私/反垄断监管趋严。", tag: "FACT" },
      ],
      keyMetrics: ["定向效率", "监管罚款", "平台政策变化"],
      invalidation: "若 一次平台政策或监管变化结构性削弱广告定向、且无法用 AI 补回，则 广告逻辑受损。",
      updated: "2026-08-29",
    },
  ],

  business: [
    { name: "广告（Family of Apps）", role: "现金引擎", howItMakesMoney: "在 Instagram、Facebook、WhatsApp、Threads 的注意力上投放广告。Q2 广告收入 $594亿，+27%。", note: "几乎全部利润来源；AI 推荐与广告工具持续增强变现效率。" },
    { name: "AI 平台（Meta AI / Agents / API）", role: "新兴收入引擎（待验证）", howItMakesMoney: "Meta AI 消费端、Business Agents 企业端、Muse Spark 付费 API、潜在算力服务。", note: "分发入口已具备（WhatsApp/Messenger/Instagram），变现模式探索中（订阅、按量、按效果、算力出售）。" },
    { name: "WhatsApp / 商业消息", role: "新兴收入引擎（待验证）", howItMakesMoney: "WhatsApp paid messaging、subscriptions；FoA other revenue Q2 首次达 $10亿，+73%。", note: "可能让 Meta 从纯广告逐步增加商业消息、企业 Agents、交易与效果收费。" },
    { name: "Reality Labs（AR / VR / AI 眼镜）", role: "长久期期权 / 烧钱", howItMakesMoney: "Quest 硬件 + AI 眼镜 + 未来平台，目前巨亏（Q2 -$46.2亿）。", note: "AI 眼镜有早期正面信号，Quest 疲弱；整体经济回报遥远。" },
  ],

  aiMoat: {
    summary: "核心问题：AI 是扩大 Meta 的广告护城河并开辟新平台，还是把它拖进无止境的算力军备竞赛？",
    verdict: "我的判断：广告端净扩大——AI 直接让核心广告更值钱，且已有可量化证据。但 AI 投入正吞噬利润和现金流，新平台收入尚未证明。风险在资本回报时序。",
    factors: [
      { name: "AI 推荐/广告", note: "直接提升参与、ROAS 与转化率；已有 8.3% 点击提升、15.7% 转化提升等具体证据。", direction: "up" },
      { name: "注意力分发 + 推荐模型 + 广告数据", note: "数十亿用户行为数据喂养模型与定向；Threads/WhatsApp 扩展广告库存。", direction: "up" },
      { name: "消息分发 + Agent 平台", note: "WhatsApp/Messenger 成为 Business Agents 天然入口；1M+ 企业每周使用。", direction: "up" },
      { name: "开放权重 Llama + 开发者生态", note: "商品化对手模型层，Llama 仍是广泛采用的开源模型之一。", direction: "up" },
      { name: "AI capex", note: "算力军备竞赛（2026 指引 $1300–1450亿），Q2 把 FCF 砸到 $7.84亿。", direction: "warn" },
      { name: "Reality Labs 烧钱", note: "Q2 亏损 $46.2亿/季，未见收窄。", direction: "warn" },
    ],
    cannibalization: "张力：Meta 的 AI 不蚕食自己的广告（不像 Google Search），反而增强它。真正的张力在于：收入增长28%但费用增长55%——AI 带来的增量利润能否持续超过它消耗的资本，是当前投资案例的核心悬念。",
  },

  drivers: [
    { name: "广告需求", why: "宏观广告预算驱动几乎全部利润。", direction: "flat" },
    { name: "用户参与时长", why: "AI 推荐驱动的时长决定广告库存。Instagram 双位数增长、Facebook 视频 +9%。", direction: "up" },
    { name: "广告效率（ROAS / 转化率）", why: "AI 提效决定单位流量变现。新模型点击 +8.3%、转化 +15.7%。", direction: "up" },
    { name: "新平台收入", why: "Meta AI / Business Agents / API / WhatsApp 付费消息——从零到一。", direction: "up" },
    { name: "平台政策（Apple ATT 等）", why: "第三方平台变化影响定向。Apple 也是下一代 AI 设备竞争者。", direction: "down" },
    { name: "AI capex + 费用增速", why: "增长/期权的燃料，也是利润和 FCF 拖累。费用 +55% vs 收入 +28%。", direction: "warn" },
  ],

  ecosystem: {
    upstream: [
      { name: "NVDA GPU", note: "AI 训练算力（大规模采购方）" },
      { name: "自研 MTIA 芯片", note: "推理降本；正通过自研芯片降低对单一供应商依赖" },
      { name: "TSMC", note: "芯片代工（间接）" },
      { name: "电力与数据中心合作伙伴", note: "大规模 AI 基础设施的电力与物理扩展" },
      { name: "第三方云与模型供应商", note: "第三方 AI token 成本上升中" },
      { name: "BlackRock 等基础设施资本伙伴", note: "通过外部资本合作降低内部融资压力" },
    ],
    self: [
      { name: "Family of Apps", note: "注意力 + 广告" },
      { name: "AI（推荐 / 广告工具 / Meta AI / Agents）", note: "广告加速器 + 新平台" },
      { name: "WhatsApp / 商业消息", note: "企业 Agent 分发入口与新兴付费业务" },
      { name: "Reality Labs", note: "AI 眼镜 + 下一代平台期权" },
    ],
    downstream: [
      { name: "广告主", note: "付费客户（9M+ 小企业使用 AI 广告创意工具）" },
      { name: "消费者", note: "3.60B Family DAP" },
      { name: "创作者", note: "内容生态" },
      { name: "开发者", note: "Llama 开源生态 + Muse API 客户" },
      { name: "企业客户", note: "Business Agents（1M+ 企业每周使用）+ API 客户" },
    ],
  },

  competition: [
    { name: "TikTok（字节）", attacking: "年轻用户注意力与短视频广告。", moatTargeted: "参与时长与广告份额。", evidence: "短视频争夺时长。", threat: "High", thesisImpact: "施压广告护城河的用户端。" },
    { name: "Google（YouTube + 广告）", attacking: "数字广告预算。", moatTargeted: "广告份额。", evidence: "同争一份广告费。", threat: "Medium", thesisImpact: "广告竞争，非致命。" },
    { name: "OpenAI / Google", attacking: "Consumer assistant、API 和企业 Agent。", moatTargeted: "Meta AI / Agents / API 新平台 + Llama 开发者心智。", evidence: "前沿闭源模型持续迭代；ChatGPT/Gemini 直接竞争消费 AI 助手与开发者生态。", threat: "Medium", thesisImpact: "压制新平台收入潜力与开源心智。" },
    { name: "Amazon / Microsoft", attacking: "企业 AI、算力和 Agent 平台。", moatTargeted: "Meta 的企业 Agent 与 API 业务。", evidence: "AWS/Azure 在企业 AI 基础设施与 Agent 平台有先发优势。", threat: "Medium", thesisImpact: "可能限制 Meta 企业 AI 平台的扩展空间。" },
    { name: "Apple", attacking: "平台政策（ATT）+ 下一代 AI 设备与平台入口。", moatTargeted: "广告定向 + AI 眼镜 / Reality Labs。", evidence: "ATT 曾重创定向；Apple 的 AI 设备与平台生态可能争夺下一代入口。", threat: "Medium", thesisImpact: "平台依赖风险 + 下一代设备竞争。" },
  ],

  metrics: [
    { label: "广告收入增速", latest: "Q2 2026 +27%（$594亿）", spark: [22, 24, 21, 23, 25, 27], unit: "% 同比", good: "up", note: "护城河健康的核心信号——量价齐升。", judgment: true },
    { label: "自由现金流 FCF", latest: "Q2 $7.84亿（上季 $85亿）", spark: [8.5, 8, 7, 6, 4, 0.78], unit: "$B/季", good: "up", note: "被 AI capex 压缩——资本回报的最尖锐信号。", judgment: true },
    { label: "FoA 营业利润率", latest: "Q2 降至约 43%（合并31%）；FoA 营业利润同比 -6%", spark: [50, 48, 46, 45, 44, 43], unit: "%", good: "up", note: "费用增速（+55%）远超收入增速（+28%），利润率被压缩。", judgment: true },
    { label: "Reality Labs 季度亏损", latest: "Q2 -$46.2亿（收入 $4.31亿，+16%）", spark: [-3, -4, -4, -4.2, -4.4, -4.62], unit: "$B/季", good: "up", note: "亏损未见收窄；AI 眼镜有早期正面信号但 Quest 疲弱。", judgment: true },
    { label: "CapEx", latest: "Q2 $311亿（FY26 指引 $1300–1450亿）", spark: [40, 65, 90, 110, 130, 145], unit: "$B/年", note: "AI 算力投入——方向有歧义。", judgment: true },
    { label: "研发 / 收入", latest: "Q2 研发 $217亿，+67%", spark: [28, 30, 32, 34, 36, 36], unit: "%", note: "研发增速远超收入增速。" },
    { label: "长期债务", latest: "$837亿", spark: [30, 40, 50, 60, 70, 83.7], unit: "$B", note: "上半年未回购；债务持续攀升。" },
  ],

  financials: {
    note: "约数 / 示意——依赖前请对照财报核实。",
    rows: [
      { label: "总收入", values: ["约 $164B", "约 $190B", "Q2 $608亿（+28%）"], periods: ["FY24", "FY25", "2026Q2"] },
      { label: "广告收入", values: ["—", "—", "Q2 $594亿（+27%）"], periods: ["", "", "2026Q2"] },
      { label: "合并营业利润率", values: ["约 42%", "约 43%", "Q2 约 31%（-8%）"], periods: ["FY24", "FY25", "2026Q2"] },
      { label: "FoA 营业利润", values: ["—", "—", "Q2 同比 -6%"], periods: ["", "", "2026Q2"] },
      { label: "总费用", values: ["—", "—", "Q2 同比 +55%"], periods: ["", "", "2026Q2"] },
      { label: "EPS", values: ["约 $22", "约 $26", "约 $28"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "FoA other revenue", values: ["—", "—", "Q2 $10亿（+73%）"], periods: ["", "", "2026Q2"] },
      { label: "Reality Labs 季度亏损", values: ["约 -$4B", "约 -$4.4B", "Q2 -$46.2亿"], periods: ["", "", "2026Q2"] },
      { label: "经营现金流 OCF（季度）", values: ["—", "—", "Q2 $319亿"], periods: ["", "", "2026Q2"] },
      { label: "自由现金流 FCF（季度）", values: ["约 $8.5B", "—", "Q2 $7.84亿"], periods: ["前季", "", "2026Q2"] },
      { label: "CapEx", values: ["约 $40B", "约 $65B", "FY26 指引 $1300–1450亿"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "研发费用", values: ["—", "—", "Q2 $217亿（+67%）"], periods: ["", "", "2026Q2"] },
      { label: "现金 / 长期债务", values: ["—", "—", "$902亿 / $837亿"], periods: ["", "", "2026Q2"] },
      { label: "P/E（前瞻）", values: ["—", "约 24x", "—"], periods: ["", "当前", ""] },
    ],
    impliedExpectations: "META 的估值主要依赖 Family of Apps 广告现金流，而 Reality Labs 与新 AI 平台业务的价值高度不确定；当前资本开支显著增加了估值对长期回报假设的敏感度。若广告现金流能扛住 capex 并换来回报，重估是上行；若费用增速持续远超收入增速、FCF 长期承压，则拖累。",
  },

  timeline: [
    { date: "2026-08-29", event: "Q2 2026 财报后整改：重构 thesis 结构", whyItMatters: "五条核心 thesis（广告护城河 Strong ↑、AI 广告 Strong ↑、AI 平台 Strengthening ↑、AI 眼镜 Watching →、AI CapEx→FCF Watching ⚠）+ 监管风险独立。数据与措辞全面更新。", node: "全部", thesisImpact: "flat", action: "不动仓位——thesis 结构调整，非交易信号。", source: null, related: null },
    { date: "2026-08-26", event: "为 META 开立投资账本（起点）", whyItMatters: "基线快照。", node: "全部", thesisImpact: "flat", action: "不动仓位——建立记录。", source: null, related: null },
    { date: "2026-07-29", event: "Q2 2026 财报：广告 +27%（$594亿，量价齐升）；但费用 +55%、FCF 仅 $7.84亿、RL 亏损 $46.2亿", whyItMatters: "Healthy / Mixed——AI 广告引擎兑现但资本回报恶化。收入 +28% vs 费用 +55%，FoA 营业利润反降6%，合并利润率从43%降至31%，CapEx $311亿，长期债务 $837亿，上半年未回购。核心争议从「AI 提效行不行」转向「AI 增量利润能否超过资本消耗」。", node: "广告 / AI 广告 / 资本回报", thesisImpact: "flat", action: "不动仓位——广告护城河与 AI 提效强化 vs 资本回报警报并存。盯 FCF、利润率与费用增速趋势。", source: { label: "Meta Q2 2026 IR / CNBC", url: "https://www.cnbc.com/2026/07/29/meta-q2-earnings-report-2026.html" }, related: { label: "Stock Why · META 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/META#2026-08-24" } },
  ],

  thesisEvolution: [
    { date: "2021–2022", label: "元宇宙豪赌引发信任危机", note: "改名 Meta + RL 巨额烧钱 + ATT 冲击，股价一度腰斩。" },
    { date: "2023", label: "「效率之年」+ AI 推荐反转", note: "大幅降本、AI 推荐提升参与与广告，利润与股价强劲修复。" },
    { date: "2024–2025", label: "AI 提效 + 开源 Llama 成型", note: "AI 成为广告隐形加速器，Llama 成开源事实标准之一。" },
    { date: "2026（当前）", label: "Healthy / Mixed：广告与 AI 提效强化，资本回报恶化", note: "Q2 2026：广告 +27%、AI 广告工具产生可量化效果（点击 +8.3%、转化 +15.7%、Advantage+ run rate $750亿+）、Meta AI 与 Business Agents 起步。但费用 +55%、FoA 营业利润 -6%、利润率 43%→31%、FCF 仅 $7.84亿、长期债务 $837亿。核心张力从「AI 能否改善广告」转向「AI 增量利润能否超过资本消耗」。Thesis 结构重组为五条。" },
    { date: "2026-08-26", label: "AI 辅助初稿（待认领）", note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」。" },
    { date: "未来", label: "什么会让我改变主意", note: "留白。广告增速、AI 投入回报、或新平台收入的实质变化时更新。" },
  ],

  risks: [],

  stockWhy: { label: "META · Stock Why 维基", url: "https://stock-why-wiki-site.vercel.app/stocks/META", note: "市场波动的因果溯源在 Stock Why 维基；这本账本只问它是否改变了逻辑。" },
};
