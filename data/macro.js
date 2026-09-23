/*
 * Investment Book —— 宏观背景（macro backdrop）。
 * 本账本是「逐公司」决策日志；宏观只作为估值 / 折现率背景，不改变任何单一公司的 thesis。
 * 首页顶部的提示条读取这里：显示最新一条，较早的折叠成「近期」小条。
 * 加一条：在 items 顶部插入 { date, headline, detail, portfolio, watch, related }。
 *   date     —— YYYY-MM-DD，进入 backdrop 的日期（通常对齐 Stock Why 锚点）。
 *   headline —— 一句话标题。
 *   detail   —— 发生了什么（可省）。
 *   portfolio—— 对本组合的估值 / 久期含义（不是买卖建议）。
 *   watch    —— 接下来盯什么（可省）。
 *   related  —— { label, url } 指向 Stock Why 的因果分析（可省）。
 */
window.IB_MACRO = {
  label: "宏观背景",
  note: "宏观只作为估值 / 折现率背景，不改变任何单一公司的 thesis；因果溯源见 Stock Why。",
  items: [
    {
      date: "2026-09-23",
      headline: "加息预期走强（10 月计价升至五成以上），但油价五连跌破 $100 对冲",
      detail: "CME 计价 10/27-28 再加息约 52-53%，12 月累计约 81%；点阵图 16:2 让“加息周期中段”取代“一次性加息”成基准预期，2Y 约 4.76%（两年高点）。对冲面：油价五连跌，Brent 收 $99.25（9/8 以来首次收 $100 下方），共同社称伊朗愿 7 天内重开霍尔木兹（德黑兰否认，真假未定）；10Y 从 5.04% 回落至 5% 下方。",
      portfolio: "分母端压力未减（2Y 两年高点）；但油价回落缓解了“通胀反扑 → 被迫加速加息”的尾部风险。科技 / AI 链靠盈利叙事硬扛（纳指新高），利率敏感板块（金融 -2%）继续承压。这是敏感度，不是买卖建议。",
      watch: "9/30 8 月 PCE；霍尔木兹传闻证实 / 证伪；10Y 5% 关口；10 月 FOMC 是否兑现。",
      related: { label: "Stock Why · 利率 ↗", url: "https://stock-why-wiki-site.vercel.app/industries/macro-rates#2026-09-23" },
    },
    {
      date: "2026-09-17",
      headline: "FOMC 加息 25bp 至 3.75%–4.00%（2023 年来首次），点阵图暗示年内或再加",
      detail: "9/15–16 议息会议后 12-0 全票加息；声明强调通胀仍高企；Warsh 发布会偏鹰（经济走强、通胀未降温、地缘紧张）；道指 -631 点，10Y 收 5.003%（19 年来首次收上 5%）。",
      portfolio: "分母端压力从预期变成现实：长久期 / 高估值持仓（ORCL、NVDA、AVGO）估值逆风加剧；相对利好当期现金流确定 / 低 PE（AAPL、GOOGL、MSFT、医药批次）。这是敏感度，不是买卖建议。",
      watch: "12 月 FOMC 是否兑现再加息、PCE 通胀数据、油价 / 伊朗局势、10Y 5% 能否守住。",
      related: { label: "Stock Why · 利率 ↗", url: "https://stock-why-wiki-site.vercel.app/industries/macro-rates#2026-09-17" },
    },
    {
      date: "2026-09-16",
      headline: "10Y 美债突破 5%，折现率升至近 18 年最高",
      detail: "10Y 收益率 9/14 首次突破 5%（2007 年 7 月来首次），受油价、通胀黏性、$40 万亿国债 / 赤字发行与加息预期共同推动。",
      portfolio: "长久期 / 高估值持仓（ORCL、NVDA、AVGO）折现率逆风最大；相对利好当期现金流确定 / 低 PE（AAPL、GOOGL、MSFT、医药批次）。这是敏感度，不是买卖建议。",
      watch: "9/17 FOMC（预期 +25bp）、以及 10Y 5% 是否站稳——站稳则高估值重估是持续性而非一次性。",
      related: { label: "Stock Why · 利率 ↗", url: "https://stock-why-wiki-site.vercel.app/industries/macro-rates#2026-09-16" },
    },
    {
      date: "2026-09-11",
      headline: "8 月 CPI +3.4%（汽油驱动），核心 +2.4% 为 2021 年来最低",
      detail: "整体 CPI 月环比 +0.4%、同比 +3.4%（汽油 +3.9%、贡献超三分之一）；核心同比 +2.4%，为 2021 年 3 月来最低——整体热、核心凉的分化。",
      portfolio: "整体通胀黏 + 加息预期升温，推高折现率、压高估值；核心降温是长期利好，但短期被油价与加息叙事盖过。",
      watch: "能源是否延续上行、以及核心降温能否让 Fed 转向。",
      related: { label: "Stock Why · 利率 ↗", url: "https://stock-why-wiki-site.vercel.app/industries/macro-rates#2026-09-11" },
    },
  ],
};
