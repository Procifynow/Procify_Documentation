---
title: Data Studio - User Guide 7.0
sidebar_label: Data Studio - User Guide 7.0
---

# **Data Studio \- User Guide** 

**Date of Issue: October 2023**

**Version: 7\_2\_27**

**Target Audience: Application Developers and trainees.**

# **Copyright** {#copyright}

Copyright © 2023 Procify Innovations Pvt. Ltd. All rights reserved.

No part of this publication may be reproduced or transmitted in any form or purpose without the permission of **Procify Innovations Pvt. Ltd.** The information contained in this document might change based on new developments without prior notice.

# **Disclaimer** {#disclaimer}

THESE MATERIALS ARE PROVIDED BY PROCIFY INNOVATIONS PVT LTD, ON AN "AS IS" BASIS, AND EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES, EXPRESS OR APPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, CONCERNING THESE MATERIALS AND THE SERVICE, INFORMATION, TEXT, GRAPHICS, LINKS, OR ANY OTHER MATERIALS AND PRODUCTS CONTAINED HEREIN. IN NO EVENT SHALL PROCIFY INNOVATIONS PVT LTD  BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES OF ANY KIND WHATSOEVER, INCLUDING WITHOUT LIMITATION LOST REVENUES OR LOST PROFITS, WHICH MAY RESULT FROM THE USE OF THESE MATERIALS OR INCLUDED SOFTWARE COMPONENTS.

# **Pre-Requisites** {#pre-requisites}

* Log on to the test system. (Get all the credentials from the Admin Team)  
  User: Use your User ID (PRID)	  
  Password: Use your password.  
* The Data Studio app will be assigned to you.

# **Data Studio** {#data-studio}

Data that are stored in the database are in table format. Data Studio is used to create tables for our database. In BOL, all entities and queries act as attributes of the table.

1.0.1 The Editor is divided into two major sections:

* [Tree](#2.1.-tree)  
* [Detail](#2.2-detail)

![Screenshot 1](./img/image1.png)

## 1.1. App Selection {#1.1.-app-selection}

The app or Flavor selection drop-down contains a list of apps that have been assigned to the user. By using the drop down users can select the app on which users are going to work on.

![Screenshot 2](./img/image2.png)

## 1.2. List Of Entities {#1.2.-list-of-entities}

Once the app is selected, it will list down all the entities present inside the selected app. To select any specific entity, click on that entity.

![Screenshot 3](./img/image3.png)

## 1.3. Search for Entities {#1.3.-search-for-entities}

You can search for any entity by filling in the entity name in the search field provided in the entity list section.

## 1.4. Modes in Data Studio {#1.4.-modes-in-data-studio}

Data Studio supports two types of modes, **Normal mode** and **Expert mode**.

**Normal Mode \-** It supports all the basic functionalities like Entity, Query, and Value Help creation along with app settings. 

**Expert Mode \-** It supports all the functionalities from the normal mode along with add-on features like Status Config, config properties for object type, and entity indexes.

**Note:** One can switch between the two modes at any point in time.

## 1.5. Create {#1.5.-create}

Create button lists down various options for table creation.

![Screenshot 4](./img/image4.png)

Create Menu supports the below actions:

* Entity  
* Entity From Template  
* Query  
* Value Help

## 1.6. Save and Edit {#1.6.-save-and-edit}

By default, the editor will be in non-editable mode. Clicking on the edit button will make the data editable.

![Screenshot 5](./img/image5.png)

Once the edit mode is enabled, it will update the list of available options in the toolbar. The mode gets changed to editable and the save option will be enabled. 

The below icon shows the save icon which will be used for committing the changes to the DB.

## 1.7. Toolbar Options {#1.7.-toolbar-options}

Once the entity is in editable mode, it lists down the list of available options as shown in the below image.

![Screenshot 6](./img/image6.png)

### 1.7.1. Update Schema {#1.7.1.-update-schema}

Once all the metadata regarding the entity is provided and saved, the **update schema** is used to convert the entity into an actual database table.

![Screenshot 7](./img/image7.png)

### 1.7.2. Delete {#1.7.2.-delete}

This option will be used for deleting any item selected in the left tree. Using this option, any item like entity/query or value help can be deleted.

![Screenshot 8](./img/image8.png)

### 1.7.3. Validate {#1.7.3.-validate}

The validate option verifies whether the metadata maintained for the entity is correct or not.

![Screenshot 9](./img/image9.png)

### 1.7.4. Read Only {#1.7.4.-read-only}

The read-only and cancel options are only visible in editable mode. On the click of the read-only icon, the editor becomes non-editable.

![Screenshot 10](./img/image10.png)

### 1.7.5. MetaData File {#1.7.5.-metadata-file}

This comprises the metadata file that you want to upload from your local system to the Data Studio.

![Screenshot 11](./img/image11.png)

### 1.7.6 Test {#1.7.6-test}

Test allows checking the CRUD operation on the created/selected which stands for create, read, update, and delete. These are four basic functions executed in relational database applications.

![Screenshot 12](./img/image12.png)

### 1.7.7. Import from SAP {#1.7.7.-import-from-sap}

This option imports the selected entity & its properties from SAP tables. 

Developers can import an entity \-\> verify their changes \-\> and then click “Save” to commit their changes.

![Screenshot 13](./img/image13.png)

**Pre-requisite:** 

1. In config.json, under “**mm\_klobroker\_ext**” array, an object needs to be maintained having details as follow, mentioning the connection between your flavor in platform and the respective SAP system: 

![Screenshot 14](./img/image14.png)

2. The flavor should have some entities already maintained in SAP-side which will be used to import.

**Steps:**

1. Navigate to “Design Studio” \-\> “Data Studio” Screen and select your flavor. **The flavor needs to be configured on the SAP side.** **The flavor\_name and major\_version should be the same.** The minor version and patch version can be different from each other.

2. Create a new entity and do not add any properties yet. Otherwise, use an existing entity having some existing properties. And then click the “**Import from SAP**” button.  
   ![Screenshot 15](./img/image15.png)

3. If the entity is maintained in the SAP-side, then it will show an error dialog. Else, the import process will start.  
   ![Screenshot 16](./img/image16.png)

4. **Validation:** During the process, if any error comes it will throw the error dialog. And in case any validation fails e.g., propertyid values are having reserved keywords then it will show that respective dialog also \- same validation as available we developer normally create properties from the screen. List of reserved keywords: [PROC-27544: List of Reserved Keywords in Data Studio Application](https://docs.google.com/document/d/1p9gA7HkNhTAyFsPCT6JSJRgoNMEluVohG3cW0LI85r8/edit?tab=t.0).  
   ![Screenshot 17](./img/image17.png)  
   ![Screenshot 18](./img/image18.png)  
5. Once the import process starts, at the end step, it will ask the developer to skip any specific properties by selecting the checkbox and clicking the “Skip” button or click “**Sync All**” to accept all data from the payload.  
   **Important:** [Import from SAP on Existing Entity](#1.7.7.1.-import-from-sap-on-existing-entity-data)  
   ![Screenshot 19](./img/image19.png)  
   ![Screenshot 20](./img/image20.png)

6. After import is done, developers can save more properties and save it.   
   **Note:** **SAP Import process only imports the entity and properties. After import, the developer needs to click the Save button to commit all changes.**  
   ![Screenshot 21](./img/image21.png)

#### 1.7.7.1. Import from SAP on Existing Entity Data {#1.7.7.1.-import-from-sap-on-existing-entity-data}

While doing import again on an existing entity having existing properties, it will ask the developer regarding the existing properties whether to keep those properties or delete them.  
For example, here **my\_key\_1** is a property not present in the sap table and is an existing property in the Procify-side table.   
So, here, if the developer will mark the checkbox of it and click “**Skip**”, then it will not delete that property. If the developer clicks “**Sync All**”, then it will delete the existing properties and import only SAP-side, non-skipped properties.

![Screenshot 22](./img/image22.png)

###  1.7.8. Import from SAP Child {#1.7.8.-import-from-sap-child}

This option **imports the children entity(s) from an existing parent entity** from SAP tables. **Does not include relations.**

Developers can import an entity \-\> verify their changes \-\> and then click “Save” to commit their changes.

**Pre-requisite** is the same as mentioned in the [Import from SAP](#1.7.7.-import-from-sap) section.

**Steps:**

1. **Validation:** If a developer has created a parent entity and triggered “**Import from SAP Child**” before saving the parent entity, then it will throw a validation error. So, **it is needed to create & save its parent entity first, before importing its respective children entities**.  
   ![Screenshot 23](./img/image23.png)

2. If the parent entity is maintained in the SAP-side, then it will show an error dialog. Else, the import process will start.  
   ![Screenshot 16](./img/image16.png)

3. From Data Studio, select the flavor \-\> click the parent entity \-\> click edit button \-\> click “**Import from SAP Child**“ button.

4. **Validation:** During the process, if any error comes it will throw the error dialog. And in case any validation fails e.g., propertyid values are having reserved keywords then it will show that respective dialog also \- same validation as available we developer normally create properties from the screen. **List of reserved keywords:** [PROC-27544: List of Reserved Keywords in Data Studio Application](https://docs.google.com/document/d/1p9gA7HkNhTAyFsPCT6JSJRgoNMEluVohG3cW0LI85r8/edit?tab=t.0).  
   ![Screenshot 24](./img/image24.png)  
   ![Screenshot 25](./img/image25.png)

5. Once the import process starts, at the end step, it will ask the developer to skip any specific properties by selecting the checkbox and clicking the “Skip” button or click “**Sync All**” to accept all data from the payload.   
   **Important:** [Import from SAP Child on Existing Entity](#1.7.7.1.-import-from-sap-on-existing-entity-data)  
   ![Screenshot 26](./img/image26.png)  
   ![Screenshot 27](./img/image27.png)

6. **Important:** Before Save, developers need to maintain the Primary Keys in all of the imported children entities. Otherwise, it will throw a validation error before clicking Save.  
   ![Screenshot 28](./img/image28.png)

7. After maintaining the Primary Keys in all imported children entities, it will allow the developers to save the changes.  
   ![Screenshot 29](./img/image29.png)

8. **Important:** As relations are not maintained via the import process, after save, developers need to maintain the relations manually from the Data Studio tool.  
   1. Parent to Child Primary Relation:  
      ![Screenshot 30](./img/image30.png)  
   2. Child to Grandchild Primary Relation:

![Screenshot 31](./img/image31.png)

9. Once the relations are maintained, the developers can start using the entity’s data browser or from screen for CRUD operations.  
   ![Screenshot 32](./img/image32.png)  
   ![Screenshot 33](./img/image33.png)

#### 1.7.8.1. Import from SAP Child on Existing Entity Data {#1.7.8.1.-import-from-sap-child-on-existing-entity-data}

Mentioned in [**1.7.7.1**](#1.7.7.1.-import-from-sap-on-existing-entity-data) . 

# **2.0. Editor Sections** {#2.0.-editor-sections}

Data Studio is divided into two major sections, which are listed below:

* [Tree](#2.1.-tree)  
* [Detail](#2.2-detail)

## 2.1. Tree {#2.1.-tree}

The tree present in the left section lists all the entities present in the selected app.

### 2.1.1. Expand All {#2.1.1.-expand-all}

Expand All option is to expand all the collapsed sections (entity, query, value help).

### 2.1.2 Collapse All {#2.1.2-collapse-all}

Collapse all option is to collapse all the expanded sections (entity, query, value help)

## 2.2 Detail {#2.2-detail}

This section contains all the details related to the selected entity/query or value help like properties, relations, object type, status, queries, and many more.

### 2.2.1 Entity Detail {#2.2.1-entity-detail}

On selection of any entity in the tree, it will display all available options in the detail section. The description of each tab is given below:	

#### 2.2.1.1. Detail {#2.2.1.1.-detail}

This section contains all the basic information about the entity. It contains fields like Root Entity name, App Mode, Entity Icon, Entity Name, Metadata type, and also a few buttons to enable or disable CRUD over the entity.

![Screenshot 34](./img/image34.png)

The description of each field is provided below:

##### BO/Root Entity : {#bo/root-entity-:}

BO stands for Business Object. Root Entity means that if any entity is a root entity then it will have the same name as the BO and it will be the parent entity.

##### App Mode : {#app-mode-:}

App mode refers to the network mode of the entity/query. It supports network modes such as those specified below:

* ######  *Offline :* {#offline-:}

  Offline network mode refers to the capability to run the program with weak or infrequent network availability. The application stores the relevant data locally and updates the local cache and server data as and when it finds connectivity. Browsers and installed mobile apps (client) both are capable of offline operations. In offline mode, the values are maintained/fetched from the web SQL.

* ###### *Online :* {#online-:}

  Online network mode refers to the capability of running the program in a browser or installed mobile app (client) to communicate with the server for day-to-day needs. Network connectivity from client to server is a must. All the changes on the browser or device app will be collected and sent to the server for validating and saving. In the online mode, the values are maintained/fetched from the transactional database.

* ###### *SAP Online :* {#sap-online-:}

  This refers to the capability of all the transactions that go to SAP via the gateway server. In SAP online mode the values are maintained/fetched from the SAP server.

* ###### *SAP Preferred Online :* {#sap-preferred-online-:}

  Any transaction that takes place between your application goes through SAP to your web SQL.

##### Entity Icon : {#entity-icon-:}

This will associate the specified icon with the entity. 

##### Entity Name : {#entity-name-:}

Entity name refers to the actual name/id of the entity.

#### Metadata type: {#metadata-type:}

1. **Runtime entity:** This is the default type of entity, where the table persists in the DB (unlike Transient Entities). The table is created in the Trans DB and CRUD operations can be performed on it.  
2. **~~Config entity:~~** ~~This is the type of entity, where the table persists but only in meta DB. This is usually used to store data for status and role fields.~~

3. ##### Transient Entities {#transient-entities}

   A transient entity is a non-persistent entity—meaning it does not store data in the database. It is primarily used for runtime calculations, data aggregation, or displaying derived data in the UI. These entities are ideal when you need to display or process combined data from multiple sources without storing it permanently.
   **Use Case Example:** Suppose you have two entities and want to display certain fields from each, but do not wish to persist the combined data. In this case:

* Create a transient entity that includes only the required properties.  
* Write custom logic to query both source entities.  
* Populate the transient entity with the result.  
* Display this transient data on the screen with full support for UI features like Sort, Filter, and Fuzzy Search.

Users can also fetch data from external sources, populate the transient entity, and leverage built-in platform features such as:Sort, Filter, Fuzzy search, Excel download,Pivot view (report/chart generation).

**NOTE:**

* **Data Must Be Fully Loaded**:The transient entity’s query must execute with **loadAll: true.**  
* **Unique Primary Key**: Ensure that the transient entity has a **unique primary key** to enable proper identification and UI support.  
* **Custom Data Handling Logic**: You must define how and from where the data is fetched, processed, and whether or not it should be saved back to a persistent entity.

##### Persists On : {#persists-on-:}

Persists On consists of three options which are explained below:  

* ###### *null \-* {#null--}

  Entities will be created based on the app’s network mode. If the network mode of the app is online then it will be created on the server side. If the network mode of the app is offline then it will be created in web sql.

* ###### *Both \-* {#both--}

  Entities will be created for both sides.

* ###### *Client Only \-*  {#client-only--}

  An entity will only be created in web SQL for the device or browser during registration.

* ###### *Server Only \-*  {#server-only--}

  An entity will be created in server-side DB and not in web SQL.

**NOTE:**  
Entity persistence will be decided primarily based on the Persists On mentioned.  
In case the persist on is set as null , Persists On will be checked based on app network mode.  
Offline Flavor \- Entity will be created in both server and client DB  
Online Flavor \- Entity will be created only on server DB.

##### Universal Link Details : {#universal-link-details-:}

Universal Link Details is used to build a Universal Link that opens the specific record of the current entity in its respective screen based on the provided parameters. These parameters are similar to navTo parameters available in screens which will be used for generating the deep link.

* ###### *Target Page \-* {#target-page--}

  Screen Id of the page.

* ###### *Section \-* {#section--}

  Section to which the link needs to be navigated.

* ###### *Page Data Model \-*  {#page-data-model--}

  Name of the transnode to which the link needs to be navigated.

* ###### *Query Parameters \-*  {#query-parameters--}

  Additional QueryParameters that need to be passed to the navigated screen.

##### Create Allowed: {#create-allowed:}

This button enables/disables the creation accessibility over the entity. 

##### Read Allowed: {#read-allowed:}

This button enables/disables the data read access over the entity.

##### Delete Allowed: {#delete-allowed:}

This button enables/disables the deletion accessibility over the entity.

##### Update Allowed: {#update-allowed:}

This button enables/disables the modification access over the entity.

#### 2.2.1.2. Properties {#2.2.1.2.-properties}

This tab contains all the properties present inside the entity. It is also used to add/delete properties from the entity.

Entity Property is also known as an attribute or variable in an entity or field in the database table. 

![Screenshot 35](./img/image35.png)

The entity Detail section consists of multiple fields. All the fields are explained below :

##### Entity Property ID : {#entity-property-id-:}

Property ID is unique within the entity across all apps. Once created this can’t be changed later.

[PROC-27544: List of Reserved Keywords in Data Studio Application](https://docs.google.com/document/d/1p9gA7HkNhTAyFsPCT6JSJRgoNMEluVohG3cW0LI85r8/edit?tab=t.0) \- List of reserved keywords which are not restricted to use as property ID value.

##### Short Label : {#short-label-:}

Provide label for your property which will be used as labels in screen.  
Note: It is recommended not to provide same label for two or more properties.

Validation Warning:  
![Screenshot 36](./img/image36.png)

##### Key Attributes : {#key-attributes-:}

Key attributes show whether the property is a primary key, mandatory, or auto-incrementing field. Each of these attributes is explained in the below table:

| Icon | Description |
| ----- | :---- |
| ![Screenshot 37](./img/image37.png) | This icon shows if the respective property is a primary key or not. If it’s highlighted, then it’s a primary key, else not. Each entity should have a primary key irrespective of the entity type |
| ![Screenshot 38](./img/image38.png) | This icon shows whether the selected property is mandatory or not. If any property is marked as compulsory, its value needs to be maintained before saving it to the DB. If the icon is highlighted, the entity is compulsory. |
| ![Screenshot 39](./img/image39.png) | This icon represents whether the respective property has auto-incrementing functionality or not. |
| ![Screenshot 40](./img/image40.png) | This icon indicates whether the chosen property is a unique key. When highlighted, it means the selected property will only store unique data in the database. If a user attempts to add duplicate data, an error will occur. |
| ![Screenshot 41](./img/image41.png) | This icon indicates whether the selected property is a Parent key, meaning it is common to both the parent and child entities. A parent key is created only when a child entity exists, and all primary keys of the parent entity are established as parent keys in the child entity. |

##### Value Help : {#value-help-:}

Can set the already defined value help for this property.

##### Default Value : {#default-value-:}

It refers to the predefined value for that specific property. This field will be automatically filled with the specified value.

##### Qualifier : {#qualifier-:}

Add a Qualifier for the entity. A qualifier helps to make the entity property work in a predefined manner. The property with qualifier stores and acts as per the definition of the qualifier.

Please refer to [Qualifiers](https://docs.google.com/document/d/1U1upleZ-aDhvMqUIvB2CA1jS9Py8inA9NUaqh8Irvr4/edit?tab=t.0) to know more about qualifiers. 

##### Root :  {#root-:}

##### Root key {#root-key}

All primary properties of a Business Object (BO) will be designated as Root keys in its child entities. This can be identified by checking the property details and if the Root checkbox is true, it indicates that the property is a root key. On adding data using a data browser, it will copy the data of the Root Key from its immediate parent.

**NOTE 1:** Root keys are created only when the child entity is created.

**NOTE 2:** In the case of the Parent Child flavor scenario, the data type (domain, length, etc.) for the same Property Id in both the flavors should not be the same. 

##### Is Unique Key:  {#is-unique-key:}

A unique key can be assigned to any property, aside from the primary key. When a child entity is created, all the root and parent keys are automatically marked as unique, and an index is generated for them. Any regular property can be designated as a unique key.

**Use Case of Unique Key:**  
Consider a student table that includes columns for registration number (reg\_no), student name (student\_name), and date of birth (date\_of\_birth), with multiple records where the reg\_no is the primary key.

| reg\_no(Primary) | student\_name | date\_of\_birth  |
| :---- | :---- | :---- |
| 1001 | Ankit | 21/04/2001 |
| 1002 | Abhijith | 22/08/2005 |
| 1003 | Amit | 12/02/2004 |
| 1004 | Prem | 08/05/2000 |

Consider adding a new column, “aadhar\_no,” to store the Aadhaar numbers of all the students. Since each Aadhaar number should be unique, we want to ensure the database doesn't allow duplicate entries. The only option available is  to mark “aadhar\_no” as a primary key, but this would prevent the user from making any updates to the existing data.

To solve this, the concept of a unique key is introduced. By marking the “aadhar\_no” as a unique key, we ensure that duplicate values can't be stored in the column while still allowing null values. This allows us to modify the data in the table without enforcing a primary key constraint.

| reg\_no(Primary) | student\_name | aadhar\_no(unique) | date\_of\_birth  |
| :---- | :---- | :---- | :---- |
| 1001 | Ankit |  | 21/04/2001 |
| 1002 | Abhijith | 22071 | 22/08/2005 |
| 1003 | Amit |  | 12/02/2004 |
| 1004 | Prem |  | 08/05/2000 |

When a property is marked as unique, it offers the following benefits:

1. It prevents the storage of duplicate data, regardless of case (case-insensitive).  
2. It allows null values to be stored in the column.  
3. When creating a child entity, it is mandatory to mark a property as unique to support the "one parent, multiple children" concept. This is because the parent key, which is unique, will be fetched from the parent entity and referenced in the child. If someone tries to add another child with the same parent data, a unique key violation will occur. To resolve this, an additional unique key must be defined in the child entity that is independent of the parent entity.  
4. When a unique key is defined in a child entity that has a primary relationship with a parent entity, uniqueness is enforced as a composite constraint comprising the parent key and the child unique key (i.e., **parent\_key \+ unique\_key**).

##### Is Parent Key:  {#is-parent-key:}

All the primary properties of the immediate parent entity will be created as Parent Key in the child entity and will be marked as regular. This property cannot be changed by the user.  
On adding data from Data Browser, it will copy the Parent Key data from its parent and create it in the child.

##### Formula:  {#formula:}

It is a property of an entity. It evaluates the given expression and returns the evaluated result.  
Example :  
Syntax :  \={“test ”+ this.order\_id }    
Here this.order\_id is the entity property

##### Data Type:  {#data-type:}

It is a property data type. Ex- String, Boolean, Integer.Data type conversion in the Data Studio is only available for compatible data types, as outlined in the provided Excel file;[Data Type Conversion](https://docs.google.com/spreadsheets/d/1R9q02xgUj3yKylELajMxkEfC2cp3lFDek6W-prHaXiw/edit?gid=1323613538#gid=1323613538).

##### Filter Option:  {#filter-option:}

If this field is marked as true for a property then only **applyFilterP** API can be used for that property.

##### Is Restricted:  {#is-restricted:}

If this field is marked as true for a property which has a value help assigned to it then validation will be called for this property in UI which will check if the key is present in the value help.

##### Min Value:  {#min-value:}

The minimum value is the minimum value for your property that a user can enter.

##### Max Value:  {#max-value:}

The maximum value is the maximum value for your property that a user can enter.

##### Authorization: {#authorization:}

The authorization field takes the Login **user id** as an input and only that user can get access to that property. Ex- \$USER.login\_id

**ID Series :**  
ID series is used for populating the IDs/Keys in the entity’s property with kloBO. If an application wants to allocate the ID itself,  either it should not assign the ID series or mark it as none. kloBO will allocate the ID on the first read of the ID.

##### Transient Property: {#transient-property:}

An entity property can be made transient by setting the type of property to “Transient Field” so that within that entity property’s value is not stored in the database. It exists only at runtime and is never persisted in or retrieved from the database.

**![Screenshot 42](./img/image42.png)**

**![Screenshot 43](./img/image43.png)**

Use Cases:

1. **Accessing Properties of Relational Entities**  
    Transient fields can be used to display values from related entities without actually adding them as properties/database table columns.   
   For example, if an entity is related to another entity(e.g., User → Department), a transient field like departmentName can fetch and show department.name without requiring an actual field in the database.

2. **Custom Getter/Setter Logic**  
   Standard transient property getters and setters can be used for dynamically calculating values, formatting data before sending it in a response, or temporarily accepting input and storing it without saving it to the database.  
   In this example, d\_customer is the entity, and fullName is a transient property.  
   The fullName property is computed from the underlying firstName and lastName fields.  
   The getter and setter for `fullName` should be written directly inside the entity file /src/\<app folder\>/entity/d\_customer.ts  
   Eg:   
   get fullName(): string {  
     return \`\${this.firstName} \${this.lastName}\`;  
   }  
   set fullName(name: string) {  
     const \[firstName, lastName\] \= name.split(' ');  
     this.firstName \= firstName;  
     this.lastName \= lastName;  
   }

**Note :**  
In case a user wants to change the property type of any property, they have to re-add the same property in their screen metadata using UI Editor (wherever applicable) from their transnode for reflecting the changes.  
For ex:  
This is the property type created by default using Data Studio:  
![Screenshot 44](./img/image44.png)

Suppose the property type has been changed as per below:  
![Screenshot 45](./img/image45.png)

To reflect the same changes in the application as well please follow the mentioned steps:

**Step 1**: Open the screen metadata in the UI Editor. Now delete all occurrences of the changed property type’s property.

![Screenshot 46](./img/image46.png)  
![Screenshot 47](./img/image47.png)

**Step 2**: Now drag and drop the same property from the transnode to the section.

![Screenshot 48](./img/image48.png)

##### Created By / Modified By Value Help:

The system fields s\_created\_by and s\_modified\_by store the user ID of the user who created or last changed a record. These fields have a built-in value help, so screens and data views show the user's name instead of the login ID.

**Features:**

* Names instead of user IDs: the user's display name is shown wherever these fields appear.  
* Filter and search: filtering and fuzzy search work on the user's name.  
* Sorting: the columns sort by the user's name.

**NOTE:**

* Created By is fixed: once a record is saved, s\_created\_by can't be changed. Any attempt to change it is ignored.  
* Modified By is automatic: s\_modified\_by is updated every time the record is saved.

#### 2.2.1.3. Relations {#2.2.1.3.-relations}

This tab contains all the relations created inside the entity. Entity relation relates one entity with another entity.

Entity relation consists of multiple fields. All the fields are explained below:	

##### Relation Type: {#relation-type:}

It specifies the type of the relation whether it’s a primary or non-primary relation. This also contains two icons which are described below:

###### *Primary Relation* {#primary-relation}

Primary relation is a special kind of aggregate relation within the BO boundary. All entities in a BO are navigable from the root entity only once unidirectional.

A primary relation is a direct relation between two entities. There will be a parent entity and a child entity and the child entity will be dependent on the parent entity.

The **Return Entity** value help is applicable only for **aggregate (non-primary)** relations. The primary relation is created only during the creation of a child entity and cannot be assigned by selecting a return entity. 

###### *Aggregated Relation* {#aggregated-relation}

An aggregation relationship can be described in simple words as "an object of one class can own or access the objects of another class". If a parent is deleted/archived, all other parts associated with it are deleted. Aggregated relations can be across BOs. 

When a relation is created as **non-primary**, the related data cannot be fetched in callbacks if both the parent and child entities are being saved in the same transaction.

This occurs because the child entity has not yet been persisted at the time the relation is evaluated, and therefore the relation data is unavailable.

| Icon | Description |
| ----- | :---- |
| ![Screenshot 49](./img/image49.png) | This shows whether a relation is primary or not.  |
| ![Screenshot 50](./img/image50.png) | This icon displays whether a relation is aggregated or not. |

##### Relation Name: {#relation-name:}

Unique within an Entity. Relation names and Property names can’t be the same.

##### Description: {#description:}

Provides a small description of the relation.

##### Return Entity: {#return-entity:}

Return entity is the actual name of the entity.

##### Relation Query: {#relation-query:}

The relation Query is the entity/query ID using which the relation needs to be established.

NOTE: If the relation is created using a relation query, the relational data will be fetched according to that query. Therefore, features like sort order should be implemented at the query level, rather than at the entity level, to retrieve the data in the correct sorted order.

##### Cardinality: {#cardinality:}

Cardinality shows how the entities are connected. Select the cardinality for the relation (0:n, 1:1, 1:n).

* 0:n \- Zero to Many relationships (A minimum cardinality of 0 indicates that the relationship is optional.)  
* 1:1 \- One to One relationship  
* 1:n \- One to Many relationships

##### Mapping: {#mapping:}

It will map based on the target entity property and source entity property with a mapping type.  
This field provides the following options:

* ON CREATE ( mapping will be called On Create of an entity)  
* ON QUERY ( mapping will be called On execution of an entity query)  
* BOTH

##### Note: {#note:}

In case of aggregated relation where the mapping property of the entity is null, then all the data of the related entity will be fetched from the relation

#### 2.2.1.4. Object Type {#2.2.1.4.-object-type}

Object Type defines the possible behaviour of an entity / BO. Object type has a unique key and description.

Object type contains multiple fields which are explained below:

##### Object Type: {#object-type:}

This field displays the object type. The object type may include alphabets or numerals.

##### Object Group: {#object-group:}

It is a group of object types. Select the object group from the drop-down.

#### 2.2.1.5. Status {#2.2.1.5.-status}

This tab is used for the configuration and maintenance of status-based data under specified object types. This also helps in assigning status, and status groups under specific object types.  
![Screenshot 51](./img/image51.png)

This tab consists of a few fields which are mentioned below.

##### *Object Type:*  {#object-type:-1}

This field displays the object types available for this entity. The object type may include alphabets or numerals.

##### *Icon:* {#icon:}

This field displays an icon for your newly created entry in the status section.

#####  *Description:* {#description:-1}

A short description

##### *Status:*  {#status:}

This field displays the entity status which you are going to map with the status group

***Status Group:***  
This field lists down the predefined status groups, which can be mapped with the status and will be used in Vienable.

**NOTE:**  
If changing any system field property’s (s\_status, s\_object\_type, s\_status\_group) propertytype columns, will change it in the whole app.  
For ex: If changing the value help id of s\_status property from “**vh\_s\_status**” to “**vhc\_city**” then this change will reflect in each of the entities s\_status property wherever added.

#### 2.2.1.6. Queries {#2.2.1.6.-queries}

This tab will list all the queries present under the current entity. Using this section we can also add new queries.

![Screenshot 52](./img/image52.png)

Queries consist of a few fields like Query ID and description.

##### Query ID: {#query-id:}

The query ID is the name of the query which is used to identify the specific query.

##### Description: {#description:-2}

A short description of the query.

#### 2.2.1.7. Entity Index {#2.2.1.7.-entity-index}

The Entity index tab is used to retrieve data from a database very fast. When you are creating indexing, It will create an index in your database along with the properties you have added. Next time when you search those properties, It will directly fetch that index from the database and give you the data.   
An index on a table works like an index in a book (that's where the name came from):

Let's say you have a book about databases and want to find some information about storage. Without an index (assuming no other aid, such as a table of contents) you'd have to go through the pages one by one until you found the topic (that's a `full table scan`). On the other hand, an index has a list of keywords, so you'd consult the index and see that `storage` is mentioned on pages 113-120,231 and 354\. Then you could flip to those pages directly, without searching (that's a search with an index, somewhat faster).

**Entity Index creation:**  
**Step 1:** Go to the Entity Index tab and click on the **add icon(+)**  
**![Screenshot 53](./img/image53.png)**  
Entity index consists of a few fields which are mentioned below:  
**ID:** The entity index ID is used to identify the specific entity index.  
**Description:** A short description of the entity index.  
**Properties:** Properties for your indexing. These properties data will be retrieved very fast.  
**Client/Server:** Entity indexing will call on which side, server-side, client-side or both.

**Step 2:** Fill in the detail section as per your requirement.  
![Screenshot 54](./img/image54.png)

**Step 3:** Click on the save button.  
![Screenshot 55](./img/image55.png)

**NOTE:**   
Indices will be created based on the **Client/Server** mentioned.  
Server Only \- Creates index only in server DB  
Client Only \- Creates only in client/local DB  
Both \- Creates on both server and client

Deletion of Entity Indexes is supported at both entity level and flavor level update schema , but some points have to be kept under consideration.

* In a parent-child scenario, if an index is deleted from the parent but still exists in the child, triggering an update schema on the child entity will cause the index to be added back.  
* To avoid inconsistencies, an index must be deleted from both the parent and child entities.

#### 2.2.1.8. Rules {#2.2.1.8.-rules}

A **Rule** is a program containing business logic written by a Developer as per the application's needs. It works with the event bus, any change in entity triggers the event, and all the rules hooked to the event bus are executed sequentially. Rules are reusable objects across client, server, and middleware. Rules are reusable and hence can be subscribed multiple times with different Channel types or other combinations.

##### Entity Rule Creation: {#entity-rule-creation:}

**Step 1:** Go to the Rule tab and click on the **add icon(+).**  
**![Screenshot 56](./img/image56.png)**

| Field | Description |
| :---- | :---- |
| Event type  | Select the event type. Based on the type of event you choose rule will be executed. |
| Type | Select the channel type, based on this the transaction will be performed. |
| Exit ID | is an ID you put in for the rule subscription. (can select from the existing one). |
| Clazz | This will be the rule file name. |
| Invocation Method | The method needs to be called. |

**Step 2:** Select the Event Type from the drop-down. The event type will mention when the rules will be executed.   
![Screenshot 57](./img/image57.png) 

**Event types:**

* Endpoint resolver (Once the rule is being executed in-between it picks Endpoint Resolver and resolves it **or** whenever the online save is going to the klarion server Endpoint resolver will get called)  
* On Create ( rule will be executed on create of an entity)  
* On Delete (rule will be executed on delete of an entity)  
* On Update (rule will be executed on update of an entity)

 **Step 3:** Select the channel type(there are different input channels to perform a transaction on an entity, channel type selection decides when to trigger the Rule).

**Channel Type:**

* Endpoint / Device on Klarion server- always on the client  
* Endpoint / Device on Klarion server  
* Endpoint / Device on Klarion server- always on server  
* Endpoint / Device to Server/ Client \-Network Context Switch  
* Legacy on Klarion server  
* Klarion server to Klarion offline server  
* Klarion server to Klarion Server

![Screenshot 58](./img/image58.png)

**Step 4:** Fill in the value for **Exit ID.**

**Exit ID:** It's an ID that you put in for the rule subscription. (can select from the existing one).

![Screenshot 59](./img/image59.png)

**Step 5:** In the Clazz field provide the rule file name (example: rules/\<file\_name\>) and in the invocation method provide an event name. You will be using that event to write your business logic codes.

* **NOTE:** If you are creating a **Rule** for the same entity you can fill **this** inside the **Clazz** field.

![Screenshot 60](./img/image60.png)

**Step 6:** Click on the **save** button to save the newly created rule.  
![Screenshot 61](./img/image61.png)  
**Note:** The last column drop-down icon has two fields(**Choose Existing** and **Create New**)  
					![Screenshot 62](./img/image62.png)  
**Choose Existing:** This will list down all the existing rules for that entity. You directly select it and use it.  
**Create New:** Create New will clear some fields from the created rule fields.  
![Screenshot 63](./img/image63.png)

For more information, please refer to the [training guide](https://docs.google.com/document/d/1niR7Yr3kj3ZTTjf5TxjJ_Tetav9FGIzVj4nbqPRe8_U/edit?tab=t.0#heading=h.meukdy).

##### Debugging a Legacy to Klarion Server Callback on a Private Node:

A Legacy to Klarion Server (E2K\_MSG) rule runs when a legacy system, such as SAP, sends a message to the Klarion application. These messages are processed on the server nodes, so the rule can't normally be debugged from a private node.

To debug such a rule, the node ID of the private node should be sent in the message header. The message is then processed on that private node, where breakpoints can be used like for any other rule.

![Screenshot 64](./img/image64.png)

**Steps:**

* Start the private node and note its node ID.  
* Send the message with the header  **nodeid** set to the node ID of the private node.  
* The private node picks up the message and runs the Legacy to Klarion Server (E2K\_MSG) rule.  
* Debug the rule from the debugger attached to the private node.

**NOTE:**

* If the header is not sent, the message is processed on the server nodes as usual.

### 2.2.2. Query Detail {#2.2.2.-query-detail}

On selection of any query in the tree, it will display all available options in the detail section. The description of each tab is given below:

#### 2.2.2.1. Detail {#2.2.2.1.-detail}

This tab will list all the basic information related to the query. It contains fields like return entity, DB Selection, Select distinct, app mode, Tenant level, query type and expand all.

![Screenshot 65](./img/image65.png)  
The description of each of the fields is given below:

##### Return Entity: {#return-entity:-1}

Return entity indicates the return type of the query. The second field of the return entity is the **Alias** of that entity.

##### Transient Entity (Aggregate Queries) {#transient-entity-(aggregate-queries)}

* In the case of **aggregate queries** and **native aggregate queries**, an additional field called **Transient Entity** is present.  
* In the UI Editor, Page Data Model will be created from the Transient Entity rather than the return entity.  
* The **Transient Entity**  will include all the properties from the SELECT clause, ensuring that all values are properly displayed on the screen.

**Differences Between Aggregate and Native Aggregate Queries**

* **Aggregate query**  automatically generates a transient entity containing all properties used in the SELECT clause. If no SELECT clause is modeled, the return entity is used instead.	  
* Properties added automatically by the framework to the transient entity cannot be deleted. However, users can add their own properties to the transient entity for additional calculations, display purposes, or other operations.  
* **Native aggregate queries** require the user to explicitly create a transient entity and assign it to the “Transient Entity” in the detail tab of the query. All aliases must be included as properties; if no alias is provided, the property name from the Entity should be included in the query.

**Note:** For native aggregate queries, if a transient entity is not specified manually, it will be defaulted to the return entity.

##### DB Selection: {#db-selection:}

We have two DB instances, one is Reader and another is Writer, where Writer is RunTimeMain and Reader is RunTimeSecondary.  
We can shift the load of a particular query to the Reader instance by maintaining the proper DB Selection. By default it runs on RunTimeMain.  
In case of RunTimeSecondary, if we are updating some property of the entityset it will persist via RunTimeMain.

##### Select Distinct: {#select-distinct:}

This field specifies whether the query created will be giving unique records or not.

**Select Distinct** returns unique records based on the specified columns. If the selected columns are not primary keys, and **loadAll** is **false,** the distinction is made based on the primary key, which might still include duplicates. To ensure distinctness based on the selected columns, **loadAll** must be set to **true**.

##### App Mode: {#app-mode:}

App mode refers to the network mode of the entity. This is similar to what we get in identity-level app mode. Click [here](#app-mode-:) to read about supported app modes in detail.

##### Tenant Level: {#tenant-level:}

This radio button allows you to make the dependent or independent.

##### Query Type: {#query-type:}

Query supports multiple types of query modelling which are easy to define and use in the application. Based on the application scenario and use case, the [query type](https://docs.google.com/document/d/1LIe4CFLCNTAuyA7iC5Esv-4pMN07I80htOXBQ7EgQQw/edit#heading=h.3vb77nwymsmg) has to be decided. 

* ###### *Runtime Query ( former Entity Query)* {#runtime-query-(-former-entity-query)}

* ###### *Modelled Query  (former  Dynamic Query)* {#modelled-query-(former-dynamic-query)}

* ###### *Native Query (former  Advanced Query)* {#native-query-(former-advanced-query)}

* ###### *Aggregate Query (ReadOnly with Modelling support)* {#aggregate-query-(readonly-with-modelling-support)}

* ###### *Native Aggregate Query (ReadOnly with Raw SQl)* {#native-aggregate-query-(readonly-with-raw-sql)}

**Note:** Changing modelled query to aggregate/native aggregate will trigger a dialog mentioning the warnings which have to resolved depending on the developer’s need.  
![Screenshot 66](./img/image66.png)  
On click of Open Where Used List, a dialog will appear mentioning if any screen is created using the query.  
![Screenshot 67](./img/image67.png)

#### Query Modelling  {#query-modelling}

##### Update: {#update:}

This will update the SQL query generated as per the data maintained for the query.

##### Expand All: {#expand-all:}

**The “Expand All”** text area contains all the relations for which the data will be loaded during the parent query execution.Currently, **ExpandAll** does not work when an **INNER JOIN** is used in a query, as we do not support the combination of **ExpandAll** and **INNER JOIN** together.

Note: **Expand All** is **not supported for aggregate queries**.  
When a query uses aggregate functions (like SUM, COUNT, AVG, etc.), it consolidates multiple rows into summary values. Because of this aggregation, the original row-level detail is lost. **Expand All** relies on accessing these underlying row-level relations to fetch related data. Since the individual rows no longer exist in the aggregated result, it is **not possible to expand relations** in this context.

**Expand All with Joins**:

* The Expand All feature is supported in queries that include joins.  
* Joins defined in the parent query are automatically appended during Expand All execution.

**Entity Restrictions:**

* The same entity cannot be used simultaneously in both the main query and in the Expand All clause.   
* This restriction helps avoid circular references and data redundancy.

**Where Conditions on Joined Entities:**

* You can apply WHERE conditions on secondary (joined) entities in queries that use Expand All.   
* This is considered while  filtering of expanded data.

**Note:Supported Functionality (BOL\_ Version 7-2-113 and onwards)**

#### 2.2.2.2. Entities And Join {#2.2.2.2.-entities-and-join}

In this tab, we can manually add the joins and choose join types. We can also manually select the fields and can group/order the fields.

![Screenshot 68](./img/image68.png)

In the Entity Join section of our queries, we can now incorporate fixed values such as 100, 200, 'RAM', 'Rincy', 'Karan', as well as system variables like \$SYSTEM.userID and \$SYSTEM.now within the join conditions.   
**Note**:To ensure uniqueness in the results, we enable the SELECT DISTINCT option.

Below are the details of the fields shown above in the image

##### *Entity:*  {#entity:}

This field is for root entities. The entity to which we are applying the Joins.

***Description:***    
A short description for entity join

***Join Type:***   
A JOIN clause is used to combine rows from two or more tables. There are four types of join.

#### 2.2.2.3. Select Properties {#2.2.2.3.-select-properties}

This tab contains information about properties in the select clause. All the properties present in the query will be listed here.

![Screenshot 69](./img/image69.png)

Unlike **modeled queries**, **aggregate queries** allow the same property to be included multiple times with different aggregation functions. For example:

* **Counting** the number of cities and also **listing** the names of the cities.  
* Calculating the **minimum**, **maximum**, and **average** values of a property such as marks.

**![Screenshot 70](./img/image70.png)**

**Note:** Each aggregated instance of a property must have a unique alias to ensure that all values are displayed correctly in the query result.

All the fields of this screen are described below:

##### Entity {#entity}

Entity name of the selected property.

##### Property {#property}

Entity property ID which is present in the query.

##### Description {#description}

A short description of the query.

##### Key Attributes {#key-attributes}

This field represents whether the respective property is primary, mandatory, or has an id-series or not. Click [here](#key-attributes-:) to learn more about each of these.

##### Alias {#alias}

Alias refers to the **SQL aliases used** to give a table, or a column in a table, a temporary name.

##### Aggregation {#aggregation}

Aggregation in a query refers to the process of combining multiple rows of data into a single summary value. It is commonly used to calculate metrics such as **sum**, **average**, **count**, **maximum**, **minimum**, or other summary statistics.

**Note:** When using a **modeled query**, it is recommended to provide an alias to display the aggregated value on the screen. This can be done either by creating a **transient property** or by using an existing property. Or the **`count_of_property`** or other aggregated result returned by the database may not appear in the transient node or returned entity.

**Additional Note:** When performing aggregation within an **aggregate query**, an alias is automatically generated. However, it can also be manually specified if desired.

#### 2.2.2.4. Parameters {#2.2.2.4.-parameters}

This tab lists all the query properties that are created under this query. A query property is similar to what an entity is having but this property will be used only in the runtime and no actual attributes will be added in the database table.

![Screenshot 71](./img/image71.png)

Below is the definition of the fields shown above in the image:

##### Query Property ID: {#query-property-id:}

Provide the ID for query property (should only contain small chars, numerical, ‘\_’). This is the unique key used for accessing the specified query property.

##### Short Label: {#short-label:}

Mention the label which is required to be shown in the UI when using search or any other function.

##### Default Value: {#default-value:}

When providing default value in a query property it will act as a predefined value for that property and when the query will be executed it will prefill the query property with the provided default value.

**Description:**  
A short description of the query property.

##### Property Type: {#property-type:}

Property Type is generated in association with the query ID. This also refers to the element ID.

##### Domain: {#domain:}

It shows the data type for the query property. This generally means what will be the data type of the property specified like String, Int, Boolean, etc.

##### Length: {#length:}

This field will display the length of the field specified. For example: For String it can have a Length 255 or 32; For Integer it can have a length of 16,32 or 64 etc.

#### 2.2.2.5. Where {#2.2.2.5.-where}

Where the tab contains all the conditional data present in the query.  
To use the **where** clause, follow these steps:

**Step 1:** Go to the **Where** tab and click on **Add icon(+)**   
![Screenshot 72](./img/image72.png)  
**Step 2:** Fill the fields according to your requirements.  
![Screenshot 73](./img/image73.png)  
**Step 3:** Click on **save** button  
![Screenshot 74](./img/image74.png)

#### 2.2.2.6. Group By {#2.2.2.6.-group-by}

Group by tab contains all the properties present in the group by clause.  
To use a group, follow these steps:  
**Step 1:** Go to group by tab and click on **add icon(+)**  
![Screenshot 75](./img/image75.png)  
**Step 2:** Select the field from vh on which you want to apply group by  
![Screenshot 76](./img/image76.png)  
**Step 3:** Click on the **save** button  
![Screenshot 74](./img/image74.png)

#### 2.2.2.7. Having {#2.2.2.7.-having}

The Having tab will list down all the properties present in the having clause.  
To use having on an entity property follow the same steps as we followed in the [**Where**](#2.2.2.5.-where) clause

#### 2.2.2.8. Sort Order {#2.2.2.8.-sort-order}

Sort order is used to sort the property in either ascending or descending order.

The fields are explained below:

##### Field: {#field:}

It refers to the property for which a sort order has been created. 

##### Order: {#order:}

Order specifies whether the data will be sorted in ascending or descending order.  
**Note:** To use sort order on any property, go to the sort order tab and inside that tab click on the **add icon(+)** fill in the data for your requirement and click on the save button.

#### 2.2.2.9. Expand All {#2.2.2.9.-expand-all}

The **“Expand All”** tab contains all the relations in one place for which the data will be loaded during the parent query execution.  
![Screenshot 77](./img/image77.png)

**Note:** In all the above sections listed, you can add and delete properties as and when required. The option for the same is given in all the sections.

### 2.2.3 Value Help Detail {#2.2.3-value-help-detail}

This tab contains all the details about the value help. 

**![Screenshot 78](./img/image78.png)**

##### Value Help: {#value-help:}

In the Application, ID/key is frequently used to store the related data and at the same time in the user interface descriptive explanation is required. To achieve this, the ID/key is represented by other single/multiple data from the related table. 

Value help is also used to supply the choices available to fill (combo, dropdown, auto-complete) as selection data. Value help can restrict accepting the input value from valid sets.

##### Description: {#description:-3}

A short description of the value help and its use case.

##### Is Dependant : {#is-dependant-:}

This specifies whether the current VH is dependent on any other VH or not.

**For Example,** Two Value Helps are there, for State and City, so the city value help will be dependent on the state value help. 

##### Object Type Value Help : {#object-type-value-help-:}

Select the object type from the drop-down. The type of ValueHelp needs to be selected while defining the ValueHelp in Data Studio depending on the scenario.

The following are ValueHelp Types:

* CONFIG  
* QUERY  
* VH\_TRANSACTION

###### *CONFIG* {#config}

VH Config works similarly to **VH Transaction** except for the fact that the values are maintained/fetched from the metadata (config) DB rather than transactional DB. Maintain the ValueHelp as the configuration in the Data Studio, this is part of the metadata. The data maintained here are Flavor-dependent. VH values can be overridden in any child app.

Note: Whenever a config vh is created or updated then build is necessary without which value help won’t load in UI.

###### *QUERY* {#query}

For the VH type **Query**, Query ID is to be provided as a parameter at the time of value help definition, which will return a set of values and will be used as suggestion items. It could be any type of Query :

* Runtime Query: any existing Entity name.  
* Modelled Query: Query ID.  
* Native Query: Query ID.

Entity authorization is automatically applied to the queries assigned to VH.

* Select the Object Type Value Help as **Query.**  
* Select any existing **Query ID** or **Entity Name.**

Key Property & Display Text:

* If a Runtime Query is selected it contains the **entity properties** from the **selected Entity Name**.  
* If a Modelled query or Native Query is selected it contains the list of **entity properties** of the **Return Entity** of the **Selected Query**.

Dependents :

* If Runtime Query is selected it contains a list of **entity properties** from the **selected Entity** represented as **EntityName.PropertyId**.  
* If the Modelled query or Native query is selected it contains a list of **query properties** based on the selected query.

Icon:

* Entity property of return entity where SAPUI5 icon URL or image path is stored.

Maintain the data in the returned entity of the selected query. Depending on the scenario, data maintenance needs to be taken care of by the application.

* Master data   
* Transactional data

###### *SAVED\_QUERY* {#saved_query}

For the VH type **Saved** **Query**, first the user has to create a value help of type **“QUERY”** and then select in the parameter field a Saved Query ID, which will change the value help definition to **“SAVED\_QUERY”** and will return a set of values and will be used as suggestion items. 

**NOTE:** Saved Query can be created from advance search in Data Browser.

Entity authorization is automatically applied to the queries assigned to VH.

* Select the Object Type Value Help as **Query.**  
* Select any existing **Saved Query ID** from the value help.

Key Property & Display Text:

* If the provided saved query is created for an entity then it will contain the list of properties of **that Entity.**  
* If the provided saved query is created for a query then it will contain the list of properties of the **Return Entity of that Query**.

Dependents :

* If the provided saved query is created for an entity then it will contain the list of properties of **that Entity.**  
* If the provided saved query is created for a query then it will contain the list of properties of the **Return Entity of that Query**.

Icon:

* Entity property of return entity where SAPUI5 icon URL or image path is stored.

###### *VH\_TRANSACTION* {#vh_transaction}

VH Transaction is a common ValueHelp functionality provided by KloBase which can fulfil most of the basic requirements in the application. Here you can maintain the suggestion values for multiple ValueHelps. This is part of the transaction database. Which is also synced in the device at the time of initial sync and values are fetched from the same. No need to create any query.

##### Icon: {#icon:-1}

It is used in case we want to add an icon for any of the value help.

##### Entity/Query: {#entity/query:}

This will display the entity/query name associated with this value help.

##### Desc Format: {#desc-format:}

Desc format of a value help defines how the value help should be formatted and displayed. 

**For Example:** Desc Format \=   :id–:text

Here ID and text should be replaced with entity property ID

**Key:**  
The key is the property of the entity and needs to be selected from the drop-down.

##### Display Text: {#display-text:}

Display text is also an entity property that needs to be selected from the dropdown.

# **3.0. Creation of Objects** {#3.0.-creation-of-objects}

This topic will guide you through the different object creations such as entity, query, and value help.

## 3.0.1. Entity {#3.0.1.-entity}

The data object in KloBase is known as Entity. An entity has one or more named properties, each of which can have one or more values. Each entity in the KloBase Datastore has a key that uniquely identifies it. In simple words, an Entity is a database table.

### Business Object (BO) {#business-object-(bo)}

* Business Object (BO) is a logical unit used in a business. It is made up of one or multiple entities. BO is a hierarchical tree of entities.   
* BO has only one root entity (top-level). The rest of the entities (child entities) are aggregated into root entities to construct the entity tree.   
* The root entity represents the BO, root entity name becomes the BO name. Root entity also takes full responsibility as BO apart from its entity responsibility.

### Bo hierarchy {#bo-hierarchy}

* d\_order (root entity/BO)  
  * d\_order\_item (child entity)  
    * d\_order\_conditions (child entity)

### Create New Entity {#create-new-entity}

**Step 1:** **Select the required App**  
Once the Data Studio is loaded, select the app under which you want to create the new entity.

![Screenshot 79](./img/image79.png)

**Step 2: Select the Entity under the Create option**  
Select the **Add icon(+)** option from the menu and click on **Entity**.

**Step 3:** **Fill in the details and create**  
Fill in the entity name in the input field and click on the **Create** button. 

![Screenshot 80](./img/image80.png)

After following the above steps, it will navigate to the entity dashboard as shown below:

![Screenshot 81](./img/image81.png)

Refer to the [Detail](#2.2.1.1.-detail) Section for more information about the field shown here.

### Create New Entity from Excel: {#create-new-entity-from-excel:}

Note: Create an entity first and cancel for adding the first property popup

Create a excel sheet like the below format:

![Screenshot 82](./img/image82.png)

Add Status and Role sheet if applicable in the below format: 

![Screenshot 83](./img/image83.png)

![Screenshot 84](./img/image84.png)

Now click on the Data File and choose this file to upload and create properties and configs  
![Screenshot 85](./img/image85.png)

### Creating Entity Property {#creating-entity-property}

**Step 1:** **Click on the add button in the properties tab**  
Click on the properties tab and click on the **Add (+)**  icon.

**Step 2: Select the required Qualifier**  
It will open the qualifier menu, which gives the option to select the required qualifier for the property.  
**![Screenshot 86](./img/image86.png)**

**Step 3: Fill the information in the field**  
Fill in the required data such as entity property ID, key attributes, value help, and default value. For more information on each of the fields click [here](#2.2.1.2.-properties). 

Toggle the required icons as per the requirement such as primary key or mandatory field.

**Step 4:** **Save the entire process**  
Once done with the entity and property creation, save the data. This action will push all the data into the database. Click on the [save button](#1.6.-save-and-edit) in the toolbar.  
Once save is successful, the fields will become non-editable and in the toolbar, the edit icon will start appearing.

### Creating ID Series {#creating-id-series}

To navigate to the id-series section follow the below steps:

**Step 1:  Go to Entity Properties**  
Navigate to the properties tab after selecting the entity from the entity tree.

**Step 2: Click on the arrow to go to the main page** 

Click on the right directional arrow, this will open the main dialog which will give access to ID series creation.

**Step 3: Add a new Entity**

Click on the **Add** icon to add a new entry in the id series section.

![Screenshot 87](./img/image87.png)

**Step 4: Fill in the details of your ID Series**

Fill in all the required details, close the dialog, and click on save. A new set of ID series has been created for the selected property. For more details about each of the fields continue reading below:

***ID:***

This field accepts the unique id of the id series as input. For naming convention click [here](https://docs.google.com/document/d/1HW3ZrXBFRF6LBArUTebvnR6UwtrzrLVE_0WEcnOQAuI/edit).

***Object Type:***

If the order instance in question belongs to B1 and object type 1 then the order\_b1\_ot1\_series definition will be picked for processing.  
If the order instance in question belongs to B1 and object type 2 then the order\_b1\_series definition will be picked for processing.  
If the order instance in question belongs to B2 and object type 3 then the order\_base\_series definition will be picked for processing.

***Type:***

Out of the listed options, the three that are widely used are explained below:

* **GUID \-** Returns 32 char UUID as key.  
* **Autonumber \-** Returns incremental number for the allocated chunk. The auto number section.  
* **None \-** No number is assigned to the developer to fill the number. Generally used during override in tuner to remove the ID series. 

***From:***

This takes the starting number/id series from where it will start generating numbers.

***Prefix:***

Prefix value for generating id series as a pattern.

***Suffix:*** 

Suffix value for generating id series as a pattern. 

***Chunk Offline:***

Chunk offline is the number of entries you can create in your entity when network mode is offline. Everytime a new chunk is assigned to the user whenever he/she does an application registration. 

***Chunk Size:***

Default 100 can be set to the desired number.

***Increment:***

It will accept the number by which the auto-generated number will be getting incremented.

For example \- From \= 100, Increment \= 1

So the next auto-generated number will be as follows: 101,102,103,104…

***Scope:***

The default is global, only one auto number is used for all the tenant and offline endpoint intervals.

***Pattern:***

Using the pattern option, we can generate the id series as a pattern, or by concatenating some string in the auto-generated number.

**For example** \- if we need a series like **ORDER\_ID-1103**

Then we have to maintain the prefix in the pattern as **ORDER\_ID** and the framework will automatically concat the auto-generated number with the entered string.

***Description:***  
A short description explaining the use case/purpose of the id-series.

###  Create Relations {#create-relations}

**Step 1:**  **Go To the Relations Tab**

Click on the **Relations Tab**.

**Step 2: Add a New Relation** 

Now click on the **add** button to create a new relation and click on the **key** icon for primary relation or select the other icon for aggregate relation and fill in the other mandatory fields. Then click on the mapping icon.

**Step 3: Add source property information**

Add source property for the selected entity, mapping type, and target property for the chosen return entity after clicking on the **add** icon. Now save the relation.

### Create Object Type and Object Group {#create-object-type-and-object-group}

**Step 1:** **Go to the Object Type Tab**

Click on the **Object Type** Tab.

![Screenshot 88](./img/image88.png)

**Step 2:** **Add new Object Type**

Click on the add button to create a new object type. Fill in the object type. For more details on object type and object group, click [here](#2.2.1.4.-object-type).

**Step 3: Click on the dialog icon** 

Now click on the icon beside the object group value help to open the object group dialog.

**Step 4: Add Object Group** 

In the object group dialog click on add and provide object group and description.

**Step 5:** 

Now click on the cancel button on the top right.

**Step 6: Select Object Group**

Click on the icon present in the input field of Object Group and select the required object group. Click on **Save** to persist all the changes.

![Screenshot 89](./img/image89.png)

### Create Object Group Config {#create-object-group-config}

**Step 1: object Type Field**  
Click on the **object type** tab

![Screenshot 90](./img/image90.png)

**Step 2: Click on the Add icon**

Click on the second section to **add** an icon.

![Screenshot 91](./img/image91.png)

Select **object Type**, **role ID** and **rollup status** based on your requirement.

![Screenshot 92](./img/image92.png)

**Note**: Click on save to save all the changes

### Create Status and Status Group {#create-status-and-status-group}

**Step 1: Status field**  
Click on the **Status** Tab  
![Screenshot 93](./img/image93.png)

**Step 2: Add Status**  
Click on the **add icon(+)** to create a new status and fill in the mandatory fields.  
![Screenshot 94](./img/image94.png)

Now click on the save icon to save the particular mapping for the status.

### Create Entity Index {#create-entity-index}

**Step 1:** **Entity Index field**

Click on the **Entity Index** Tab.

![Screenshot 95](./img/image95.png)

**Step 2:** **Add Entity Index**

Click on the **add** icon to create a new entity index and fill in the mandatory fields.

![Screenshot 96](./img/image96.png)

Now click on the save icon to save the particular entity index data.

### Update Schema {#update-schema}

Once you are done with the entity and property creation, you can proceed with the **updated schema**. This will create the actual table in the database along with all the attributes.

To perform an update schema,  click on update schema.

![Screenshot 97](./img/image97.png)

It will give a toast message like **Updating Schema Done Successfully.**

![Screenshot 98](./img/image98.png)

After this step, our entity is ready for storing transactional data which will be used on the screen side or elsewhere.  
Now we have to store some data in the entity. It can be done using the Test option given in the toolbar.

### Incompatible changes

If a property's type or attributes (e.g. precision, length) were changed in the metadata since the table was last created, clicking **Update Schema** may show a confirmation dialog listing the incompatible changes, for example:

`Some incompatible changes were found. Please press OK if you want to make the changes forcefully.`  
`NOTE: This will change / truncate the data in the table.`

followed by one line per affected property, e.g. `Incompatible changes found (DEC:-decimal -> DEC:-decimal) in property:<property_name> in entity:<entity_name> in flavor:<flavor_name>`.

![Screenshot 99](./img/image99.png)

This means the metadata definition and the physical database column are out of sync — usually because a prior property change (e.g. a precision or type change) was saved in metadata but **Update Schema** was not confirmed at that time.

* Clicking **OK** applies the change to the table forcefully. **Existing data in the affected column(s) may be truncated or altered** — for example, reducing decimal precision will truncate any stored values beyond the new precision. Confirm this is acceptable, or back up/migrate the affected data first, before proceeding.  
* Clicking **Cancel** leaves the table unchanged. The metadata will continue to report the new definition (e.g. the new precision) even though the underlying table still uses the old one — this mismatch is silent and will resurface anywhere the discrepancy matters (e.g. UI display of decimal precision) until **Update Schema** is confirmed.

**Recommendation:** Always confirm **Update Schema** in the same session as a property type/precision change, so metadata and the physical schema never drift apart.

### Data Browser {#data-browser}

The test is used for create, read, update, and delete. These are four basic functions executed in relational database applications. 

![Screenshot 100](./img/image100.png)

Clicking on TEST will take you to the Result table that has been created with all the entity properties and their functionalities.

### Advance Search  {#advance-search}

In data browser dialog  “Advance Search” option is there which is helpful in searching the required data from the list of entries made in the entity.

**Step 1:** Click on advance search which will open a dialog. Click the add button to add an entry.  
![Screenshot 101](./img/image101.png)  
**Step 2:** Fill the property id along with the operator and the value to be searched.

![Screenshot 102](./img/image102.png)

**Step 3:** Use appropriate operators depending on the requirement.   
For ex: If data needs to be searched for any field which has multiple value then use “IN” operator.  
![Screenshot 103](./img/image103.png)

**Note:** If search parameters are needed to be saved then click on save button and provide an id.

### Delete ID Series {#delete-id-series}

To delete the ID series, follow the below steps:

**Step 1:** Open the Data Studio and select the entity in which you want to delete the id series.  
**Step 2:** Click on the right directional arrow and open the dialog that lists down all the id series.  
**Step 3:** Select the ID series which you want to delete.  
**![Screenshot 104](./img/image104.png)**

**Step 4:** Click on the delete button.  
**![Screenshot 105](./img/image105.png)**

**Step 5:** Close the dialog and click on save.

### Delete Entity Property {#delete-entity-property}

For deleting entity property, follow the below steps:

**Step 1:** Open the Data Studio and select the entity in which you want to delete the property.

**Step 2:** Click on the **Properties** tab and select the properties which you want to delete.

![Screenshot 106](./img/image106.png)

**Step 3:** Click on the **Delete** button shown in the properties tab toolbar.

**Step 4:** Click on the **Save** button.

### Delete an Entity {#delete-an-entity}

**For deleting an entity, follow these steps:**

**Step 1:** Open the Data Studio and select the app in which you want to delete the entity.

**Step 2:** Select the entity from the left tree which you want to delete. You can select the entity by clicking on the entity name in the tree. Once an entity is selected, it will enable the detail section.

![Screenshot 107](./img/image107.png)

**Step 3:** Click on the **Edit** icon in the editor toolbar if the editor is not in editable mode, then click the **delete** icon.   
![Screenshot 108](./img/image108.png)

Select **OK** in the confirmation dialog.  
	 		![Screenshot 109](./img/image109.png)

**Step 4:** Click on the **Save** icon to save the changes and commit it to the DB.  
![Screenshot 110](./img/image110.png)

## 3.0.2. Query / KloQuery {#3.0.2.-query-/-kloquery}

kloQuery is a metamodel for fetching the data from the data store, like SQL in RDBMS. For example, the entity (table) name “d\_order” has multiple columns including “s\_status”. To fetch all the records for open order in RDBMS need SQL as “Select ord\_id, qty, ord\_date from d\_order WHERE d\_order.status \= ‘open’ Orderby ord\_date ASC” and execute to get the desired result.

kloQuery behaves similarly with a few value-added services, it gives the ability to fetch the data seamlessly for both offline and online applications. Abstracts out multiple syntaxes of Odata, SQL, JSON, etc. so that programmers can concentrate on the business logic. It gives a few short-hand optimizations like pagination column selection. Security features like authorization etc.

### Create New Query {#create-new-query}

To create a new query, follow the following steps:

**Step 1:** Once the editor is loaded and you have selected the app under which the query has to be created, click on the entity from the tree in which you want to create the question.

![Screenshot 111](./img/image111.png)

**Step 2:** Click on the **Create** button in the left tree and select **Query** from the menu.

**Step 3:** Fill in the query ID in the input field. Make sure the entity selected should be pre-filled. This query will be added to the specified entity.  
Make sure you click on the query from the tree once it's created. As it will open the detail section for the query.

![Screenshot 112](./img/image112.png)

For naming convention please refer [here](https://docs.google.com/document/d/1HW3ZrXBFRF6LBArUTebvnR6UwtrzrLVE_0WEcnOQAuI/edit).

**Step 4:** Once on the query detail page, fill in the required fields like app mode, query type, db selection, and query type. Click [here](#2.2.2.1.-detail) to learn more about each of these.

### Add Query Property {#add-query-property}

**Step 1:** Click on the **Properties** tab in the query detail section. And then click on the add **(+)** icon.

**Step 2:** Fill in the required data such as property ID, property type, domain, length, and other required details.

**Step 3:** Once done with maintaining all data, click on save to persist all data.  
![Screenshot 110](./img/image110.png)  
**Step 4:** There are multiple tabs, click [here](#2.2.2.-query-detail) to learn more about each of the sections in detail.  
Once the above steps are completed, the query is ready to use.

### Delete Query Property {#delete-query-property}

For deleting a query property, follow these steps:

**Step 1:** Open the Data Studio and select the **query** in which you want to delete the property.

**Step 2:** Click on the **Properties** tab and select the properties which you want to delete.

**Step 3:** Click the Delete button in the properties tab toolbar. Click on **Delete** if it asks for a confirmation.

**Step 4:** Click on the **Save** button.

### Entity and Joins {#entity-and-joins}

The entity and joins tab is used to join two or more entities with the help of the **JOIN** clause.  
To join two or more entities, follow these steps:

**Step 1:** Click on the Entity and Join tab in the query detail section. Click on add icon(**\+**)  
![Screenshot 113](./img/image113.png)  
**Step 2:** After clicking the add icon(+), A pop comes to select the root entity (entity to which we are applying the join). Select the root entity and its relation (not mandatory. Only if you want to join the root entity’s relation)  
![Screenshot 114](./img/image114.png)  
**Step 3:** Select the required **Join Type.**  
				**![Screenshot 115](./img/image115.png)**  
**Step 4:** Click on **Save** button

### Delete a Query {#delete-a-query}

To delete a query, follow these steps:

**Step 1:** Open the Data Studio and select the **app** in which you want to delete the query.

**Step 2:** Select the query from the left tree which you want to delete. You can select the query by clicking on the query name in the tree. Once the query is selected, it will enable the **detail section.**

**Step 3:** Click on the **Edit** icon in the editor toolbar if the editor is not in editable mode, then click the delete icon. Select **OK** in the confirmation dialog.

**Step 4:** Click on the **Save** icon to save the changes and commit them to the DB.

## 3.0.3 Value Help {#3.0.3-value-help}

In the Application, ID/key is frequently used to store the related data and at the same time in the user interface, descriptive explanation is required. To achieve it, the ID/key is represented by other single/ multiple data from the related table. Value help is also used to supply the choices available to fill (combo, dropdown, auto-complete) as selection data. Value help can restrict accepting the input value only from valid sets.

### Create Value Help {#create-value-help}

**Step 1:** Select the **entity** from the tree in which you want to create the value help. 

**Step 2:** Click on the **Value Help** option from the menu and fill in the **Value Help ID**.

**Step 3:** Click on **Create** and then click on the newly created value help from the left tree. This will load the detail section for that value help.

![Screenshot 116](./img/image116.png)

**Step 4:** Fill out all the information in the detail section and click on **Save** to save all the data. For more information about each of the fields refer to [this section](#2.2.3-value-help-detail).

### Create VH Trans {#create-vh-trans}

**Step 1:** Select the **entity** from the tree in which you want to create the VH Trans. 

**Step 2:** Click on the **Value Help** option from the menu.

**Step 3**: Fill in the **Value Help ID** and **Value Help Type** as VH\_TRANSACTION.  
			**![Screenshot 117](./img/image117.png)**  
**Step 4:** Click on **Create** and then click on the newly created value help from the left tree. This will load the detail section for that value help.  
Fill out all the required fields.  
![Screenshot 118](./img/image118.png)

**Step 5:** Click on the **add icon** in the **Vh Trans** field to add vh trans items  
![Screenshot 119](./img/image119.png)  
**Note**: If we provide **is Dependent** as true then one more field will get added inside the **VH Trans** section.  
Fill out the fields according to your requirements. The descriptions for the fields are explained below:

* **Key:** The key is  your VH Trans Item ID  
* **Display Text:** Display text value will display the provided text as the value help item.  
* **Icon:** The provided icon will also be displayed with the display text  
* **Dependent:** If a VH Trans item has any dependent value then provide that value to the **dependent** field. Wherever the dependent item will render, The VH trans item will also render along with that.  
* **Lang:** It is a language field for your VH item.

**Step 6:** Click on **save** button to save your vh transaction.

###  

**Step 1:** Select the **entity** from the tree in which you want to create the VH Trans. 

**Step 2:** Click on the **Value Help** option from the menu.

**Step 3**: Fill in the **Value Help ID** and **Value Help Type** as VH\_CONFIG  
			![Screenshot 120](./img/image120.png)

**Step 4:** Click on **Create** and then click on the newly created value help from the left tree. This will load the detail section for that value help.  
Fill out all the required fields.  
![Screenshot 121](./img/image121.png)

**Step 5:** Click on the **add icon** in the **Vh Config** field to add Vh config items.  
![Screenshot 122](./img/image122.png)  
Fill out the **key** and **Display Text** field according to your requirements.

**Step 6:** Click on **save** button to save your vh config.

**Creating data using Excel Upload:**

**Step 1:** Select the value help and click on the Download button. It will excel template.  
Open that excel file in google sheets.  
![Screenshot 123](./img/image123.png)

**Step 2:**  Fill the rows with data the user wants to create and download the excel file  
![Screenshot 124](./img/image124.png)

**Step 3:** Upload the excel file using the Upload button and select the excel file. It will create the mentioned data and save  
![Screenshot 125](./img/image125.png)

### Delete Value Help {#delete-value-help}

For deleting a value help, follow these steps:

**Step 1:** Open the Data Studio and select the **app** in which you want to delete the value help.

**Step 2:** Select the value help from the left tree which you want to delete. You can select the value help by clicking on the value help name in the tree. Once the VH is selected, it will enable the **detail** **section**.

**Step 3:** Click on the **Edit** icon in the editor toolbar if the editor is not in editable mode, then click the delete icon. Select **OK** in the confirmation dialog.

**Step 4:** Click on the **Save** icon to save the changes and commit it to the DB.

## 4.0 Permissions {#4.0-permissions}

Permissions is a feature provided to control the access to application resources. By default an application user can access any entity of the application and perform CRUD operation if enabled. To control the access, CRUD permissions can be enabled at entity level and appropriate permissions can be granted to selected users.  
For more information regarding Permissions refer the below sheet:  
[Permissions \- User Guide](https://docs.google.com/document/d/1LrdiK4cKTTItwJZRUUyfu9sO744EfMzW7vYsbTj4zss/edit?usp=sharing)

### How to Enable Permissions: {#how-to-enable-permissions:}

**Step 1:** Go to Data Studio, select any flavor and select any entity and select “Access Control” tab  
![Screenshot 126](./img/image126.png)

**Step 2:** Click on Edit and turn on the flags as per needed for “Create”, “Read”, “Update”, “Delete”  
![Screenshot 127](./img/image127.png)

**Step 3:** Navigate to Permissions screen by clicking on the below link  
![Screenshot 128](./img/image128.png)

## 5.0 Row Wise Authorization {#5.0-row-wise-authorization}

Row wise authorization is a security feature provided by a framework with which access to entity data can be restricted to selective row items on user level. By default, when a simple select query is fired on any entity, it returns all data that is present in the entity. But, by enabling and configuring row wise authorization on an entity, the list of records accessible to any user can be controlled using access tokens.

### How to Enable Row Wise Authorization: {#how-to-enable-row-wise-authorization:}

**Step 1:** Enable the Row Wise Authorization flag.

**Step 2:** Click on add button which will create a new line item.  
![Screenshot 129](./img/image129.png)  
**Step 3:** Fill the id which is the primary key, access key and then click on the property column icon to add properties.

**Step 4:** Now a dialog will come which will contain all the properties which have been added, by default it will be empty. Now click on add button

**Step 5:** Now select all the properties which need to be added as properties and click on add button

**Step 6:** If sequencing needs to be changed then drag and drop can be done and then click on OK

**Step 7:** Now save the data and a popup will come mentioning if the user wants to recalculate access token, click on OK to continue