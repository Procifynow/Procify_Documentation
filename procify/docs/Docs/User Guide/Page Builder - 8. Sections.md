---
sidebar_position: 708
sidebar_label: "Sections"
title: "Page Builder — Sections"
---

# Page Builder — Sections

Sections are the building blocks of the pages. The page can have multiple sections, and the sections are embedded in a page Area. The detail of which section should be rendered for a page Area will be maintained in the page Area’s Layout data section.

## 6.1. Section Creation: {#6.1.-section-creation:}

| Step 1 \- Add a Page Section to the page  To add a new section, right-click on the page area, and a context menu will appear. Go to the option New. You will find Section control.  |
| ----- |
| A section will be added to the page under the sections.  **Note:**We can rename it but make sure the new name should be unique  among other section Ids.  |
| **Step 2 \- Add a Section to the Page Area or to the  Layout** After creating a section,  add the section to the pageArea. Select the pageArea, then right-click, you will get a menu context, click on **New,** and then on **Assign.**   |
|    |
| A popup will appear. Select our newly created section from the popup as shown: Section layout will be added to your page area. |

**Step 2:** A successful drag-and-drop section will be added to the page under the sections.

**Note**: It will show a warning message on saving a section without a path.

## 6.2. Screentype {#6.2.-screentype}

#### **CardList** {#cardlist}

Screentype cardlist is generally a **sap.m.Table** with one column.

##### CardList Config {#cardlist-config}

