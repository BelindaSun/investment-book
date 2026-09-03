/*
 * Investment Book —— CBRS (Cerebras) 数据文件。tier: watch（仅概览）。
 * 高波动的投机性标的，先观察、不重仓。持仓为「占位」示例。
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA.CBRS = {
  ticker: "CBRS",
  name: "Cerebras Systems",
  tier: "watch",
  holdingStatus: "watchlist",
  tagline: "用晶圆级芯片构建高速推理云——用大额容量承诺换增长的高执行风险平台。",
  oneLiner:
    "正从晶圆级芯片厂商转向以自有芯片为底层的高速推理云平台。Q2 core revenue $210M(+103%)、Cloud +281%、已签约约 600MW 数据中心容量。与 OpenAI 签订多年容量合同（含 $10亿 working-capital loan 和客户 warrants）。真正的竞争不只是芯片性能，而是推理利用率、客户工作负载和数据中心经济性。GAAP gross margin 14% vs core 41%——客户 warrants 是获得重大合同的真实经济代价。",
  updated: "2026-08-29",
  thesisStatus: "Watching",
  statusNote:
    "Watching / ↑——商业化明显强化，但盈利、毛利和客户集中尚未证明。Q2 GAAP 收入 $180.1M(+74%)、core revenue $209.9M(+103%)、Cloud 约 $126M(+281%)。全年 core revenue 指引上调至 $880–890M。已签约约 600MW 数据中心容量。OpenAI 多年容量合同（250MW 初始交付、$10亿贷款、客户 warrants）。GAAP gross margin 14%、core gross margin 41%（差异来自 warrants 摊销和股权激励）。GAAP 净亏损约 $450.5M、core 净亏损仅 $6.9M。IPO 后现金约 $74亿 + 有价证券 $12亿。核心亏损接近盈亏平衡，但尚未证明可持续的 GAAP 盈利与 FCF 模型。",

  currentDecision: "观察",
  decisionReason:
    "Core revenue 翻倍、Cloud +281%、OpenAI 合同提升能见度、核心亏损接近盈亏平衡。但 GAAP 仍巨亏、毛利率含客户 warrants 代价、客户高度集中、600MW 容量交付执行风险大。仅作观察，如参与也只宜极小仓。",
  nextDecisionTriggers: [
    "Core gross margin 持续在 41–43% 以上、且 GAAP 与 core 差距收窄",
    "OpenAI 容量按节点交付、且利用率达到盈利水平",
    "客户集中度改善——新增非 OpenAI/G42 的重大客户",
    "估值消化到能容错的水平",
  ],

  sources: {
    "q2-2026": { label: "Cerebras Q2 2026 财报（2026-08-12；CNBC）", url: "https://www.cnbc.com/2026/08/12/cerebras-cbrs-q2-earnings-report-2026.html", date: "2026-08-12", type: "media" },
    "10q-q2-2026": { label: "Cerebras Q2 2026 10-Q（SEC）", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=cerebras&CIK=&type=10-Q", date: "2026-08", type: "filing" },
  },

  whyIOwnIt: [
    "晶圆级架构在低延迟推理上有独特卖点；正从卖芯片转向经营推理云平台（Cloud +281%），收入结构正在发生重要变化。",
    "OpenAI 多年容量合同、约 600MW 签约容量、core revenue 翻倍——商业化在提速，不再只是概念。",
    "作为观察对象，它是跟踪「推理专用芯片 + 云平台能否挑战 GPU 生态」的最佳窗口之一。高风险小仓观察，不是核心持仓。",
  ],

  position: {
    note: "占位——投机性标的，建议仅小仓观察。请替换成真实数字。",
    shares: 10,
    avgCost: 230.0,
    currentPrice: 250.0,
    priceAsOf: "2026-08-25",
    portfolioWeight: 1.0,
    targetWeight: 1.0,
    addRange: "只在核心毛利率持续改善、OpenAI 容量按计划交付时，才考虑从观察转小仓",
    reduceRange: "任何时候仓位都不宜超过组合约 2%；估值/波动是主要约束",
    qualityNote: "质量：未证实但改善中。商业化提速（core revenue +103%、Cloud +281%），但 GAAP 盈利、毛利质量、客户集中和容量交付都待验证。",
    valuationNote: "估值：高且脆弱。高倍数下容不下任何一次 miss，股价对消息极度敏感（Q2 超预期仍跌 17%）。",
  },

  theses: [
    {
      id: "inference-cloud",
      title: "晶圆级快速推理云平台",
      pillar: "推理云",
      status: "Strengthening",
      trend: "up",
      statement:
        "Cerebras 正从晶圆级芯片厂商转向以自有芯片为底层的高速推理云平台。真正的竞争不只是芯片性能，而是推理利用率、客户工作负载和数据中心经济性。",
      supporting: [
        { text: "Q2 core revenue $209.9M，同比增长 103%。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Cloud 收入约 $126M，同比增长 281%——增长引擎已从硬件销售转向云服务。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "硬件收入约 $54M，低于去年同期——收入结构发生重要变化。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "Q3 core revenue 指引 $214–216M；全年上调至 $880–890M。", tag: "FACT", source: "q2-2026", asOf: "2026-08-12" },
        { text: "已签约数据中心容量约 600MW。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "GAAP gross margin 仅 14%（core 41%）——差异来自客户 warrants 摊销和股权激励。Core margin 显示底层利用率和定价改善，但 warrants 是获得重大合同的真实经济代价。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "全年 core operating margin 指引仍为 -19%至-17%——尚未形成可持续盈利模型。", tag: "FACT", source: "q2-2026", asOf: "2026-08-12" },
        { text: "600MW 容量需要大量资金转化为高利用率、正毛利的运营——短期融资风险不高（现金 $74亿），但执行风险大。", tag: "INFERENCE" },
      ],
      keyMetrics: ["Core revenue 增速", "Cloud 收入占比与增速", "Core gross margin（全年指引 41–43%）", "GAAP vs core margin 差距", "数据中心利用率"],
      invalidation: "若 Cloud 增速放缓、core gross margin 无法维持在 40%+ 区间、或数据中心利用率长期不足，则 推理云平台逻辑削弱。",
      updated: "2026-08-29",
    },
    {
      id: "openai-contract",
      title: "OpenAI 容量合同与执行",
      pillar: "OpenAI 合同",
      status: "Strengthening",
      trend: "up",
      statement:
        "OpenAI 多年容量合同提升收入能见度和商业验证——但同时也意味着扩容义务、客户议价权和稀释风险上升。长期合同是收入底座，也是执行压力源。",
      supporting: [
        { text: "OpenAI 合同预计贡献未来数年的重要收入；初始容量交付涉及 250MW。", tag: "FACT", source: "10q-q2-2026", asOf: "2026-06-30" },
        { text: "OpenAI 提供约 $10亿 working-capital loan。", tag: "FACT", source: "10q-q2-2026", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "Cerebras 向 OpenAI 发放低执行价客户 warrants——这是获得合同的真实稀释代价。", tag: "FACT", source: "10q-q2-2026", asOf: "2026-06-30" },
        { text: "未按节点交付容量或服务不达标时，OpenAI 可终止部分或全部合同。", tag: "FACT", source: "10q-q2-2026", asOf: "2026-06-30" },
        { text: "大额合同提高了单一项目执行失败的影响。", tag: "INFERENCE" },
      ],
      keyMetrics: ["OpenAI 容量交付进度", "合同收入确认节奏", "Warrants 稀释影响", "服务达标情况"],
      invalidation: "若 OpenAI 容量交付严重延迟、或服务不达标导致合同终止，则 核心收入底座受损。",
      updated: "2026-08-29",
    },
    {
      id: "concentration-profitability",
      title: "客户集中 + 盈利模型待验证",
      pillar: "集中 / 盈利",
      status: "Watching",
      trend: "warn",
      statement:
        "客户集中从「单一中东客户」转向「少数战略平台客户」（OpenAI、G42、MBZUAI、AWS），集中风险没有消失，只是客户组合发生改变。核心亏损已接近盈亏平衡，但在大规模扩容和客户获取成本计入后，尚未证明可持续的 GAAP 盈利与自由现金流模型。",
      supporting: [
        { text: "Core 净亏损仅 $6.9M——核心亏损接近盈亏平衡。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "G42 收入占比已从过去的极高水平下降；客户组合在改善。", tag: "FACT", source: "10q-q2-2026", asOf: "2026-06-30" },
        { text: "IPO 后现金约 $74亿 + 有价证券约 $12亿——短期融资风险不高。", tag: "FACT", source: "10q-q2-2026", asOf: "2026-06-30" },
      ],
      contrary: [
        { text: "GAAP 净亏损约 $450.5M——主要受股权激励和客户 warrants 影响，但不能忽略。", tag: "FACT", source: "q2-2026", asOf: "2026-06-30" },
        { text: "OpenAI 将成为未来数年极重要的收入来源——从 G42 依赖转向 OpenAI 依赖。", tag: "INFERENCE" },
        { text: "中东客户（G42、MBZUAI）仍面临出口许可和监管风险。", tag: "FACT" },
        { text: "全年 core operating margin 指引 -19%至-17%——即便核心口径也尚未盈利。", tag: "FACT", source: "q2-2026", asOf: "2026-08-12" },
      ],
      keyMetrics: ["客户集中度（前五大客户收入占比）", "GAAP vs core 盈亏", "FCF", "Core operating margin"],
      invalidation: "若 核心毛利率无法维持、客户集中度未改善、且 GAAP 亏损持续扩大，则 商业模型可持续性逻辑崩塌。",
      updated: "2026-08-29",
    },
  ],

  timeline: [
    { date: "2026-08-29", event: "Q2 财报后整改：thesis 结构重写", whyItMatters: "三条 thesis（推理云 Strengthening ↑、OpenAI 合同 Strengthening ⚠、集中/盈利 Watching ⚠）。从「晶圆级芯片投机」升级为「推理云平台 + 大额容量合同执行」。补入 GAAP vs core 毛利率、OpenAI 合同条款、600MW 容量、客户集中变化等关键事实。", node: "全部", thesisImpact: "up", action: "不动仓位——thesis 校准，非交易信号。", source: null, related: null },
    { date: "2026-08-12", event: "Q2 2026 财报：core revenue $210M(+103%)、Cloud +281%、核心亏损接近盈亏平衡；但 GAAP 仍巨亏、股价盘后 -17%", whyItMatters: "商业化提速（Cloud 成增长引擎）、核心亏损收窄；但 GAAP margin 14% vs core 41% 的差距暴露 warrants 代价，高估值容不下瑕疵。", node: "推理云 / 盈利", thesisImpact: "up", action: "不动仓位——基本面改善，但估值脆弱。", source: { label: "Cerebras Q2 2026 / CNBC", url: "https://www.cnbc.com/2026/08/12/cerebras-cbrs-q2-earnings-report-2026.html" }, related: { label: "Stock Why · CBRS 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/CBRS#2026-08-24" } },
  ],

  thesisEvolution: [
    { date: "2026（当前）", label: "Watching / ↑：从芯片厂商到推理云平台，商业化提速但盈利待验证", note: "Q2：core revenue $210M(+103%)、Cloud +281%（$126M）、OpenAI 多年容量合同（250MW、$10亿贷款、warrants）、约 600MW 签约容量。从「非 NVDA 晶圆级芯片投机」升级为「用自研芯片构建推理云、通过大额容量承诺换增长的高执行风险平台」。GAAP margin 14% vs core 41% 暴露 warrants 代价。核心亏损接近盈亏平衡，但 GAAP 盈利模型和 FCF 尚未证明。" },
    { date: "2026-08-26", label: "AI 辅助初稿（待认领）", note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」。" },
  ],

  risks: [],

  stockWhy: { label: "CBRS · Stock Why 维基", url: "https://stock-why-wiki-site.vercel.app/stocks/CBRS", note: "CBRS 的市场波动因果溯源在 Stock Why 维基（那边已有 CBRS 档案，含此前暴跌分析）；这本账本只问它是否改变了逻辑。" },
};
