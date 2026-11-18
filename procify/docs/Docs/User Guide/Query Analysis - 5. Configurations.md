---
sidebar_position: 805
sidebar_label: "Configurations"
title: "Query Analysis — Configurations"
---

# Query Analysis — Configurations

The following flags and settings control how much query/transaction detail is captured for debugging, without needing extra code.

| **Parameter**                        | **Description**                                                                                                                                                                                     |
|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| txn.enableStackTrace                 | Boolean on the transaction (default false). Set true to record a stack trace of all activities of the transaction, including queries executed. Switch off again once captured.                      |
| enableQueryStats                     | Framework-internal flag (default true) driving query statistics collection. Do not disable unless instructed by platform engineering.                                                               |
| "enableReqDump": true (klarion.json) | Captures full incoming request payloads into the req_dump folder. Disabled by default. Turn off again after the investigation — req_dump folders have previously grown to multiple GB when left on. |
| Select Distinct (Query → Detail)     | Set loadAll = true only when true column-level distinctness is required; otherwise leave Select Distinct off.                                                                                       |
