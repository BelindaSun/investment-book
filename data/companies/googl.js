/*
 * Investment Book — company data file.
 *
 * This is DATA, not code. It reads like JSON. Edit it by hand or let Claude
 * edit it — nothing here needs a build step. To add another company, copy this
 * file to data/companies/<ticker>.js, change the object, and add the ticker to
 * data/manifest.js.
 *
 * Field reference (all optional except ticker/name):
 *   thesisStatus : "Strong" | "Healthy" | "Watching" | "Weakening" | "Invalidated"
 *   trend        : "up" | "flat" | "down" | "warn"   (evidence direction)
 *   evidence tag : "FACT" | "INFERENCE" | "THESIS" | "UNKNOWN"
 *
 * Numbers marked PLACEHOLDER are examples for you to replace with your real
 * figures. Numbers marked (verify) are approximate / may be stale — confirm
 * before you rely on them.
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA.GOOGL = {
  ticker: "GOOGL",
  name: "Alphabet Inc.",
  tier: "core", // core | active | watch — sets depth + grouping on the portfolio home
  tagline: "Cash machine funding a credible bid to own the AI transition.", // short line for the portfolio row
  oneLiner:
    "The company that organizes the world's information — now testing whether it can own the AI transition it helped invent, instead of being disrupted by it.",
  updated: "2026-08-26",
  thesisStatus: "Healthy",
  statusNote:
    "Core cash engines (Search, YouTube, Cloud) are strong and compounding. The one open question — does AI expand or erode the Search moat — is being actively resolved in Alphabet's favor so far, but it is the thing to watch, not to assume.",

  // The elevator case. If you can't say it in a few lines, you don't own it — you're renting it.
  whyIOwnIt: [
    "A cash machine (Search + YouTube) funding a credible bid to win the next platform — priced closer to a mature ad company than an AI leader.",
    "Full-stack AI ownership almost nobody else has: model (Gemini), silicon (TPU), data, distribution (Chrome/Android/Search), and cloud to sell it through.",
    "Optionality the market barely pays for — Cloud margin inflection, Waymo, DeepMind — sitting on top of a business that already gushes free cash flow.",
  ],

  position: {
    note:
      "PLACEHOLDER — replace with your real numbers. Company Quality and Stock Valuation are tracked separately below on purpose: a great company is not a buy at any price.",
    shares: 100,
    avgCost: 165.0,
    currentPrice: 205.0, // manual snapshot — NOT live. Update by hand when you review.
    priceAsOf: "2026-08-26", // the date currentPrice was last set, so P/L reads honestly as a snapshot
    portfolioWeight: 8.0, // %
    targetWeight: 10.0, // %
    addRange: "Add below ~$180, or on any non-structural drawdown of 15%+",
    reduceRange: "Trim above ~$260 or if weight exceeds ~14% of portfolio",
    qualityNote:
      "Quality: high. Wide-moat, self-funding, rational capital allocation, multiple independent growth engines. Among the highest-quality businesses in the world.",
    valuationNote:
      "Valuation: reasonable, not cheap. Trades at a discount to other mega-cap AI names on forward earnings/FCF, which is the crux of the case — you are paid to wait while the AI question resolves.",
  },

  // 3–5 living theses. Each is a claim that can be checked against reality.
  theses: [
    {
      id: "search-durability",
      title: "Search survives the AI transition — and monetizes it",
      pillar: "Search durability", // short label used in the derived Thesis Health dashboard
      status: "Healthy",
      trend: "flat",
      statement:
        "AI does not kill Search; it changes its shape. Google's distribution, intent data, and ad marketplace let it fold generative answers into Search (AI Overviews / AI Mode) while defending the query-to-ad economics that fund everything else.",
      marketMisunderstanding:
        "The market periodically prices GOOGL as if ChatGPT structurally replaces Search. My view: the binding constraint on AI answers is distribution and monetization, both of which Google owns, not raw model quality.",
      supporting: [
        { text: "Search revenue has kept growing through the first two years of the ChatGPT era.", tag: "FACT" },
        { text: "AI Overviews are being monetized (ads inside/around AI answers), not just given away.", tag: "FACT" },
        { text: "Default distribution via Chrome + Android puts an answer box in front of billions with zero acquisition cost.", tag: "FACT" },
        { text: "Query intent + advertiser marketplace is a two-sided moat a chat startup cannot replicate quickly.", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "Younger users increasingly start product/how-to queries in AI assistants, not Google.", tag: "FACT" },
        { text: "If answers get 'good enough' without a click, the click-based ad model faces per-query pressure.", tag: "INFERENCE" },
        { text: "The DOJ antitrust remedy could weaken the default-placement distribution advantage.", tag: "FACT" },
      ],
      keyMetrics: ["Search revenue growth", "Search share of queries", "AI Overview monetization signals"],
      invalidation:
        "IF Search revenue growth turns negative for 2+ quarters AND query share visibly shifts to AI assistants Google can't monetize, THEN this thesis is weakening → invalidated.",
      updated: "2026-08-26",
    },
    {
      id: "ai-full-stack",
      title: "Full-stack AI ownership widens the moat",
      pillar: "AI / full-stack moat",
      status: "Strengthening",
      trend: "up",
      statement:
        "Alphabet owns every layer — frontier model (Gemini), custom silicon (TPU), planet-scale data, distribution, and a cloud to sell it through. This vertical integration lowers cost-to-serve AI and creates products rivals can't match on price or reach.",
      marketMisunderstanding:
        "Post-ChatGPT, the market wrote off Google as 'behind.' Gemini's trajectory plus TPU cost advantage suggest the opposite: it may be the best-positioned, not the most threatened.",
      supporting: [
        { text: "TPU lets Google train/serve at a structurally lower cost than buying merchant GPUs.", tag: "FACT" },
        { text: "Gemini has closed most of the gap with frontier competitors on major benchmarks.", tag: "FACT" },
        { text: "DeepMind is a genuine research moat (AlphaFold-class output), not just a product team.", tag: "FACT" },
        { text: "Owning the whole stack means AI margins can improve as usage scales, not just costs.", tag: "THESIS" },
      ],
      contrary: [
        { text: "OpenAI/Microsoft still lead in consumer AI mindshare and enterprise Copilot distribution.", tag: "FACT" },
        { text: "Model leadership is contestable and can flip release-to-release.", tag: "FACT" },
      ],
      keyMetrics: ["Gemini usage/DAU", "TPU deployment", "AI feature attach in Cloud", "Cloud gross margin"],
      invalidation:
        "IF Gemini falls decisively and persistently behind on capability AND Google fails to convert its distribution into AI usage, THEN the full-stack advantage is not translating → thesis weakened.",
      updated: "2026-08-26",
    },
    {
      id: "cloud-inflection",
      title: "Cloud crosses from cash drain to durable profit engine",
      pillar: "Cloud profit engine",
      status: "Strong",
      trend: "up",
      statement:
        "Google Cloud has turned profitable and is scaling operating margin while still growing >25%. AI workloads (Vertex, Gemini APIs, TPU) give it a differentiated wedge into the #3 cloud position, converting AI capex into high-margin recurring revenue.",
      marketMisunderstanding:
        "Cloud was long dismissed as a distant-third money-loser. The margin inflection is real and, in my view, under-appreciated in the multiple.",
      supporting: [
        { text: "Cloud is now consistently operating-profit positive with rising margins.", tag: "FACT" },
        { text: "Backlog / remaining performance obligations point to durable forward revenue.", tag: "FACT" },
        { text: "AI is a genuine reason for enterprises to choose GCP, not just a checkbox.", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "AWS and Azure are larger, entrenched, and also AI-armed.", tag: "FACT" },
        { text: "Heavy capex is required to keep the seat at the table; FCF conversion is the swing factor.", tag: "FACT" },
      ],
      keyMetrics: ["Cloud revenue growth", "Cloud operating margin", "Cloud backlog"],
      invalidation:
        "IF Cloud margin expansion stalls or reverses while growth decelerates below ~20%, THEN the profit-engine thesis is on watch.",
      updated: "2026-08-26",
    },
    {
      id: "capex-fcf",
      title: "AI capex converts to free cash flow, not just depreciation",
      pillar: "CapEx → FCF conversion",
      status: "Watching",
      trend: "warn",
      statement:
        "The bet only works if the enormous AI/data-center capex earns a return — showing up as Cloud revenue, better ad targeting, and eventually rising FCF. This is the thesis most exposed to disappointment and the one I watch hardest.",
      marketMisunderstanding:
        "Bulls assume capex is automatically good ('they're investing in AI'). I treat it as unproven until FCF and Cloud economics confirm the return.",
      supporting: [
        { text: "Alphabet still produces very large free cash flow even while investing heavily.", tag: "FACT" },
        { text: "Management frames capex as demand-driven (customers waiting on capacity).", tag: "FACT" },
      ],
      contrary: [
        { text: "Capex has stepped up sharply; depreciation is a growing drag on reported margins.", tag: "FACT" },
        { text: "Industry-wide AI capex risks overbuild if AI demand normalizes.", tag: "INFERENCE" },
        { text: "The gap between capex and incremental FCF is the single most important number to watch.", tag: "THESIS" },
      ],
      keyMetrics: ["CapEx", "Free cash flow", "FCF margin", "CapEx / revenue"],
      invalidation:
        "IF capex keeps rising for 4+ quarters while FCF stagnates or falls AND Cloud growth doesn't accelerate, THEN capital is being destroyed → reduce.",
      updated: "2026-08-26",
    },
    {
      id: "regulation",
      title: "Regulation is a tax and an irritant, not an existential break",
      pillar: "Regulation / antitrust",
      status: "Watching",
      trend: "down",
      statement:
        "Antitrust (US Search case, ad-tech case, EU) can shave economics and force changes to defaults or ad-tech, but is unlikely to break the core information/advertising engine outright. The risk is a distribution remedy that erodes the Search default moat.",
      marketMisunderstanding:
        "Headlines treat every ruling as fatal; the realistic outcome is friction and fines, with a tail risk on distribution defaults.",
      supporting: [
        { text: "Alphabet has absorbed large fines historically without impairing the core model.", tag: "FACT" },
        { text: "Even without paid defaults, Chrome + Android give organic distribution.", tag: "INFERENCE" },
      ],
      contrary: [
        { text: "A remedy banning default-search payments/placement would hit a real moat.", tag: "FACT" },
        { text: "Ad-tech divestiture risk introduces structural uncertainty.", tag: "FACT" },
      ],
      keyMetrics: ["Antitrust ruling outcomes", "Regulatory fines", "Default-distribution status"],
      invalidation:
        "IF a final remedy structurally strips Google of search distribution defaults AND traffic/share falls as a result, THEN the Search moat thesis is materially weakened.",
      updated: "2026-08-26",
    },
  ],

  // NOTE: Thesis Health (the one-glance dashboard) is DERIVED from the theses
  // above — each thesis's `pillar` + `status` + `trend`. No separate list to
  // keep in sync. Add a thesis and it shows up in Health automatically.

  business: [
    {
      name: "Google Search & Advertising",
      role: "The cash engine",
      howItMakesMoney:
        "Auctions ads against high-intent queries. Highest-margin revenue in the company; funds every other bet.",
      note: "The asset the whole AI question circles around. Health here = health of the thesis.",
    },
    {
      name: "YouTube",
      role: "Second ad engine + subscriptions",
      howItMakesMoney:
        "Advertising against the largest video attention pool on earth, plus growing Premium/Music and connected-TV subscription revenue.",
      note: "Structurally advantaged in the shift of TV ad budgets to streaming; increasingly a subscription story too.",
    },
    {
      name: "Google Cloud",
      role: "The profit inflection",
      howItMakesMoney:
        "Sells compute, data, and AI (Vertex, Gemini APIs, TPU) to enterprises on recurring contracts. Now profitable and scaling margin.",
      note: "Where AI capex is meant to turn into durable, high-margin recurring revenue.",
    },
    {
      name: "Android / Chrome / Play (Distribution)",
      role: "The moat under everything",
      howItMakesMoney:
        "Not a big direct revenue line, but the reason Search and Gemini reach billions at ~zero acquisition cost. Play Store adds high-margin fees.",
      note: "The most under-appreciated asset — distribution is what a chat startup cannot buy.",
    },
    {
      name: "Other Bets (Waymo, etc.)",
      role: "Long-dated optionality",
      howItMakesMoney:
        "Mostly pre-profit. Waymo is the credible one: a potential large autonomous-mobility franchise, currently a cost line.",
      note: "Value here is real but should be treated as free option, not base-case cash flow.",
    },
  ],

  aiMoat: {
    summary:
      "The central question of the whole investment: does the AI wave widen Alphabet's economic moat or erode it?",
    verdict:
      "MY THESIS: net widens. Alphabet is one of very few companies that owns every layer of the AI stack, which lowers its cost to build and serve AI and hands it distribution rivals can't match. The genuine risk is inside its own house — AI answers cannibalizing the click-based Search ad model faster than new AI monetization replaces it.",
    factors: [
      { name: "Gemini (models)", note: "Frontier-competitive model family, now woven through Search, Workspace, Android, Cloud.", direction: "up" },
      { name: "DeepMind (research)", note: "World-class research org; source of durable, hard-to-copy advances.", direction: "up" },
      { name: "AI in Search (Overviews / AI Mode)", note: "Generative answers folded into Search — both the opportunity and the cannibalization risk.", direction: "flat" },
      { name: "TPU / AI infrastructure", note: "Custom silicon = structurally lower cost to train and serve AI than merchant GPUs.", direction: "up" },
      { name: "Distribution (Chrome/Android/Search)", note: "Billions of users reachable at ~zero cost — the moat rivals cannot buy.", direction: "up" },
      { name: "Data", note: "Decades of query, video, and maps data feeding model quality and targeting.", direction: "up" },
      { name: "Developer ecosystem", note: "Vertex, Gemini APIs, and Android developers as an AI distribution channel.", direction: "flat" },
      { name: "AI monetization", note: "The open question: can Google monetize AI answers as well as it monetized blue links?", direction: "warn" },
    ],
    cannibalization:
      "Honest tension: every query Google answers directly (no click) is great for the user and potentially worse for the classic ad unit. The bet is that Google, owning the marketplace and the surface, controls the pace of that transition and inserts new ad formats — rather than a rival capturing the query entirely. Watch AI Overview monetization vs. traditional Search CPC.",
  },

  drivers: [
    { name: "Advertising demand", why: "Macro ad budgets drive the majority of revenue and nearly all profit.", direction: "flat" },
    { name: "AI compute cost (TPU)", why: "Lower cost-to-serve AI directly protects margins as AI usage scales.", direction: "up" },
    { name: "Enterprise cloud spending", why: "The growth + margin engine; tracks IT budgets and AI adoption.", direction: "up" },
    { name: "User traffic / query volume", why: "The raw input to the ad machine; threatened by AI-assistant substitution.", direction: "warn" },
    { name: "Distribution (defaults)", why: "Chrome/Android reach; exposed to antitrust remedies.", direction: "down" },
    { name: "Developer adoption", why: "Vertex/Gemini/Android developers extend AI reach and lock-in.", direction: "flat" },
  ],

  ecosystem: {
    upstream: [
      { name: "Semiconductors (TSMC, Broadcom TPU partner)", note: "Fabricates TPUs and other silicon" },
      { name: "Merchant AI chips (Nvidia)", note: "Still bought alongside TPU for some workloads" },
      { name: "Energy & power", note: "Data centers are increasingly power-constrained" },
      { name: "Data-center buildout", note: "Capacity is the gating factor on Cloud + AI" },
    ],
    self: [
      { name: "Search", note: "Cash engine" },
      { name: "YouTube", note: "Attention + ads + subs" },
      { name: "Cloud", note: "Profit inflection" },
      { name: "Gemini / DeepMind", note: "AI layer" },
      { name: "Distribution (Chrome/Android)", note: "Reach" },
    ],
    downstream: [
      { name: "Advertisers", note: "The paying customer of Search/YouTube" },
      { name: "Consumers", note: "Billions of Search/Android/YouTube users" },
      { name: "Developers", note: "Vertex/Gemini/Android builders" },
      { name: "Creators", note: "YouTube ecosystem" },
      { name: "Cloud customers", note: "Enterprises on GCP" },
      { name: "AI companies", note: "Buyers of TPU capacity / Gemini APIs" },
    ],
  },

  competition: [
    {
      name: "OpenAI + Microsoft",
      attacking: "Consumer AI mindshare (ChatGPT) and enterprise AI distribution (Copilot).",
      moatTargeted: "Search query volume; Cloud/enterprise AI.",
      evidence: "ChatGPT is the default 'AI' for many users; Copilot rides Microsoft's enterprise install base.",
      threat: "High",
      thesisImpact: "Directly pressures the Search-durability thesis.",
    },
    {
      name: "Microsoft (Azure)",
      attacking: "Enterprise cloud + AI via Azure/OpenAI.",
      moatTargeted: "Cloud growth and margin.",
      evidence: "Larger cloud, deep enterprise relationships, OpenAI partnership.",
      threat: "High",
      thesisImpact: "Caps Cloud share upside; Cloud thesis must win on AI + price.",
    },
    {
      name: "Meta",
      attacking: "Digital ad budgets and open-weight AI (Llama).",
      moatTargeted: "Advertising share; AI developer mindshare.",
      evidence: "Competes for the same ad dollar; commoditizes models via open weights.",
      threat: "Medium",
      thesisImpact: "Ad competition, not existential to Search.",
    },
    {
      name: "Amazon (AWS)",
      attacking: "Cloud leadership and retail-search ad dollars.",
      moatTargeted: "Cloud; product-search queries.",
      evidence: "AWS is #1 cloud; Amazon captures high-intent shopping queries.",
      threat: "Medium",
      thesisImpact: "Erodes a slice of high-value commercial queries.",
    },
    {
      name: "Anthropic",
      attacking: "Frontier model quality, enterprise + coding.",
      moatTargeted: "Gemini's model leadership; Cloud AI.",
      evidence: "Strong frontier models; enterprise traction.",
      threat: "Medium",
      thesisImpact: "Keeps model leadership contestable; pressures Gemini differentiation.",
    },
    {
      name: "Apple",
      attacking: "The device layer and on-device AI / default search relationship.",
      moatTargeted: "Distribution / defaults.",
      evidence: "Controls iOS; the Google default-search payment is an antitrust flashpoint.",
      threat: "Medium",
      thesisImpact: "Distribution risk if the Apple default relationship changes.",
    },
  ],

  // Only metrics that could change the investment judgment.
  // `good` declares which direction is favorable, so the sparkline can color
  // toward-good = green / away = red. OMIT `good` when direction is genuinely
  // ambiguous (e.g. CapEx) — the line then stays neutral, implying no judgment.
  metrics: [
    { label: "Search revenue growth", latest: "~10% YoY (verify)", spark: [12, 11, 9, 10, 11, 10], unit: "% YoY", good: "up", note: "The single most important durability signal.", judgment: true },
    { label: "YouTube revenue growth", latest: "~13% YoY (verify)", spark: [8, 12, 13, 14, 13, 13], unit: "% YoY", good: "up", note: "Ads + subs; connected-TV tailwind.", judgment: true },
    { label: "Cloud revenue growth", latest: "~28% YoY (verify)", spark: [26, 28, 27, 29, 30, 28], unit: "% YoY", good: "up", note: "Growth engine; watch alongside margin.", judgment: true },
    { label: "Cloud operating margin", latest: "~17% (verify)", spark: [5, 9, 11, 14, 15, 17], unit: "%", good: "up", note: "The inflection story in one line.", judgment: true },
    { label: "CapEx", latest: "elevated / rising (verify)", spark: [11, 13, 14, 18, 20, 22], unit: "$B/qtr", note: "The AI bet's cost — ambiguous on its own (neutral line). Judge it only against FCF and Cloud growth.", judgment: true },
    { label: "Free cash flow", latest: "large but pressured (verify)", spark: [18, 17, 16, 15, 16, 17], unit: "$B/qtr", good: "up", note: "The number that proves capex is working.", judgment: true },
    { label: "AI Overview / Gemini usage", latest: "growing (verify)", spark: [2, 4, 6, 9, 12, 15], unit: "index", good: "up", note: "AI adoption + monetization signals.", judgment: true },
  ],

  financials: {
    note: "Approximate / illustrative — verify against the latest 10-Q/10-K before relying on any figure. First version intentionally avoids a precise fragile target price.",
    rows: [
      { label: "Revenue", values: ["$307B", "$350B", "~$390B"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "Operating margin", values: ["~32%", "~33%", "~32%"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "EPS", values: ["$5.80", "$8.00", "~$9.00"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "Free cash flow", values: ["~$70B", "~$73B", "~$70B"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "CapEx", values: ["~$52B", "~$75B", "~$90B"], periods: ["FY24", "FY25", "FY26e"] },
      { label: "Cash & marketable securities", values: ["~$95B", "~$100B", "—"], periods: ["FY24", "FY25", ""] },
      { label: "Buybacks", values: ["~$60B", "~$65B", "—"], periods: ["FY24", "FY25", ""] },
      { label: "P/E (fwd)", values: ["~22x", "~23x", "—"], periods: ["", "current", ""] },
      { label: "EV / FCF", values: ["—", "~28x", "—"], periods: ["", "current", ""] },
    ],
    impliedExpectations:
      "At a forward multiple below its mega-cap AI peers, the price implies the market expects mid-single to low-double-digit earnings growth with Search intact but not accelerating. You are NOT paying up for an AI-leadership outcome — which is the asymmetry: if the full-stack-AI thesis plays out, re-rating is the upside; if Search merely holds, the current multiple is already defensible.",
  },

  timeline: [
    {
      date: "2026-08-26",
      event: "Investment Book opened for GOOGL (this record's starting point)",
      whyItMatters: "Baseline snapshot of the thesis, health, and position as of today.",
      node: "All",
      thesisImpact: "flat",
      action: "No position change — establishing the record.",
      source: null,
      related: null,
    },
    {
      date: "2026-08-xx",
      event: "PLACEHOLDER — e.g. Q2 FY26 earnings (Cloud growth/margin, capex guide)",
      whyItMatters:
        "Earnings are the main reality-check on the Cloud-inflection and capex→FCF theses. Fill in actual numbers when reported.",
      node: "Cloud / CapEx",
      thesisImpact: "flat",
      action: "No position change pending confirmation.",
      source: null,
      related: { label: "Stock Why Wiki: GOOGL", url: "https://belindasun.github.io/stock-why-wiki/" },
    },
    {
      date: "2026-08-xx",
      event: "PLACEHOLDER — antitrust remedy development (Search / ad-tech)",
      whyItMatters:
        "The one input that can hit the distribution moat directly. Any final remedy on default search placement moves the regulation thesis.",
      node: "Distribution / Regulation",
      thesisImpact: "warn",
      action: "No position change; re-check the regulation invalidation condition when a final remedy lands.",
      source: null,
      related: { label: "Stock Why Wiki", url: "https://belindasun.github.io/stock-why-wiki/" },
    },
  ],

  thesisEvolution: [
    {
      date: "2023",
      label: "Original doubt (pre-ownership)",
      note: "ChatGPT launch → market narrative: 'Google is the Kodak of search.' The question that had to be answered before owning it: can the incumbent own the transition?",
    },
    {
      date: "2024–2025",
      label: "Evidence accumulates in Google's favor",
      note: "Gemini closes the model gap; AI Overviews ship without wrecking Search revenue; Cloud turns profitable and scales margin. The disruption thesis weakens.",
    },
    {
      date: "2026 (now)",
      label: "Healthy, with one watched risk",
      note: "Core theses intact and strengthening (AI full-stack, Cloud). Open risks concentrated in two places: capex→FCF conversion, and antitrust distribution remedy. Position held at target-ish weight.",
    },
    {
      date: "Future",
      label: "What would change my mind",
      note: "Left deliberately open. Update this page each time real evidence strengthens, modifies, or invalidates a thesis — this is the most valuable long-term record in the book.",
    },
  ],

  risks: [
    {
      thesis: "Search durability",
      condition:
        "IF user behavior structurally shifts from search to AI assistants AND Google fails to retain distribution and monetization, THEN the Search moat thesis is weakened.",
      status: "Watching",
    },
    {
      thesis: "AI full-stack",
      condition:
        "IF Gemini falls decisively and persistently behind on capability AND distribution fails to convert to AI usage, THEN the full-stack advantage isn't translating → thesis weakened.",
      status: "Healthy",
    },
    {
      thesis: "Cloud profit engine",
      condition:
        "IF Cloud operating-margin expansion stalls or reverses while growth falls below ~20%, THEN the profit-engine thesis goes on watch.",
      status: "Strong",
    },
    {
      thesis: "CapEx → FCF",
      condition:
        "IF capex keeps rising for 4+ quarters while FCF stagnates/falls AND Cloud growth doesn't accelerate, THEN capital is being destroyed → reduce.",
      status: "Watching",
    },
    {
      thesis: "Regulation",
      condition:
        "IF a final antitrust remedy structurally strips search-distribution defaults AND traffic/share falls, THEN the Search moat is materially weakened.",
      status: "Watching",
    },
  ],

  // Cross-links back to Stock Why Wiki (market-event / causal analysis lives there).
  stockWhy: {
    label: "GOOGL on Stock Why Wiki",
    url: "https://belindasun.github.io/stock-why-wiki/",
    note: "When a market move needs a 'why did it happen' causal trace, that lives in Stock Why Wiki. This book only asks whether it changes the thesis.",
  },
};
