# Session 1 — Advanced BOL & Data Modelling

**Date:** Mon, 07 Sep 2026  
**Duration:** Full day  
**Topics:** `BOL, Data Modelling`

## Session Objectives

* Configure Network Modes so offline-relevant properties sync correctly to field devices.
* Apply Sort Order and an Entity Index to `d_complaints` for performance and predictable ordering.
* Extend the existing Entity Rules with a new auto-escalation rule.
* Extend the existing Query Rules with role-based field masking.
* Build a BOL Transaction that commits two entities atomically.

:::info What This Session Builds On
Developer Level 1 (Sessions 1–5) built `d_complaints` with its properties, one Entity Rule (`onCreateComplaint`) and one Query Rule (`beforeQ`) on `q_complaints`. This session does not start a new entity — it goes back into the same `d_complaints` and `q_complaints` files and adds the advanced BOL capabilities on top.
:::

### Scenario

A field IT Team member on a tablet needs complaint status and priority visible even with no signal, while internal notes stay server-side only. Meanwhile complaints are quietly sailing past SLA with no auto-flag, and a support rep spots that anyone on the IT Team can see a customer's full contact details in the list — details they never needed for their job.

### Part A — Network Modes — Offline-Ready Properties

*Not every property should sync to a field device the same way. Configure Network Mode per property on `d_complaints`.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Open properties** | Procify Data Studio → `d_complaints` → Properties tab. |
| **2** | **Restrict remark** | Set Network Mode = Online Only on `remark` — internal notes should not be cached on IT Team field devices. |
| **3** | **Always sync core fields** | Set Network Mode = Always on `complaint_id`, `s_status`, `priority` so they remain visible even when the device is offline. |
| **4** | **Save & update schema** | Save, then Update Schema, and confirm no errors. |

### Part B — Sort Order & Entity Index

*The complaints list currently has no defined default order and no index for the fields it is filtered on most.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Set Sort Order** | On `priority`: custom order CRITICAL > HIGH > MEDIUM > LOW. On `created_on`: DESCENDING as the secondary sort. |
| **2** | **Create Entity Index** | Entity Index tab → Add → ID: `idx_complaint_status_priority` — fields: `s_status`, `priority`. |
| **3** | **Update Schema** | Update Schema and verify the index is listed under the entity's Test → Data Browser diagnostics. |

### Part C — Entity Rules — Auto-Escalation on Update

*Reopen the same `d_complaints.ts` file from Level 1 Session 5 and add a second rule alongside `onCreateComplaint`.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Register the rule** | Rule tab → Add → Event Type: On Update \| Channel: Always on Server \| Clazz: this \| Invocation Method: `checkEscalation`. |
| **2** | **Implement checkEscalation** | If `s_status` is OPEN or INPROCESS and (today − `created_on`) > 3 days, set `is_escalated` = true. |
| **3** | **Test** | Backdate a test record's `created_on` in Data Browser to 4 days ago, save, and confirm `is_escalated` flips to true. |

### Part D — Query Rules — Role-Based Field Masking

*Extend `q_complaints.ts` — the same file where `beforeQ` was written in Level 1 Session 4 — with an `afterQ` rule.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Add afterQ** | Event Type: After Query. In the handler, if the requesting role is IT_TEAM, replace customer contact fields in each result row with ‘•••’. |
| **2** | **Test as IT Team** | Log in as `it_<prid>` — confirm customer contact fields are masked in the list. |
| **3** | **Test as Manager** | Log in as `mgr_<prid>` — confirm the same fields show full data. |

### Part E — BOL Transaction — Close Complaint with Feedback

*Combine a status update and a new voice record into one atomic operation.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Create the transaction** | Data Studio → new BOL Transaction `Tx_CloseWithFeedback`, covering `d_complaints` (update `s_status` = CLOSED) and `d_complaint_voices` (create feedback record). |
| **2** | **Wire the button** | Add a ‘Close with Feedback’ action on `s_detail_header` that commits both TransNodes through this transaction. |
| **3** | **Test atomicity** | Force the voice record to fail validation (e.g. leave it blank) and confirm the status change also rolls back — not just the voice record. |

:::tip Session 1 Checkpoint
* ✔ Network Modes verified in an offline emulation for at least 3 properties.
* ✔ `s_complaints` defaults to priority order; `idx_complaint_status_priority` exists and is used.
* ✔ `checkEscalation` rule fires correctly on a backdated test record.
* ✔ `afterQ` masks customer fields for IT_TEAM but not for Manager.
* ✔ `Tx_CloseWithFeedback` commits both entities together or rolls back together.
:::

**Enhancement delivered:** Extends the existing `d_complaints` / `q_complaints` files from Level 1 (not a new entity) with offline sync control, performance indexing, automatic SLA escalation, field-level data masking by role, and an atomic close-with-feedback commit.

---