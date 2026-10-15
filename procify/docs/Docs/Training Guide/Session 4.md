# Session 4 — Offline, Middleware & Bulk Data



## Session Objectives

* Enable offline access to assigned complaints for field IT Team users via Local Archive.
* Reduce first-login sync payload using Initial Downloads.
* Push closed complaints to an external SAP system via Middleware.
* Bulk-import customer master data using KloSectionXlsx.

:::info What This Session Builds On
The application has only worked online through Sessions 1–3. This session makes it usable by IT Team members working onsite without connectivity, and adds a bulk-data path for customer onboarding.
:::

### Scenario

An IT Team technician visiting a customer site with no signal can't pull up the complaint they're there to resolve. Every login re-downloads the full complaint history instead of just what's assigned, closed complaints aren't reaching the SAP billing system automatically, and onboarding 20 new customers means entering each one by hand.

### Part A — Local Archive

*Keep a working slice of data on the device for offline use.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Configure archive scope** | Local Archive on `d_complaints` and `d_complaint_voices` for the IT_TEAM role — retain the last 30 days of assigned complaints on-device. |
| **2** | **Test offline** | On a device/emulator, disconnect network and confirm assigned complaints and their voice history are still viewable. |

### Part B — Initial Downloads

*Reduce what gets pulled on first login.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Configure the download set** | Only OPEN/INPROCESS complaints assigned to the logging-in IT Team user are included in the first sync — not full history. |
| **2** | **Verify** | Time a fresh login before and after the change and confirm a smaller payload. |

### Part C — Middleware — Device & SAP

*Integrate with an external billing system.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Configure the channel** | New Middleware channel that pushes CLOSED complaints to an external SAP endpoint for billing reconciliation. |
| **2** | **Test** | Close a test complaint and confirm the outbound payload appears in the middleware queue. |

### Part D — KloSectionXlsx — Bulk Customer Import

*Add Excel-based bulk operations to the customer master entity.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Add to d_customers** | Attach KloSectionXlsx to the customer section, enabling bulk Excel upload/download. |
| **2** | **Bulk import** | Prepare a sample sheet of 20 customers and import via the section. |
| **3** | **Verify** | Confirm all 20 records land correctly in Data Browser. |

:::tip Session 4 Checkpoint
* ✔ IT Team can view assigned complaints and voice history fully offline.
* ✔ Initial download payload measurably reduced and verified.
* ✔ One closed complaint confirmed pushed to the SAP middleware queue.
* ✔ 20 customers successfully bulk-imported via KloSectionXlsx.
:::

**Enhancement delivered:** Makes the app usable in the field without connectivity, shrinks the first-login sync payload, automates the SAP billing hand-off on closure, and adds bulk customer onboarding.

---