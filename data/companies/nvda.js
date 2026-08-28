/*
 * Investment Book —— NVDA 数据文件。
 * 枚举 key 保持英文（CSS/逻辑用），界面显示中文。时效数字标 (待核实)；
 * 持仓为「占位」示例，请替换成真实数字。代码/FCF/CapEx/P/E 等按中文财经习惯保留英文。
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA.NVDA = {
  ticker: "NVDA",
  name: "NVIDIA Corp.",
  tier: "core",
  holdingStatus: "held",
  tagline: "AI 建设浪潮里的卖铲人——向全行业收过路费。",
  oneLiner:
    "这轮 AI 的算力底座。真正要验证的不是「需求还在不在」，而是「这道护城河是在变宽，还是正被超大厂自研芯片和推理商品化悄悄侵蚀」。",
  updated: "2026-08-27",
  thesisStatus: "Strong",
  statusNote:
    "需求侧强劲、可见度高（8/26 财报确认），数据中心是绝对主体。真正的长期悬念在两处：一是下游 AI 的投资回报（推理经济学）能否持续支撑 capex；二是超大厂——最大的买家——同时在自研 ASIC 替代 NVIDIA。毛利率仍处 75% 高位、属正常波动。质量极高，但估值把「持续高增长 + 高毛利」都定价进去了——容错空间小。",

  currentDecision: "持有",
  decisionReason:
    "全栈护城河 + 需求结构性仍强；8/26 财报大超预期、供给承诺翻倍，需求进一步确认。但估值容错小，长期要盯的是推理经济学（AI ROI 能否兑现）和自研 ASIC 替代。强财报≠追高理由，当前不动仓位。",
  nextDecisionTriggers: [
    "AI 的经济产出 / ROI 明显跟不上 capex，capex 可持续性被质疑（推理经济学证伪）",
    "超大厂 capex 连续两季下修，且需求未能从其他来源接棒",
    "超大厂自研 ASIC 在主力负载上出现规模化替代",
    "毛利率出现结构性（而非周期性）下滑",
  ],

  sources: {
    "px-2026-08-12": { label: "大型科技股行情（Motley Fool 汇总）", url: "https://www.fool.com/investing/2026/08/12/alphabet-amazon-meta-platforms-and-microsoft-this/", date: "2026-08-12", type: "media" },
    "q2fy27": { label: "NVIDIA FY2027 Q2 业绩（2026-08-26；以官方 IR 为准）", url: "https://investor.nvidia.com/", date: "2026-08-26", type: "IR" },
    "q2fy27-cnbc": { label: "CNBC：NVDA Q2 FY27 财报直播", url: "https://www.cnbc.com/2026/08/26/nvidia-nvda-earnings-report-q2-2027-live-updates.html", date: "2026-08-26", type: "media" },
  },

  whyIOwnIt: [
    "AI 训练/推理的事实标准，且是「卖铲人」——不赌哪个模型赢，只要 AI 在建设就收钱。",
    "护城河不是单颗芯片领先，而是 CUDA 十几年生态 + 芯片/网络/系统的整机整合 + 每年加速的产品节奏。",
    "定价权体现在高毛利率上（FY25 约 75% 口径，待核实）；只要供不应求延续，现金流极其丰厚。",
  ],

  position: {
    note: "占位——请替换成你的真实数字。质量和估值下面分开：好公司不等于任何价格都能买。",
    shares: 50,
    avgCost: 80.0,
    currentPrice: 224.09, // 2026-08-12 网络行情快照，非实时
    priceAsOf: "2026-08-12",
    portfolioWeight: 12.0,
    targetWeight: 12.0,
    addRange: "回撤到成本附近、或非结构性的 20%+ 板块回调时考虑加仓",
    reduceRange: "仓位超过组合约 15%、或毛利率/需求出现结构性转弱信号时减仓",
    qualityNote:
      "质量：极高。事实标准、软硬件+网络全栈、强定价权、海量现金流、执行力顶尖。",
    valuationNote:
      "估值：高。倍数里已经定价了「持续超高增长 + 毛利维持」。这不是便宜票，容错空间小——任何一条被证伪都可能触发大幅重估。",
  },

  // 2026-08-27 Thesis calibration（Belinda review 后）：五条核心逻辑。
  theses: [
    {
      id: "full-stack-moat",
      title: "全栈护城河：CUDA + 网络 + 机架级系统",
      pillar: "全栈护城河",
      status: "Strong",
      trend: "up",
      statement:
        "真正难复制的不是最快的 GPU，而是十几年的 CUDA 软件生态、开发者锁定，加上从单卡到 NVLink / InfiniBand / 机架级的整机整合，以及一年一代、越来越快的产品节奏（Blackwell → Rubin）。护城河在软件和系统层，比单颗芯片的 benchmark 更持久。",
      marketMisunderstanding:
        "市场常把它看成「芯片性能领先」，因而容易被一次竞品发布吓到。真正的护城河是软件 + 网络 + 系统的整合。",
      supporting: [
        { text: "CUDA 生态 + 开发者习惯构成高切换成本。", tag: "FACT" },
        { text: "从单卡走向 NVLink/InfiniBand/整机架的系统级整合，卖的是整集群而非单卡。", tag: "FACT" },
        { text: "产品节奏加快（一年一代），拉开与追赶者的身位。", tag: "FACT" },
      ],
      contrary: [
        { text: "芯片层的绝对领先可被追赶，护城河靠一年一代的节奏维持。", tag: "INFERENCE" },
        { text: "自研 ASIC 的替代威胁真实存在——单独作为「垂直整合 / 自研 ASIC + 地缘」一条处理。", tag: "INFERENCE" },
      ],
      keyMetrics: ["开发者/框架生态", "网络（NVLink/InfiniBand）attach", "产品节奏（Blackwell→Rubin）"],
      invalidation:
        "若 CUDA + 系统整合的切换成本被显著削弱（例如主力负载大规模迁出 CUDA），则 全栈护城河逻辑被削弱。",
      updated: "2026-08-27",
    },
    {
      id: "demand-durability",
      title: "AI 算力需求的结构性（demand durability）",
      pillar: "算力需求",
      status: "Strong",
      trend: "up",
      statement:
        "AI 算力需求目前显示出明显的结构性特征，而非仅仅一次性训练周期。8/26 财报明显强化了这一判断，但还不能证明未来永远不会 overbuild。",
      marketMisunderstanding:
        "空头把它当成又一轮会崩的资本开支周期。我的看法：需求正从少数训练扩散到 AI labs / neocloud / 主权 AI / 企业，来源在变宽、变持久。",
      supporting: [
        { text: "超大厂的 capex 指引持续上调，且明确点名 AI 算力。", tag: "FACT" },
        { text: "FY27 Q2 数据中心营收 $890 亿、总营收 $962 亿（+106% 同比），远超 $910 亿指引中值。", tag: "FACT", source: "q2fy27", asOf: "2026-08-26" },
        { text: "NVIDIA 大幅增加未来供应采购承诺（从上季约 $1190 亿 增至约 $2790 亿）。", tag: "FACT", source: "q2fy27", asOf: "2026-08-26" },
        { text: "供应承诺翻倍，是管理层为很大的未来需求提前锁定供应——需求信心的间接信号，但不等于已确认的客户订单 / backlog。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "需求仍集中在少数超大厂的 capex 决策上（虽在向 AI labs / neocloud / 主权 AI / 企业扩散）。", tag: "FACT" },
        { text: "全行业 AI capex 有过度建设、之后消化库存的风险——财报强化需求，但不能证明永不 overbuild。", tag: "INFERENCE" },
        { text: "半导体历史是强周期行业，AI 未必例外。", tag: "INFERENCE" },
      ],
      keyMetrics: ["数据中心收入增速", "超大厂合计 capex", "需求来源多元化（labs/neocloud/主权/企业）"],
      invalidation:
        "若 超大厂 capex 连续 2 个季度下修、且需求未能从其他来源接棒，则 需求结构性逻辑转弱。",
      updated: "2026-08-27",
    },
    {
      id: "inference-economics",
      title: "推理经济学：算力 → 收入的飞轮",
      pillar: "推理经济学",
      status: "Strengthening",
      trend: "up",
      statement:
        "核心问题：更多 AI 算力能否持续创造足够的经济价值，从而支撑更多 capex？链条：算力↑ → tokens / AI 产出↑ → 收入 / 生产力↑ → AI ROI↑ → capex↑ → NVIDIA 需求↑。这是支撑长期需求的底层引擎，正在被强化，但尚未完全证明。",
      marketMisunderstanding:
        "市场把 NVDA 的需求当成「AI 热度」；真正决定它能否持续的，是下游 AI 的投资回报（ROI）能不能兑现。",
      supporting: [
        { text: "超大厂持续上调 AI capex，隐含它们相信 AI 的经济回报。", tag: "INFERENCE" },
        { text: "推理需求随 AI 应用普及而结构性放大，把一次性训练扩成持续消耗。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "AI 的终端经济产出若跟不上 capex，ROI 会下降。", tag: "INFERENCE" },
        { text: "目前缺乏清晰、公认的「AI 投入 → 回报」量化证据。", tag: "UNKNOWN" },
      ],
      keyMetrics: ["下游 AI 变现信号", "超大厂 AI 收入 / ROI 披露", "推理占比"],
      invalidation:
        "若 AI capex 持续大涨、但 AI 的经济产出跟不上，导致 ROI 下降、capex 被质疑，则 NVIDIA 的需求与估值同时承压。",
      updated: "2026-08-27",
    },
    {
      id: "margin-durability",
      title: "高毛利与定价权可持续",
      pillar: "高毛利 / 定价权",
      status: "Healthy",
      trend: "flat",
      statement:
        "约 75% 的毛利率反映强定价权。当前更像高位的正常波动（Q3 指引约 74%），而非结构性恶化——要盯的是结构性（而非周期性 / 产品切换性）的下滑。",
      marketMisunderstanding:
        "空头容易把任何毛利环比回落读成恶化；关键是区分周期性波动和结构性下滑。",
      supporting: [
        { text: "FY27 Q2 毛利率 75.0%，处历史高位。", tag: "FACT", source: "q2fy27", asOf: "2026-08-26" },
        { text: "Q3 指引毛利率约 74.0%（±0.5%），属高位正常波动。", tag: "FACT", source: "q2fy27", asOf: "2026-08-26" },
      ],
      contrary: [
        { text: "最大的几个客户同时在自研芯片，长期有动机压价（见「垂直整合 / 自研 ASIC」一条）。", tag: "FACT" },
        { text: "AMD 与定制 ASIC 竞争加剧，长期对价格是压力。", tag: "FACT" },
        { text: "产品代际切换期毛利可能短期承压（属周期性，非结构性）。", tag: "INFERENCE" },
      ],
      keyMetrics: ["毛利率（季度）", "定价 / 供需紧张度", "竞品份额"],
      invalidation:
        "若 毛利率出现结构性（而非周期性 / 产品切换性）下滑，则 定价权逻辑被削弱。（具体阈值与减仓动作待 Belinda 认领后才算决策规则。）",
      updated: "2026-08-27",
    },
    {
      id: "vertical-integration",
      title: "垂直整合：客户即对手（自研 ASIC）+ 地缘",
      pillar: "垂直整合 / 自研 ASIC + 地缘",
      status: "Watching",
      trend: "warn",
      statement:
        "NVIDIA 最大的客户，同时也是最有能力自研 ASIC 替代它的竞争者——这是最重要的长期矛盾。叠加对华出口管制的持续逆风，构成主要的结构性风险。",
      marketMisunderstanding:
        "牛市里把大客户当「背书」；但同一批客户既是最大买家、又在系统性地降低对 NVIDIA 的依赖。",
      supporting: [
        { text: "超大厂自研 ASIC（Google TPU、Amazon Trainium、Microsoft Maia、Meta MTIA）专为自家负载优化、绕开 CUDA。", tag: "FACT" },
        { text: "对华出口管制限制了一块本可观的市场，并带来政策不确定性。", tag: "FACT" },
      ],
      contrary: [
        { text: "自研 ASIC 生态与 CUDA 相比仍不成熟；多数前沿训练仍靠 NVIDIA。", tag: "FACT" },
        { text: "非受限市场需求足够强，能吸收部分中国损失。", tag: "INFERENCE" },
      ],
      keyMetrics: ["自研 ASIC 实际部署量", "推理端替代进度", "中国区收入 / 出口管制口径"],
      invalidation:
        "若 超大厂自研 ASIC 在主力负载上大规模替代 GPU，或 出口管制进一步收紧且中国需求无法转移，则 需求与估值承压。",
      updated: "2026-08-27",
    },
  ],

  business: [
    {
      name: "数据中心（Data Center）",
      role: "绝对主体",
      howItMakesMoney:
        "向超大厂、AI 实验室、主权 AI 和企业销售 AI 训练/推理 GPU、网络和系统。是收入与利润的压倒性来源。",
      note: "整条投资逻辑几乎都压在这里。这块的健康 = 整条逻辑的健康。",
    },
    {
      name: "网络（Networking，含 Mellanox / NVLink / InfiniBand）",
      role: "系统护城河的一部分",
      howItMakesMoney:
        "把成千上万块 GPU 高速互联的网络。让 NVIDIA 卖的是「整机架/整集群」，而不只是单卡。",
      note: "被低估的差异化——从卖芯片升级到卖系统。",
    },
    {
      name: "游戏（Gaming）",
      role: "起家业务、现为配角",
      howItMakesMoney: "GeForce 消费级显卡。稳定但增速与占比都已被数据中心远远盖过。",
      note: "曾经的主业，如今是现金牛配角。",
    },
    {
      name: "专业可视化 / 汽车（ProViz / Automotive）",
      role: "长久期期权",
      howItMakesMoney: "Omniverse、工作站，以及车载/自动驾驶平台。目前占比小。",
      note: "可选价值，不应算进基准情形。",
    },
  ],

  aiMoat: {
    summary:
      "NVIDIA 本身就是 AI 基础设施。核心问题：这波浪潮是在扩大它的护城河，还是正被超大厂自研芯片和推理商品化侵蚀？",
    verdict:
      "我的判断：在训练端净扩大（软件+网络+系统+一年一代的节奏，别人很难同时追上）；但在推理端和超大厂自研 ASIC 上，是真实的侵蚀点。这也是我盯得最紧的地方——护城河的方向，比短期需求更决定长期回报。",
    factors: [
      { name: "CUDA 软件栈", note: "十几年生态 + 开发者锁定，最难复制的一层。", direction: "up" },
      { name: "系统整合（NVLink / InfiniBand / 整机架）", note: "从卖芯片到卖集群，抬高整体切换成本。", direction: "up" },
      { name: "产品节奏（Blackwell → Rubin）", note: "一年一代，持续拉开身位。", direction: "up" },
      { name: "推理商品化", note: "推理对软件生态依赖更弱，更易被专用芯片替代。", direction: "warn" },
      { name: "超大厂自研 ASIC", note: "TPU / Trainium / Maia / MTIA 针对自家负载绕开 CUDA。", direction: "warn" },
      { name: "供应链掌控（TSMC / HBM / CoWoS）", note: "锁定先进封装与 HBM 产能，本身是一种护城河，也是瓶颈。", direction: "flat" },
    ],
    cannibalization:
      "诚实的张力：NVIDIA 最大的客户，正是最有钱、最有动机自研替代芯片的那几家。短期他们买得最多，长期他们也最想摆脱依赖。护城河能不能守住，取决于 NVIDIA 的系统级整合和产品节奏，快过客户自研 ASIC 的成熟速度。要盯的是推理侧份额和自研芯片的实际部署量。",
  },

  drivers: [
    { name: "超大厂 capex", why: "少数几家的资本开支，几乎等同于 NVIDIA 的订单簿。", direction: "up" },
    { name: "HBM 供给（SK Hynix / Micron / Samsung）", why: "高带宽内存是 AI 芯片的瓶颈，供给紧张即限制出货。", direction: "flat" },
    { name: "CoWoS / 先进封装产能（TSMC）", why: "先进封装产能决定供给上限。", direction: "flat" },
    { name: "数据中心电力", why: "GPU 集群拉动用电，电力/散热成为新约束。", direction: "warn" },
    { name: "训练 vs 推理需求结构", why: "推理占比上升决定需求的持久性与可替代性。", direction: "up" },
    { name: "自研 ASIC 替代速度", why: "超大厂自研芯片的成熟速度，直接决定护城河的侵蚀节奏。", direction: "warn" },
  ],

  ecosystem: {
    upstream: [
      { name: "TSMC（代工 + CoWoS 封装）", note: "独家先进制程与封装，产能=供给上限" },
      { name: "SK Hynix / Micron / Samsung（HBM）", note: "高带宽内存，AI 芯片瓶颈" },
      { name: "ASML（间接）", note: "光刻设备决定整个先进制程产能" },
      { name: "基板 / 载板供应", note: "先进封装的配套瓶颈" },
    ],
    self: [
      { name: "GPU（Blackwell / Rubin）", note: "算力核心" },
      { name: "CUDA 软件栈", note: "生态护城河" },
      { name: "网络（NVLink / InfiniBand）", note: "系统整合" },
      { name: "DGX / 系统", note: "整机/整集群" },
    ],
    downstream: [
      { name: "超大厂（MSFT / GOOGL / AMZN / META）", note: "最大买家，也是自研替代者" },
      { name: "AI 实验室（OpenAI / Anthropic / xAI）", note: "前沿训练需求" },
      { name: "主权 AI", note: "各国自建算力，拓宽客户基础" },
      { name: "服务器 OEM（SMCI / Dell）", note: "组装出货" },
      { name: "企业", note: "落地推理/私有部署" },
    ],
  },

  competition: [
    {
      name: "超大厂自研 ASIC（TPU / Trainium / Maia / MTIA）",
      attacking: "用为自家负载定制的芯片，绕开 GPU 与 CUDA。",
      moatTargeted: "CUDA 锁定 + 数据中心毛利。",
      evidence: "Google TPU、Amazon Trainium、Microsoft Maia、Meta MTIA 都在扩大自用部署。",
      threat: "High",
      thesisImpact: "直接施压 CUDA 护城河与毛利可持续性两条逻辑。",
    },
    {
      name: "AMD（MI 系列 / ROCm）",
      attacking: "性价比 + 开放软件栈争夺训练/推理份额。",
      moatTargeted: "数据中心 GPU 份额与定价。",
      evidence: "MI 系列在部分客户获得采用；ROCm 生态在补课。",
      threat: "Medium",
      thesisImpact: "长期对价格与份额是压力，暂未撼动生态领先。",
    },
    {
      name: "Broadcom",
      attacking: "帮超大厂设计定制 AI ASIC。",
      moatTargeted: "定制芯片替代通用 GPU。",
      evidence: "是多家超大厂定制硅的关键合作方。",
      threat: "High",
      thesisImpact: "是自研 ASIC 浪潮的军火商，间接放大对 NVDA 的替代。",
    },
    {
      name: "推理专用芯片（Cerebras / Groq 等）",
      attacking: "在推理场景用专用架构拼延迟/成本。",
      moatTargeted: "推理侧份额。",
      evidence: "在特定推理负载上展示性价比优势。",
      threat: "Medium",
      thesisImpact: "施压推理商品化这一侵蚀点。",
    },
    {
      name: "中国国产（华为昇腾等）",
      attacking: "在出口管制下替代受限市场。",
      moatTargeted: "中国区收入。",
      evidence: "管制反而给国产替代腾出空间。",
      threat: "Medium",
      thesisImpact: "强化地缘/出口这条逻辑的下行。",
    },
  ],

  metrics: [
    { label: "数据中心收入增速", latest: "FY27 Q2 数据中心 $890亿（总营收 +106%）", spark: [40, 60, 80, 90, 85, 106], unit: "% 同比", good: "up", note: "整条逻辑最重要的单一信号。2026-08-26 财报确认强劲。", judgment: true },
    { label: "毛利率", latest: "75.0%（Q3 指引约 74.0%±0.5%）", spark: [70, 73, 74, 75, 75, 74], unit: "%", good: "up", note: "定价权的体温计；高位正常波动，盯的是结构性（而非周期性）下滑。", judgment: true },
    { label: "超大厂合计 capex", latest: "持续上调 (待核实)", spark: [40, 48, 55, 62, 70, 78], unit: "指数", good: "up", note: "近似等于 NVDA 的订单簿。", judgment: true },
    { label: "推理占比信号", latest: "上升中 (待核实)", spark: [10, 15, 22, 30, 40, 48], unit: "%", good: "up", note: "推理接棒训练——需求持久性的关键。", judgment: true },
    { label: "中国区收入占比", latest: "受管制压制 (待核实)", spark: [22, 18, 14, 12, 10, 9], unit: "%", note: "受出口管制波动——方向有歧义（中性线）。", judgment: true },
  ],

  financials: {
    note: "约数 / 示意——NVIDIA 财年约在 1 月结束。依赖任何数字前请对照最新财报核实。第一版不给脆弱的目标价。",
    rows: [
      { label: "收入", values: ["约 $60B", "约 $130B", "约 $200B+"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "毛利率", values: ["约 73%", "约 75%", "约 74%"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "EPS（摊薄，示意）", values: ["约 $12", "约 $28", "约 $40"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "自由现金流 FCF", values: ["约 $27B", "约 $60B", "—"], periods: ["FY24", "FY25", ""] },
      { label: "现金及等价物", values: ["约 $26B", "约 $40B", "—"], periods: ["FY24", "FY25", ""] },
      { label: "P/E（前瞻）", values: ["—", "约 35x", "—"], periods: ["", "当前", ""] },
      { label: "EV / FCF", values: ["—", "约 40x", "—"], periods: ["", "当前", ""] },
    ],
    impliedExpectations:
      "高倍数隐含的是「多年维持超高增长 + 高毛利」。这意味着容错空间很小：只要需求增速换挡、或毛利率被自研 ASIC 和客户议价压下来，就可能触发估值与盈利的双杀。你付的价格，是在为「护城河守住 + 需求持久」买单。",
  },

  timeline: [
    {
      date: "2026-08-26",
      event: "为 NVDA 开立投资账本（这条记录的起点）",
      whyItMatters: "把截至今天的逻辑、健康度和持仓做一个基线快照。",
      node: "全部",
      thesisImpact: "flat",
      action: "不动仓位——建立记录。",
      source: null,
      related: null,
    },
    {
      date: "2026-08-26",
      event: "FY27 Q2 财报大超预期：营收 $962亿(+106%)、数据中心 $890亿、下季指引 $1080亿；毛利率 75.0%（Q3 指引约 74.0%）",
      whyItMatters:
        "对「算力需求」是强确认——NVIDIA 大幅增加未来供应采购承诺（$1190亿→$2790亿），是管理层为很大未来需求提前锁定供应的信号（非已确认客户订单）。毛利率仍处 75% 高位、Q3 指引约 74% 属正常波动。股价财报后走高（约 +6%）。",
      node: "算力需求 / 全栈护城河",
      thesisImpact: "up",
      action: "不动仓位——强财报确认「算力需求」，不是追高的理由。真正要持续盯的是「推理经济学（ROI 能否兑现）」和「自研 ASIC 替代」，而非毛利率的正常波动。",
      source: { label: "NVIDIA IR / CNBC 2026-08-26", url: "https://www.cnbc.com/2026/08/26/nvidia-nvda-earnings-report-q2-2027-live-updates.html" },
      related: { label: "Stock Why · NVDA 财报", url: "https://stock-why-wiki-site.vercel.app/stocks/NVDA" },
    },
    {
      date: "2026-08",
      datePrecision: "month",
      event: "占位——超大厂自研 ASIC 部署进展",
      whyItMatters:
        "自研芯片的实际部署量，是 CUDA 护城河侵蚀速度的直接读数。任何一家在主力负载上大规模切换，都会牵动护城河逻辑。",
      node: "护城河 / 竞争",
      thesisImpact: "warn",
      action: "不动仓位；若出现主力负载的规模化替代，重新核对护城河的证伪条件。",
      source: null,
      related: { label: "Stock Why · NVDA 2026-08-23", url: "https://stock-why-wiki-site.vercel.app/stocks/NVDA#2026-08-23" },
    },
  ],

  thesisEvolution: [
    {
      date: "2016–2020",
      label: "游戏 / 加密显卡公司",
      note: "主业是 GeForce 显卡，周期性强，被视为一家好的但受周期摆布的芯片公司。",
    },
    {
      date: "2023",
      label: "ChatGPT 引爆 AI 训练需求",
      note: "生成式 AI 让 GPU 成为训练的刚需，数据中心收入爆发，叙事从「显卡公司」转为「AI 算力底座」。",
    },
    {
      date: "2024–2025",
      label: "数据中心成为绝对主体、可见度拉长",
      note: "订单积压跨年度、毛利率抬到约 75%，系统级整合（网络+软件）拉开身位。多头逻辑成型。",
    },
    {
      date: "2026（当前）",
      label: "强劲，但侵蚀点浮现",
      note: "需求仍强；关注焦点转向三件事：推理迁移能否接棒、超大厂自研 ASIC 的替代速度、高毛利（FY25 约 75% 口径，待核实）的可持续性。仓位维持在目标水平。",
    },
    {
      date: "2026-08-26",
      label: "AI 辅助初稿（待认领）",
      note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」。",
    },
    {
      date: "2026-08-27",
      label: "Day Zero — thesis 正式认领",
      note: "经 Belinda 逐条 review 与校准，正式认领五条核心逻辑为自己的判断（不再是 AI 初稿）：① 全栈护城河、② 算力需求结构性、③ 推理经济学（算力→收入飞轮）、④ 高毛利/定价权、⑤ 垂直整合（客户即对手 + 地缘）。本次校准的实质动作：毛利率从 Watching 调回 Healthy（Q3 指引 74% 属正常波动，删掉未经官方证实的 71–72% 说法）、新增「推理经济学」这条最重要的长期引擎、把「客户集中」并入需求逻辑、并把 $279B 供给承诺从「客户需求」修正为「管理层锁定供应」的间接信号。从这一刻起，信念变化都以这五条为基准追踪。",
    },
    {
      date: "未来",
      label: "什么会让我改变主意",
      note: "留白。每当有真实证据强化、修改或证伪某条逻辑（尤其毛利率和自研替代），就更新这一页。",
    },
  ],

  // 逐条逻辑的证伪条件在各 thesis 的 invalidation 里（唯一真相来源，「风险 / 证伪」页自动派生）。
  // 这里只放跨逻辑 / 存续性风险。NVDA 暂无（地缘/出口已作为一条独立 thesis 处理）。
  risks: [],

  stockWhy: {
    label: "NVDA · Stock Why 维基",
    url: "https://stock-why-wiki-site.vercel.app/stocks/NVDA",
    note: "NVDA 的市场波动「为什么会发生」的因果溯源在 Stock Why 维基（那边已有 NVDA 档案）。这本账本只问：它是否改变了我的逻辑。",
  },
};
