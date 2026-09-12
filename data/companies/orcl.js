/*
 * Investment Book —— ORCL 数据文件。tier: watch（只填概览用字段）。
 * holdingStatus: watchlist（未持有，不虚构持仓）。枚举 key 英文，界面中文。
 * 数据经独立核实（FQ1 FY27 财报 + OpenAI $300B 合约）；Day Zero 待 Belinda 认领。
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA.ORCL = {
  ticker: "ORCL",
  name: "Oracle Corp.",
  tier: "watch",
  holdingStatus: "watchlist",
  tagline: "从数据库巨头转型 AI 云黑马：RPO 暴涨到 $6640亿，但近一半绑一个客户、靠举债扩产。",
  oneLiner:
    "传统数据库/企业软件公司，正靠 OCI（Oracle Cloud Infrastructure）跻身 AI 云算力第一梯队。FQ1 FY27：OCI +121%、RPO 飙到 $6640亿。核心悬念：这份天量 backlog 能否兑现为现金流——尤其它近一半来自 OpenAI 的 $300亿/年合约，且扩产靠举债、自由现金流转负。",
  updated: "2026-09-10",
  thesisStatus: "Watching",
  statusNote:
    "Watching——观察名单，未持有。FQ1 FY27（2026-09-09 盘后）营收 $193亿(+30%)、OCI $74亿(+121%)、RPO $6640亿（环比 +$260亿）；FY27 指引 ≥$900亿营收、调整后 EPS $8.10。增长故事很强，但两点必须盯：① backlog 近一半来自与 OpenAI 的 $3000亿/5年云合约（2025-09 签、2027 起、Stargate 一部分），客户集中度极高；② 为扩产大举资本开支、举债，自由现金流转负（据报道 FY2026 约 -$237亿、连续数季为负）。这是「高赔率、高风险」的跟踪对象，不是当前持仓。",

  currentDecision: "观察",
  decisionReason:
    "AI 云 backlog 暴涨很吸引，但增长高度绑定 OpenAI 单一大客户、且靠负 FCF 举债扩产，风险尚未验证。列入观察名单，先看 backlog 兑现与现金流转正。",
  nextDecisionTriggers: [
    "OCI 增速与 RPO 兑现节奏出现明确验证（FCF 转正 / 客户群变广），或反之明显恶化",
    "OpenAI 等大客户合约出现缩减、延迟或违约",
    "举债 / 资本强度失控，或 AI 云 capex 周期降温",
  ],

  sources: {
    "q1fy27": { label: "Oracle FQ1 FY2027 新闻稿（2026-09；官方 IR / q4cdn）", url: "https://s23.q4cdn.com/440135859/files/doc_financials/2026/q1/1q26-pressrelease-September-final.pdf", date: "2026-09-09", type: "IR" },
    "q1fy27-cnbc": { label: "CNBC：Oracle Q1 FY27 财报", url: "https://www.cnbc.com/2026/09/10/oracle-orcl-q1-earnings-report-2027.html", date: "2026-09-10", type: "media" },
    "openai-300b": { label: "OpenAI–Oracle $3000亿/5年云合约（2025-09；CNBC / DCD）", url: "https://www.cnbc.com/video/2025/09/10/openai-oracle-sign-300-billion-computing-deal.html", date: "2025-09-10", type: "media" },
  },

  whyIOwnIt: [
    "从传统数据库巨头转型为 AI 云算力第一梯队候选：OCI +121%、RPO $6640亿——值得跟踪它能否真正兑现。",
    "但增长高度绑定 OpenAI 单一大客户（$3000亿合约）+ 举债重资本扩产（FCF 转负），是高赔率、高风险的观察对象。",
    "想跟踪两件事：天量 backlog 能否兑现为可持续现金流；客户集中与杠杆风险如何演化。",
  ],

  position: {
    note: "未持有——观察名单，不虚构持仓数字。",
    qualityNote: "质量：待判断。AI 云增长强劲，但盈利质量受重资本、负 FCF 与客户集中拖累。",
    valuationNote: "估值：偏高且敏感。股价已计入 backlog 兑现预期，对客户集中与资本回报的容错空间小。",
  },

  theses: [
    {
      id: "ai-cloud-backlog",
      title: "OCI + RPO 暴涨：数据库公司转型 AI 云算力供应商",
      pillar: "AI 云 backlog",
      status: "Strengthening",
      trend: "up",
      statement:
        "Oracle 借 OCI 与超大规模 AI 算力合约，从传统数据库/企业软件转型为 AI 云算力供应商。OCI 三位数增长、RPO 暴涨到 $6640亿，把多年收入能见度大幅拉长。核心是这份 backlog 能否按期兑现为收入与现金流。",
      marketMisunderstanding: "市场曾把 Oracle 当成增长平淡的老牌软件公司；AI 云合约把它重新定价成算力供应商——但也把叙事押在少数超大合约的兑现上。",
      supporting: [
        { text: "FQ1 FY27（2026-09-09 盘后）：营收 $193亿(+30%)、OCI $74亿(+121%)、RPO $6640亿（环比 +$260亿）。", tag: "FACT", source: "q1fy27", asOf: "2026-09-09" },
        { text: "FY27 指引：营收 ≥$900亿、调整后 EPS $8.10。", tag: "FACT", source: "q1fy27-cnbc", asOf: "2026-09-10" },
        { text: "与 OpenAI 签 $3000亿/5年云合约（2025-09、2027 起、Stargate 一部分，约 $600亿/年）——是 RPO 暴涨的主要来源。", tag: "FACT", source: "openai-300b", asOf: "2025-09-10" },
      ],
      contrary: [
        { text: "RPO 是多年合约、非已确认收入，兑现依赖客户按期用量与付款。", tag: "INFERENCE" },
        { text: "增长很大程度绑定单一超大客户，若其算力需求或财务生变，backlog 质量受冲击。", tag: "INFERENCE" },
      ],
      keyMetrics: ["OCI 增速", "RPO 及其确认节奏", "客户集中度"],
      invalidation: "若 OCI 增速大幅放缓、或大额 backlog 因客户违约/延期无法兑现，则 AI 云增长逻辑转弱。",
      updated: "2026-09-10",
    },
    {
      id: "concentration-leverage",
      title: "客户集中 + 举债重资本是核心风险",
      pillar: "集中 / 杠杆",
      status: "Watching",
      trend: "warn",
      statement:
        "高增长建立在客户高度集中与举债重资本扩产之上。OpenAI 一份合约约占 RPO 的近一半，扩产又靠资本开支和负自由现金流——赔率高，但下行也集中。",
      marketMisunderstanding: "牛市把 backlog 当成确定收入；但集中度与杠杆意味着，一旦大客户或 AI capex 周期生变，重资本结构会放大下行。",
      supporting: [
        { text: "OpenAI $3000亿合约约占 $6640亿 RPO 的近一半（$300B/$664B≈45%）——单一客户集中度极高。", tag: "FACT", source: "openai-300b", asOf: "2025-09-10" },
      ],
      contrary: [
        { text: "为满足 AI 云需求大举资本开支、举债扩产，自由现金流承压转负（据报道 FY2026 约 -$237亿、连续数季为负）。", tag: "INFERENCE" },
        { text: "客户群近季有变广，但对少数超大客户的依赖仍 material。", tag: "INFERENCE" },
        { text: "若 AI capex 周期降温或大客户需求不及预期，重资本 + 高杠杆会放大下行。", tag: "INFERENCE" },
      ],
      keyMetrics: ["自由现金流 / 净负债", "客户集中度", "capex / 营收"],
      invalidation: "若 举债扩产未能转化为可持续 FCF、或大客户（如 OpenAI）缩减/延迟合约，则 集中 + 杠杆风险兑现、估值承压。",
      updated: "2026-09-10",
    },
  ],

  timeline: [
    { date: "2026-09-10", event: "FQ1 FY27 财报（9/9 盘后）：营收 $193亿(+30%)、OCI $74亿(+121%)、RPO $6640亿（环比 +$260亿）；FY27 指引 ≥$900亿营收、EPS $8.10", whyItMatters: "AI 云 backlog 暴涨确认 Oracle 转型算力供应商；但 RPO 近一半来自 OpenAI $3000亿/5年合约，客户集中 + 举债扩产（FCF 转负）是核心风险。", node: "AI 云 / 集中杠杆", thesisImpact: "up", action: "不动仓位——观察名单，记录事件。", source: { label: "Oracle IR / CNBC 2026-09-10", url: "https://www.cnbc.com/2026/09/10/oracle-orcl-q1-earnings-report-2027.html" }, related: { label: "Stock Why · ORCL 2026-09-10", url: "https://stock-why-wiki-site.vercel.app/stocks/ORCL#2026-09-10" } },
  ],

  thesisEvolution: [
    { date: "2026-09-10", label: "AI 辅助初稿（待认领）", note: "由 Claude 辅助生成初稿（基于 FQ1 FY27 财报 + OpenAI $3000亿合约独立核实），尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」。" },
  ],

  risks: [],

  stockWhy: { label: "ORCL · Stock Why 维基", url: "https://stock-why-wiki-site.vercel.app/stocks/ORCL", note: "市场波动的因果溯源在 Stock Why 维基；这本账本只问它是否改变了逻辑。" },
};
