/*
 * Investment Book —— 0700.HK（腾讯控股）数据文件。tier: watch（只填概览用字段）。
 * holdingStatus: watchlist（未持有，不虚构持仓）。枚举 key 英文，界面中文。
 * 代码用 Yahoo 格式（0700.HK），与 Stock Why 档名一致。驱动类型：本土 AI 需求（主）。
 * 数字来自检索引擎对财报 / 媒体报道的摘要，港交所原文待核；Day Zero 待 Belinda 认领。
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA["0700.HK"] = {
  ticker: "0700.HK",
  name: "Tencent Holdings Ltd.（腾讯控股）",
  tier: "watch",
  holdingStatus: "watchlist",
  tagline: "中国 AI 需求侧的最大买家之一：资本开支暴增，市场在等微信智能体给出回报路径。",
  oneLiner:
    "微信 + 游戏 + 广告平台，也是中国 AI 资本开支最大的买家之一。在中国 AI 链里站在需求侧（驱动：本土 AI 需求）：买算力，再用 AI 改造广告、游戏和微信。核心悬念：巨额 AI 投入能不能在微信里找到回报路径。",
  updated: "2026-09-28",
  thesisStatus: "Watching",
  statusNote:
    "Watching——观察名单，未持有。Q2 2026 营收 2048 亿元（+11%），资本开支 527.84 亿元（同比 +176%、环比 +65%），主要投向数据中心和服务器。市场担心投入太大、回报说不清，股价年内一度跌约 26%（据 Bloomberg 报道）。9/22 Meta 的智能体 Muse 登顶美区 App Store，微信内测的智能体「小微」被当作中国版 Muse，当天收涨 5.02%——但这是读穿式上涨，不是腾讯自己的产品数据。",

  currentDecision: "观察",
  decisionReason: "AI 投入规模已经很大，但回报路径还只是预期（小微尚未全量上线）。先观察变现证据，再决定要不要深入研究。",
  nextDecisionTriggers: [
    "小微全量上线，并公布用户、交易或广告方面的变现数据",
    "资本开支指引明显上调或下调，或自由现金流持续为负",
    "美方对华 AI 芯片出口政策变化，影响腾讯能买到的算力",
  ],

  sources: {
    "q2-2026": { label: "新浪财经：腾讯二季度营收 2048 亿元、资本开支 528 亿元（港交所公告原文待核）", url: "https://finance.sina.com.cn/stock/t/2026-08-12/doc-inimzytn5306358.shtml", date: "2026-08-12", type: "media" },
    "q2-capex": { label: "21 财经：腾讯 2026 年第二季度资本支出超 527 亿元", url: "https://m.21jingji.com/article/20260813/herald/d5702eb08c394b9c513cd7b6feb5136b.html", date: "2026-08-13", type: "media" },
    "sep22": { label: "21 财经：腾讯、阿里，放量大涨", url: "https://m.21jingji.com/article/20260922/herald/0511e93cbb79699aa557ad7c154ee539.html", date: "2026-09-22", type: "media" },
    "xiaowei": { label: "搜狐：Muse 走红打开 Agent 想象空间（小微 6 月起灰度测试）", url: "https://www.sohu.com/a/1079517718_121157270", date: "2026-09-22", type: "media" },
    "ytd": { label: "Yahoo Finance / Bloomberg：Tencent Releases AI Image Model（年内跌约 26%）", url: "https://finance.yahoo.com/technology/ai/articles/tencent-releases-ai-image-model-031310630.html", date: "2026-09", type: "media" },
  },

  whyIOwnIt: [
    "中国 AI 需求侧最重要的样本：它的资本开支就是国产算力链的订单，看懂它等于看懂「本土 AI 需求」这一列。",
    "微信是社交 + 内容 + 服务 + 支付的闭环，智能体的变现路径可能比独立 App 更短——这是值得验证的差异点。",
    "想跟踪两件事：AI 投入能否转化为收入和利润；资本开支暴增对现金流的压力有多大。",
  ],

  position: {
    note: "未持有——观察名单，不虚构持仓数字。",
    qualityNote: "质量：广告和游戏是强现金牛（待深入研究）；AI 投入的回报尚未验证。",
    valuationNote: "估值：未做估值分析。年内股价一度跌约 26%，但「跌得多」不等于便宜，需要单独判断。",
  },

  theses: [
    {
      id: "ai-return-path",
      title: "AI 投入能否在微信里找到回报路径",
      pillar: "AI 回报路径",
      status: "Watching",
      trend: "flat",
      statement:
        "腾讯正把大量资本开支投进 AI 基础设施。如果智能体（小微）能在微信里直接完成「理解需求 → 下单 → 支付」，它就有比独立 AI App 更短的变现路径：交易抽成、更精准的广告、付费订阅。",
      marketMisunderstanding: "市场一度只看到资本开支暴增和现金流压力；9/22 又因为 Meta 的 Muse 快速转向乐观。两次反应都还没有腾讯自己的产品数据支撑。",
      supporting: [
        { text: "Q2 2026 营收 2048 亿元，同比 +11%。", tag: "FACT", source: "q2-2026", asOf: "2026-08-12" },
        { text: "Q2 资本开支 527.84 亿元，同比 +176%、环比 +65%，主要投向数据中心和服务器。", tag: "FACT", source: "q2-capex", asOf: "2026-08-12" },
        { text: "微信原生智能体「小微」自 2026 年 6 月起小范围灰度测试。", tag: "FACT", source: "xiaowei", asOf: "2026-09-22" },
        { text: "微信把社交、内容、小程序服务和支付放在一个 App 里，智能体完成交易的链路比独立 App 短。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "9/22 收涨 5.02% 是读穿式上涨：催化来自 Meta，不是腾讯自己的数据。", tag: "INFERENCE", source: "sep22" },
        { text: "资本开支暴增压低自由现金流（据报道 Q2 转负），回报周期未知。", tag: "INFERENCE" },
        { text: "小微何时全量上线、变现规模多大，目前没有公开数据。", tag: "UNKNOWN" },
      ],
      keyMetrics: ["小微用户与交易数据", "资本开支 / 营收", "自由现金流"],
      invalidation: "若小微全量上线后一年内仍拿不出用户或变现数据，而资本开支继续大幅增长、自由现金流持续为负，则「AI 投入有回报路径」这条逻辑转弱。",
      updated: "2026-09-28",
    },
  ],

  timeline: [
    { date: "2026-09-22", event: "Meta 的智能体 Muse 登顶美区 App Store，市场把微信内测的「小微」对标重估；港股收涨 5.02%，报 HK$451.6（盘中最高 +7.77%）", whyItMatters: "给「AI 投入有回报路径」提供了一个外部参照，但不是腾讯自己的数据。", node: "AI 回报路径", thesisImpact: "flat", action: "不动仓位——观察名单，记录事件。", source: { label: "21 财经 2026-09-22", url: "https://m.21jingji.com/article/20260922/herald/0511e93cbb79699aa557ad7c154ee539.html" }, related: { label: "Stock Why · 0700.HK 2026-09-22", url: "https://stock-why-wiki-site.vercel.app/stocks/0700.HK#2026-09-22" } },
    { date: "2026-08-12", event: "Q2 2026 财报：营收 2048 亿元（+11%），资本开支 527.84 亿元（同比 +176%）", whyItMatters: "AI 投入规模跳升，是市场担心「投入太大、回报说不清」的来源。", node: "资本开支 / 现金流", thesisImpact: "warn", action: "不动仓位——观察名单，记录事件。", source: { label: "新浪财经 2026-08-12", url: "https://finance.sina.com.cn/stock/t/2026-08-12/doc-inimzytn5306358.shtml" }, related: null },
  ],

  thesisEvolution: [
    { date: "2026-09-28", label: "AI 辅助初稿（待认领）", note: "由 Claude 辅助生成初稿（中国科技板块第 3 步，数字来自检索摘要，港交所原文待核），尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」。" },
  ],

  risks: [],

  stockWhy: { label: "0700.HK · Stock Why 维基", url: "https://stock-why-wiki-site.vercel.app/stocks/0700.HK", note: "市场波动的因果溯源在 Stock Why 维基（驱动类型：本土 AI 需求）；这本账本只问它是否改变了逻辑。" },
};
