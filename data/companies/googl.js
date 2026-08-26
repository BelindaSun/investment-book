/*
 * Investment Book —— 公司数据文件。
 *
 * 这是「数据」，不是代码，读起来就像 JSON。可以手改，也可以让 Claude 改，
 * 无需构建。要加一家公司：把这个文件复制成 data/companies/<代码>.js，改掉对象，
 * 再把代码加进 data/manifest.js。
 *
 * 枚举 key 保持英文（CSS 和逻辑要用），界面会显示成中文：
 *   thesisStatus / status : "Strong" | "Healthy" | "Strengthening" | "Watching" | "Weakening" | "Invalidated"
 *   trend / direction     : "up" | "flat" | "down" | "warn"   → ↑ → ↓ ⚠
 *   证据标签 tag          : "FACT"(事实) | "INFERENCE"(推断) | "THESIS"(判断) | "UNKNOWN"(未知)
 *   tier                  : "core"(核心) | "active"(在场) | "watch"(观察)
 *
 * 标了「占位」的数字是给你替换的示例；标了「(待核实)」的数字是约数、可能过时，
 * 依赖前请先核对。股票代码、FCF / CapEx / P/E 等惯用缩写按中文财经习惯保留英文。
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA.GOOGL = {
  ticker: "GOOGL",
  name: "Alphabet Inc.",
  tier: "core", // core | active | watch —— 决定在组合首页的深度与分组
  tagline: "现金机器，正拿它去下注赢下 AI 转型。",
  oneLiner:
    "这家把全世界信息组织起来的公司，如今要验证：它能不能拥有自己参与发明的这场 AI 转型，而不是被它颠覆。",
  updated: "2026-08-26",
  thesisStatus: "Healthy",
  statusNote:
    "核心现金引擎（Search、YouTube、Cloud）强劲且在复利。唯一悬而未决的问题——AI 到底会扩大还是侵蚀 Search 的护城河——目前正朝对 Alphabet 有利的方向被解决，但这是要盯着看的事，不是可以直接假设的事。",

  // 电梯陈述。如果你没法用几句话说清为什么持有，那你不是拥有它，是在租它。
  whyIOwnIt: [
    "一台现金机器（Search + YouTube），正拿它去赢下一个平台——而定价却更接近一家成熟广告公司，而非 AI 领导者。",
    "几乎没人有的 AI 全栈自持：模型（Gemini）、芯片（TPU）、数据、分发（Chrome / Android / Search），以及一个能把它卖出去的云。",
    "市场几乎没为之付费的期权价值——Cloud 利润率拐点、Waymo、DeepMind——就叠在一个本已喷现金流的业务之上。",
  ],

  position: {
    note:
      "占位——请替换成你的真实数字。公司质量和股票估值下面特意分开：好公司不等于任何价格都能买。",
    shares: 100,
    avgCost: 165.0,
    currentPrice: 205.0, // 手动快照，非实时。复盘时手动更新。
    priceAsOf: "2026-08-26", // currentPrice 最后设定的日期，让盈亏诚实地显示为「快照」
    portfolioWeight: 8.0, // %
    targetWeight: 10.0, // %
    addRange: "跌破约 $180 加仓，或出现任何非结构性的 15%+ 回撤时加仓",
    reduceRange: "涨过约 $260、或仓位超过组合约 14% 时减仓",
    qualityNote:
      "质量：高。宽护城河、自我造血、资本配置理性、多个相互独立的增长引擎。属于全世界质量最高的一批生意。",
    valuationNote:
      "估值：合理，但不便宜。按前瞻盈利 / FCF 相对其他 AI 巨头有折价——这正是全案的关键：AI 那道题被解开的过程里，你是被「付钱等着」的。",
  },

  // 3–5 条「活的」逻辑。每一条都是一个能拿去和现实对照的判断。
  theses: [
    {
      id: "search-durability",
      title: "Search 熬过 AI 转型——并且把它变现",
      pillar: "Search 韧性", // 组合首页「逻辑健康度」里用的短标签
      status: "Healthy",
      trend: "flat",
      statement:
        "AI 不会杀死 Search，只会改变它的形态。Google 的分发、意图数据和广告市场，让它能把生成式答案折进 Search（AI Overviews / AI Mode），同时守住那套「查询→广告」的经济学——正是它养活了其他一切。",
      marketMisunderstanding:
        "市场时不时把 GOOGL 定价成「ChatGPT 会结构性取代 Search」。我的看法：AI 答案真正的约束是分发和变现，而这两样 Google 都握在手里，不是靠模型本身有多强。",
      supporting: [
        { text: "在 ChatGPT 时代的头两年里，Search 收入一直在增长。", tag: "FACT" },
        { text: "AI Overviews 正在被变现（在 AI 答案里/周围投广告），而不是白送。", tag: "FACT" },
        { text: "Chrome + Android 的默认分发，把答案框零获客成本地推到数十亿人面前。", tag: "FACT" },
        { text: "查询意图 + 广告主市场是一道双边护城河，聊天创业公司短期内复制不了。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "年轻用户越来越多地在 AI 助手、而非 Google 里发起「查产品 / 怎么做」类查询。", tag: "FACT" },
        { text: "如果答案「够好」到无需点击，基于点击的广告模式将面临单次查询层面的压力。", tag: "INFERENCE" },
        { text: "DOJ 反垄断的补救措施可能削弱默认位置这项分发优势。", tag: "FACT" },
      ],
      keyMetrics: ["Search 收入增速", "Search 查询份额", "AI Overview 变现信号"],
      invalidation:
        "若 Search 收入增速连续 2 个季度以上转负，且查询份额明显流向 Google 无法变现的 AI 助手，则本逻辑转弱→被证伪。",
      updated: "2026-08-26",
    },
    {
      id: "ai-full-stack",
      title: "AI 全栈自持在扩大护城河",
      pillar: "AI / 全栈护城河",
      status: "Strengthening",
      trend: "up",
      statement:
        "Alphabet 拥有每一层——前沿模型（Gemini）、自研芯片（TPU）、行星级数据、分发，以及一个能把它卖出去的云。这种垂直整合压低了 AI 的服务成本，也造出对手在价格或触达上都比不了的产品。",
      marketMisunderstanding:
        "ChatGPT 之后，市场把 Google 划为「落后」。Gemini 的走势加上 TPU 的成本优势暗示的恰恰相反：它也许是位置最好的，而不是受威胁最大的。",
      supporting: [
        { text: "TPU 让 Google 的训练/推理成本结构性地低于外购商用 GPU。", tag: "FACT" },
        { text: "Gemini 在主要基准上已基本追平与前沿对手的差距。", tag: "FACT" },
        { text: "DeepMind 是一道真正的研究护城河（AlphaFold 级别的产出），不只是个产品团队。", tag: "FACT" },
        { text: "自持全栈意味着 AI 利润率能随使用量放大而改善，而不只是成本在涨。", tag: "THESIS" },
      ],
      contrary: [
        { text: "OpenAI / Microsoft 在消费级 AI 心智和企业 Copilot 分发上仍然领先。", tag: "FACT" },
        { text: "模型领先是可争夺的，可能一个版本就翻盘。", tag: "FACT" },
      ],
      keyMetrics: ["Gemini 使用量 / DAU", "TPU 部署", "Cloud 里的 AI 功能附加率", "Cloud 毛利率"],
      invalidation:
        "若 Gemini 在能力上决定性且持续地落后，且 Google 无法把分发转化为 AI 使用量，则全栈优势没有兑现→逻辑转弱。",
      updated: "2026-08-26",
    },
    {
      id: "cloud-inflection",
      title: "Cloud 从烧钱黑洞跨入可持续利润引擎",
      pillar: "Cloud 利润引擎",
      status: "Strong",
      trend: "up",
      statement:
        "Google Cloud 已经转正，并在仍保持 >25% 增长的同时扩张营业利润率。AI 工作负载（Vertex、Gemini API、TPU）给了它切入云市场第三名的差异化楔子，把 AI capex 转化为高毛利的经常性收入。",
      marketMisunderstanding:
        "Cloud 长期被当成一个遥远的第三名亏损户。这轮利润率拐点是真的，而且我认为估值里还没充分反映。",
      supporting: [
        { text: "Cloud 现在稳定地营业利润为正，且利润率在上升。", tag: "FACT" },
        { text: "订单积压 / 剩余履约义务（RPO）指向可持续的前瞻收入。", tag: "FACT" },
        { text: "AI 是企业选择 GCP 的真实理由，而不只是打个勾。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "AWS 和 Azure 更大、更根深蒂固，而且同样装备了 AI。", tag: "FACT" },
        { text: "要保住牌桌上的位置就得重投 capex；FCF 的转化率是关键摆动项。", tag: "FACT" },
      ],
      keyMetrics: ["Cloud 收入增速", "Cloud 营业利润率", "Cloud 订单积压"],
      invalidation:
        "若 Cloud 利润率扩张停滞或反转，同时增速掉到约 20% 以下，则利润引擎逻辑进入观察。",
      updated: "2026-08-26",
    },
    {
      id: "capex-fcf",
      title: "AI capex 要转化成自由现金流，而不只是折旧",
      pillar: "CapEx → FCF 转化",
      status: "Watching",
      trend: "warn",
      statement:
        "这盘赌只有在巨额 AI / 数据中心 capex 真正赚回回报时才成立——体现为 Cloud 收入、更好的广告定向，以及最终上升的 FCF。这是最容易让人失望的一条逻辑，也是我盯得最紧的一条。",
      marketMisunderstanding:
        "多头默认 capex 天然是好事（「他们在投 AI 嘛」）。我把它当成未经证实的，直到 FCF 和 Cloud 经济学确认了回报。",
      supporting: [
        { text: "即便在重投入之下，Alphabet 仍然产出非常可观的自由现金流。", tag: "FACT" },
        { text: "管理层把 capex 描述为需求驱动（有客户在等产能）。", tag: "FACT" },
      ],
      contrary: [
        { text: "capex 已大幅抬升；折旧正成为对报表利润率越来越大的拖累。", tag: "FACT" },
        { text: "如果 AI 需求回归常态，全行业的 AI capex 有过度建设的风险。", tag: "INFERENCE" },
        { text: "capex 与增量 FCF 之间的差额，是要盯的第一号数字。", tag: "THESIS" },
      ],
      keyMetrics: ["CapEx", "自由现金流 FCF", "FCF 利润率", "CapEx / 收入"],
      invalidation:
        "若 capex 连续 4 个季度以上继续攀升、而 FCF 停滞或下滑，且 Cloud 增速没有加速，则资本在被摧毁→减仓。",
      updated: "2026-08-26",
    },
    {
      id: "regulation",
      title: "监管是一种税、一种烦扰，而非致命一击",
      pillar: "监管 / 反垄断",
      status: "Watching",
      trend: "down",
      statement:
        "反垄断（美国 Search 案、广告技术案、欧盟）会削掉一些经济利益、逼出对默认设置或广告技术的改动，但不大可能直接击穿核心的信息 / 广告引擎。真正的风险是一个侵蚀 Search 默认分发护城河的补救措施。",
      marketMisunderstanding:
        "标题党把每一次裁决都当成致命；现实的结果更可能是摩擦加罚款，外加一个作用在「分发默认位置」上的尾部风险。",
      supporting: [
        { text: "Alphabet 历史上吸收过大额罚款而未损及核心模式。", tag: "FACT" },
        { text: "即便没有付费默认，Chrome + Android 也提供了自然分发。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "一个禁止默认搜索付费 / 位置安排的补救措施，会打到一道真实的护城河。", tag: "FACT" },
        { text: "广告技术被拆分的风险引入了结构性的不确定性。", tag: "FACT" },
      ],
      keyMetrics: ["反垄断裁决结果", "监管罚款", "默认分发状态"],
      invalidation:
        "若一份最终补救措施结构性地剥夺了 Google 的搜索分发默认位置，且流量 / 份额因此下滑，则 Search 护城河逻辑被实质性削弱。",
      updated: "2026-08-26",
    },
  ],

  // 「逻辑健康度」（首页那块一眼看的仪表盘）由上面的 theses 自动派生：
  // 每条逻辑的 pillar + status + trend。没有单独的列表要维护——加一条逻辑，
  // 它就自动出现在健康度里。

  business: [
    {
      name: "Google Search 与广告",
      role: "现金引擎",
      howItMakesMoney:
        "针对高意图查询竞价投放广告。全公司毛利率最高的收入；供养其他所有的下注。",
      note: "整个 AI 问题都围着它转。这里的健康 = 整条逻辑的健康。",
    },
    {
      name: "YouTube",
      role: "第二广告引擎 + 订阅",
      howItMakesMoney:
        "对着地球上最大的视频注意力池投广告，外加不断增长的 Premium / Music 和联网电视（CTV）订阅收入。",
      note: "在电视广告预算转向流媒体的迁移中结构性占优；也越来越是个订阅故事。",
    },
    {
      name: "Google Cloud",
      role: "利润拐点",
      howItMakesMoney:
        "把算力、数据和 AI（Vertex、Gemini API、TPU）以经常性合同卖给企业。现在已转正并在扩张利润率。",
      note: "AI capex 理应在这里变成可持续、高毛利的经常性收入。",
    },
    {
      name: "Android / Chrome / Play（分发）",
      role: "一切之下的护城河",
      howItMakesMoney:
        "本身不是大的直接收入线，但正是它让 Search 和 Gemini 以约零获客成本触达数十亿人。Play Store 还带来高毛利的抽成。",
      note: "最被低估的资产——分发是聊天创业公司买不到的东西。",
    },
    {
      name: "Other Bets（Waymo 等）",
      role: "长久期期权",
      howItMakesMoney:
        "大多尚未盈利。Waymo 是其中靠谱的那个：一个潜在的大型自动驾驶出行特许经营，目前还是一条成本线。",
      note: "这里的价值是真的，但应当当作免费期权，而非基准情形的现金流。",
    },
  ],

  aiMoat: {
    summary:
      "整个投资案的核心问题：这波 AI 到底是扩大、还是侵蚀 Alphabet 的经济护城河？",
    verdict:
      "我的判断：净扩大。Alphabet 是极少数拥有 AI 全栈每一层的公司之一，这压低了它自建和服务 AI 的成本，也给了它对手比不了的分发。真正的风险在它自己家里——AI 答案对基于点击的 Search 广告模式的蚕食，可能快过新的 AI 变现去补上。",
    factors: [
      { name: "Gemini（模型）", note: "前沿竞争力的模型家族，如今贯穿 Search、Workspace、Android、Cloud。", direction: "up" },
      { name: "DeepMind（研究）", note: "世界级研究机构；难以复制的持久进展之源。", direction: "up" },
      { name: "Search 里的 AI（Overviews / AI Mode）", note: "生成式答案折进 Search——既是机会，也是蚕食风险。", direction: "flat" },
      { name: "TPU / AI 基础设施", note: "自研芯片 = 训练和服务 AI 的成本结构性低于商用 GPU。", direction: "up" },
      { name: "分发（Chrome / Android / Search）", note: "以约零成本触达数十亿用户——对手买不到的护城河。", direction: "up" },
      { name: "数据", note: "几十年的查询、视频、地图数据，喂养模型质量与定向。", direction: "up" },
      { name: "开发者生态", note: "Vertex、Gemini API、Android 开发者，作为 AI 的分发渠道。", direction: "flat" },
      { name: "AI 变现", note: "悬而未决的问题：Google 能不能把 AI 答案变现得像当年变现蓝色链接一样好？", direction: "warn" },
    ],
    cannibalization:
      "诚实的张力：Google 每直接回答一个查询（无需点击），对用户很棒，对经典广告位却可能更糟。这盘赌是：Google 手握市场和界面，能控制这场迁移的节奏、并塞进新的广告形态——而不是让对手把整个查询夺走。要盯的是 AI Overview 变现 vs. 传统 Search CPC。",
  },

  drivers: [
    { name: "广告需求", why: "宏观广告预算驱动大部分收入和几乎全部利润。", direction: "flat" },
    { name: "AI 算力成本（TPU）", why: "更低的 AI 服务成本，在 AI 使用量放大时直接保护利润率。", direction: "up" },
    { name: "企业云支出", why: "增长 + 利润率引擎；跟随 IT 预算和 AI 采纳。", direction: "up" },
    { name: "用户流量 / 查询量", why: "广告机器的原始输入；受 AI 助手替代的威胁。", direction: "warn" },
    { name: "分发（默认位置）", why: "Chrome / Android 的触达；暴露于反垄断补救措施。", direction: "down" },
    { name: "开发者采纳", why: "Vertex / Gemini / Android 开发者扩大 AI 触达与锁定。", direction: "flat" },
  ],

  ecosystem: {
    upstream: [
      { name: "半导体（TSMC、Broadcom TPU 合作方）", note: "代工 TPU 及其他芯片" },
      { name: "商用 AI 芯片（Nvidia）", note: "部分工作负载仍与 TPU 并用采购" },
      { name: "能源与电力", note: "数据中心越来越受电力约束" },
      { name: "数据中心建设", note: "产能是 Cloud + AI 的闸门" },
    ],
    self: [
      { name: "Search", note: "现金引擎" },
      { name: "YouTube", note: "注意力 + 广告 + 订阅" },
      { name: "Cloud", note: "利润拐点" },
      { name: "Gemini / DeepMind", note: "AI 层" },
      { name: "分发（Chrome / Android）", note: "触达" },
    ],
    downstream: [
      { name: "广告主", note: "Search / YouTube 的付费客户" },
      { name: "消费者", note: "数十亿 Search / Android / YouTube 用户" },
      { name: "开发者", note: "Vertex / Gemini / Android 的构建者" },
      { name: "创作者", note: "YouTube 生态" },
      { name: "云客户", note: "GCP 上的企业" },
      { name: "AI 公司", note: "TPU 产能 / Gemini API 的买家" },
    ],
  },

  competition: [
    {
      name: "OpenAI + Microsoft",
      attacking: "消费级 AI 心智（ChatGPT）与企业 AI 分发（Copilot）。",
      moatTargeted: "Search 查询量；Cloud / 企业 AI。",
      evidence: "对很多用户来说 ChatGPT 就是默认的「AI」；Copilot 骑在微软的企业装机量上。",
      threat: "High",
      thesisImpact: "直接施压 Search 韧性这条逻辑。",
    },
    {
      name: "Microsoft（Azure）",
      attacking: "通过 Azure / OpenAI 争夺企业云 + AI。",
      moatTargeted: "Cloud 增长与利润率。",
      evidence: "更大的云、深厚的企业关系、OpenAI 合作。",
      threat: "High",
      thesisImpact: "压制 Cloud 份额上限；Cloud 逻辑必须靠 AI + 价格取胜。",
    },
    {
      name: "Meta",
      attacking: "数字广告预算与开放权重 AI（Llama）。",
      moatTargeted: "广告份额；AI 开发者心智。",
      evidence: "争夺同一份广告费；用开放权重把模型商品化。",
      threat: "Medium",
      thesisImpact: "是广告竞争，对 Search 并非致命。",
    },
    {
      name: "Amazon（AWS）",
      attacking: "云领导地位与零售搜索广告费。",
      moatTargeted: "Cloud；产品搜索查询。",
      evidence: "AWS 是云第一名；亚马逊抓住高意图的购物查询。",
      threat: "Medium",
      thesisImpact: "侵蚀一部分高价值的商业查询。",
    },
    {
      name: "Anthropic",
      attacking: "前沿模型质量、企业与编程。",
      moatTargeted: "Gemini 的模型领先；Cloud AI。",
      evidence: "强劲的前沿模型；企业侧有进展。",
      threat: "Medium",
      thesisImpact: "让模型领先持续可争夺；施压 Gemini 的差异化。",
    },
    {
      name: "Apple",
      attacking: "设备层与端侧 AI / 默认搜索关系。",
      moatTargeted: "分发 / 默认位置。",
      evidence: "掌控 iOS；Google 的默认搜索付费是反垄断的引爆点。",
      threat: "Medium",
      thesisImpact: "若 Apple 默认关系生变，则有分发风险。",
    },
  ],

  // 只放可能改变投资判断的指标。
  // `good` 声明哪个方向是有利的，让 sparkline 朝好=绿 / 背离=红上色。
  // 方向本身有歧义时（如 CapEx）就不写 good，线保持中性色，不作暗示。
  metrics: [
    { label: "Search 收入增速", latest: "约 +10% 同比 (待核实)", spark: [12, 11, 9, 10, 11, 10], unit: "% 同比", good: "up", note: "最重要的单一韧性信号。", judgment: true },
    { label: "YouTube 收入增速", latest: "约 +13% 同比 (待核实)", spark: [8, 12, 13, 14, 13, 13], unit: "% 同比", good: "up", note: "广告 + 订阅；联网电视是顺风。", judgment: true },
    { label: "Cloud 收入增速", latest: "约 +28% 同比 (待核实)", spark: [26, 28, 27, 29, 30, 28], unit: "% 同比", good: "up", note: "增长引擎；要和利润率一起看。", judgment: true },
    { label: "Cloud 营业利润率", latest: "约 17% (待核实)", spark: [5, 9, 11, 14, 15, 17], unit: "%", good: "up", note: "一行话讲清的拐点故事。", judgment: true },
    { label: "CapEx", latest: "高位 / 上升中 (待核实)", spark: [11, 13, 14, 18, 20, 22], unit: "$B/季", note: "AI 下注的成本——单看有歧义（中性线）。只有对着 FCF 和 Cloud 增速才好判断。", judgment: true },
    { label: "自由现金流 FCF", latest: "可观但承压 (待核实)", spark: [18, 17, 16, 15, 16, 17], unit: "$B/季", good: "up", note: "证明 capex 正在起作用的那个数字。", judgment: true },
    { label: "AI Overview / Gemini 使用量", latest: "增长中 (待核实)", spark: [2, 4, 6, 9, 12, 15], unit: "指数", good: "up", note: "AI 采纳 + 变现信号。", judgment: true },
  ],

  financials: {
    note: "约数 / 示意——依赖任何数字前，请对照最新的 10-Q/10-K 核实。第一版特意不给一个看似精确、实则脆弱的目标价。",
    rows: [
      { label: "收入", values: ["$307B", "$350B", "约 $390B"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "营业利润率", values: ["约 32%", "约 33%", "约 32%"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "EPS", values: ["$5.80", "$8.00", "约 $9.00"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "自由现金流 FCF", values: ["约 $70B", "约 $73B", "约 $70B"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "CapEx", values: ["约 $52B", "约 $75B", "约 $90B"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "现金及有价证券", values: ["约 $95B", "约 $100B", "—"], periods: ["FY24", "FY25", ""] },
      { label: "回购", values: ["约 $60B", "约 $65B", "—"], periods: ["FY24", "FY25", ""] },
      { label: "P/E（前瞻）", values: ["约 22x", "约 23x", "—"], periods: ["", "当前", ""] },
      { label: "EV / FCF", values: ["—", "约 28x", "—"], periods: ["", "当前", ""] },
    ],
    impliedExpectations:
      "以低于其他 AI 巨头的前瞻倍数交易，价格隐含的是：市场预期中个位到低双位数的盈利增长、Search 完好但不加速。你并没有为「AI 领导者」这个结果付溢价——这正是不对称之处：如果 AI 全栈这条逻辑兑现，重估就是上行空间；如果 Search 只是守住，当前倍数也已经站得住。",
  },

  timeline: [
    {
      date: "2026-08-26",
      event: "为 GOOGL 开立投资账本（这条记录的起点）",
      whyItMatters: "把截至今天的逻辑、健康度和持仓做一个基线快照。",
      node: "全部",
      thesisImpact: "flat",
      action: "不动仓位——建立记录。",
      source: null,
      related: null,
    },
    {
      date: "2026-08-xx",
      event: "占位——例如 FY26 Q2 财报（Cloud 增速 / 利润率、capex 指引）",
      whyItMatters:
        "财报是对 Cloud 拐点和 capex→FCF 两条逻辑的主要现实检验。公布后填入真实数字。",
      node: "Cloud / CapEx",
      thesisImpact: "flat",
      action: "在确认前不动仓位。",
      source: null,
      related: { label: "Stock Why 维基：GOOGL", url: "https://belindasun.github.io/stock-why-wiki/" },
    },
    {
      date: "2026-08-xx",
      event: "占位——反垄断补救措施进展（Search / 广告技术）",
      whyItMatters:
        "唯一能直接打到分发护城河的输入。任何针对默认搜索位置的最终补救，都会牵动监管这条逻辑。",
      node: "分发 / 监管",
      thesisImpact: "warn",
      action: "不动仓位；最终补救落地时，重新核对监管那条证伪条件。",
      source: null,
      related: { label: "Stock Why 维基", url: "https://belindasun.github.io/stock-why-wiki/" },
    },
  ],

  thesisEvolution: [
    {
      date: "2023",
      label: "最初的怀疑（持有之前）",
      note: "ChatGPT 发布 → 市场叙事：「Google 是搜索界的柯达。」持有它之前必须回答的问题：在位者能不能拥有这场转型？",
    },
    {
      date: "2024–2025",
      label: "证据朝对 Google 有利的方向累积",
      note: "Gemini 追平模型差距；AI Overviews 上线却没有摧毁 Search 收入；Cloud 转正并扩张利润率。颠覆论转弱。",
    },
    {
      date: "2026（当前）",
      label: "健康，但有一个被盯着的风险",
      note: "核心逻辑完好且在增强（AI 全栈、Cloud）。开放风险集中在两处：capex→FCF 转化，以及反垄断分发补救。仓位维持在接近目标的水平。",
    },
    {
      date: "未来",
      label: "什么会让我改变主意",
      note: "特意留白。每当有真实证据强化、修改或证伪一条逻辑，就更新这一页——这是整本账本里最有长期价值的记录。",
    },
  ],

  risks: [
    {
      thesis: "Search 韧性",
      condition:
        "若用户行为结构性地从搜索转向 AI 助手，且 Google 未能守住分发与变现，则 Search 护城河逻辑被削弱。",
      status: "Watching",
    },
    {
      thesis: "AI 全栈",
      condition:
        "若 Gemini 在能力上决定性且持续落后，且分发未能转化为 AI 使用量，则全栈优势没有兑现→逻辑转弱。",
      status: "Healthy",
    },
    {
      thesis: "Cloud 利润引擎",
      condition:
        "若 Cloud 营业利润率扩张停滞或反转、同时增速掉到约 20% 以下，则利润引擎逻辑进入观察。",
      status: "Strong",
    },
    {
      thesis: "CapEx → FCF",
      condition:
        "若 capex 连续 4 个季度以上继续攀升、而 FCF 停滞或下滑，且 Cloud 增速没有加速，则资本在被摧毁→减仓。",
      status: "Watching",
    },
    {
      thesis: "监管",
      condition:
        "若一份最终反垄断补救结构性地剥夺了搜索分发默认位置，且流量 / 份额下滑，则 Search 护城河被实质性削弱。",
      status: "Watching",
    },
  ],

  // 回链 Stock Why 维基（市场事件 / 因果分析放在那边）。
  stockWhy: {
    label: "GOOGL · Stock Why 维基",
    url: "https://belindasun.github.io/stock-why-wiki/",
    note: "当一次市场波动需要「为什么会发生」的因果溯源，那属于 Stock Why 维基。这本账本只问：它是否改变了我的逻辑。",
  },
};