Config properties are used to set the behaviour of the cardList. Refer to this [link](https://sdk.openui5.org/1.102.7/#/api/sap.m.Table%23controlProperties) to learn more about cardlist config properties.

**Adding config to a cardList section**

**Step 1:** Right-click by selecting the cardlist section.

**Step 2:** Click New and select and click on Config.

**Step 3:** CardList config will be added for the section.

**Note**: If we are adding config properties, the value of the properties should not be empty. 	

#### 

#### **Card:** {#card:}

A screen-type card is a single CSS grid that can hold a single entity.

**Note:**On adding checkbox type of control for card or cardlist screen type, dsrc property should not be maintained, otherwise it will show labels along with the checkbox.To bind with a data source, we can use the ‘selected’ property.

#### **Map:**  {#map:}

A screen-type map is used to display the locations on the map screen. For how to use it you can refer to this [document](https://docs.google.com/document/u/0/d/1IUy3WBQ5zoaCCJsu8a-WQ6A_HAxer2tUROu6nspY_ac/edit).

**Note:** for loading the map in full h[kloControls 7.0](https://docs.google.com/document/u/0/d/1IUy3WBQ5zoaCCJsu8a-WQ6A_HAxer2tUROu6nspY_ac/edit)eight, place the section inside the page area of type ‘fit to Area’, and also add the layout property ‘autoHeight’ as true.

**Adding config to a Map section:** 

Refer to the same steps as mentioned in the Cardlist or grid.

#### **Calendar:**  {#calendar:}

A calendar is a set of working and non-working days specified for a particular time interval. This includes holidays and special periods underlying the organisation’s calendar. For how to use it you can refer to this [document](https://docs.google.com/document/u/0/d/1IUy3WBQ5zoaCCJsu8a-WQ6A_HAxer2tUROu6nspY_ac/edit). 

**Adding config to Calendar section:** 

Refer to the same steps as mentioned in the Cardlist or grid.

#### **Multi Calendar:**  {#multi-calendar:}

Displays rows with appointments for different entities (such as persons or teams) for the selected time interval. For how to use it you can refer to this [document](https://docs.google.com/document/u/0/d/1IUy3WBQ5zoaCCJsu8a-WQ6A_HAxer2tUROu6nspY_ac/edit). 

**Adding config to Multi Calendar section:** 

Refer to the same steps as mentioned in the Cardlist or grid.

#### **Form** {#form}

Screen Type form is generally a simple ui5 form. 

**Note:** If you want to customise/configure form then with the following way we can do that:

**Step 1:** Add config to the form type section: click on the form type subscreen click on ‘**New**’ and then click on ‘**add config**’

**:**

In the Page Builder, the F4 value help for the **`columnSpan`** property displays options "All" and "None".

* **All**: Displays all available entries without filtering.  
* **None**: No filtering criteria applied, showing all possible values.

**Step 2:** Now add the **‘density’** property to the **‘form config’.**

| NAME | TYPE | DEFAULT VALUE | DESCRIPTION |
| :---- | :---- | :---- | :---- |
| **density** | string | default | Specifies whether the form needs to be displayed in default or compact mode |

**Step 3:** Now add value to the property. It has two values: **compact** and **default**.

In **compact** mode, the labels take the entire column width and shift above the controls.

In **default** mode, the labels appear beside its control.

**Form in compact mode:**

**![Screenshot](./img/page-builder-image79.png)**

**Form in default mode:**

**![Screenshot](./img/page-builder-image80.png)**

#### **Grid** {#grid}

Screen Type grid is generally a **sap. ui.Table**.

##### Grid Config {#grid-config}

Config properties are used to set the behaviour of the grid. Refer to this [link](https://sdk.openui5.org/1.102.7/#/api/sap.ui.table.Table%23controlProperties) to learn more about grid config properties.

**Note**: If we are adding config properties, then  the value of the properties should not be empty. 

**Adding config to a grid section**

**Step 1:** Right-click by selecting the grid section.

                 


**Step 2:** Click New and select and click on Config.

	

**Step 3:** Grid config will be added for the section.

**Note**: If we are adding config properties, then the value of the properties should not be empty. 

#### **Timeline** {#timeline}

A timeline is a screen type of section that is used for showing the timeline of any order/process. A common use case is to provide information about changes to an object, or events related to an object.

##### Timeline Config {#timeline-config}

Config properties are used to set the behaviour of the timeline. Refer below table to learn more about timeline config properties.

##### Add Config to a Timeline section {#add-config-to-a-timeline-section}

**Step 1:** Add config to the Timeline type section: Right-click on the timeline type subscreen then click on ‘**New**’ and then click on ‘**add config**’.

**Step 2:** Timeline config will be added for the section.

![Screenshot](./img/page-builder-image81.png)config for 

**Note**: If we are adding config properties, then  the value of the properties should not be empty. 

| NAME | TYPE | DEFAULT VALUE | DESCRIPTION |
| :---- | :---- | :---- | :---- |
| **displayShape** | string | Circle | Specifies whether the shape of the timeline will be a circle or shape. |
| **displaySize** | string | XS | Specifies the size of the timeline. |
| **backgroundColor** | string | Accent6 | This property specifies the background color of the timeline. |

![Screenshot](./img/page-builder-image82.png)

#### 

#### **Tree** {#tree}

The Tree Screen Type is designed to represent hierarchical data in a structured manner. It allows users to visualize relationships between parent and child nodes, making it ideal for displaying nested information such as organisational charts, file systems, or any other hierarchical datasets.

**Implementation:**

##### Data Preparation: {#data-preparation:}

To prepare the data for a Tree Screen Type, we will use a JSON format that represents the hierarchical structure. Here’s a sample JSON array:  
\[{  
            "key\_01": "value\_1",  
            "key\_02": "value\_2",  
            "key\_03": "value\_3",  
            "child": \[{  
                "key\_01": "value\_11",  
                "key\_02": "value\_22",  
                "key\_03": "value\_33",  
                "child": \[{  
                    "key\_01": "value\_111",  
                    "key\_02": "value\_222",  
                    "key\_03": "value\_333",  
                    "child": \[{  
                        "key\_01": "value\_1111",  
                        "key\_02": "value\_2222",  
                        "key\_03": "value\_3333",  
                    }\]  
                }\]  
            }\]  
        }\]

**JSON Structure**

* Each object represents a node in the tree.

* The child array holds nested objects, representing the child nodes.

* Key names for child nodes are consistent with parent nodes, ensuring a clear relationship.

We will store the data in other type transnode.  
![Screenshot](./img/page-builder-image83.png)

##### Screen: {#screen:}

Step 1:

Create one pageArea with screentype, fit\_to\_area and a section with screentype, tree.

In the section layout, add one property autoHeight as true. This ensures that the section dynamically adjusts its height based on the content displayed.

Step 2: Create an other type transnode.   
![Screenshot](./img/page-builder-image84.png)

Step 3: Add Controls for Data Binding

* Create controls within the section for each key in your JSON data (key\_01, key\_02, key\_03).

* Bind the section to the other type transnode that contains the hierarchical JSON data.


* Ensure that each control is correctly bound to the corresponding key in the JSON structure.


Now after previewing the screen,it will look like : 

![Screenshot](./img/page-builder-image85.png)

#### 

## 6.3. Context Menu:  {#6.3.-context-menu:}

Right-click by selecting the section.

| Menu Items | Description |
| :---- | :---- |
| Copy | On click it will copy the section |
| Paste | On click it will paste the copied item to the section |
| Rename | On click it will display a popup to rename the section |
| Delete | On Click it will delete the section |
| New | **Controls:** on Click it will display a popup to add a new control **Config:** on Click it will add a config for the selected section **Toolbar:** onClick it will add a section\_toolbar to the section **Excel Config:** [KloSectionXlsx5.7](https://docs.google.com/document/d/1B-RpsA8P3mVDNlCEFm4aFFdRRper5QKg/edit) **Report:**  |
| Preview | On Click, it will preview the selected sections. In the Preview section of Page Builder |

**Note**: If we are adding config properties, the value of the properties should not be empty. 

#### **Copy Paste across tab** {#copy-paste-across-tab}

One can copy elements from a tab and paste them into another tab. Previously, this option was not available. Copy-paste across tabs will work only with different screens (in any app).

Refer to this document to know how to use it [Copy-paste Across Tabs](https://docs.google.com/document/d/1HkitaCZ7YWOGaFare6BIveCQfnWJNoRy/edit)

## 6.4 Section Events: {#6.4-section-events:}

### 6.4.1 onSectionEnter {#6.4.1-onsectionenter}

This event will be triggered on each navigation to the section where this event is registered. The event handler should be in controller and name of method should be specified in method field of added event in “Events” tab:

![Screenshot](./img/page-builder-image86.png)

### 6.4.1 onSubscreenEnter {#6.4.1-onsubscreenenter}

This event will be triggered on first navigation to the section where this event is registered. The event handler should be in controller and name of method should be specified in method field of added event in “Events” tab:

![Screenshot](./img/page-builder-image87.png)
