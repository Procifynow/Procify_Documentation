# Session 7 — Monitoring & Troubleshooting

**Date:** Tue, 15 Sep 2026  
**Duration:** Full day

## Session Objectives

* Diagnose a simulated scheduler failure end-to-end using platform monitoring tools.
* Confirm notification delivery and resolve a stuck offline sync record.
* Confirm the SAP middleware payload was processed via Legacy Queue Monitoring.
* Trace a native control rendering issue on a built APK.
* Independently verify dashboard numbers using Query Console.

:::info What This Session Builds On
The app is feature-complete after Sessions 1–6 (automation, offline sync, integrations, reporting). This session is entirely about operating and troubleshooting what was built, not adding new features.
:::

### Scenario

The nightly SLA sweep silently failed last night and nobody noticed until complaints started piling up unflagged. A customer insists they never got a resolution notification, and there's no way to check; finance says a closed complaint never showed up in SAP and nobody can tell whether it's stuck or lost.

### Part A — Scheduler & Log Monitoring

*Break the Session 5 scheduler on purpose, then find and fix it.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Simulate a failure** | Introduce a bad condition into the nightly SLA-sweep task and trigger it. |
| **2** | **Observe the failure** | Confirm the failure appears in Scheduler Monitoring and Task History. |
| **3** | **Trace the root cause** | Find the underlying error in Google Logs. |
| **4** | **Fix and re-run** | Correct the task and confirm success via Running Tasks. |

### Part B — Notification & Queue Monitoring

*Confirm the Session 4 and 5 integrations are actually working end-to-end.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Verify notifications** | Check Notification History for the assignment/resolution messages from Session 5 — confirm delivered status. |
| **2** | **Diagnose a stuck sync** | Simulate a stuck offline record on Server Queue / Mobile Sync Queue for an IT Team device from Session 4, and resolve it. |
| **3** | **Check the SAP channel** | Review Legacy Queue Monitoring to confirm the Session 4 closed-complaint payload to SAP was processed. |

### Part C — APK/IPA & Query Console

*Trace a native rendering issue and cross-verify reporting data.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Build and test the APK** | Build a debug APK including the kloRating control from Session 2. |
| **2** | **Debug if needed** | If the control fails to render natively, use APK/IPA debugging tools to trace the issue. |
| **3** | **Cross-verify dashboard data** | Use Query Console to independently confirm the raw row counts behind the Session 6 dashboard charts. |

:::tip Session 7 Checkpoint
* ✔ Simulated scheduler failure diagnosed via Scheduler Monitoring + Google Logs and resolved.
* ✔ Notification delivery confirmed; one stuck sync record identified and resolved.
* ✔ SAP payload confirmed processed in Legacy Queue Monitoring.
* ✔ APK rendering issue for kloRating traced (fixed or root-caused).
* ✔ Dashboard chart numbers cross-verified against raw data via Query Console.
:::

**Enhancement delivered:** Shifts the training from building features to operating and troubleshooting everything Sessions 1–6 put in place.

---