/*
 * Investment Book —— BABA（阿里巴巴）数据文件。tier: watch（只填概览用字段）。
 * holdingStatus: watchlist（未持有，不虚构持仓）。枚举 key 英文，界面中文。
 * 美股 BABA / 港股 9988.HK 双重上市，档名沿用美股代码（与 Stock Why 一致）。
 * 驱动类型：本土 AI 需求（主）· 国产替代（次）。
 * 数字来自检索引擎对媒体报道的摘要，公司原文待核；Day Zero 待 Belinda 认领。
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA.BABA = {
  ticker: "BABA",
  name: "Alibaba Group Holding Ltd.（阿里巴巴，港股 9988.HK）",
  tier: "watch",
  holdingStatus: "watchlist",
  tagline: "芯片-模型-云全栈：真武自研芯片 + Qwen + 阿里云 20GW 目标，但芯片 2027 年才量产。",
  oneLiner:
    "云 + 电商巨头。平头哥自研芯片（真武）+ Qwen 模型 + 阿里云，构成「芯片-模型-云」全栈：需求侧买算力（驱动：本土 AI 需求），供给侧也在自研替代（驱动：国产替代，次）。核心悬念：全栈自研能否转化为云业务的增长和利润。",
  updated: "2026-09-28",
  thesisStatus: "Watching",
  statusNote:
    "Watching——观察名单，未持有。9/22 云栖大会发布真武 V900（算力是上代 M890 的 3 倍，2027 年 Q1 量产），定下 2032 年全球数据中心超 20GW 的目标，Qwen 下一代 5~10 万亿参数模型在训；港股当天收涨 1.95%。「中国最强 AI 芯片」是发布会口径，第三方跑分未出。云业务收入和利润率本档尚未核实。",

  currentDecision: "观察",
  decisionReason: "全栈布局清晰，但关键芯片 2027 年才量产、云业务数据本档未核，先观察兑现节奏。",
  nextDecisionTriggers: [
    "真武 V900 按期（2027 年 Q1）量产，并有第三方性能数据",
    "阿里云收入增速和利润率随数据中心扩张明显变化（需核实财报）",
    "美方对华芯片或设备管制变化，影响自研芯片的代工和供给",
  ],

  sources: {
    "yunqi-2026": { label: "财联社 / 新浪：阿里发布新一代 AI 芯片真武 V900（2026-09-22）", url: "https://finance.sina.cn/stock/jdts/2026-09-22/detail-inissitf7062568.d.html", date: "2026-09-22", type: "media" },
    "ctee-v900": { label: "工商時報：阿里 V900 晶片 瞄準兆級模型", url: "https://www.ctee.com.tw/news/20260923700100-439901", date: "2026-09-23", type: "media" },
  },

  whyIOwnIt: [
    "中国 AI 链里少数同时站在两侧的公司：既是算力买家（本土 AI 需求），又在自研芯片（国产替代）。",
    "20GW 数据中心目标让自研芯片有内部需求消化，不完全依赖外部销售——值得验证这条闭环能否跑通。",
    "想跟踪两件事：真武能否按期量产并被验证；阿里云能否把投入变成增长和利润。",
  ],

  position: {
    note: "未持有——观察名单，不虚构持仓数字。",
    qualityNote: "质量：待判断。电商现金流和云业务的质量本档尚未研究。",
    valuationNote: "估值：未做估值分析，需单独判断。",
  },

  theses: [
    {
      id: "full-stack",
      title: "芯片-模型-云全栈自研能否转化为云业务增长",
      pillar: "全栈自研",
      status: "Watching",
      trend: "flat",
      statement:
        "阿里同时掌握自研芯片、自研模型和云平台。如果真武芯片按期量产、Qwen 保持竞争力，内部数据中心扩张可以消化自研芯片，降低对外部算力的依赖，并提升阿里云的差异化。",
      marketMisunderstanding: "市场容易把「发布会参数」当成已兑现的能力；真正的检验在 2027 年量产和云业务数据。",
      supporting: [
        { text: "9/22 发布真武 V900：算力是上代真武 M890 的 3 倍，216GB 显存，2027 年 Q1 量产，单集群可扩展至 50 万卡。", tag: "FACT", source: "yunqi-2026", asOf: "2026-09-22" },
        { text: "公司宣布：阿里云全球数据中心 2032 年目标超 20GW。", tag: "FACT", source: "yunqi-2026", asOf: "2026-09-22" },
        { text: "真武系列已服务超 650 家企业客户（公司口径）。", tag: "FACT", source: "ctee-v900", asOf: "2026-09-22" },
        { text: "内部数据中心扩张给自研芯片提供了确定的需求出口。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "「中国最强 AI 芯片」是发布会自称，第三方跑分未出。", tag: "UNKNOWN" },
        { text: "V900 要到 2027 年 Q1 才量产，期间代工和 HBM 供给都受出口管制约束。", tag: "INFERENCE" },
        { text: "阿里云的收入增速和利润率本档尚未核实，无法判断投入是否已转化为增长。", tag: "UNKNOWN" },
      ],
      keyMetrics: ["真武量产进度", "阿里云收入增速与利润率", "资本开支"],
      invalidation: "若真武 V900 未能在 2027 年按期量产，或阿里云收入增速没有随数据中心扩张同步提升，则「全栈自研转化为增长」这条逻辑转弱。",
      updated: "2026-09-28",
    },
  ],

  timeline: [
    { date: "2026-09-22", event: "云栖大会：发布真武 V900（2027 年 Q1 量产）+ 2032 年 20GW 数据中心目标；港股收涨 1.95%，报 HK$114.8", whyItMatters: "一次放出芯片、云、模型三件套，全栈叙事成型；但芯片量产和云业务兑现都还在未来。", node: "全栈自研", thesisImpact: "flat", action: "不动仓位——观察名单，记录事件。", source: { label: "财联社 / 新浪 2026-09-22", url: "https://finance.sina.cn/stock/jdts/2026-09-22/detail-inissitf7062568.d.html" }, related: { label: "Stock Why · BABA 2026-09-22", url: "https://stock-why-wiki-site.vercel.app/stocks/BABA#2026-09-22" } },
  ],

  thesisEvolution: [
    { date: "2026-09-28", label: "AI 辅助初稿（待认领）", note: "由 Claude 辅助生成初稿（中国科技板块第 3 步，数字来自检索摘要，公司原文待核），尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」。" },
  ],

  risks: [],

  stockWhy: { label: "BABA · Stock Why 维基", url: "https://stock-why-wiki-site.vercel.app/stocks/BABA", note: "市场波动的因果溯源在 Stock Why 维基（驱动类型：本土 AI 需求为主、国产替代为次）；这本账本只问它是否改变了逻辑。" },
};
