# Session 8 — App Management, Branding & Deployment

**Date:** Wed, 16 Sep 2026  
**Duration:** Full day

## Session Objectives

* Create a client-specific child flavor using App Inheritance.
* Customize the child flavor without touching the base app via App Modification.
* Apply Customer Branding to the login page, menus, and headers.
* Version-control all Level 2 code in a Git repo.
* Migrate the fully enhanced application to QA and confirm every enhancement survived.

:::info What This Session Builds On
The base Customer Complaints app is now feature-rich after Sessions 1–7. This final session prepares it for a real client rollout — a branded, inherited child flavor, migrated to QA.
:::

### Scenario

The business is onboarding a new client, Acme, who needs their own complaint categories and branded login screen without touching the shared base app every other client depends on. Before go-live, someone has to confirm a departed developer's session is revoked and that the whole app still works correctly once it's moved to QA.

### Part A — App Inheritance & Modification

*Create a client-specific variant without duplicating the whole app.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Create the child flavor** | New flavor `customer_complaints_acme_<prid>` inheriting from the base application. |
| **2** | **Override safely** | Use App Modification to override `complaint_type` values for Acme's business categories, without changing the base flavor. |

### Part B — Customer Branding

*Make the child flavor visually distinct.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Update login/registration** | Modify the index file for the Acme child flavor with Acme's logo and welcome text. |
| **2** | **Apply CSS** | Style menus and headers to match Acme's brand colors, scoped to `.procify__customer_complaints_acme_<prid>`. |

### Part C — Git Repo & Active Sessions

*Clean up before go-live.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Push code to Git** | Push all entity rules, controller code, and CSS written across Sessions 1–8 into a Git repo. |
| **2** | **Review sessions** | Check Active Sessions for the app and revoke any stale developer sessions before go-live. |

### Part D — App Migration to QA

*Ship the enhanced application and prove every feature survived the move.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Release the flavor** | Release the Acme child flavor. |
| **2** | **Migrate** | Run App Migration (Transport) from DEV to QA. |
| **3** | **Full smoke test** | On QA, verify: escalation rule (S1), embedded timeline (S2), permissions/row-level auth (S3), offline sync (S4), workflow + notifications (S5), dashboard charts (S6), and Acme branding (S8) all work correctly. |

:::tip Session 8 Checkpoint
* ✔ Acme child flavor created, visually distinct, and functionally overridden without touching the base app.
* ✔ All Level 2 code version-controlled in Git.
* ✔ Stale developer sessions reviewed and revoked.
* ✔ Application migrated to QA with every Session 1–8 enhancement verified working end-to-end.
:::

**Enhancement delivered:** Delivers a branded, client-specific flavor without touching the shared base app, and proves every Session 1–8 enhancement survives the move to QA.