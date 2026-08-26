# Agent notes — My Investment Book

## What this is
A zero-build static app: `index.html` + `styles.css` + `app.js` render one
company at a time from plain-JS data files in `data/companies/`. It is a
long-term investment **decision journal** — the vertical companion to Stock Why
Wiki (which does horizontal market-move analysis). Keep the two complementary,
not duplicative: link to Stock Why Wiki for "why the market moved," keep this
book focused on "does it change my thesis."

## Views
- **Portfolio home** (`#/`) is the landing view: all holdings as rows, grouped by
  `tier`, each showing thesis status, weight, snapshot return, and staleness
  (flagged if `updated` is > `STALE_DAYS` = 45 days old). This is the scaling
  answer — you scan the forest here and drill into a company only when it moved.
- **Company view** (`#/TICKER`) renders only the sections a company actually has.

## Depth scales with tier — don't fill every section for every company
- `tier`: `core` (full 12 sections) · `active` (Overview + Thesis + Timeline +
  Risks + Position) · `watch` (Overview only). Depth should track how much
  capital/attention the holding earns. Empty sections are hidden automatically;
  do NOT pad a watch-tier company to look like a core one. If you can't even fill
  the `active` minimum, that's a signal the position isn't understood — surface
  it, don't paper over it. Give every company a short `tagline` for its home row.

## Golden rules
- **Never put company facts in `app.js`.** It is a generic template. All content
  lives in `data/companies/<ticker>.js`.
- **`app.js` degrades gracefully** — every section tolerates missing fields.
- **Editing is data-only.** Update a company = edit its data file. Add a company
  = copy `data/companies/_TEMPLATE.js`, fill it, add the ticker to
  `data/manifest.js`. No build, no framework.
- **Preserve evidence discipline.** Evidence items are `{ text, tag }` where tag
  ∈ `FACT | INFERENCE | THESIS | UNKNOWN`. Don't launder an opinion into a FACT.
- **Event ≠ Action.** Default a new timeline entry's `action` to
  "No position change." unless the user actually traded. Don't manufacture
  buy/sell urgency.
- **Quality ≠ Valuation.** Keep `position.qualityNote` (the business) and
  `position.valuationNote` (the price) distinct.
- **No false precision.** No composite 0–100 score, no fabricated target price.
  For time-sensitive figures beyond your knowledge, mark them `(verify)` rather
  than inventing them.

## Field/enum reference
- `thesisStatus`, thesis `status`, risk `status`:
  `Strong | Healthy | Watching | Weakening | Invalidated` (plus `Strengthening`).
- `trend` / `direction` / `thesisImpact`: `up | flat | down | warn` → ↑ → ↓ ⚠.
- **Thesis Health is derived, not stored.** The Overview dashboard is built from
  the theses (`pillar` + `status` + `trend`). Give every thesis a short `pillar`.
  Do not add a separate `thesisHealth` list — it would drift out of sync.
- **Position price is a manual snapshot, never live.** `position.currentPrice`
  is paired with `position.priceAsOf`; the UI labels P/L as "as of <date>". Update
  both by hand at review time; don't imply the number is live.
- Sparklines: `metrics[].spark` is an array of numbers. Colored toward-good green
  / away red ONLY if the metric sets `good: "up"|"down"`; omit `good` when the
  direction is genuinely ambiguous (e.g. CapEx) and the line stays neutral.

## Testing
Open `index.html` (or `python3 -m http.server`). Check: Overview cockpit reads in
~1 minute; all 12 sidebar sections render; theme toggle cycles; mobile (<860px)
collapses the sidebar to a hamburger without breaking. `node -e` can sanity-check
a data file parses: it's just JS assigning to `window.IB_DATA`.

## Data-file schema
See `data/companies/_TEMPLATE.js` for the full annotated schema and
`data/companies/googl.js` for a complete worked example.
