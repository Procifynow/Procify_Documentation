# Session 2 — Advanced Page Builder & Client-Side Debugging


## Session Objectives

* Build a reusable Embedded Section and use it on two different pages.
* Add Advanced kloControls (rating, file uploader) to the detail screen.
* Configure TransNode onArrive and navigateId behaviour.
* Debug the Session 1 server-side rule using Server-Side Debugging.
* Enable Auto Update Data so the Manager's list refreshes without manual action.

:::info What This Session Builds On
`p_complaints` was built manually in Level 1 Session 2 and styled in Session 6; `p_complaint_dashboard` was built in Session 5. Both existing pages are extended here — no new page is created from scratch.
:::

### Scenario

A Manager opens a complaint and has to hunt across screens to see whether this customer has complained before. A rep marks a complaint resolved but there's no way to capture how satisfied the customer actually was, or attach a photo of a damaged product without emailing it separately.

### Part A — Embedded Section — Complaint Timeline

*Build one timeline section and reuse it in two places.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Create the section** | New section `s_complaint_timeline` (screenType: timeline) bound to a TransNode combining voices and status-change history. |
| **2** | **Embed in detail** | In `pa_comp_details`, add a new section, mark it Embedded, and point its source to `s_complaint_timeline`. |
| **3** | **Reuse on dashboard** | Add the same embedded section to `p_complaint_dashboard` as a ‘Recent Activity’ panel — confirming true cross-page reuse. |

### Part B — Advanced kloControls

*Add two controls that were not covered in Level 1's basic control set.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Add kloRating** | On `s_detail_header`, add a kloRating control bound to a new transient property `t_satisfaction_score`, visible only when `s_status` = CLOSED. |
| **2** | **Add kloFileUploader** | On the attachments section, add kloFileUploader bound to the `d_complaints_attachment` relation built in Level 1. |
| **3** | **Full Preview** | Confirm the rating control only appears on closed complaints and the uploader stores a file record correctly. |

### Part C — TransNode onArrive & navigateId

*Make the detail screen smarter about what loads automatically and where links resolve to.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Configure onArrive** | On the detail TransNode, set onArrive to auto-load the 5 most recent related voices — no extra click required. |
| **2** | **Configure navigateId** | On the `ticket_id` link control, set navigateId so it always resolves to `pa_complaint_details`, whether clicked from `p_complaints` or the dashboard's embedded timeline. |
| **3** | **Test both entry points** | Click a complaint from the main list, then from the dashboard timeline — confirm both land on the same detail area correctly populated. |

### Part D — Server-Side Debugging & Auto Update Data

*Debug the rule written in Session 1 and make the Manager's grid self-refreshing.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Attach debugger** | Set a breakpoint inside `checkEscalation` in VS Code and attach to the running Private Node. |
| **2** | **Step through** | Trigger a save on a test complaint and step through the rule execution line by line. |
| **3** | **Enable auto refresh** | On `s_complaints`, set Auto Update Data = true with a 30-second interval. |
| **4** | **Verify** | Create a complaint as Employee in one browser tab; confirm it appears in the Manager's grid within 30 seconds without a manual refresh. |

:::tip Session 2 Checkpoint
* ✔ `s_complaint_timeline` renders correctly on both `p_complaints` and `p_complaint_dashboard`.
* ✔ kloRating and kloFileUploader function as specified.
* ✔ onArrive auto-loads voices; navigateId resolves correctly from both entry points.
* ✔ Breakpoint debugging confirmed inside `checkEscalation`.
* ✔ Manager's grid auto-refreshes within 30 seconds of a new complaint being created.
:::

**Enhancement delivered:** Adds a reusable complaint-history timeline, a satisfaction rating and attachment capture on resolution, smarter auto-loading/navigation, and a self-refreshing Manager grid — all on the existing pages built in Level 1.

---