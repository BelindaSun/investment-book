/*
 * Investment Book —— 002371.SZ（北方华创 NAURA）数据文件。tier: watch（只填概览用字段）。
 * holdingStatus: watchlist（未持有，不虚构持仓）。枚举 key 英文，界面中文。
 * 代码用 Yahoo 格式（002371.SZ），与 Stock Why 档名一致。驱动类型：国产替代（主）。
 * 半年报数字来自检索摘要，深交所原文已附链接待核；Day Zero 待 Belinda 认领。
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA["002371.SZ"] = {
  ticker: "002371.SZ",
  name: "NAURA Technology Group Co., Ltd.（北方华创）",
  tier: "watch",
  holdingStatus: "watchlist",
  tagline: "国产设备平台龙头：营收稳定 +25%，但扩品类的研发把净利增速压到 +5%。",
  oneLiner:
    "中国最大、品类最全的半导体设备商（刻蚀、薄膜沉积、氧化扩散、清洗），国产设备替代的平台型龙头（驱动：国产替代）。核心悬念：新品类的研发投入什么时候开始贡献利润。",
  updated: "2026-09-28",
  thesisStatus: "Watching",
  statusNote:
    "Watching——观察名单，未持有。2026 上半年营收 201.61 亿元（+24.90%），归母净利 33.7 亿元（+5.05%），研发费用 26.77 亿元（+28.87%）：收入跟着国产替代稳定增长，利润被扩品类的研发压住。9/7 在 IEEE 期刊发表 3D DRAM「两步循环刻蚀」工艺论文，带动设备板块拉升——但这是论文，不是订单。",

  currentDecision: "观察",
  decisionReason: "国产替代订单确定性较高，但利润增速远落后于营收，新品类何时贡献利润还看不清。先观察。",
  nextDecisionTriggers: [
    "三季报 / 年报：净利增速是否开始追上营收增速",
    "国内晶圆厂（中芯、华虹、长存、长鑫）资本开支明显变化",
    "美、荷、日对华设备或零部件管制变化",
  ],

  sources: {
    "h1-2026": { label: "深交所：北方华创 2026 年半年度报告全文（PDF）", url: "https://disc.static.szse.cn/disc/disk03/finalpage/2026-08-26/5b947dae-f3ad-4009-8874-248e9abff0fd.PDF", date: "2026-08-26", type: "IR" },
    "h1-2026-media": { label: "IT 之家：北方华创上半年归母净利润 33.7 亿元，同比增长 5.05%", url: "https://www.ithome.com/0/994/102.htm", date: "2026-08-25", type: "media" },
    "3d-dram": { label: "工商時報：提出兩步循環蝕刻技術 北方華創 3D DRAM 邁大步", url: "https://www.ctee.com.tw/news/20260907700073-430804", date: "2026-09-07", type: "media" },
    "cinno-rank": { label: "Yahoo Finance：China's Naura climbs the ranks of world's top chipmaking equipment suppliers（据 CINNO Research）", url: "https://finance.yahoo.com/news/chinas-naura-climbs-ranks-worlds-093000067.html", date: "2025", type: "media" },
  },

  whyIOwnIt: [
    "「国产替代」这一列最上游、最纯的样本：国内晶圆厂扩产，第一站就是设备订单。",
    "平台型打法（多品类）意味着单一品类被卡时仍有其他增长点，但也意味着长期高研发。",
    "想跟踪两件事：国内晶圆厂资本开支的持续性；新品类何时从研发投入变成利润贡献。",
  ],

  position: {
    note: "未持有——观察名单，不虚构持仓数字。",
    qualityNote: "质量：国内设备龙头，收入增长稳定（待深入研究品类结构和毛利率）。",
    valuationNote: "估值：未做估值分析，需单独判断。",
  },

  theses: [
    {
      id: "localization-platform",
      title: "国产设备替代的平台型受益者",
      pillar: "设备国产化",
      status: "Watching",
      trend: "flat",
      statement:
        "出口管制下，国内晶圆厂扩产越来越依赖国产设备。北方华创品类最全，是这一趋势最直接的受益者；问题在于扩品类的研发投入何时转化为利润。",
      marketMisunderstanding: "市场容易把技术新闻（如 3D DRAM 论文）直接当成订单；真正决定利润的是品类验证和国内晶圆厂的资本开支节奏。",
      supporting: [
        { text: "2026 上半年营收 201.61 亿元，同比 +24.90%。", tag: "FACT", source: "h1-2026", asOf: "2026-06-30" },
        { text: "据 CINNO Research，2024 年按销售额为全球第六大半导体设备商。", tag: "FACT", source: "cinno-rank", asOf: "2024" },
        { text: "9/7 前后在 IEEE 期刊发表 3D DRAM「两步循环刻蚀」工艺论文。", tag: "FACT", source: "3d-dram", asOf: "2026-09-07" },
        { text: "3D DRAM 对 EUV 依赖较低，给国产存储和刻蚀设备多了一条路。", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "上半年归母净利 33.7 亿元，同比仅 +5.05%，远低于营收增速。", tag: "FACT", source: "h1-2026-media", asOf: "2026-06-30" },
        { text: "研发费用 26.77 亿元，同比 +28.87%，是利润增速被压低的主要原因。", tag: "FACT", source: "h1-2026", asOf: "2026-06-30" },
        { text: "论文不等于量产订单，从产线验证到收入距离很长。", tag: "INFERENCE" },
        { text: "自身部分零部件也可能受海外管制，是供给侧风险。", tag: "INFERENCE" },
      ],
      keyMetrics: ["营收增速 vs 净利增速", "研发费用率", "国内晶圆厂资本开支"],
      invalidation: "若国内晶圆厂资本开支明显放缓，或利润增速连续多个报告期大幅落后于营收（新品类迟迟不贡献利润），则「平台型受益者」这条逻辑转弱。",
      updated: "2026-09-28",
    },
  ],

  timeline: [
    { date: "2026-09-07", event: "IEEE 期刊论文披露 3D DRAM「两步循环刻蚀」工艺，A 股半导体设备板块午后拉升（个股收盘涨幅未核到）", whyItMatters: "给「国产存储绕开 EUV」提供了一条技术路径，刻蚀是北方华创的核心品类；但只是论文，不是订单。", node: "设备国产化", thesisImpact: "flat", action: "不动仓位——观察名单，记录事件。", source: { label: "工商時報 2026-09-07", url: "https://www.ctee.com.tw/news/20260907700073-430804" }, related: { label: "Stock Why · 002371.SZ 2026-09-07", url: "https://stock-why-wiki-site.vercel.app/stocks/002371.SZ#2026-09-07" } },
    { date: "2026-08-26", event: "2026 半年报：营收 201.61 亿元（+24.90%），归母净利 33.7 亿元（+5.05%），研发费用 +28.87%", whyItMatters: "收入跟着国产替代稳定增长，但利润弹性被研发投入吃掉——这是本逻辑要盯的核心矛盾。", node: "利润弹性", thesisImpact: "warn", action: "不动仓位——观察名单，记录事件。", source: { label: "深交所 2026 半年报", url: "https://disc.static.szse.cn/disc/disk03/finalpage/2026-08-26/5b947dae-f3ad-4009-8874-248e9abff0fd.PDF" }, related: { label: "Stock Why · 002371.SZ 2026-08-26", url: "https://stock-why-wiki-site.vercel.app/stocks/002371.SZ#2026-08-26" } },
  ],

  thesisEvolution: [
    { date: "2026-09-28", label: "AI 辅助初稿（待认领）", note: "由 Claude 辅助生成初稿（中国科技板块第 3 步，数字来自检索摘要，深交所半年报原文已附链接待核），尚未经 Belinda 逐条确认。Review 后再新增「Day Zero：thesis 正式认领」。" },
  ],

  risks: [],

  stockWhy: { label: "002371.SZ · Stock Why 维基", url: "https://stock-why-wiki-site.vercel.app/stocks/002371.SZ", note: "市场波动的因果溯源在 Stock Why 维基（驱动类型：国产替代）；这本账本只问它是否改变了逻辑。" },
};
