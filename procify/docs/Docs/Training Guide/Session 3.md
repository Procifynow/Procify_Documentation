# Session 3 — Security, Permissions & Data Access

**Date:** Wed, 09 Sep 2026  
**Duration:** Full day

## Session Objectives

* Enforce CRUD restrictions server-side using design-time Permissions.
* Restrict IT Team visibility to their own team's complaints using Row Wise Auth.
* Scope customer data by region using Data Access Rules.
* Audit a user's effective access using User Access Summary.
* Grant, use, and revoke a temporary elevated Role Permission, and confirm it in Permission Logs.

:::info What This Session Builds On
Level 1 Session 7 hid or disabled buttons per role using Vienable — a UI-level control only. This session enforces the same rules at the platform/security level so they hold even if a user calls the API directly.
:::

### Scenario

An IT Team member who left last month still has delete rights if they call the API directly, even though the button is hidden in the UI. A regional manager can see every customer's complaints nationwide instead of just their region, and after an override was granted during an incident, nobody can say who approved it or when it was revoked.

### Part A — Design-Time Permissions

*Configure real CRUD restrictions, not just hidden buttons.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Configure Employee** | Employee role: Create + Read only. |
| **2** | **Configure Manager** | Manager role: Create + Read + Update + Delete. |
| **3** | **Configure IT Team** | IT Team role: Read + Update only. |
| **4** | **Test server-side block** | Log in as `emp_<prid>` and confirm Delete is blocked even if attempted outside the hidden button (e.g. via a direct API call). |

### Part B — Row Wise Auth

*Restrict IT Team to only the complaints assigned to their own team.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Configure the rule** | Row Wise Auth on `d_complaints`: IT_TEAM role only receives rows where `responsible_team` = current user's team. |
| **2** | **Test** | Log in as `it_<prid>` — confirm only assigned complaints appear, even via direct navigation to a different complaint's URL. |

### Part C — Data Access Rules & User Access Summary

*Scope customer master data regionally and verify it.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Create the rule** | New Data Access Rule scoping `d_customers` by region. |
| **2** | **Assign to Manager** | Assign the rule to `mgr_<prid>` for their region. |
| **3** | **Verify with User Access Summary** | Open User Access Summary for `mgr_<prid>` and confirm the rule and effective permissions are listed correctly. |

### Part D — Role Permissions (Runtime) & Permission Logs

*Simulate an incident requiring temporary elevated access, then audit it.*

| # | Action | Detail |
| :---- | :---- | :---- |
| **1** | **Grant temporary access** | Create a runtime Role Permission override allowing IT_TEAM_LEAD to Delete during an incident. |
| **2** | **Use and revoke** | Apply, test the elevated Delete, then revoke the override. |
| **3** | **Audit in Permission Logs** | Confirm both the grant and the revoke appear in Permission Logs with timestamp and actor. |

:::tip Session 3 Checkpoint
* ✔ CRUD restrictions enforced server-side for all 3 roles.
* ✔ IT Team row-level filtering confirmed, including via direct URL access.
* ✔ Data Access Rule created, assigned, and confirmed via User Access Summary.
* ✔ Temporary Role Permission granted, used, revoked, and fully audited in Permission Logs.
:::

**Enhancement delivered:** Replaces Level 1's UI-only button hiding (Vienable) with rules enforced at the platform/security level, restricts IT Team visibility to assigned complaints, scopes customer data by region, and closes the audit gap on temporary access.

---