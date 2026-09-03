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
  tagline: "头部 AI 客户多代定制计算平台的核心合作方 + VMware 软件收租。",
  oneLiner:
    "通过 XPU、SerDes、交换芯片和网络系统，成为超大厂和前沿 AI 实验室多代定制算力路线图的执行伙伴。FY26 Q3（9/2 盘后）AI 半导体 +221% 到 $167亿（占总收入 56%）、总营收 $296亿(+86%)、Q4 指引 AI $217亿(+236%)；Meta 多代 MTIA/2nm、OpenAI Jalapeño 已签约。悬念从「有没有需求」转向「集中订单能否按计划量产，以及估值是否已提前计入增长」——本季 beat 但股价回落、FY27 AI >$1000亿目标未上调，是当前主要观察变量。",
  updated: "2026-09-02",
  thesisStatus: "Strong",
  statusNote:
    "Strong / ↑——基本面持续确认。FY26 Q3（9/2 盘后）总营收 $296亿(+86%)、AI 半导体 $167亿(+221%、占总收入 56%、超此前 ~$160亿指引)、调整后 EPS $3.32（超预期 $3.24）、GAAP 净利 $131亿(+216%)。Q4 指引总营收 $348亿(+93%)、AI $217亿(+236%)。观察点：财报虽 beat 但股价盘后回落约 3.5%（约 $354），且公司未上调 FY27 AI >$1000亿目标——市场对「加速是否还能超预期」和估值容错更敏感。此前 Q2：AI 半导体 $108亿(+143%)、FCF $103亿(46% margin)、RPO $1646亿、Meta/OpenAI 多代合同已签。主要风险：客户集中、项目执行节奏、估值容错空间。",

  currentDecision: "持有",
  decisionReason:
    "Q3 AI 半导体 $167亿(+221%) 超指引、Q4 继续加速，基本面持续兑现；Meta/OpenAI 多代合同提升能见度。当前持有，重点盯估值容错、FY27 AI 目标是否上调、长期合同量产进度及 VMware 留存。",
  nextDecisionTriggers: [
    "FY27 AI >$1000亿目标被下调、或后续季度 AI 收入增速明显低于指引斜率",
    "定制 ASIC 订单能见度下降、或主要客户转回通用 GPU / 削减定制订单",
    "长期合同量产进度不及预期（流片、爬坡、客户部署节奏延迟）",
    "软件客户大规模流失、或 VMware 整合未兑现协同",
  ],

  sources: {
    "q2fy26": { label: "Broadcom FY26 Q2 业绩（2026-06-03；官方 IR）", url: "https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-second-quarter-fiscal-year-2026-financial", date: "2026-06-03", type: "IR" },
    "q3-guide": { label: "Broadcom Q3 FY26 指引 / 报道（CNBC）", url: "https://www.cnbc.com/2026/06/03/broadcom-avgo-earnings-report-q2-2026.html", date: "2026-06-03", type: "media" },
    "q3fy26": { label: "Broadcom FY26 Q3 业绩（2026-09-02 盘后；报道 CNBC/StockTitan）", url: "https://www.cnbc.com/2026/09/02/broadcom-avgo-earnings-report-q3-2026.html", date: "2026-09-02", type: "media" },
  },

  whyIOwnIt: [
    "头部 AI 客户（Google、Meta、OpenAI 等）多代定制计算平台的核心执行伙伴——通过 XPU、SerDes、交换芯片和网络系统共同参与客户多代算力路线图。",
    "VMware + 软件组合提供经常性、高毛利收入，平滑芯片周期、提升现金流稳定性。",
    "强现金流（Q2 FCF $103亿、占收入46%）+ 高分红，资本配置纪律强。",
  ],

  position: {
    note: "占位——请替换成真实数字。质量和估值分开。",
    shares: 20,
    avgCost: 220.0,
    currentPrice: 357.56,
    priceAsOf: "2026-08-25",
    portfolioWeight: 5.0,
    targetWeight: 6.0,
    addRange: "回撤到成本附近、或定制 ASIC 量产进度确认且估值回落时加仓",
    reduceRange: "仓位超过组合约 8%、或大客户订单/量产进度转弱时减仓",
    qualityNote: "质量：高。定制 AI 计算平台领先、软件黏性、FCF margin 46%；瑕疵在客户集中与项目执行风险。",
    valuationNote: "估值：偏高。定价了定制 ASIC 持续放量 + 软件整合兑现，容错空间收窄。",
  },

  theses: [
    {
      id: "custom-ai-platform",
      title: "定制 AI 计算 + 网络平台的核心合作方",
      pillar: "定制 AI 平台",
      status: "Strong",
      trend: "up",
      statement:
        "Broadcom 正在成为超大厂和前沿 AI 实验室定制 AI 平台的核心协作方，通过 XPU、SerDes、交换芯片和网络系统共同参与客户的多代算力路线图。客户做定制芯片不只是替代通用 GPU，还包括针对自身模型优化、降低单位 token 成本、改善功耗与供应可控性、以及将计算与网络协同设计。",
      marketMisunderstanding: "市场常把 AI 芯片叙事等同于 NVDA；Broadcom 是押注「客户定制算力路线图」的另一面——已从「可能受益」升级为多家头部平台多代定制芯片的签约执行伙伴。",
      supporting: [
        { text: "FY26 Q3 AI 半导体收入 $167亿、+221% 同比（占总收入 56%、超此前 ~$160亿指引）；总营收 $296亿(+86%)；Q4 指引 AI $217亿(+236%)。", tag: "FACT", source: "q3fy26", asOf: "2026-09-02" },
        { text: "FY26 Q2 AI 半导体收入 $108亿、+143% 同比；总营收 $222亿(+48%、创纪录)。", tag: "FACT", source: "q2fy26", asOf: "2026-05-03" },
        { text: "Meta 与 Broadcom 扩大多代 MTIA 合作，包括 2nm 加速器和未来三年多代芯片，部署规模为 multi-gigawatt。", tag: "FACT", source: "q2fy26", asOf: "2026-06-03" },
        { text: "OpenAI 与 Broadcom 发布首款定制推理芯片 Jalapeño——属于多代计算平台合作，计划自 2026 年底开始部署并扩展至 gigawatt scale。", tag: "FACT", source: "q2fy26", asOf: "2026-06-03" },
        { text: "Broadcom 不只提供芯片实现，也参与网络、连接及系统规模化。", tag: "FACT", source: "q2fy26", asOf: "2026-06-03" },
        { text: "公司级 RPO 达 $1646亿，其中包含一份长期定制 AI 加速器合同（预计约30%在未来12个月确认）。RPO 同时包含半导体和软件合同，不能全部归为 AI backlog。", tag: "FACT", source: "q2fy26", asOf: "2026-05-03" },
      ],
      contrary: [
        { text: "AI 收入仍高度集中于少数大客户，能见度受其 capex 摆布。", tag: "FACT" },
        { text: "Q3 虽 beat，但公司未上调 FY27 AI >$1000亿目标，且股价盘后仍回落约 3.5%——预期已高、加速斜率是否再上修是关键观察点。", tag: "FACT", source: "q3fy26", asOf: "2026-09-02" },
        { text: "Jalapeño 等新项目仍需追踪量产、良率、实际性能和部署进度——不能把全部规划算成已兑现收入。", tag: "INFERENCE" },
        { text: "若通用 GPU 在性价比或生态上重新占优，定制需求可能放缓。", tag: "INFERENCE" },
      ],
      keyMetrics: ["AI 半导体收入增速", "定制 ASIC 客户数与合同能见度", "RPO（区分 AI 与软件）", "Meta/OpenAI 项目量产进度"],
      invalidation: "若 定制 ASIC 订单能见度下降、或主要客户转回通用 GPU / 大幅削减定制订单，则 定制平台逻辑削弱。",
      updated: "2026-08-29",
    },
    {
      id: "software-moat",
      title: "VMware 经常性收入 + 现金流引擎",
      pillar: "软件护城河",
      status: "Healthy",
      trend: "up",
      statement:
        "VMware 已初步证明能够提高 Broadcom 的经常性收入、利润率与现金流稳定性。VMware Cloud Foundation 的强劲需求推动软件增长，高利润率与轻资产结构共同支撑了 46% 的 FCF margin。但客户价值与长期留存仍需验证。",
      marketMisunderstanding: "有人只看芯片周期；软件组合在平滑周期、抬高整体质量——但当前利润提升可能同时来自成本削减，不能自动等同于产品护城河增强。",
      supporting: [
        { text: "Q2 基础设施软件收入 $71.8亿，同比增长 9%；软件分部营业利润同比增长 13%。", tag: "FACT", source: "q2fy26", asOf: "2026-05-03" },
        { text: "增长主要来自 VMware Cloud Foundation 的强劲需求。", tag: "FACT", source: "q2fy26", asOf: "2026-06-03" },
        { text: "高软件利润率与轻资产结构共同支撑 Q2 FCF $103亿（占收入46%）。", tag: "FACT", source: "q2fy26", asOf: "2026-05-03" },
        { text: "企业虚拟化的高切换成本形成黏性。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "捆绑销售与价格调整造成部分客户不满。", tag: "FACT" },
        { text: "部分中小客户及渠道伙伴可能转向替代方案。", tag: "INFERENCE" },
        { text: "当前利润提升可能同时来自成本削减，不能自动等同于产品护城河增强。", tag: "INFERENCE" },
      ],
      keyMetrics: ["软件收入增速", "软件毛利率", "客户留存率", "FCF margin"],
      invalidation: "若 软件客户大规模流失、或整合未能兑现协同，则 软件护城河逻辑削弱。",
      updated: "2026-08-29",
    },
    {
      id: "customer-concentration",
      title: "客户集中与项目执行是核心风险",
      pillar: "集中 / 执行",
      status: "Watching",
      trend: "flat",
      statement:
        "AI 定制收入高度依赖少数大客户。定制芯片项目存在流片、爬坡和客户部署节奏风险。大额多年合同提升收入能见度，也会提高单一项目执行的重要性。",
      marketMisunderstanding: "牛市里把集中当「大客户背书」；同一批客户的减速会同步放大下行。大额长期合同是双刃剑——能见度高但执行风险也集中。",
      supporting: [
        { text: "客户基础在扩宽：从超大厂扩到 OpenAI、Anthropic；多代合同提升收入能见度。", tag: "FACT", source: "q2fy26", asOf: "2026-05-03" },
        { text: "Q2 FCF $103亿（占收入46%）足以覆盖债务与分红；公司已启动债券回购。", tag: "FACT", source: "q2fy26", asOf: "2026-05-03" },
      ],
      contrary: [
        { text: "前几大客户仍贡献很高比例的 AI 收入。", tag: "FACT" },
        { text: "定制芯片项目存在流片、良率、爬坡和客户部署节奏风险——大额合同提高了单一项目失败的影响。", tag: "INFERENCE" },
        { text: "总债务约 $649亿、现金约 $196亿——杠杆可观，但 FCF（Q2 $103亿/季）正在覆盖。", tag: "FACT", source: "q2fy26", asOf: "2026-05-03" },
      ],
      keyMetrics: ["客户集中度", "重大项目量产进度", "自由现金流", "净负债/EBITDA"],
      invalidation: "若 主要客户之一大幅削减定制订单、或重大项目量产执行严重延迟，则 业务与估值同步承压。",
      updated: "2026-08-29",
    },
  ],

  metrics: [
    { label: "AI 半导体收入", latest: "Q3 $167亿（+221%、占总收入 56%）；Q4 指引 $217亿（+236%）", spark: [2, 3.5, 4.5, 6.5, 10.8, 16.7], unit: "$B/季", good: "up", note: "定制 AI 平台逻辑的核心读数——连续超指引，Q4 继续加速。" },
    { label: "总营收增速", latest: "Q3 $296亿（+86%）；Q4 指引 $348亿（+93%）", spark: [14, 15, 16, 18, 22.2, 29.6], unit: "$B/季", good: "up", note: "AI 半导体 + 软件双驱动。" },
    { label: "FCF", latest: "Q2 $103亿（占收入46%）", spark: [5, 6, 7, 8, 9, 10.3], unit: "$B/季", good: "up", note: "强现金流覆盖债务与分红。" },
    { label: "调整后 EBITDA margin", latest: "69%", spark: [62, 64, 65, 66, 68, 69], unit: "%", good: "up", note: "软件 + 芯片混合驱动的高盈利质量。" },
    { label: "公司级 RPO", latest: "$1646亿（含长期 AI 加速器合同；约30%在12个月内确认）", spark: [40, 60, 80, 100, 130, 164.6], unit: "$B", note: "含半导体与软件合同，不全是 AI。" },
  ],

  timeline: [
    { date: "2026-09-02", event: "FY26 Q3 财报（盘后）：总营收 $296亿(+86%)、AI 半导体 $167亿(+221%、占 56%)、调整后 EPS $3.32（超 $3.24）、GAAP 净利 $131亿(+216%)；Q4 指引总营收 $348亿(+93%)、AI $217亿(+236%)", whyItMatters: "AI 半导体连续超指引、Q4 继续加速——定制 AI 平台逻辑进一步兑现。但两点要盯：①财报 beat 而股价盘后仍回落约 3.5%（约 $354），说明预期已很高、估值容错收窄；②公司未上调 FY27 AI >$1000亿目标，市场解读为「加速斜率未再上修」。建议以 Broadcom IR 原文口径再复核一遍。", node: "定制 AI 平台", thesisImpact: "up", action: "不动仓位——基本面确认，估值容错与 FY27 目标是否上调是后续核心盯点。", source: { label: "Broadcom FY26 Q3 报道（CNBC/StockTitan，9/2 盘后）", url: "https://www.cnbc.com/2026/09/02/broadcom-avgo-earnings-report-q3-2026.html" }, related: { label: "Stock Why · AVGO 2026-09-03", url: "https://stock-why-wiki-site.vercel.app/stocks/AVGO#2026-09-03" } },
    { date: "2026-08-29", event: "财报后整改：thesisStatus 升至 Strong、thesis 重写与数据更新", whyItMatters: "三条核心 thesis（定制 AI 平台 Strong ↑、VMware Healthy ↑、客户集中 Watching →）全部更新。补入 Meta MTIA/2nm 合作、OpenAI Jalapeño、$1646亿 RPO、FCF $103亿等关键证据。", node: "全部", thesisImpact: "up", action: "不动仓位——thesis 升级与校准，非交易信号。", source: null, related: null },
    { date: "2026-08-26", event: "为 AVGO 开立投资账本（起点）", whyItMatters: "基线快照。", node: "全部", thesisImpact: "flat", action: "不动仓位——建立记录。", source: null, related: null },
    { date: "2026-06-03", event: "FY26 Q2 财报：总营收 $222亿(+48%)、AI 半导体 $108亿(+143%)、FCF $103亿(46% margin)；Q3 指引 AI ~$160亿(+200%)", whyItMatters: "定制 AI 平台逻辑强力兑现——AI 半导体三位数增长、FCF 强劲。Q3 指引进一步加速。", node: "定制 AI 平台 / 软件", thesisImpact: "up", action: "不动仓位——基本面确认，估值偏高、客户集中仍要盯。", source: { label: "Broadcom FY26 Q2 IR / CNBC", url: "https://www.cnbc.com/2026/06/03/broadcom-avgo-earnings-report-q2-2026.html" }, related: { label: "Stock Why · AVGO 2026-08-24", url: "https://stock-why-wiki-site.vercel.app/stocks/AVGO#2026-08-24" } },
    { date: "2026-06-03", event: "Meta 扩大多代 MTIA 合作（2nm 加速器、multi-gigawatt 部署）+ OpenAI Jalapeño 多代推理平台签约", whyItMatters: "Broadcom 从「可能受益于客户自研」升级为头部平台多代定制芯片的签约执行伙伴。Meta 合作涵盖未来三年多代芯片；OpenAI 计划 2026 年底开始部署并扩展至 gigawatt scale。", node: "定制 AI 平台", thesisImpact: "up", action: "不动仓位；量产与部署进度是后续核心盯点。", source: { label: "Broadcom FY26 Q2 IR", url: "https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-second-quarter-fiscal-year-2026-financial" }, related: null },
    { date: "2026-06-03", event: "公司级 RPO 达 $1646亿（含一份长期定制 AI 加速器合同）", whyItMatters: "AI 定制芯片的多年收入能见度显著提高。但 RPO 含半导体与软件合同，不能全部归为 AI backlog。", node: "定制 AI 平台", thesisImpact: "up", action: "不动仓位；RPO 拆分与确认节奏是后续盯点。", source: { label: "Broadcom FY26 Q2 IR", url: "https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-second-quarter-fiscal-year-2026-financial" }, related: null },
    { date: "2026-08", datePrecision: "month", event: "资金面：ARK 等机构加仓 AI 芯片股（含 AVGO）", whyItMatters: "fund flow / 情绪面，不是基本面证据。", node: "情绪 / 资金面", thesisImpact: "flat", action: "不动仓位；把机构加仓当情绪。", source: { label: "资金流报道（aggregator，仅供参考）", url: "https://tickeron.com/ticker/AVGO/" }, related: null },
  ],

  thesisEvolution: [
    { date: "2026（当前）", label: "Strong / ↑：定制 AI 平台逻辑已从概念升级为签约执行", note: "FY26 Q3（9/2）：AI 半导体 $167亿(+221%、占 56%)、总营收 $296亿(+86%)、Q4 指引 AI $217亿(+236%)，连续超指引。此前 Q2：FCF $103亿(46%)、RPO $1646亿、Meta 多代 MTIA/2nm、OpenAI Jalapeño 已签。Broadcom 已从「可能受益于自研 ASIC」升级为头部 AI 客户多代定制计算平台的核心合作方。悬念从「有没有需求」转向「集中订单能否按计划量产、以及估值是否已提前计入增长」——Q3 beat 但股价回落、FY27 AI >$1000亿目标未上调，是当前主要观察变量。" },
    { date: "2026-08-26", label: "AI 辅助初稿（待认领）", note: "本档案由 Claude 辅助生成初稿，尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」。" },
  ],

  risks: [],

  stockWhy: { label: "AVGO · Stock Why 维基", url: "https://stock-why-wiki-site.vercel.app/stocks/AVGO", note: "市场波动的因果溯源在 Stock Why（那边已有 AVGO 档案）；这本账本只问它是否改变了逻辑。" },
};
