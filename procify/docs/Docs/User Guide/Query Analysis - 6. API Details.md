---
sidebar_position: 806
sidebar_label: "API Details"
title: "Query Analysis — API Details"
---

# Query Analysis — API Details

### setPartialSelect

| setPartialSelect(entityPropertyNames: string\[\]): KloQueryForRule |
|--------------------------------------------------------------------|

| **Parameter**       | **Description**                                                                                |
|---------------------|------------------------------------------------------------------------------------------------|
| entityPropertyNames | Array of return-entity property IDs to select, instead of every property on the return entity. |

### setLoadAll

| setLoadAll(val: boolean): KloQueryForRule |
|-------------------------------------------|

| **Parameter** | **Description**                                                                                                         |
|---------------|-------------------------------------------------------------------------------------------------------------------------|
| val           | Whether to load all fields of the return entity at execution time. Set false to skip properties/relations not required. |

### setLimit

| setLimit(limitValue: number): KloQueryForRule |
|-----------------------------------------------|

| **Parameter** | **Description**                                                                 |
|---------------|---------------------------------------------------------------------------------|
| limitValue    | Maximum number of records to fetch — use for pagination on list/search screens. |

### setExpandAll

| setExpandAll(relations: string): string |
|-----------------------------------------|

| **Parameter** | **Description**                                                                                         |
|---------------|---------------------------------------------------------------------------------------------------------|
| relations     | Comma-separated relation IDs to expand. Not supported together with an INNER JOIN on the same relation. |

### addEndpoint

| addEndpoint(endpoint, type, channel, object?, onlydirtyobject?, onlyRootEntity?): EndPointBean |
|------------------------------------------------------------------------------------------------|

| **Parameter**   | **Description**                                                                         |
|-----------------|-----------------------------------------------------------------------------------------|
| endpoint        | Endpoint ID(s) to notify — meaning depends on type (BP_USER, ENDPOINT, USER).           |
| type            | EndpointType — determines how endpoint is interpreted.                                  |
| channel         | ChannelType filter on qualifying endpoints (default DEVICE).                            |
| object          | The KloEntity whose full BO tree is sent. Defaults to the event object.                 |
| onlydirtyobject | Default true — only dirty child entities are included. Set false to force all children. |
| onlyRootEntity  | Default false — children already included. Set true to send the root entity alone.      |

*Note: A single addEndpoint call already messages the root entity and its (dirty) children — avoid a separate call per child entity.*

### getExecutedQuery

| getExecutedQuery(queryid, saveQueryObj, flavor?): Promise\<KloEntitySet\<KloEntity\>\> |
|----------------------------------------------------------------------------------------|

| **Parameter** | **Description**                                     |
|---------------|-----------------------------------------------------|
| queryid       | Query name or entity name.                          |
| saveQueryObj  | Saved query parameters to apply.                    |
| flavor        | Optional — flavor to resolve the query/entity from. |
