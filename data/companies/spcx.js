/*
 * Investment Book —— SPCX (SpaceX) 数据文件。tier: active。
 * SpaceX 于 2026-06-12 IPO（发行价 $135，代码 NASDAQ: SPCX）。
 * 枚举 key 英文，界面中文；持仓为「占位」示例。
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA.SPCX = {
  ticker: "SPCX",
  name: "SpaceX",
  tier: "active",
  holdingStatus: "watchlist",
  tagline: "Starlink 已盈利，但正为 Starship、卫星网络和 AI 基础设施同时融资的超高资本强度平台。",
  oneLiner:
    "Starlink 已证明是高增长、高利润的经营底座（上半年 Connectivity 收入 $75.5亿、经营利润 $28.4亿），但合并后的 AI 投资、Starship 研发和轨道算力计划使集团资本强度急剧上升（上半年购买固定资产约 $284.8亿、简单口径 FCF 约 -$250亿）。核心问题不只是估值，而是资本配置能否产生足够回报。",
  updated: "2026-08-29",
  thesisStatus: "Watching",
  statusNote:
    "Watching / ↑——Starlink 经营底座已确认、AI 分部出现实质收入，但集团仍处极高资本投入阶段。Q2 总营收 $78亿(+92%)、Connectivity $43亿(+65.8%)、Starlink 用户同比 +101%（但消费者 ARPU -22%）。上半年 AI 分部收入约 $33.8亿、经营亏损约 $37.3亿。上半年经营现金流约 $34.7亿、购买固定资产约 $284.8亿——Starlink 产生的经营利润尚不足以覆盖 Starship、卫星星座及 AI 基础设施扩张。估值约 $1.8T 仍极端。Elon Musk 持约 82% 投票权，治理与资本配置是核心折价项。",

  currentDecision: "观察",
  decisionReason:
    "Starlink 经营底座已确认（唯一盈利分部、用户翻倍）、AI 分部出现收入、Meta/OpenAI 等客户在扩展。但集团 FCF 深度为负、估值 $1.8T 极端、治理高度集中。先观察，等资本回报路径更清晰或估值消化。",
  nextDecisionTriggers: [
    "Starlink ARPU 企稳、或 Connectivity 利润持续扩大到能覆盖更多集团资本开支",
    "AI 分部从巨额亏损走向盈亏平衡、或轨道算力出现商业验证",
    "Starship 出现可靠商业运营的实质里程碑",
    "估值消化到明显低于内在价值的价格",
  ],

  sources: {
    "ipo-2026": { label: "SpaceX IPO（CNBC）", url: "https://www.cnbc.com/2026/08/10/spacex-spcx-stock-ipo-price.html", date: "2026-06-12", type: "media" },
    "q2-2026": { label: "SpaceX Q2 2026 财报（Fortune）", url: "https://fortune.com/2026/08/04/spacex-revenue-surges-92-to-7-8-billion-blowing-past-wall-street-expectations-by-nearly-1-billion/", date: "2026-08-04", type: "media" },
    "10q-q2-2026": { label: "SpaceX Q2 2026 10-Q（SEC）", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=spacex&CIK=&type=10-Q", date: "2026-08", type: "filing" },
  },

  whyIOwnIt: [
    "Starlink 已是盈利的规模化连接平台——上半年 Connectivity 经营利润 $28.4亿，用户同比翻倍，企业/政府/航空/海事收入也快速增长。",
    "发射领先 + Starship 降本期权 + 自有卫星网络 + AI 基础设施，可能形成独特的垂直整合组合。",
    "稀缺的「太空 + 卫星互联网 + AI 基础设施」纯玩标的——但当前只观察、不建仓。",
  ],

  position: {
    note: "占位——请替换成真实数字。SpaceX 2026-06 IPO，估值极端，建议先观察。",
    shares: 20,
    avgCost: 135.0,
    currentPrice: 137.95,
    priceAsOf: "2026-08-25",
    portfolioWeight: 3.0,
    targetWeight: 3.0,
    addRange: "等资本回报路径更清晰、或估值消化后，再考虑建仓",
    reduceRange: "仓位超过组合约 5%、或 Starlink ARPU/利润恶化时减仓",
    qualityNote: "质量：极高（Starlink 经营底座已确认、发射领先）。但治理高度集中（82% 投票权）、集团 FCF 深度为负、关联交易风险需持续关注。",
    valuationNote: "估值：极端。约 $1.8T 市值把多年后的成功定价了，安全垫几乎没有。",
  },

  theses: [
    {
      id: "starlink-economics",
      title: "Starlink 连接经济性",
      pillar: "Starlink 连接",
      status: "Strong",
      trend: "up",
      statement:
        "Starlink 已经是盈利的规模化连接平台，但未来需要验证用户增长能否长期快于 ARPU 下滑和网络资本成本。",
      marketMisunderstanding: "很多人把 SpaceX 当「火箭公司」；真正的现金流底座是 Starlink 的连接订阅。但也不能简单写成「印现金流」——ARPU 在降、卫星与终端成本在升。",
      supporting: [
        { text: "上半年 Connectivity 收入 $75.5亿；Q2 同比增长 65.8%。", tag: "FACT", source: "10q-q2-2026", asOf: "2026-06-30" },
        { text: "上半年 Connectivity 经营利润约 $28.4亿——唯一盈利分部。", tag: "FACT", source: "10q-q2-2026", asOf: "2026-06-30" },
        { text: "Starlink 用户同比增长约 101%。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "企业、政府、航空和海事收入也快速增长。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "CFO 称年底公司整体 ARR 奔 $1000亿（需确认是否含 AI 分部，不能默认全部属于 Starlink）。", tag: "FACT", source: "q2-2026", asOf: "2026-08-04" },
      ],
      contrary: [
        { text: "消费者 ARPU 同比下降约 22%——国际扩张和低价套餐提高用户规模，却压低单位经济性。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "卫星折旧、终端补贴、地面设施与频谱投入持续增加。", tag: "FACT" },
        { text: "Amazon Kuiper 等竞争者进入低轨宽带。", tag: "FACT" },
        { text: "各国频谱/落地监管带来不确定性。", tag: "FACT" },
      ],
      keyMetrics: ["Connectivity 收入与经营利润", "Starlink 用户数", "ARPU", "网络资本成本"],
      invalidation: "若 Starlink 用户增长停滞、ARPU 持续下滑且无法被用户规模覆盖、或网络成本侵蚀利润，则 连接经济性逻辑转弱。",
      updated: "2026-08-29",
    },
    {
      id: "launch-starship",
      title: "发射领先 + Starship 降本期权",
      pillar: "发射 / Starship",
      status: "Strengthening",
      trend: "up",
      statement:
        "SpaceX 在全球商业发射质量、频次和可复用能力上拥有压倒性领先；Starship 是进一步扩大这种优势的高价值、但高执行风险期权。",
      marketMisunderstanding: "市场容易在 Starship 的每次成败上情绪化；关键是长期成本曲线，而非单次试飞。",
      supporting: [
        { text: "可复用火箭带来发射成本与频次优势。", tag: "INFERENCE" },
        { text: "在商业发射市场份额领先。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "上半年 Space 分部收入约 $15.8亿、经营亏损约 $12.0亿——Starship 研发投入明显增加但可靠商业运营尚未兑现。", tag: "FACT", source: "10q-q2-2026", asOf: "2026-06-30" },
        { text: "Starship 仍处研发/爬坡阶段，执行风险大。", tag: "INFERENCE" },
      ],
      keyMetrics: ["发射频次与成功率", "Starship 里程碑", "Space 分部收入与亏损", "单位入轨成本"],
      invalidation: "若 Starship 长期无法进入可靠运营、且发射优势被追平，则 降本期权价值下降。",
      updated: "2026-08-29",
    },
    {
      id: "ai-infrastructure",
      title: "AI 基础设施垂直整合期权",
      pillar: "AI 基础设施",
      status: "Strengthening",
      trend: "up",
      statement:
        "自有火箭、卫星网络、能源与数据中心可能形成独特基础设施组合。AI 分部已出现实质收入，轨道计算若成立，SpaceX 的发射成本优势可能转化为 AI 基础设施优势。但当前仍巨额亏损，协同尚未证明。",
      marketMisunderstanding: "把 SpaceX 只看成「火箭 + 卫星」；AI 分部已出现实质收入，垂直整合路径正在形成——但离兑现还很远。",
      supporting: [
        { text: "上半年 AI 分部收入约 $33.8亿。", tag: "FACT", source: "10q-q2-2026", asOf: "2026-06-30" },
        { text: "Q2 AI 收入同比增加约 $18.2亿——增速显著。", tag: "FACT", source: "10q-q2-2026", asOf: "2026-06-30" },
        { text: "自有发射 + 卫星网络 + 能源能力可能形成独特的 AI 基础设施优势。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "上半年 AI 分部经营亏损约 $37.3亿——仍在巨额亏损。", tag: "FACT", source: "10q-q2-2026", asOf: "2026-06-30" },
        { text: "xAI、X 与 SpaceX 的协同尚未证明能覆盖资本成本。", tag: "INFERENCE" },
        { text: "关联交易和内部资源分配可能损害公开股东利益。", tag: "INFERENCE" },
        { text: "AI 客户及基础设施合同存在集中与融资风险。", tag: "INFERENCE" },
      ],
      keyMetrics: ["AI 分部收入与亏损", "数据中心 / 算力部署进度", "AI 客户合同", "关联交易披露"],
      invalidation: "若 AI 分部亏损持续扩大且无法产生独立的商业验证、或关联交易实质损害股东利益，则 垂直整合期权逻辑削弱。",
      updated: "2026-08-29",
    },
    {
      id: "capex-governance-valuation",
      title: "资本强度 + 治理 + 估值",
      pillar: "资本 / 治理 / 估值",
      status: "Watching",
      trend: "warn",
      statement:
        "Connectivity 分部已盈利，但集团仍处极高资本投入阶段——Starlink 产生的经营利润尚不足以覆盖 Starship、卫星星座及 AI 基础设施扩张。Elon Musk 持约 82% 投票权，治理结构使小股东几乎没有制衡能力。估值约 $1.8T 把多年后的成功定价了。",
      marketMisunderstanding: "IPO 光环容易让人忽视三个同时存在的风险：集团 FCF 深度为负、治理高度集中、估值极端。任一处出问题都会放大冲击。",
      supporting: [
        { text: "锁定期解禁未引发预期中的抛售——一个尾部担忧解除。", tag: "FACT", source: "q2-2026", asOf: "2026-08-04" },
        { text: "Starlink 经营利润与 AI 收入增速提供了远期回报路径。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "上半年经营现金流约 $34.7亿、购买固定资产约 $284.8亿——简单口径 FCF 约 -$250亿。", tag: "FACT", source: "10q-q2-2026", asOf: "2026-06-30" },
        { text: "Elon Musk 持约 82% 投票权；SpaceX、xAI、X 等实体之间存在关联交易与资源分配风险。", tag: "FACT", source: "10q-q2-2026", asOf: "2026-06-30" },
        { text: "CEO 激励条件极其激进；小股东几乎没有治理制衡能力。", tag: "FACT" },
        { text: "约 $1.8T 市值仍极端，安全垫几乎为零。", tag: "INFERENCE" },
        { text: "公司整体仍净亏损（Q2 -$5.41亿，虽较去年收窄）。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
      ],
      keyMetrics: ["集团 FCF", "Starlink 利润 vs 集团 CapEx", "治理与关联交易披露", "市值/估值倍数", "整体盈亏路径"],
      invalidation: "若 增长兑现不及极高预期、资本配置实质损害股东回报、或治理问题引发信任危机，则 多个风险同步放大。",
      updated: "2026-08-29",
    },
  ],

  timeline: [
    { date: "2026-08-29", event: "Q2 财报后整改：thesis 结构重写", whyItMatters: "四条 thesis（Starlink 连接 Strong ↑、发射/Starship Strengthening ↑、AI 基础设施 Strengthening ↑、资本/治理/估值 Watching ⚠）。补入 AI 分部数据、集团 FCF、治理结构、ARPU 下降等关键事实。", node: "全部", thesisImpact: "up", action: "不动仓位——thesis 升级与校准，非交易信号。", source: null, related: null },
    { date: "2026-06-12", event: "SpaceX 完成 IPO（发行价 $135，代码 NASDAQ: SPCX）", whyItMatters: "此前买不到的太空/卫星互联网巨头首次可在公开市场配置；上市估值约 $1.8T。", node: "全部 / 估值", thesisImpact: "flat", action: "先观察；等更充分的披露。", source: { label: "CNBC 2026-08-10", url: "https://www.cnbc.com/2026/08/10/spacex-spcx-stock-ipo-price.html" }, related: null },
    { date: "2026-08-04", event: "Q2 首份上市后财报：总营收 $78亿(+92%)、Connectivity $43亿(+65.8%)、Starlink 用户翻倍但 ARPU -22%；AI 分部上半年收入 $33.8亿/亏损 $37.3亿；集团上半年 FCF 约 -$250亿", whyItMatters: "Starlink 经营底座确认（唯一盈利分部），AI 分部出现实质收入但巨额亏损。集团资本强度远超经营现金流——Starlink 利润尚不足以覆盖全部扩张。", node: "Starlink / AI / 资本", thesisImpact: "up", action: "不动仓位——业务质量确认，但资本回报路径和估值仍是核心障碍。", source: { label: "SpaceX Q2 2026 / Fortune", url: "https://fortune.com/2026/08/04/spacex-revenue-surges-92-to-7-8-billion-blowing-past-wall-street-expectations-by-nearly-1-billion/" }, related: null },
  ],

  thesisEvolution: [
    { date: "2026-06-12", label: "IPO：从私营到公开可投", note: "SpaceX 上市（SPCX，发行价 $135）——此前买不到的资产首次可配置。" },
    { date: "2026（当前）", label: "Watching / ↑：Starlink 盈利确认，但集团资本强度极高", note: "Starlink 已是盈利的规模化连接平台（上半年经营利润 $28.4亿），但集团同时为 Starship、卫星网络和 AI 基础设施大规模融资（上半年 CapEx $284.8亿、FCF 约 -$250亿）。AI 分部出现实质收入（$33.8亿）但巨额亏损（$37.3亿）。核心追踪链：Starlink 利润 + AI 合同现金流 → 能否覆盖卫星/Starship/AI CapEx → 能否减少对融资的依赖。治理高度集中（82% 投票权），估值 $1.8T 极端。" },
    { date: "2026-08-26", label: "AI 辅助初稿（待认领）", note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」。" },
  ],

  risks: [],

  stockWhy: { label: "SPCX · Stock Why 维基", url: "https://stock-why-wiki-site.vercel.app/stocks/SPCX", note: "市场波动的因果溯源在 Stock Why 维基；这本账本只问它是否改变了逻辑。" },
};
