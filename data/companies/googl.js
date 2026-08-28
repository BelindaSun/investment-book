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
  tier: "core", // 研究深度：core | active | watch
  holdingStatus: "held", // 是否真正持有：held | watchlist | exited | not-held（与 tier 分开）
  tagline: "现金机器，正拿它去下注赢下 AI 转型。",
  oneLiner:
    "这家把全世界信息组织起来的公司，如今要验证：它能不能拥有自己参与发明的这场 AI 转型，而不是被它颠覆。",
  updated: "2026-08-27",
  thesisStatus: "Healthy",
  statusNote:
    "整体 Healthy、方向改善（Improving），但资本回报尚待验证。Q2 两组相反证据并存——强化：Search +17%、Cloud +82% 至 $248亿、Cloud 营业利润 $88亿（约上年 3.1 倍）、backlog $5139亿、Gemini 使用与企业采用大增；制约：Q2 capex $449亿、全年指引 $1950–2050亿、季度 FCF 转负 -$59亿、回购暂停、开始靠股权与债务市场为 AI 扩张筹资。本季明显强化了 Alphabet 的 AI 商业化与 Cloud 第二增长引擎逻辑，但也把投资案的主要争议，从「Google 会不会错过 AI」转向「如此巨额的 AI 投资最终能否产生足够的增量现金回报」。",

  // 决策信号：Thesis → Decision（不生成任何自动交易动作）
  currentDecision: "持有",
  decisionReason:
    "Cloud 大幅加速、Search 仍稳、反垄断尾部有利解决；但 capex 暴涨、FCF 首次转负是要盯的核心张力。当前证据（backlog $5140亿部分解释了投入）不支持仓位变动。",
  nextDecisionTriggers: [
    "Search 收入增速连续两季明显恶化，或查询份额可见地流向无法变现的 AI 助手",
    "Cloud 增速大幅回落、或利润率扩张停滞",
    "capex 继续攀升而 FCF 长期为负、Cloud 增长未能兑现回报",
    "反垄断上诉出现更激进的最终补救（如触及默认分发）",
  ],

  // 来源登记表（轻量）：证据可用 source 引用这里的 key；不是每条 FACT 都必须有。
  sources: {
    "px-2026-08-12": { label: "大型科技股行情（Motley Fool 汇总）", url: "https://www.fool.com/investing/2026/08/12/alphabet-amazon-meta-platforms-and-microsoft-this/", date: "2026-08-12", type: "media" },
    "q2-2026": { label: "Alphabet 2026 Q2 业绩公告（官方 IR）", url: "https://s206.q4cdn.com/479360582/files/doc_financials/2026/q2/2026q2-alphabet-earnings-release.pdf", date: "2026-07-22", type: "IR" },
    "antitrust-2025-09": { label: "美国 v. Google 搜索案补救裁决（DOJ）", url: "https://www.justice.gov/opa/pr/department-justice-wins-significant-remedies-against-google", date: "2025-09-02", type: "gov" },
  },

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
    currentPrice: 342.37, // 2026-08-12 网络行情快照，非实时
    priceAsOf: "2026-08-12", // currentPrice 最后设定的日期，让盈亏诚实地显示为「快照」
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
        { text: "2026 Q2 搜索广告收入 $633 亿、+17% 同比——AI 时代进入第三年仍在稳健增长。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "AI Overviews 正在被变现（在 AI 答案里/周围投广告），而不是白送。", tag: "FACT" },
        { text: "反垄断裁决保住了 Chrome，且未禁止（非独家的）默认付费，Search 分发基本完整；Gemini 已进 Chrome。", tag: "FACT", source: "antitrust-2025-09", asOf: "2025-09-02" },
        { text: "查询意图 + 广告主市场是一道双边护城河，聊天创业公司短期内复制不了。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "年轻用户越来越多地在 AI 助手、而非 Google 里发起「查产品 / 怎么做」类查询。", tag: "FACT" },
        { text: "如果答案「够好」到无需点击，基于点击的广告模式将面临单次查询层面的压力。", tag: "INFERENCE" },
        { text: "反垄断补救要求向对手共享搜索索引 / 用户数据，长期可能扶持竞争者。", tag: "FACT", source: "antitrust-2025-09", asOf: "2025-09-02" },
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
        { text: "在其自有工作负载上，TPU 可能让 Google 的训练/推理成本结构性低于外购商用 GPU（无公开单位成本披露，属推断而非确证）。", tag: "INFERENCE" },
        { text: "Gemini 在多数公开基准上已大幅缩小与前沿对手的差距（基准口径各异，领先可争夺）。", tag: "INFERENCE" },
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
      title: "Cloud 成为 Alphabet 第二个规模化利润引擎",
      pillar: "Cloud 利润引擎",
      status: "Strong",
      trend: "up",
      statement:
        "Cloud 已从亏损户变成 Alphabet 第二个规模化利润引擎，并开始证明其 AI 全栈可以对外商业化。本季真正强化的是三层逻辑：① Google 的 AI 能力不再只服务 Search，而能卖给外部客户；② TPU + GPU + Gemini + Vertex 的全栈组合形成差异化；③ Cloud 同时出现收入加速、利润放大和合同储备增长。",
      marketMisunderstanding:
        "Cloud 长期被当成一个遥远的第三名亏损户。这轮是收入加速 + 利润放大 + backlog 增长同时发生。但 backlog 只增强收入可见度，不等于全部确定或高利润收入。",
      supporting: [
        { text: "2026 Q2 Cloud 收入 $248 亿、+82% 同比；营业利润约 $88 亿（约为上年同期 3.1 倍）。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Cloud backlog（RPO）约 $5139 亿——增强收入可见度（但不等于全部确定 / 高利润收入；注：10-Q 已把原始期限一年以内的合同纳入 backlog 口径，历史比较需注意口径变化）。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Cloud 现在不仅卖服务，也披露了 TPU systems 的产品收入——AI 全栈对外商业化的直接证据。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "AI 是企业选择 GCP 的真实理由，而不只是打个勾。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "AWS 和 Azure 规模仍更大、更根深蒂固，而且同样装备了 AI。", tag: "FACT" },
        { text: "要保住牌桌上的位置就得重投 capex；FCF 的转化率是关键摆动项（见 CapEx→FCF 一条）。", tag: "FACT" },
      ],
      keyMetrics: ["Cloud 收入增速", "Cloud 营业利润", "Cloud backlog（注意口径）"],
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
        "这盘赌只有在巨额 AI / 数据中心 capex 真正赚回回报时才成立——体现为 Cloud 收入、更好的广告定向，以及最终上升的 FCF。2026 Q2 这条张力首次真正显形：capex 上调到 ~$2000亿、季度 FCF 史上首次转负。这是我盯得最紧的一条。",
      marketMisunderstanding:
        "多头默认 capex 天然是好事（「他们在投 AI 嘛」）。我把它当成未经证实的——直到 FCF 和 Cloud 经济学确认了回报。关键在于：$5140亿 Cloud backlog 能不能把这笔投入变回现金流。",
      supporting: [
        { text: "Q2 经营现金流仍达 $391 亿；TTM 自由现金流仍为正、约 $533 亿——单季 FCF 转负主要因 $449 亿 capex 超过当季经营现金流。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Cloud 收入、利润与 backlog 同时大幅增长，说明至少一部分 capex 有真实需求承接。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "管理层把 capex 描述为需求驱动（有客户在等产能）。", tag: "FACT" },
      ],
      contrary: [
        { text: "2026 全年 capex 指引上调到 $1950–2050亿（上季为 $1800–1900亿）；Q2 单季 capex $449 亿。", tag: "FACT", source: "q2-2026", asOf: "2026-07-22" },
        { text: "2026 Q2 季度自由现金流史上首次转负，至 -$59亿。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "本季通过股权和债务市场筹集大量外部资本、同时暂停回购——说明 AI 扩张已不再完全依赖内部自由现金流。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "若 AI 需求回归常态，全行业的 AI capex 有过度建设的风险。", tag: "INFERENCE" },
      ],
      keyMetrics: ["TTM 自由现金流（而非单季）", "CapEx / 收入", "Cloud 营业利润 / CapEx（回报兑现的粗略观察量）"],
      invalidation:
        "若未来数季 CapEx 与折旧继续快速上升，而 Cloud 增长、Cloud 利润率和集团经营现金流未能同步改善，导致 TTM FCF 持续显著下降或转负，则该逻辑转为 Weakening。",
      updated: "2026-08-26",
    },
    {
      id: "regulation",
      title: "监管是一种税、一种烦扰，而非致命一击",
      pillar: "监管 / 反垄断",
      status: "Watching",
      trend: "flat",
      statement:
        "2025-09 的搜索案裁决兑现了这条逻辑：Google 保住 Chrome、也没被禁止（非独家的）默认付费——最坏的尾部没落地。剩下的是行为性补救（禁独家合同、向对手共享数据）：是税和烦扰，不是致命一击。双方仍在上诉。",
      marketMisunderstanding:
        "标题党把每一次裁决都当成致命；现实的结果正如所料——保住核心分发 + 一些行为性约束，而非结构性拆分。",
      supporting: [
        { text: "2025-09-02 裁决：不强制拆分 Chrome，仅行为性补救，未禁止非独家默认付费。", tag: "FACT", source: "antitrust-2025-09", asOf: "2025-09-02" },
        { text: "Alphabet 历史上吸收过大额罚款而未损及核心模式。", tag: "FACT" },
      ],
      contrary: [
        { text: "补救要求向对手共享搜索索引 / 用户数据，长期可能扶持竞争者。", tag: "FACT", source: "antitrust-2025-09", asOf: "2025-09-02" },
        { text: "双方仍在上诉（DOJ 争取更强补救、含拆分），最终结果未定。", tag: "FACT", source: "antitrust-2025-09", asOf: "2026-01-16" },
        { text: "广告技术案（另案）的拆分风险仍引入结构性不确定性。", tag: "FACT" },
      ],
      keyMetrics: ["反垄断上诉结果", "数据共享对份额的影响", "默认分发状态"],
      invalidation:
        "若上诉推翻现判、出现结构性地剥夺 Google 搜索分发默认位置的最终补救，且流量 / 份额因此下滑，则 Search 护城河逻辑被实质性削弱。",
      updated: "2026-08-27",
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
      role: "第二个规模化利润引擎",
      howItMakesMoney:
        "把算力、数据和 AI（Vertex、Gemini API）以经常性合同卖给企业；现在还披露 TPU systems 的产品收入。已转正并在放大利润（Q2 营业利润约 $88亿）。",
      note: "AI capex 正在这里变成可持续的经常性收入——也是 AI 全栈对外商业化的证据。",
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
      { name: "Gemini（消费分发）", note: "Gemini App 本季约 950M MAU、模型约 22B API tokens/分钟（2026 Q2）——不只是拥有技术，而是在规模化。", direction: "up" },
      { name: "Gemini（企业采用）", note: "近 90% Fortune 100 使用 Gemini Enterprise（2026 Q2）——企业侧规模化落地。", direction: "up" },
      { name: "DeepMind（研究）", note: "世界级研究机构；难以复制的持久进展之源。", direction: "up" },
      { name: "Search 里的 AI（Overviews / AI Mode）", note: "生成式答案折进 Search——既是机会，也是蚕食风险。", direction: "flat" },
      { name: "TPU / AI 基础设施", note: "TPU 为 Alphabet 在适配工作负载上提供潜在的成本、性能和供应控制优势；因未公开完整单位经济性，不能笼统断言其始终低于商用 GPU。", direction: "up" },
      { name: "分发（Chrome / Android / Search）", note: "以约零成本触达数十亿用户——对手买不到的护城河。", direction: "up" },
      { name: "数据", note: "几十年的查询、视频、地图数据，喂养模型质量与定向。", direction: "up" },
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
      { name: "Cloud", note: "第二个利润引擎（含 TPU systems）" },
      { name: "Gemini / DeepMind", note: "AI 层" },
      { name: "分发（Chrome / Android）", note: "触达" },
    ],
    downstream: [
      { name: "广告主", note: "Search / YouTube 的付费客户" },
      { name: "消费者", note: "数十亿 Search / Android / YouTube 用户" },
      { name: "开发者", note: "Vertex / Gemini / Android 的构建者" },
      { name: "创作者", note: "YouTube 生态" },
      { name: "云客户", note: "GCP 上的企业——企业 AI 基础设施、AI solutions、TPU systems" },
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
      evidence: "AWS 规模仍居云第一；亚马逊抓住高意图的购物查询。但 Google Cloud +82% 后已不宜再被简单称作「遥远第三名」——规模仍落后 AWS/Azure，但 AI 差异化与增长动能显著增强。",
      threat: "Medium",
      thesisImpact: "侵蚀一部分高价值的商业查询；云上的差距在 AI 侧收窄。",
    },
    {
      name: "Anthropic",
      attacking: "前沿模型质量、企业与编程。",
      moatTargeted: "Gemini 的模型领先；Cloud AI。",
      evidence: "强劲的前沿模型；企业侧有进展。注：Anthropic 同时可能是 Alphabet 的投资对象与 Cloud 伙伴——但持股关系未经官方确认，不作为 FACT。",
      threat: "Medium",
      thesisImpact: "让模型领先持续可争夺；施压 Gemini 的差异化。既是竞争者，也可能是投资/伙伴，关系复杂。",
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
    { label: "Search 收入增速", latest: "Q2 2026 +17% 同比", spark: [12, 11, 9, 12, 15, 17], unit: "% 同比", good: "up", note: "最重要的单一韧性信号；仍在稳健增长。", judgment: true },
    { label: "YouTube 收入增速", latest: "约 +13% 同比 (待核实)", spark: [8, 12, 13, 14, 13, 13], unit: "% 同比", good: "up", note: "广告 + 订阅；联网电视是顺风。", judgment: true },
    { label: "Cloud 收入增速", latest: "Q2 2026 +82% 同比（$248亿）", spark: [28, 30, 40, 55, 70, 82], unit: "% 同比", good: "up", note: "增长引擎，罕见加速；backlog $5140亿。", judgment: true },
    { label: "Cloud 营业利润", latest: "Q2 近乎翻三倍到 $88亿", spark: [3, 4, 5, 6, 7, 8.8], unit: "$B/季", good: "up", note: "拐点已变成加速。", judgment: true },
    { label: "CapEx（全年指引）", latest: "上调到 $1950–2050亿", spark: [140, 160, 175, 185, 190, 200], unit: "$B/年", note: "AI 下注的成本——单看有歧义（中性线）。只有对着 FCF 和 Cloud 增速才好判断。", judgment: true },
    { label: "自由现金流 FCF", latest: "Q2 单季首次转负 -$59亿（TTM 仍正 ~$533亿）", spark: [18, 17, 12, 5, -2, -5.9], unit: "$B/季", good: "up", note: "看 TTM 而非单季：单季转负是黄灯，主因 $449亿 capex 超过当季经营现金流（$391亿）。", judgment: true },
    { label: "AI Overview / Gemini 使用量", latest: "增长中；Gemini 已进 Chrome", spark: [2, 4, 6, 9, 12, 15], unit: "指数", good: "up", note: "AI 采纳 + 变现信号。", judgment: true },
  ],

  financials: {
    note: "约数 / 示意——依赖任何数字前，请对照最新的 10-Q/10-K 核实。注意：Q2 2026 录得约 $99B 股权证券收益（equity securities gain），主要来自 SpaceX 与另一家未具名私人公司（外部推测为 Anthropic，未经官方确认）；这笔收益大部分为非现金、不可重复，会造成 GAAP 净利润和 EPS 的剧烈波动——估值应看核心经营利润、标准化 EPS 和 FCF，而不是 GAAP EPS。",
    rows: [
      { label: "收入", values: ["$307B", "$350B", "约 $390B"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "营业利润率", values: ["约 32%", "约 33%", "约 32%"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "EPS（GAAP 受证券收益严重失真）", values: ["$5.80", "$8.00", "看标准化"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "自由现金流 FCF（TTM）", values: ["约 $70B", "约 $73B", "约 $53B 且承压"], periods: ["FY24", "FY25", "TTM"] },
      { label: "CapEx（全年指引）", values: ["约 $52B", "约 $75B", "$195–205B"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "非经营性股权资产（SpaceX 等，账面）", values: ["—", "约 $94B", "—"], periods: ["", "当前", ""] },
      { label: "回购", values: ["约 $60B", "约 $65B", "已暂停"], periods: ["FY24", "FY25", "当前"] },
      { label: "P/E（前瞻，看标准化）", values: ["约 22x", "约 23x", "—"], periods: ["", "当前", ""] },
    ],
    impliedExpectations:
      "本季把研究问题从「Google 有没有 AI」变成了「能否把 $200B 级 capex 转化成持续增长的经营现金流和每股价值」。价格仍以低于其他 AI 巨头的前瞻倍数交易——若 Cloud + AI 全栈的资本回报兑现，重估是上行空间；若巨额 capex 迟迟不转化为 FCF，则是主要下行风险。另注：约 $94B 的非经营性股权资产（SpaceX 等）增加 SOTP / 资产价值、提供资本配置弹性，但不应据此抬高整体判断，也别把 $99B 证券收益当成持仓总值或经营利润。",
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
      date: "2026-07-22",
      event: "Q2 2026 财报：营收 $1198亿(+24%)、Cloud +82%（backlog $5140亿）；但 capex 上调、FCF 首次转负",
      whyItMatters:
        "Cloud 大幅加速强化了「Cloud 利润引擎」；但 capex 上调到 ~$2000亿、季度 FCF 首次转负 -$59亿，让「CapEx→FCF」这条张力首次真正显形。股价财报后因 capex 上修回落。",
      node: "Cloud / CapEx",
      thesisImpact: "up",
      action: "不动仓位——Cloud 强化是好事，capex/FCF 是要盯的核心张力（backlog $5140亿部分解释了投入）。",
      source: { label: "Alphabet 2026 Q2 IR / CNBC", url: "https://www.cnbc.com/2026/07/22/google-earnings-q2-goog-live-updates.html" },
      related: { label: "Stock Why · GOOGL 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/GOOGL#2026-08-24" },
    },
    {
      date: "2025-09-02",
      event: "反垄断搜索案补救裁决：Google 保住 Chrome，仅行为性补救",
      whyItMatters:
        "最坏的尾部（拆 Chrome、禁默认付费）未落地——印证了「监管是税不是致命伤」。代价是须向对手共享搜索索引/用户数据；双方仍在上诉。",
      node: "分发 / 监管",
      thesisImpact: "up",
      action: "不动仓位；监管这条逻辑从「观察↓」收敛到「观察→」。盯上诉的最终结果。",
      source: { label: "DOJ / Fortune 2025-09-02", url: "https://fortune.com/2025/09/02/google-antitrust-remedy-ruling-exclusive-search-distribution-deals-chrome/" },
      related: { label: "Stock Why · GOOGL 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/GOOGL#2026-08-24" },
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
      label: "健康，Cloud 加速、监管尾部解除，capex/FCF 成新焦点",
      note: "Q2 2026：Cloud +82%、backlog $5140亿，Search 仍 +17%；反垄断保住 Chrome（税不是致命伤）。新张力：capex 上调到 ~$2000亿、季度 FCF 首次转负——盯的焦点从「监管」转到「capex→FCF 回报」。仓位维持在接近目标的水平。",
    },
    {
      date: "2026-08-26",
      label: "AI 辅助初稿（待认领）",
      note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」——从那一刻起，未来才能真正追踪：原始信念 → 证据 → 信念改变。",
    },
    {
      date: "未来",
      label: "什么会让我改变主意",
      note: "特意留白。每当有真实证据强化、修改或证伪一条逻辑，就更新这一页——这是整本账本里最有长期价值的记录。",
    },
  ],

  // 风险 / 证伪：逐条逻辑的证伪条件已在各 thesis 的 invalidation 里（唯一真相来源，
  // 「风险 / 证伪」页自动派生，不再重复维护）。这里只放无法归属于单一 thesis 的
  // 跨逻辑 / 存续性风险（战争、财务造假、关键人灾难、结构性监管等）。GOOGL 暂无。
  risks: [],

  // 回链 Stock Why 维基（市场事件 / 因果分析放在那边）。
  stockWhy: {
    label: "GOOGL · Stock Why 维基",
    url: "https://stock-why-wiki-site.vercel.app/stocks/GOOGL",
    note: "当一次市场波动需要「为什么会发生」的因果溯源，那属于 Stock Why 维基。这本账本只问：它是否改变了我的逻辑。",
  },
};
