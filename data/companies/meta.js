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
  tagline: "广告机器供养一场昂贵的 AI / 元宇宙豪赌。",
  oneLiner:
    "地球上最大的注意力平台，把广告现金流拿去下两个巨注：用 AI 增强广告与参与度，用开放权重 Llama 争 AI 生态。真正的悬念是 Reality Labs 的黑洞会不会被 AI 的回报盖过。",
  updated: "2026-08-27",
  thesisStatus: "Healthy",
  statusNote:
    "Q2 2026（7/29）呈现「广告很猛、现金流被砸」的分裂图景：广告 +27% 到 $594亿（展示量 +14%、单价 +12%），AI 广告引擎在兑现；但 AI capex 把季度自由现金流从 $85亿砸到仅 $7.84亿，Reality Labs 亏损扩大到 $46.2亿/季，股价财报后下跌（与 MSFT/AMZN 的跳涨相反）。核心争议已从「AI 提效行不行」转向「广告现金流能不能扛住 $1300–1450亿 的 capex + RL 烧钱」。",

  currentDecision: "持有",
  decisionReason:
    "核心广告靠 AI 持续增强、护城河深，估值基本只按广告定价；但本季 FCF 被 capex 砸到 $7.84亿、RL 亏损扩大——资本纪律成了新焦点。当前不动仓位，盯现金流与烧钱节奏。",
  nextDecisionTriggers: [
    "广告增速转负、或参与时长结构性下滑",
    "AI 带来的广告效率提升（展示量 / 单价）停滞",
    "AI capex + RL 烧钱持续吞掉广告现金流、FCF 长期承压",
    "一次平台政策/监管变化结构性削弱广告定向",
  ],

  sources: {
    "px-2026-08-12": { label: "大型科技股行情（Motley Fool 汇总）", url: "https://www.fool.com/investing/2026/08/12/alphabet-amazon-meta-platforms-and-microsoft-this/", date: "2026-08-12", type: "media" },
    "q2-2026": { label: "Meta 2026 Q2 业绩（2026-07-29；以官方 IR 为准）", url: "https://www.cnbc.com/2026/07/29/meta-q2-earnings-report-2026.html", date: "2026-07-29", type: "media" },
  },

  whyIOwnIt: [
    "全球数十亿日活构成的注意力护城河（这是判断，不是「垄断」这类事实断言），广告定价权强，AI 正在实实在在提升广告效率（Advantage+）。",
    "开放权重 Llama 是聪明的生态策略——把模型商品化，削弱对手的付费护城河，同时握住分发。",
    "现金流足够厚，能一边回购、一边给 Reality Labs 这类长久期期权买单。",
  ],

  position: {
    note: "占位——请替换成真实数字。质量和估值分开。",
    shares: 30,
    avgCost: 300.0,
    currentPrice: 578.85, // 2026-08-12 网络行情快照，非实时
    priceAsOf: "2026-08-12",
    portfolioWeight: 6.0,
    targetWeight: 7.0,
    addRange: "回撤到成本附近、或市场再次为 Reality Labs 恐慌杀估值时加仓",
    reduceRange: "仓位超过组合约 10%、或广告增速与参与度同时转弱时减仓",
    qualityNote: "质量：高。注意力护城河、AI 提效、强现金流；瑕疵在资本配置纪律（RL 烧钱）。",
    valuationNote: "估值：合理。市场按广告给估值，Reality Labs 基本被当成负期权而非资产。",
  },

  theses: [
    {
      id: "ads-moat",
      title: "核心广告靠 AI 持续增强，护城河深",
      pillar: "广告护城河",
      status: "Strong",
      trend: "up",
      statement:
        "Instagram + Facebook + WhatsApp 的注意力池是双边网络护城河。AI 驱动的推荐和 Advantage+ 广告工具，在同样的流量上榨出更高的变现效率。",
      marketMisunderstanding: "空头周期性担心「用户见顶/年轻人流失」；但变现效率的提升，往往比用户数更能驱动收入。",
      supporting: [
        { text: "Q2 2026 广告收入 $594 亿、+27% 同比；展示量 +14%、单均价 +12%——量价齐升。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Advantage+ 自动化广告放量。", tag: "FACT" },
        { text: "三大 App 的网络效应难以复制。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "TikTok 争夺年轻用户注意力。", tag: "FACT" },
        { text: "宏观广告预算波动会传导；Q3 指引 $610–640亿（含 1% 汇率逆风）偏软。", tag: "FACT", source: "q2-2026", asOf: "2026-07-29" },
      ],
      keyMetrics: ["广告收入增速", "展示量 / 单均价", "参与时长"],
      invalidation: "若 广告增速转负、且参与时长结构性下滑，则 广告护城河逻辑转弱。",
      updated: "2026-08-26",
    },
    {
      id: "ai-advertising",
      title: "AI 提升参与度与广告效率",
      pillar: "AI 广告",
      status: "Strengthening",
      trend: "up",
      statement:
        "AI 既是内容推荐引擎（更长的参与），也是广告工具（更高的 ROAS）。对 Meta 而言，AI 最直接的变现不是聊天机器人，而是让既有广告机器更值钱。",
      marketMisunderstanding: "市场把「AI 变现」想成新产品；Meta 的 AI 变现其实是核心广告的隐形加速器。",
      supporting: [
        { text: "Q2 展示量 +14% 且单均价 +12% 同时发生——AI 既扩了库存、又抬了变现，是「隐形加速器」的直接证据。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "生成式广告创意工具降低广告主门槛。", tag: "FACT" },
      ],
      contrary: [{ text: "AI 提效的边际收益可能递减。", tag: "INFERENCE" }],
      keyMetrics: ["展示量增速", "单均价增速", "ROAS 改善"],
      invalidation: "若 AI 带来的广告效率提升（展示量 / 单价）停滞，则 AI 广告逻辑减弱。",
      updated: "2026-08-26",
    },
    {
      id: "open-llama",
      title: "开放权重 Llama 是分发与生态策略",
      pillar: "开源 AI",
      status: "Healthy",
      trend: "flat",
      statement:
        "把 Llama 开放，商品化了对手（OpenAI/Google）赖以收费的模型层，同时让 Meta 成为开源 AI 事实标准、握住开发者心智——而它自己靠广告而非卖模型赚钱。",
      marketMisunderstanding: "有人问「免费开源怎么赚钱」；关键是 Meta 不靠卖模型赚钱，开源是削弱对手护城河的战略武器。",
      supporting: [
        { text: "Llama 是被广泛采用的开源模型之一。", tag: "FACT" },
        { text: "Meta 的收入来自广告，不依赖模型收费。", tag: "FACT" },
      ],
      contrary: [
        { text: "开源投入巨大而直接回报间接。", tag: "INFERENCE" },
        { text: "前沿闭源模型若持续领先，开源心智可能被稀释。", tag: "INFERENCE" },
      ],
      keyMetrics: ["Llama 采用度", "开发者生态", "AI 资本投入"],
      invalidation: "若 Llama 在能力上持续落后、且开源心智被夺，则 生态策略价值下降。",
      updated: "2026-08-26",
    },
    {
      id: "reality-labs",
      title: "资本纪律：AI capex + Reality Labs 烧钱 vs 广告现金流",
      pillar: "资本纪律 / 烧钱",
      status: "Watching",
      trend: "warn",
      statement:
        "两处巨额烧钱同时压现金流：AI 数据中心 capex（2026 指引 $1300–1450亿）+ Reality Labs（Q2 亏损 $46.2亿/季）。Q2 自由现金流被砸到只剩 $7.84亿（上季 $85亿）。核心问题不再只是「RL 是不是黑洞」，而是「广告的现金流能不能扛住整体烧钱、并最终换来回报」。（注：本季把原「Reality Labs」逻辑扩展为整体资本纪律——待 Belinda 认领。）",
      marketMisunderstanding: "多头把烧钱当「投未来」，空头当纯毁灭。现实取决于烧钱规模是否受控、广告现金流是否够扛、以及有无回报里程碑。",
      supporting: [{ text: "现金流仍为正（$7.84亿）、现金 $902亿，暂时扛得住；广告增量在部分承接 AI 投入。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" }],
      contrary: [
        { text: "Q2 自由现金流从 $85亿 暴跌到 $7.84亿——AI capex（Q2 $310亿）是主因。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Reality Labs 亏损扩大到 $46.2亿/季（收入仅 $4.31亿），未见收窄。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "2026 capex 指引 $1300–1450亿，绝对规模巨大。", tag: "FACT", source: "q2-2026", asOf: "2026-07-29" },
      ],
      keyMetrics: ["自由现金流 FCF", "CapEx", "Reality Labs 亏损", "capex+RL / 广告现金流"],
      invalidation: "若 AI capex + RL 烧钱持续扩大、而广告现金流无法承接、FCF 长期显著承压或转负，则 资本纪律逻辑转为 Weakening。",
      updated: "2026-08-27",
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
        { text: "Apple 等平台政策变化可再次冲击定向。", tag: "FACT" },
        { text: "全球隐私/反垄断监管趋严。", tag: "FACT" },
      ],
      keyMetrics: ["定向效率", "监管罚款", "平台政策变化"],
      invalidation: "若 一次平台政策或监管变化结构性削弱广告定向、且无法用 AI 补回，则 广告逻辑受损。",
      updated: "2026-08-26",
    },
  ],

  business: [
    { name: "广告（Family of Apps）", role: "现金引擎", howItMakesMoney: "在 Instagram、Facebook、WhatsApp、Threads 的注意力上投放广告。", note: "几乎全部利润来源。" },
    { name: "AI（推荐 + Llama + Meta AI）", role: "隐形加速器", howItMakesMoney: "间接——提升广告效率与参与度；Llama 不直接收费。", note: "Meta 的 AI 变现藏在广告里。" },
    { name: "Reality Labs（元宇宙 / AR / VR）", role: "长久期期权 / 烧钱", howItMakesMoney: "Quest 硬件 + 未来平台，目前巨亏（Q2 -$46.2亿）。", note: "期权还是黑洞，取决于纪律；如今和 AI capex 一起压现金流。" },
  ],

  aiMoat: {
    summary: "核心问题：AI 是扩大 Meta 的广告护城河，还是把它拖进无止境的算力军备竞赛？",
    verdict: "我的判断：净扩大——AI 直接让核心广告更值钱，开源 Llama 削弱对手护城河。风险在 Reality Labs + AI capex 的烧钱纪律。",
    factors: [
      { name: "AI 推荐/广告", note: "直接提升参与与 ROAS。", direction: "up" },
      { name: "开放权重 Llama", note: "商品化对手模型层，握开发者心智。", direction: "up" },
      { name: "数据 + 分发", note: "数十亿用户行为数据喂养模型与定向。", direction: "up" },
      { name: "AI capex", note: "算力军备竞赛（2026 指引 $1300–1450亿），Q2 把 FCF 砸到 $7.84亿。", direction: "warn" },
      { name: "Reality Labs 烧钱", note: "Q2 亏损扩大到 $46.2亿/季，未见收窄。", direction: "warn" },
    ],
    cannibalization: "张力：Meta 的 AI 不太蚕食自己的广告（不像 Google 的 Search），反而增强它（Q2 展示量 +14%、单价 +12%）。真正的张力在于——AI capex + RL 的资本投入正在吞掉广告赚来的现金流（Q2 FCF 仅 $7.84亿）。要盯 capex + RL 亏损 vs 广告现金流。",
  },

  drivers: [
    { name: "广告需求", why: "宏观广告预算驱动几乎全部利润。", direction: "flat" },
    { name: "用户参与时长", why: "AI 推荐驱动的时长决定广告库存。", direction: "up" },
    { name: "广告效率（ROAS）", why: "AI 提效决定单位流量变现。", direction: "up" },
    { name: "平台政策（Apple ATT 等）", why: "第三方平台变化影响定向。", direction: "down" },
    { name: "AI + RL capex", why: "增长/期权的燃料，也是 FCF 拖累。", direction: "warn" },
  ],

  ecosystem: {
    upstream: [
      { name: "NVDA GPU", note: "AI 训练算力（大规模采购方）" },
      { name: "自研 MTIA 芯片", note: "推理降本" },
      { name: "TSMC", note: "芯片代工（间接）" },
    ],
    self: [
      { name: "Family of Apps", note: "注意力 + 广告" },
      { name: "AI（推荐 / Llama / Meta AI）", note: "广告加速器" },
      { name: "Reality Labs", note: "下一代平台期权" },
    ],
    downstream: [
      { name: "广告主", note: "付费客户" },
      { name: "消费者", note: "数十亿用户" },
      { name: "创作者", note: "内容生态" },
      { name: "开发者", note: "Llama 开源生态" },
    ],
  },

  competition: [
    { name: "TikTok（字节）", attacking: "年轻用户注意力与短视频广告。", moatTargeted: "参与时长与广告份额。", evidence: "短视频争夺时长。", threat: "High", thesisImpact: "施压广告护城河的用户端。" },
    { name: "Google（YouTube + 广告）", attacking: "数字广告预算。", moatTargeted: "广告份额。", evidence: "同争一份广告费。", threat: "Medium", thesisImpact: "广告竞争，非致命。" },
    { name: "OpenAI / Google（闭源前沿模型）", attacking: "AI 能力领先。", moatTargeted: "Llama 的开源心智。", evidence: "前沿闭源模型持续迭代。", threat: "Medium", thesisImpact: "稀释开源 AI 策略价值。" },
    { name: "Apple", attacking: "平台政策（ATT）与 AR 硬件。", moatTargeted: "广告定向 + Reality Labs。", evidence: "ATT 曾重创定向；Vision 产品竞争 AR。", threat: "Medium", thesisImpact: "平台依赖风险 + RL 竞争。" },
  ],

  metrics: [
    { label: "广告收入增速", latest: "Q2 2026 +27%（$594亿）", spark: [22, 24, 21, 23, 25, 27], unit: "% 同比", good: "up", note: "护城河健康的核心信号——量价齐升。", judgment: true },
    { label: "自由现金流 FCF", latest: "Q2 暴跌到 $7.84亿（上季 $85亿）", spark: [8.5, 8, 7, 6, 4, 0.78], unit: "$B/季", good: "up", note: "被 AI capex 砸没——现在最尖锐的信号。", judgment: true },
    { label: "Reality Labs 季度亏损", latest: "Q2 扩大到 -$46.2亿（收入 $4.3亿）", spark: [-3, -4, -4, -4.2, -4.4, -4.62], unit: "$B/季", good: "up", note: "亏损收窄=好；本季仍在扩大=资本纪律警报。", judgment: true },
    { label: "CapEx（2026 指引）", latest: "$1300–1450亿（Q2 单季 $310亿）", spark: [40, 65, 90, 110, 130, 145], unit: "$B/年", note: "AI 算力成本——有歧义（中性线）。", judgment: true },
  ],

  financials: {
    note: "约数 / 示意——依赖前请对照财报核实。",
    rows: [
      { label: "收入", values: ["约 $164B", "约 $190B", "约 $215B"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "营业利润率", values: ["约 42%", "约 42%", "约 40%"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "EPS", values: ["约 $22", "约 $26", "约 $28"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "Reality Labs 季度亏损", values: ["约 -$4B", "约 -$4.4B", "Q2 -$4.62B"], periods: ["", "", "2026Q2"] },
      { label: "自由现金流 FCF（季度）", values: ["约 $8.5B", "—", "Q2 $0.78B"], periods: ["前季", "", "2026Q2"] },
      { label: "CapEx（2026 指引）", values: ["约 $40B", "约 $65B", "$130–145B"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "现金 / 债务", values: ["—", "—", "$90B / $84B"], periods: ["", "", "2026Q2"] },
      { label: "P/E（前瞻）", values: ["—", "约 24x", "—"], periods: ["", "当前", ""] },
    ],
    impliedExpectations: "相对同侪折价，价格基本只按广告业务定价，Reality Labs + AI capex 被当负期权/成本。广告 +27% 说明现金引擎很强；但 Q2 FCF 被砸到 $7.84亿说明市场现在盯的是「烧钱纪律」。若广告现金流能扛住 capex + RL 并换来回报，重估是上行；若烧钱失控吞掉现金流，则拖累。",
  },

  timeline: [
    { date: "2026-08-26", event: "为 META 开立投资账本（起点）", whyItMatters: "基线快照。", node: "全部", thesisImpact: "flat", action: "不动仓位——建立记录。", source: null, related: null },
    { date: "2026-07-29", event: "Q2 2026 财报：广告 +27%（$594亿，量价齐升）；但 FCF 暴跌到 $7.84亿、RL 亏损 $46.2亿，股价下跌", whyItMatters: "「广告很猛、现金流被砸」的分裂图景——AI 广告引擎兑现，但 AI capex（$310亿/季，全年指引 $1300–1450亿）把 FCF 从 $85亿砸到 $7.84亿。与 MSFT/AMZN 的跳涨相反，市场这次担心资本纪律。", node: "广告 / 资本纪律", thesisImpact: "flat", action: "不动仓位——广告护城河强化 vs 资本纪律警报并存，净中性。盯 FCF 与烧钱节奏。", source: { label: "Meta Q2 2026 IR / CNBC", url: "https://www.cnbc.com/2026/07/29/meta-q2-earnings-report-2026.html" }, related: { label: "Stock Why · META 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/META#2026-08-24" } },
  ],

  thesisEvolution: [
    { date: "2021–2022", label: "元宇宙豪赌引发信任危机", note: "改名 Meta + RL 巨额烧钱 + ATT 冲击，股价一度腰斩。" },
    { date: "2023", label: "「效率之年」+ AI 推荐反转", note: "大幅降本、AI 推荐提升参与与广告，利润与股价强劲修复。" },
    { date: "2024–2025", label: "AI 提效 + 开源 Llama 成型", note: "AI 成为广告隐形加速器，Llama 成开源事实标准之一。" },
    { date: "2026（当前）", label: "健康但分裂：广告强、现金流被砸", note: "Q2 2026：广告 +27%（量价齐升），AI 广告引擎兑现；但 AI capex 把 FCF 砸到 $7.84亿、RL 亏损扩大到 $46.2亿/季，股价下跌。焦点从「AI 提效」转到「广告现金流能否扛住 $1300–1450亿 capex + RL 烧钱」。仓位接近目标。" },
    { date: "2026-08-26", label: "AI 辅助初稿（待认领）", note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」。" },
    { date: "未来", label: "什么会让我改变主意", note: "留白。广告增速或 RL 烧钱的实质变化时更新。" },
  ],

  // 逐条证伪条件在各 thesis 的 invalidation（唯一真相来源，页面自动派生）。此处只留跨逻辑 / 存续性风险。META 暂无。
  risks: [],

  stockWhy: { label: "META · Stock Why 维基", url: "https://stock-why-wiki-site.vercel.app/stocks/META", note: "市场波动的因果溯源在 Stock Why 维基；这本账本只问它是否改变了逻辑。" },
};
