# My Investment Book

A personal, long-term **investment decision journal**. Not a stock-news site,
not a portfolio tracker, not a Bloomberg terminal. It answers one question, per
company, over years:

> **Why do I own this? Do the new facts still support that judgment? Is it still
> worth my capital today?**

It is the *vertical* companion to [Stock Why Wiki](https://belindasun.github.io/stock-why-wiki/)
(which explains *why the market moved*). This book explains *why I own the
company* — and whether each new event should change that.

```
Market event → Stock Why Wiki (why did it happen?) → Investment Book (does it change my thesis?) → Position decision
```

---

## How to use it

Open **`index.html`** in a browser. That's the whole app. No build, no server,
no database, no login.

- Double-click `index.html`, **or**
- serve the folder: `python3 -m http.server 8000` then open `http://localhost:8000`.
  (A local server is only needed if double-click ever fails to load the data
  files in your browser; most browsers load them fine from `file://`.)

You land on the **Portfolio home** — every holding as one row, grouped by tier,
showing thesis status, weight, snapshot return, and how long since you last
touched it (anything older than 45 days is flagged *needs review*). Scan the
forest here; click a row to drill into a company.

Inside a company, the reading flow follows the decision loop: **Overview**
(one-screen cockpit) → **Core Thesis** → the evidence sections → **Timeline**
(Event→Thesis→Action) → **Thesis Evolution** → **Risks/Invalidation** →
**My Position**.

**Depth scales with tier**, so 10 companies don't become 10× the work:

| tier | shows | for |
| --- | --- | --- |
| `core` | all 12 sections | real conviction, sized positions |
| `active` | Overview + Thesis + Timeline + Risks + Position | held, decision-critical |
| `watch` | just the Overview | starters / watchlist |

Sections you don't fill are simply hidden — a watch-tier company shows a short
nav, not a fake 12. If you can't even fill the `active` minimum, that's a signal
you don't understand the position well enough to size it up.

Theme toggle (bottom-left of the sidebar) cycles Default → Sepia → Dark.

---

## How it's built (on purpose, simply)

**Data and presentation are separate.**

```
investment-book/
├── index.html            ← the shell
├── styles.css            ← all styling (quiet serif, sibling to Stock Why Wiki)
├── app.js                ← renders any company object into the 12 sections
├── data/
│   ├── manifest.js       ← the list of tickers to load  ← edit to add a company
│   └── companies/
│       ├── googl.js      ← ONE company = ONE data file (reads like JSON)
│       └── _TEMPLATE.js  ← copy this to add a company
└── README.md
```

- **The data files are the book.** They read like JSON and are edited by hand or
  by Claude. Nothing about them requires tooling — they're plain, versionable,
  portable text. If this app ever disappears, your thinking is still there in
  readable files.
- **`app.js` is a dumb, stable template.** It never contains company facts. Add
  companies without touching it.

### Add another company (e.g. NVDA)

1. `cp data/companies/_TEMPLATE.js data/companies/nvda.js`
2. In `nvda.js`, set the ticker to `NVDA` and fill in the content.
   *Rewrite the content — don't copy GOOGL's drivers/metrics. Reuse the shape,
   not the substance: a chip company's drivers aren't an ad company's.*
3. Add `"NVDA"` to the array in `data/manifest.js`.
4. Refresh. It appears in the sidebar switcher.

---

## Design principles baked in

- **Evidence discipline.** Every evidence item is tagged `FACT` / `INFERENCE` /
  `THESIS` / `UNKNOWN` so facts, inferences, and opinions never blur together.
- **Living theses.** Each thesis carries supporting *and* contrary evidence, key
  metrics, an `IF…THEN…` invalidation condition, and a last-updated date.
- **Event ≠ Action.** The timeline runs every event through the same loop and
  most entries end in *"No position change."* The system does not reward churn.
- **Quality ≠ Valuation.** In *My Position*, business quality and stock price are
  kept visibly separate. A great company is not a buy at any price.
- **No false precision.** No `GOOGL score = 87.3`, no fragile target price — just
  what the current price *implies* about the future.

---

## Maintaining it with Claude

Ask Claude to update a company's data file directly, e.g.:

> "In the Investment Book, add a timeline entry to GOOGL for today's earnings,
> mark the capex→FCF thesis, and update Thesis Health if warranted."

Claude edits `data/companies/googl.js`. Keep the position numbers current
yourself (they're marked `PLACEHOLDER` until you replace them). See `AGENTS.md`.
