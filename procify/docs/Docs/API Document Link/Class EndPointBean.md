---
title: EndPointBean
sidebar_label: EndPointBean
---

# Class EndPointBean

**Module:** [EndpointBean](https://apihelp.procifynow.com/bol/modules/EndpointBean.html)

## Constructors

### constructor

```ts
new EndPointBean(rootEntity, endpointID, epType, s_channel, onlydirtyobject, onlyRootEntity?): EndPointBean
```

#### Parameters

| Name | Type | Attributes | Description |
| --- | --- | --- | --- |
| rootEntity | [KloEntity](https://apihelp.procifynow.com/bol/classes/KloEntity.KloEntity.html) |  | @@@ |
| endpointID | any |  | @@@ |
| epType | [EndpointType](https://apihelp.procifynow.com/bol/enums/KloEnums.EndpointType.html) |  | @@@ |
| s_channel | [ChannelType](https://apihelp.procifynow.com/bol/enums/KloEnums.ChannelType.html) |  | @@@ |
| onlydirtyobject | boolean |  | @@@ |
| onlyRootEntity | boolean | Optional | @@@ |

#### Returns

`EndPointBean`

## Properties

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| channel | ChannelType |  | filter on qualified endpoint to narrow down the receivers. |
| dependentEntity | @@@ | addition entities alnog with BO |  |
| endPointID | string |  | this can be single ID as per specified type or array of IDS ass per specified types. |
| endPointType | EndpointType |  | endPointType and endPointID togather determines set of endpoint to send the message |
| entityObject | KloEntity |  | BO to send as message |
| onlyRootEntity | boolean |  | if true only the root object will be in message else its child also will be in Message |
| onlydirtyobject | boolean |  | if true builds only dirty object in message else loads the complete entity object |

## Methods

### addDependantEntities

```ts
addDependantEntities(entity): KloEntity[]
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| entity | [KloEntity](https://apihelp.procifynow.com/bol/classes/KloEntity.KloEntity.html) | The KloEntity instance to add as a dependent entity |

#### Returns

`KloEntity[]` - Array of all dependent entities including the newly added one

#### Description

Adds a dependent entity to be included in the data message sent to endpoints. Dependent entities are additional entities that should be sent along with the main entity object. This is useful when you need to send related data that may not be directly linked but is contextually important.

#### Example

```ts
let endpointBean = eventContext.addEndpoint("USER001", EndpointType.USER, ChannelType.DEVICE, orderEntity);
let customerEntity = await txn.loadEntityP("d_customer", customerKey);
endpointBean.addDependantEntities(customerEntity); // Customer info sent along with order
```

#### See

[getDependantEntities](#getdependantentities) to retrieve the list of dependent entities

### getDependantEntities

```ts
getDependantEntities(): KloEntity[]
```

#### Returns

`KloEntity[]` - Array of KloEntity instances that are configured as dependent entities

#### Description

Gets the list of dependent entities that have been added to this endpoint bean. Dependent entities are additional entities that will be included in the data message along with the primary entity object when the message is sent to endpoints.

#### Example

```ts
let endpointBean = eventContext.addEndpoint("USER001", EndpointType.USER, ChannelType.DEVICE, orderEntity);
endpointBean.addDependantEntities(customerEntity);
endpointBean.addDependantEntities(productEntity);

let dependents = endpointBean.getDependantEntities();
console.log("Number of dependent entities:", dependents.length);
```

#### See

[addDependantEntities](#adddependantentities) to add dependent entities
