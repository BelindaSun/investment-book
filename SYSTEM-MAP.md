# 投资系统地图 · System Map

**v0.1.1 · 2026-09-28**

> 这份文件在三个 repo 根目录各有一份，**内容完全相同**：`stock-why-wiki`、`investment-book`、`investment-research`。
> 改其中一份，就要同步改另外两份，并更新上面的版本和日期。
> 它只管**分工和边界**。每个 repo 自己的细则仍以各自的入口文件为准（见第 1 节「开工先读」）。

---

## 0. 一句话

```
Stock Why（市场为什么动） → Investment Book（这改变我的 thesis 吗？） → 仓位决策
                 ↘ Deep Research（把公司吃透） ⇄ Investment Lab（训练判断、审 thesis）
```

Stock Why 和 Investment Book 是**主干**（2026-08 起在跑）。Deep Research 和 Investment Lab 是 2026-09-23 为了「吃透前两者」新加的**训练层**，还在跑第一家公司（NVDA）。

---

## 1. 四个对话 × 三个 repo

| 对话 | repo | 回答的问题 | 主要产出 | 开工先读 |
|---|---|---|---|---|
| **Stock Why** | `stock-why-wiki` | 市场为什么动？谁影响谁？ | `stocks/<TICKER>.md`、`industries/<slug>.md`、`index.md`、关系图 `graph*.html` | `skill/SKILL.md`、`handbooks/` |
| **Investment Book** | `investment-book` | 我为什么持有 / 关注它？新事实改变我的 thesis 吗？ | `data/companies/<ticker>.js`、`data/macro.js`（首页宏观横幅） | `AGENTS.md`（= `CLAUDE.md`） |
| **Deep Research** | `investment-research` 的 `02-companies/` | 这家公司怎么赚钱？护城河？市场已经 price in 了什么？ | 公司档案（Company Knowledge Base）、产业笔记 | `investment-research/README.md` |
| **Investment Lab** | `investment-research` 的 `01-lab/`、`04-system/` | 我怎么学会判断？怎么校准自己？ | 方法卡、Journal、盲测、Belinda Investment System | `investment-research/README.md` |

- Stock Why 内部还分窗口：**小德**（Claude）负责分析 + 质检，**小缪**负责建档（手册①）和画关系图（手册②）。
- **以 GitHub 为准，不依赖 Mac。** 三个 repo 的正本都在 GitHub，云端对话每次从 GitHub 拉取，Mac 不开也照常工作。
  - 云端对话推到本次指定的分支，**合进 `main` 后才上线**（Stock Why 的 GitHub Pages 关系图、展示网站都跟 `main`）。
  - Mac 本地的 Stock Why（`/Users/sunbelinda1108/Project/Why/wiki/`）有自动推送钩子。**Mac 隔了一段时间再打开，先 `git pull` 再动手**，否则旧版本一推就会和云端的改动冲突。
- Deep Research 和 Lab 共用 `investment-research` 这一个 repo，按文件夹划分归属。

---

## 2. 一件事来了，放哪儿

| 情况 | 去哪 | 怎么落 |
|---|---|---|
| 某只票 / 某个板块动了，想知道为什么 | **Stock Why** | 标的档案追加一条带日期的时间线（不覆盖旧的），同步行业档案和 `index.md`；需要时再画进关系图 |
| 想看一条产业链有哪些环节、谁影响谁 | **Stock Why** | 行业档案 + 导览（`overview.md` 这类）+ 关系图 |
| 宏观事件（FOMC、利率、油价、汇率） | **Stock Why** 讲因果；**Book** 讲对组合的含义 | Stock Why 写 `industries/macro-rates.md`；Book 在 `data/macro.js` 顶部加一条，**只作背景，不改任何公司 thesis** |
| 事件可能影响某家我关注 / 持有的公司的逻辑 | **Book** | 该公司时间线加一条：事件 → 打中哪条逻辑 → 动作（默认「不动仓位」）；原因链接回 Stock Why |
| 一家公司开始被我关注 | **Book** | 先以 `watch` 层进入，只写概览；不为了好看把它填成 core |
| 想把一家公司真正吃透 | **Deep Research** | 公司档案，最后必须落到「市场已经相信了什么」+ 我的 thesis |
| 卡在方法上（估值怎么做、这类公司怎么看） | **Lab** | 写问题卡到 `investment-research/03-inbox/`，Lab 上课、出方法卡 |

**不要做的：**
- 不在 Book 里重写 Stock Why 的涨跌原因，链接过去即可。
- 不在 Stock Why 里写「我该不该持有」，那是 Book 的事。
- 基金进出、分析师评级这类是情绪，进时间线，不当基本面证据。

---

## 3. 四处共同的规矩

各 repo 的细则写法不同，但这几条是一致的：

1. **事实和判断分开。** 打标签（Stock Why：已确认 / 可能因素；Book：FACT / INFERENCE / THESIS / UNKNOWN；Research：FACT / INFERENCE / OPEN）。Claude 的推导默认是推断，不能悄悄变成事实。
2. **查不到就说查不到，不编。** 超出知识范围的时效数字标 `(verify)` 或 `待核`。
3. **一手来源优先**：公司披露 / 监管文件 → 电话会 → 高质量媒体 → 二手评论。
4. **日期不假装精确。** 只知道月份就写到月份，不写 `xx`。
5. **不预测价格。** 不给目标价，不给综合评分，不自动给出买卖建议。

---

## 4. 当前约定与未定事项

**当前约定（2026-09-28）**
- 在 Deep Research 和 Lab 跑完第一家公司（NVDA）之前，**新板块先只落 Stock Why + Book（watch 层）**，暂不进 Deep Research / Lab。

**已知重叠，待 NVDA 跑完一圈后再统一**
1. **同一家公司在三处都有档案**（例：NVDA 在 Stock Why、Book、Deep Research 都有），还没定哪份是权威版、各自写到多深。
2. **thesis 谁先写**：Book 里的 thesis 多为 Claude 起草的「AI 辅助初稿（待认领）」；Research 的规则是 Belinda 先写第一稿。
3. **信念变化记两处**：Book 的 `thesisEvolution` 和 Lab Journal 的 Thesis Change Log 功能重叠。

---

## 修订记录
- 2026-09-28 v0.1 初版：四个对话的分工、路由表、共同规矩、当前约定和待定事项。
- 2026-09-28 v0.1.1 写明「以 GitHub 为准、不依赖 Mac」：云端推分支 → 合 main 上线；Mac 久未打开先 pull。
