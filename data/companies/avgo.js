/*
 * Investment Book —— AVGO 数据文件。tier: active。枚举 key 英文，界面中文。
 * 部分数据来自 2026-08 网络行情/新闻（时间线已标注来源）；持仓为「占位」示例。
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA.AVGO = {
  ticker: "AVGO",
  name: "Broadcom Inc.",
  tier: "active",
  holdingStatus: "held",
  tagline: "帮超大厂造反 NVDA 的定制芯片 + VMware 软件收租。",
  oneLiner:
    "一手做定制 AI ASIC（帮超大厂造「非 NVDA」的芯片），一手靠 VMware 等软件收高黏性的租。FY26 Q2 AI 半导体 +143% 到 $108亿，定制 ASIC 逻辑正强力兑现；悬念转向客户集中与估值。",
  updated: "2026-08-27",
  thesisStatus: "Healthy",
  statusNote:
    "定制 AI ASIC 逻辑正强力兑现：FY26 Q2（6/3 报）总营收 $222亿(+48%、创纪录)、其中 AI 半导体 $108亿(+143%)；毛利率 77.1%（半导体占比上升略摊薄）。客户已从超大厂扩到 Google/Meta/OpenAI/Anthropic。Q3 指引进一步加速（AI 半导体约 $160亿、+200%，尚未报）。VMware 软件把它变成软硬结合、现金流更稳的公司。风险转向：客户仍集中、并购债务、以及高估值的容错空间。",

  currentDecision: "持有",
  decisionReason:
    "Q2 财报强力确认定制 ASIC（AI 半导体 +143%）、客户基础在扩宽；软件抬毛利与黏性。但客户集中 + 并购债务、估值偏高。当前不动仓位。",
  nextDecisionTriggers: [
    "定制 ASIC 订单能见度下降、或主要客户转回通用 GPU",
    "软件客户大规模流失、或整合未兑现协同",
    "主要客户之一大幅削减定制订单",
  ],

  sources: {
    "q2fy26": { label: "Broadcom FY26 Q2 业绩（2026-06-03；官方 IR）", url: "https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-second-quarter-fiscal-year-2026-financial", date: "2026-06-03", type: "IR" },
    "q3-guide": { label: "Broadcom Q3 FY26 指引 / 报道（CNBC）", url: "https://www.cnbc.com/2026/06/03/broadcom-avgo-earnings-report-q2-2026.html", date: "2026-06-03", type: "media" },
  },

  whyIOwnIt: [
    "定制 AI ASIC 的头号玩家——超大厂造「非 NVDA」芯片都要找它，是自研浪潮的直接受益者。",
    "VMware + 软件组合抬高毛利与黏性，把周期性硬件生意变得更像收租。",
    "强现金流 + 高分红，资本配置以并购+回报为主。",
  ],

  position: {
    note: "占位——请替换成真实数字。质量和估值分开。",
    shares: 20,
    avgCost: 220.0,
    currentPrice: 357.56, // 2026-08-25 网络行情快照，非实时
    priceAsOf: "2026-08-25",
    portfolioWeight: 5.0,
    targetWeight: 6.0,
    addRange: "回撤到成本附近、或定制 ASIC 订单能见度提升且估值回落时加仓",
    reduceRange: "仓位超过组合约 8%、或大客户订单/毛利转弱时减仓",
    qualityNote: "质量：高。定制芯片领先、软件黏性、现金流与分红稳；瑕疵在客户集中与并购债务。",
    valuationNote: "估值：偏高。定价了定制 ASIC 持续放量 + 软件整合兑现，容错空间收窄。",
  },

  theses: [
    {
      id: "custom-asic",
      title: "定制 AI ASIC 是结构性受益者",
      pillar: "定制 ASIC",
      status: "Strong",
      trend: "up",
      statement:
        "超大厂越想降低对 NVDA 的依赖，就越需要 Broadcom 帮它们设计定制加速器。它是「去 NVDA 化」浪潮里最直接、风险最分散的军火商。",
      marketMisunderstanding: "市场常把 AI 芯片叙事等同于 NVDA；Broadcom 是押注「客户自研替代」的另一面，且不需要赌哪家赢。",
      supporting: [
        { text: "FY26 Q2 AI 半导体收入 $108亿、+143% 同比；总营收 $222亿(+48%、创纪录)。", tag: "FACT", source: "q2fy26", asOf: "2026-05-03" },
        { text: "为 Google、Meta、OpenAI、Anthropic 设计定制 AI 加速器（XPU/ASIC）——客户从超大厂扩到前沿 AI 实验室。", tag: "FACT", source: "q2fy26", asOf: "2026-05-03" },
        { text: "Q3 指引 AI 半导体约 $160亿、+200% 同比（进一步加速；尚未报）。", tag: "FACT", source: "q3-guide", asOf: "2026-06-03" },
      ],
      contrary: [
        { text: "定制订单集中在少数大客户，能见度受其 capex 摆布。", tag: "FACT" },
        { text: "若通用 GPU 重新占优，定制需求可能放缓。", tag: "INFERENCE" },
      ],
      keyMetrics: ["AI 半导体收入增速", "定制 ASIC 客户数", "订单能见度"],
      invalidation: "若 定制 ASIC 订单能见度下降、或主要客户转回通用 GPU，则 定制芯片逻辑削弱。",
      updated: "2026-08-26",
    },
    {
      id: "software-moat",
      title: "VMware + 软件转型抬毛利与黏性",
      pillar: "软件护城河",
      status: "Healthy",
      trend: "up",
      statement:
        "把 VMware 等企业软件整合进来，Broadcom 从纯周期性芯片公司，转向软硬结合、经常性收入更高、毛利更稳的模式。",
      marketMisunderstanding: "有人只看芯片周期；软件组合其实在平滑周期、抬高整体质量。",
      supporting: [
        { text: "基础设施软件（VMware 等）Q3 指引约 $89亿、+31% 同比——经常性、高毛利收入在放量。", tag: "FACT", source: "q3-guide", asOf: "2026-06-03" },
        { text: "企业虚拟化的高切换成本形成黏性。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "VMware 提价策略引发部分客户不满/流失风险。", tag: "FACT" },
        { text: "大额并购带来债务与整合执行风险。", tag: "FACT" },
      ],
      keyMetrics: ["软件收入占比", "软件毛利率", "客户留存"],
      invalidation: "若 软件客户大规模流失、或整合未能兑现协同，则 软件护城河逻辑削弱。",
      updated: "2026-08-26",
    },
    {
      id: "concentration-debt",
      title: "客户集中与并购债务是主要风险",
      pillar: "集中 / 债务",
      status: "Watching",
      trend: "warn",
      statement:
        "AI 定制收入高度依赖少数超大厂；连续大额并购（VMware 等）也带来可观债务。任一处出问题都会放大到财务与估值。",
      marketMisunderstanding: "牛市里把集中当「大客户背书」；同一批客户的减速会同步放大下行。",
      supporting: [
        { text: "现金流足以覆盖债务与分红。", tag: "FACT" },
        { text: "客户基础在扩宽（从超大厂到 OpenAI、Anthropic），略微缓解单一客户集中。", tag: "FACT", source: "q2fy26", asOf: "2026-05-03" },
      ],
      contrary: [
        { text: "前几大客户仍贡献很高比例的 AI 收入。", tag: "FACT" },
        { text: "并购推高了资产负债表杠杆。", tag: "FACT" },
      ],
      keyMetrics: ["客户集中度", "净负债/EBITDA", "自由现金流"],
      invalidation: "若 主要客户之一大幅削减定制订单、且债务负担限制回旋空间，则 财务与估值同步承压。",
      updated: "2026-08-26",
    },
  ],

  timeline: [
    { date: "2026-08-26", event: "为 AVGO 开立投资账本（起点）", whyItMatters: "基线快照。", node: "全部", thesisImpact: "flat", action: "不动仓位——建立记录。", source: null, related: null },
    { date: "2026-06-03", event: "FY26 Q2 财报：总营收 $222亿(+48%、创纪录)、AI 半导体 $108亿(+143%)；Q3 指引 AI 半导体 ~$160亿(+200%)", whyItMatters: "定制 ASIC 逻辑强力兑现——AI 半导体三位数增长、客户扩到 OpenAI/Anthropic；Q3 指引进一步加速。软件（VMware）+31% 也在放量。", node: "定制 ASIC / 软件", thesisImpact: "up", action: "不动仓位——基本面确认，估值偏高、客户集中仍要盯。", source: { label: "Broadcom FY26 Q2 IR / CNBC", url: "https://www.cnbc.com/2026/06/03/broadcom-avgo-earnings-report-q2-2026.html" }, related: { label: "Stock Why · AVGO 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/AVGO#2026-08-24" } },
    { date: "2026-08", datePrecision: "month", event: "资金面：ARK 等机构加仓 AI 芯片股（含 AVGO）", whyItMatters: "这是 fund flow / 情绪面，不是基本面证据——刻意放在时间线而非 thesis 的支持证据里。真正要等的是财报里的定制 ASIC 订单与毛利。", node: "情绪 / 资金面", thesisImpact: "flat", action: "不动仓位；把机构加仓当情绪，等财报确认基本面。", source: { label: "资金流报道（aggregator，仅供参考）", url: "https://tickeron.com/ticker/AVGO/" }, related: { label: "Stock Why · AVGO 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/AVGO#2026-08-24" } },
  ],

  thesisEvolution: [
    { date: "2026-08-26", label: "AI 辅助初稿（待认领）", note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」。" },
  ],

  // 逐条证伪条件在各 thesis 的 invalidation（唯一真相来源，页面自动派生）。此处只留跨逻辑 / 存续性风险。AVGO 暂无。
  risks: [],

  stockWhy: { label: "AVGO · Stock Why 维基", url: "https://stock-why-wiki-site.vercel.app/stocks/AVGO", note: "市场波动的因果溯源在 Stock Why（那边已有 AVGO 档案）；这本账本只问它是否改变了逻辑。" },
};
