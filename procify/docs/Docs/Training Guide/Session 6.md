# Session 6 — Reporting — Charts & Pivot Modeller

**Date:** Mon, 14 Sep 2026  
**Duration:** Full day

## Session Objectives

* Replace static dashboard tiles with a live kloChart.
* Build an advanced TAT trend chart over a rolling 30-day window.
* Build a Pivot Modeller report for cross-team, cross-type analysis.

:::info What This Session Builds On
Level 1 Session 5 built `p_complaint_dashboard` with static status-count tiles fed by `status_count_query`. This session replaces and extends those same tiles with real charts.
:::

### Scenario

A Manager glances at the dashboard and sees numbers that were already stale this morning, with no way to see the SLA trend over the last month or drill into which team is falling behind — only static totals.

### Part A — kloChart — Status Breakdown

*Turn the existing tile counts into a live chart.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Add the chart** | Add a kloChart bar chart to `p_complaint_dashboard` bound to the existing `status_count_query` TransNode. |
| **2** | **Cross-check and replace** | Verify the chart's counts match the old static tiles, then remove the tiles. |

### Part B — Advanced Chart — TAT Trend

*Add a second, more advanced chart tracking service-level performance.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Build the query** | New query aggregating `actual_tat` vs `standard_tat` by week for the last 30 days. |
| **2** | **Configure the chart** | Advanced line chart with two series (actual vs standard) and custom axis formatting. |

### Part C — Pivot Modeller

*Give Managers a drillable cross-tab report.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Build the pivot** | Rows = `complaint_type`, Columns = `responsible_team`, Values = count of complaints, Filter = current month. |
| **2** | **Publish & verify** | Publish to the EAM Portal and confirm a Manager can drill into a specific cell to see the underlying records. |

:::tip Session 6 Checkpoint
* ✔ Static dashboard tiles fully replaced by a live kloChart with matching counts.
* ✔ TAT trend chart renders 30 days of actual-vs-standard data.
* ✔ Pivot report published to EAM Portal and drill-down verified.
:::

**Enhancement delivered:** Replaces static dashboard tiles with live, trend-aware reporting and adds a drillable cross-tab view for Managers.

---