/*
 * Investment Book —— SPCX (SpaceX) 数据文件。tier: active。
 * SpaceX 于 2026-06-12 IPO（发行价 $135，代码 NASDAQ: SPCX）——此前为私营，
 * 故运营/财务披露仍较薄，估值极高。带 (待核实) 的都请以官方招股书/财报为准。
 * 枚举 key 英文，界面中文；持仓为「占位」示例。
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA.SPCX = {
  ticker: "SPCX",
  name: "SpaceX",
  tier: "active",
  holdingStatus: "watchlist", // 新上市、披露薄、估值极端——先观察，不作为已持有条目
  tagline: "Starlink 印现金流 + Starship 降本期权——但估值把未来都定价了。",
  oneLiner:
    "刚上市的太空巨头：一边是 Starlink 规模化的经常性收入，一边是发射近乎垄断 + Starship 的长期降本期权。悬念全在估值——约 $1.8T 的市值，把很多年后的成功都提前定价了。",
  updated: "2026-08-26",
  thesisStatus: "Watching",
  statusNote:
    "2026-06-12 IPO（发行价 $135，代码 SPCX），当前约 $138、市值约 $1.87T（2026-08 网络行情，官方数据待核实）。业务质量极高（Starlink 现金流 + 发射领先 + Starship 期权），但作为新上市公司，披露仍薄、估值极端。这是一个「优秀公司，但价格是核心变量」的典型。目前定位为观察名单，先看披露、不建仓。",

  currentDecision: "观察",
  decisionReason:
    "业务质量高但刚上市、披露薄、估值约 $1.8T 把多年后的成功都定价了。先观察，等更充分的披露与锁定期波动，暂不建仓。",
  nextDecisionTriggers: [
    "更充分的财务披露（Starlink 用户/ARPU、Starship 里程碑）出来",
    "锁定期到期后的估值消化",
    "出现明显低于内在价值的价格",
  ],

  sources: {
    "ipo-2026": { label: "SpaceX IPO / SPCX 行情（CNBC；官方招股书为准）", url: "https://www.cnbc.com/2026/08/10/spacex-spcx-stock-ipo-price.html", date: "2026-08-10", type: "media" },
  },

  whyIOwnIt: [
    "Starlink 是规模化的经常性收入引擎——全球宽带 + 直连手机，现金流可见度越来越高。",
    "发射近乎垄断 + 可复用火箭的成本曲线，Starship 是航天成本数量级下降的长期期权。",
    "稀缺的「太空 + 卫星互联网」纯玩标的，此前买不到，如今可在公开市场配置。",
  ],

  position: {
    note: "占位——请替换成真实数字。注意：SpaceX 2026-06 才 IPO，披露薄、估值高，建议先小仓。",
    shares: 20,
    avgCost: 135.0, // 若按 IPO 发行价，示意
    currentPrice: 137.95, // 2026-08-25 网络行情快照，非实时
    priceAsOf: "2026-08-25",
    portfolioWeight: 3.0,
    targetWeight: 3.0,
    addRange: "等锁定期后波动、或披露更充分且估值消化后，再考虑加仓",
    reduceRange: "仓位超过组合约 5%、或 Starship/Starlink 里程碑不及预期时减仓",
    qualityNote: "质量：极高（业务与技术领先、垄断性资产）。但作为新上市公司，治理与披露还需时间检验。",
    valuationNote: "估值：极端。约 $1.8T 市值把多年后的 Starlink 规模 + Starship 成功都定价了，安全垫几乎没有。",
  },

  theses: [
    {
      id: "starlink-cashflow",
      title: "Starlink 是规模化的经常性现金流引擎",
      pillar: "Starlink 现金流",
      status: "Strong",
      trend: "up",
      statement:
        "Starlink 的全球宽带 + 直连手机业务，把一次性发射能力转化为经常性订阅收入。用户规模化后，它是支撑整个估值的现金流底座。",
      marketMisunderstanding: "很多人把 SpaceX 当「火箭公司」；真正的现金流故事是 Starlink 的订阅年金。",
      supporting: [
        { text: "Starlink 用户与经常性收入持续扩张 (待核实)。", tag: "FACT" },
        { text: "发射自持 → Starlink 部署成本内部化，形成成本优势。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "卫星星座 capex 巨大，回本周期长 (待核实)。", tag: "INFERENCE" },
        { text: "Amazon Kuiper 等竞争者进入低轨宽带。", tag: "FACT" },
        { text: "各国频谱/落地监管带来不确定性。", tag: "FACT" },
      ],
      keyMetrics: ["Starlink 用户数", "Starlink 经常性收入", "ARPU"],
      invalidation: "若 Starlink 用户增长停滞、或竞争把 ARPU 打下来且无法覆盖 capex，则 现金流引擎逻辑转弱。",
      updated: "2026-08-26",
    },
    {
      id: "launch-starship",
      title: "发射近乎垄断 + Starship 是降本期权",
      pillar: "发射 / Starship",
      status: "Strengthening",
      trend: "up",
      statement:
        "可复用火箭让 SpaceX 在商业发射上近乎垄断。Starship 若成熟，将把入轨成本再降一个数量级，打开卫星部署、深空乃至新市场的长期期权。",
      marketMisunderstanding: "市场容易在 Starship 的每次成败上情绪化；关键是长期成本曲线，而非单次试飞。",
      supporting: [
        { text: "可复用火箭带来发射成本与频次优势（广泛报道，缺招股书级披露佐证，暂按推断）。", tag: "INFERENCE" },
        { text: "在商业发射市场份额领先（待官方/权威口径核实）。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "Starship 仍处研发/爬坡，执行风险大 (待核实)。", tag: "INFERENCE" },
        { text: "对创始人的高度依赖（关键人风险）。", tag: "FACT" },
      ],
      keyMetrics: ["发射频次", "Starship 里程碑", "单位入轨成本"],
      invalidation: "若 Starship 长期无法进入可靠运营、且发射优势被追平，则 降本期权价值下降。",
      updated: "2026-08-26",
    },
    {
      id: "valuation-lockup",
      title: "估值极高 + 上市初期锁定期/波动风险",
      pillar: "估值 / 锁定期",
      status: "Watching",
      trend: "warn",
      statement:
        "约 $1.8T 的市值已经把很多年后的成功提前定价。叠加新股锁定期到期的抛压和薄披露，短期波动会很大，安全垫几乎为零。",
      marketMisunderstanding: "IPO 光环容易让人忽视：好公司 + 极端价格 = 差的风险回报。",
      supporting: [{ text: "IPO 定价 $135、当前约 $138、市值约 $1.87T。", tag: "FACT", source: "ipo-2026", asOf: "2026-08-10" }],
      contrary: [
        { text: "锁定期到期可能带来集中抛压 (待核实)。", tag: "INFERENCE" },
        { text: "作为新上市公司，财务披露仍不充分。", tag: "FACT" },
      ],
      keyMetrics: ["市值/估值倍数", "锁定期时间表", "披露完整度"],
      invalidation: "若 增长兑现不及极高预期、或锁定期抛压 + 薄披露引发重估，则 估值逻辑主导下行。",
      updated: "2026-08-26",
    },
    {
      id: "keyman-governance",
      title: "关键人与治理是持续折价项",
      pillar: "关键人 / 治理",
      status: "Watching",
      trend: "warn",
      statement:
        "公司与创始人深度绑定，且与其名下其他实体（如 xAI 等）存在潜在关联交易。既是愿景来源，也是治理与注意力分散的风险。",
      marketMisunderstanding: "光环叙事下，治理与关联方风险常被低估。",
      supporting: [{ text: "创始人愿景是长期价值的关键驱动。", tag: "INFERENCE" }],
      contrary: [
        { text: "高度依赖单一关键人。", tag: "FACT" },
        { text: "关联实体可能带来利益冲突/注意力分散 (待核实)。", tag: "INFERENCE" },
      ],
      keyMetrics: ["治理结构", "关联交易披露", "管理层专注度"],
      invalidation: "若 治理问题或关联交易实质损害小股东利益，则 折价扩大、逻辑削弱。",
      updated: "2026-08-26",
    },
  ],

  timeline: [
    { date: "2026-06-12", event: "SpaceX 完成 IPO（发行价 $135，代码 NASDAQ: SPCX）", whyItMatters: "此前买不到的太空/卫星互联网巨头首次可在公开市场配置；上市估值约 $1.8T。", node: "全部 / 估值", thesisImpact: "flat", action: "先观察/小仓；等更充分的披露与锁定期波动。", source: { label: "CNBC 2026-08-10", url: "https://www.cnbc.com/2026/08/10/spacex-spcx-stock-ipo-price.html" }, related: null },
    { date: "2026-08-25", event: "占位——上市后行情约 $138、市值约 $1.87T", whyItMatters: "作为基线记录当前估值水平，便于日后对照增长兑现。", node: "估值 / 锁定期", thesisImpact: "flat", action: "不动仓位——建立记录。", source: { label: "SPCX 行情综合（2026-08）", url: "https://www.tradingview.com/symbols/NASDAQ-SPCX/" }, related: null },
  ],

  thesisEvolution: [
    { date: "2026-06-12", label: "IPO：从私营到公开可投", note: "SpaceX 上市（SPCX，发行价 $135）——此前买不到的资产首次可配置。" },
    { date: "2026-08-26", label: "AI 辅助初稿（待认领）", note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认；新上市数据尤其单薄，务必以官方招股书/财报核实。" },
  ],

  // 逐条证伪条件在各 thesis 的 invalidation（唯一真相来源，页面自动派生）。关键人/治理已作为一条 thesis 处理。此处暂无额外存续性风险。
  risks: [],

  stockWhy: { label: "SPCX · Stock Why 维基", url: "https://belindasun.github.io/stock-why-wiki/", note: "市场波动的因果溯源在 Stock Why 维基；这本账本只问它是否改变了逻辑。" },
};
