# Session 5 — Workflows, Scheduling & Notifications



## Session Objectives

* Route escalated complaints through a Manager approval Workflow.
* Add a nightly Scheduled Task as a server-side safety net for SLA breaches.
* Notify the right people by Email, SMS, and In-App at the right moments.
* Deep-link notification emails directly into the relevant complaint.
* Configure an app-wide Banner for planned maintenance.

:::info What This Session Builds On
Session 1 added a server-side `is_escalated` flag. This session adds the human workflow and communication layer that reacts to it.
:::

### Scenario

A complaint sits open for a week past SLA with no one following up, because there's no approval step and no nightly check catching it. A customer is never told their complaint was resolved unless someone remembers to call, and a support email can't deep-link straight to the complaint it's about.

### Part A — Escalation Approval Workflow

*Give escalation a human decision point.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Build the workflow** | When `is_escalated` becomes true, route an approval task to the Manager to confirm reassignment of `responsible_team`. |
| **2** | **Test** | Trigger escalation on a test complaint and confirm the Manager receives the task in Pending Approvals. |

### Part B — Scheduler — Nightly SLA Sweep

*Add a server-side safety net independent of individual saves.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Create the task** | Scheduled Task that runs nightly, re-checking all OPEN/INPROCESS complaints against the 3-day SLA rule from Session 1. |
| **2** | **Run manually and verify** | Trigger once via Running Tasks and confirm overdue complaints are correctly flagged. |

### Part C — Notifications

*Close the communication loop for assignment and resolution.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Assignment email** | Email notification to `responsible_team` the moment a complaint is assigned. |
| **2** | **Resolution in-app alert** | In-App notification to the originating Employee when status changes to CLOSED. |
| **3** | **Verify delivery** | Trigger both scenarios and confirm delivery in Notification History. |

### Part D — deeplink & Banner

*Make notifications actionable and announce planned downtime.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Configure deeplink** | The assignment email's ‘View Complaint’ link opens directly to the correct complaint detail screen. |
| **2** | **Configure Banner** | App-wide banner announcing a planned maintenance window, visible to all roles for 24 hours. |

:::tip Session 5 Checkpoint
* ✔ Escalation approval task correctly routed to and actionable by the Manager.
* ✔ Nightly scheduler flags overdue complaints on a manual run.
* ✔ Assignment email and resolution in-app alert both confirmed delivered in Notification History.
* ✔ Deeplink opens the exact correct complaint; banner visible to all 3 roles.
:::

**Enhancement delivered:** Adds a human approval step on escalation, a nightly check independent of individual saves, closes the communication loop on assignment/resolution, and makes notifications actionable.

---