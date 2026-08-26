/*
 * ===========================================================================
 * COMPANY TEMPLATE — copy this file to add a company.
 * ===========================================================================
 * Steps to add, say, NVDA:
 *   1. Copy this file to  data/companies/nvda.js
 *   2. Replace "TICKER" below with  NVDA  (both the filename object key and the
 *      ticker field must match the manifest entry).
 *   3. Fill in the fields. Delete any block you don't have yet — every section
 *      degrades gracefully if a field is missing.
 *   4. Add "NVDA" to the array in  data/manifest.js
 *   5. Refresh the page. Done. No build step.
 *
 * DESIGN RULE: keep the STRUCTURE common, make the CONTENT company-specific.
 * Do NOT copy GOOGL's drivers/metrics/theses verbatim — a chip company's
 * drivers are not an ad company's drivers. Reuse the shape, rewrite the sense.
 *
 * VALUES:
 *   thesisStatus / status : "Strong" | "Healthy" | "Watching" | "Weakening" | "Invalidated"
 *                           (also "Strengthening" for a status that is improving)
 *   trend / direction     : "up" | "flat" | "down" | "warn"   → renders ↑ → ↓ ⚠
 *   evidence tag          : "FACT" | "INFERENCE" | "THESIS" | "UNKNOWN"
 *   metric good           : "up" | "down" | (omit)  — which way is favorable
 *
 * Thesis Health is DERIVED from the theses (pillar + status + trend) — there is
 * no separate health list to maintain. Position price is a manual snapshot
 * (priceAsOf), never live.
 * ===========================================================================
 */
window.IB_DATA = window.IB_DATA || {};
window.IB_DATA.TICKER = {
  ticker: "TICKER",
  name: "Company Name Inc.",
  tier: "active", // core | active | watch — controls depth + grouping on the portfolio home.
                  //   core   = full conviction: fill all 12 sections.
                  //   active = decision-critical minimum: Overview + Thesis + Timeline + Risks + Position.
                  //   watch  = one-screen: just the Overview fields below.
                  // You don't have to fill every section — empty ones are hidden from nav and page.
  tagline: "Very short line shown on the portfolio home row.",
  oneLiner: "One sentence: what this company fundamentally is / the question it's answering.",
  updated: "YYYY-MM-DD", // keep current — the portfolio home flags anything untouched > 45 days.
  thesisStatus: "Healthy",
  statusNote: "One paragraph: the current state of the case in plain language.",

  whyIOwnIt: [
    "First reason — the elevator pitch line 1.",
    "Second reason.",
    "Third reason.",
  ],

  position: {
    note: "PLACEHOLDER — replace with real numbers, or delete this note once real.",
    shares: 0,
    avgCost: 0,
    currentPrice: 0, // manual snapshot, NOT live — update by hand when you review
    priceAsOf: "YYYY-MM-DD", // date currentPrice was set; makes P/L read honestly as a snapshot
    portfolioWeight: 0,
    targetWeight: 0,
    addRange: "When would you add?",
    reduceRange: "When would you trim?",
    qualityNote: "Quality: … (the business, independent of price)",
    valuationNote: "Valuation: … (the price, independent of the business)",
    notes: "",
  },

  theses: [
    {
      id: "thesis-1",
      title: "Short claim you can check against reality",
      pillar: "Short label", // shown in the derived Thesis Health dashboard
      status: "Healthy",
      trend: "flat",
      statement: "The full thesis in 1–2 sentences: why this is true.",
      marketMisunderstanding: "What the market may be getting wrong.",
      supporting: [
        { text: "Evidence for.", tag: "FACT" },
        { text: "An inference.", tag: "INFERENCE" },
      ],
      contrary: [{ text: "Evidence against.", tag: "FACT" }],
      keyMetrics: ["Metric A", "Metric B"],
      invalidation: "IF … happens, THEN this thesis is weakened → invalidated.",
      updated: "YYYY-MM-DD",
    },
  ],

  // NO separate thesisHealth list — the Health dashboard is DERIVED from the
  // theses above (each thesis's pillar + status + trend). One source of truth.

  business: [
    { name: "Segment", role: "One-word role", howItMakesMoney: "How it earns.", note: "Why it matters." },
  ],

  // Delete the whole aiMoat block if AI isn't central to this company's thesis.
  aiMoat: {
    summary: "The central AI question for this company.",
    verdict: "MY THESIS: …",
    factors: [{ name: "Factor", note: "…", direction: "up" }],
    cannibalization: "Any self-cannibalization tension. Delete if N/A.",
  },

  drivers: [
    { name: "Driver", why: "Why it moves long-term value.", direction: "flat" },
  ],

  ecosystem: {
    upstream: [{ name: "Supplier / input", note: "" }],
    self: [{ name: "This company's core nodes", note: "" }],
    downstream: [{ name: "Customer / beneficiary", note: "" }],
  },

  competition: [
    {
      name: "Rival",
      attacking: "What they attack.",
      moatTargeted: "Which of this company's moats.",
      evidence: "Evidence.",
      threat: "High", // High | Medium | Low
      thesisImpact: "Which thesis it pressures.",
    },
  ],

  metrics: [
    // `good`: "up" or "down" = which direction is favorable (colors the sparkline
    // toward-good green / away red). OMIT when direction is ambiguous → neutral line.
    { label: "Metric", latest: "value (verify)", spark: [1, 2, 3, 4], unit: "", good: "up", note: "Why it can change the judgment.", judgment: true },
  ],

  financials: {
    note: "Approximate / verify against filings.",
    rows: [
      { label: "Revenue", values: ["—", "—", "—"], periods: ["FY-2", "FY-1", "FYe"] },
    ],
    impliedExpectations: "What the current price implies about the future.",
  },

  timeline: [
    {
      date: "YYYY-MM-DD",
      event: "What happened.",
      whyItMatters: "Why it matters to the thesis.",
      node: "Which business / metric.",
      thesisImpact: "flat", // up | flat | down | warn
      action: "No position change.", // Event ≠ Action — most events end here.
      source: { label: "Source", url: "https://…" }, // or null
      related: { label: "Stock Why Wiki", url: "https://belindasun.github.io/stock-why-wiki/" }, // or null
    },
  ],

  thesisEvolution: [
    { date: "Year", label: "Milestone in the thinking", note: "What changed and why." },
  ],

  risks: [
    { thesis: "Which thesis", condition: "IF … THEN … weakened / invalidated.", status: "Watching" },
  ],

  stockWhy: {
    label: "TICKER on Stock Why Wiki",
    url: "https://belindasun.github.io/stock-why-wiki/",
    note: "Market-move 'why did it happen' analysis lives in Stock Why Wiki; this book only asks whether it changes the thesis.",
  },
};
