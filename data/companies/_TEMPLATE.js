/*
 * ===========================================================================
 * 公司模板 —— 复制这个文件来加一家公司。
 * ===========================================================================
 * 加一家（比如 NVDA）的步骤：
 *   1. 把这个文件复制成  data/companies/nvda.js
 *   2. 把下面的 "TICKER" 换成 NVDA（对象的 key 和 ticker 字段都要和 manifest 一致）
 *   3. 填内容。没有的块可以整块删掉——每个 section 缺字段都会优雅降级。
 *   4. 把 "NVDA" 加进  data/manifest.js
 *   5. 刷新页面。完成。没有构建步骤。
 *
 * 设计原则：结构通用，内容因公司而异。
 * 不要照抄 GOOGL 的 drivers / metrics / theses——一家芯片公司的驱动不是一家广告
 * 公司的驱动。复用形状，重写内涵。
 *
 * 取值（枚举 key 保持英文，界面显示成中文）：
 *   thesisStatus / status : "Strong"强劲 | "Healthy"健康 | "Strengthening"增强中
 *                           | "Watching"观察中 | "Weakening"转弱 | "Invalidated"已证伪
 *   trend / direction     : "up" | "flat" | "down" | "warn"   → ↑ → ↓ ⚠
 *   证据 tag              : "FACT"事实 | "INFERENCE"推断 | "THESIS"判断 | "UNKNOWN"未知
 *   指标 good             : "up" | "down" | (不写)  —— 哪个方向是有利的
 *
 * 「逻辑健康度」由 theses 派生（pillar + status + trend）——不需要单独维护一份列表。
 * 持仓价格是手动快照（priceAsOf），永远不是实时的。
 * 股票代码、FCF / CapEx / P/E 等惯用缩写按中文财经习惯保留英文。
 * ===========================================================================
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA.TICKER = {
  ticker: "TICKER",
  name: "公司全名 Inc.",
  tier: "active", // core 核心 | active 在场 | watch 观察 —— 控制在首页的深度与分组。
                  //   core   = 完全信念：填满全部 12 节。
                  //   active = 决策关键的最小集：概览 + 核心逻辑 + 时间线 + 风险 + 持仓。
                  //   watch  = 一屏：只填下面概览用的字段。
                  // 不必填满每一节——空的会从导航和页面里隐藏。
  tagline: "首页那一行显示的极短一句话。",
  oneLiner: "一句话：这家公司本质上是什么 / 它在回答的问题是什么。",
  updated: "YYYY-MM-DD", // 保持更新——首页会把超过 45 天没碰过的标为「待复盘」。
  thesisStatus: "Healthy",
  statusNote: "一段话：用大白话说清这个投资案当前的状态。",

  whyIOwnIt: [
    "第一个理由 —— 电梯陈述第 1 行。",
    "第二个理由。",
    "第三个理由。",
  ],

  position: {
    note: "占位 —— 替换成真实数字；替换后可删掉这条 note。",
    shares: 0,
    avgCost: 0,
    currentPrice: 0, // 手动快照，不是实时——复盘时手动更新
    priceAsOf: "YYYY-MM-DD", // currentPrice 设定的日期；让盈亏诚实地显示为「快照」
    portfolioWeight: 0,
    targetWeight: 0,
    addRange: "什么时候加仓？",
    reduceRange: "什么时候减仓？",
    qualityNote: "质量：…（生意本身，与价格无关）",
    valuationNote: "估值：…（价格，与生意无关）",
    notes: "",
  },

  theses: [
    {
      id: "thesis-1",
      title: "一个能拿去和现实对照的短判断",
      pillar: "短标签", // 在「逻辑健康度」仪表盘里显示
      status: "Healthy",
      trend: "flat",
      statement: "完整逻辑，1–2 句：为什么它成立。",
      marketMisunderstanding: "市场可能搞错了什么。",
      supporting: [
        { text: "支持的证据。", tag: "FACT" },
        { text: "一个推断。", tag: "INFERENCE" },
      ],
      contrary: [{ text: "反面的证据。", tag: "FACT" }],
      keyMetrics: ["指标 A", "指标 B"],
      invalidation: "若 …… 发生，则本逻辑转弱→被证伪。",
      updated: "YYYY-MM-DD",
    },
  ],

  // 没有单独的 thesisHealth 列表——健康度由上面的 theses 派生
  // （每条的 pillar + status + trend）。唯一真相来源。

  business: [
    { name: "业务板块", role: "一两字定位", howItMakesMoney: "如何赚钱。", note: "为什么重要。" },
  ],

  // 如果 AI 对这家公司的逻辑不关键，整块 aiMoat 删掉即可。
  aiMoat: {
    summary: "这家公司的核心 AI 问题。",
    verdict: "我的判断：……",
    factors: [{ name: "要素", note: "……", direction: "up" }],
    cannibalization: "任何自我蚕食的张力。没有就删。",
  },

  drivers: [
    { name: "驱动因素", why: "为什么它驱动长期价值。", direction: "flat" },
  ],

  ecosystem: {
    upstream: [{ name: "供应商 / 输入", note: "" }],
    self: [{ name: "这家公司的核心节点", note: "" }],
    downstream: [{ name: "客户 / 受益方", note: "" }],
  },

  competition: [
    {
      name: "对手",
      attacking: "他们进攻什么。",
      moatTargeted: "针对这家公司的哪条护城河。",
      evidence: "证据。",
      threat: "High", // High 高 | Medium 中 | Low 低
      thesisImpact: "它施压哪条逻辑。",
    },
  ],

  metrics: [
    // `good`："up" 或 "down" = 哪个方向有利（把 sparkline 朝好=绿 / 背离=红上色）。
    // 方向有歧义时就不写 → 保持中性色的线。
    { label: "指标", latest: "数值 (待核实)", spark: [1, 2, 3, 4], unit: "", good: "up", note: "为什么它能改变判断。", judgment: true },
  ],

  financials: {
    note: "约数 / 依赖前请对照财报核实。",
    rows: [
      { label: "收入", values: ["—", "—", "—"], periods: ["FY-2", "FY-1", "FYe"] },
    ],
    impliedExpectations: "当前价格对未来隐含了什么。",
  },

  timeline: [
    {
      date: "YYYY-MM-DD",
      event: "发生了什么。",
      whyItMatters: "为什么它对逻辑重要。",
      node: "影响哪块业务 / 指标。",
      thesisImpact: "flat", // up | flat | down | warn
      action: "不动仓位。", // 事件 ≠ 动作 —— 大多数事件都落在这里。
      source: { label: "来源", url: "https://…" }, // 或 null
      related: { label: "Stock Why 维基", url: "https://belindasun.github.io/stock-why-wiki/" }, // 或 null
    },
  ],

  thesisEvolution: [
    { date: "年份", label: "思考里的一个里程碑", note: "变了什么、为什么。" },
  ],

  risks: [
    { thesis: "哪条逻辑", condition: "若 …… 则 …… 转弱 / 被证伪。", status: "Watching" },
  ],

  stockWhy: {
    label: "TICKER · Stock Why 维基",
    url: "https://belindasun.github.io/stock-why-wiki/",
    note: "市场波动的「为什么会发生」分析放在 Stock Why 维基；这本账本只问它是否改变了逻辑。",
  },
};
