---
sidebar_position: 705
sidebar_label: "Page"
title: "Page Builder — Page"
---

# Page Builder — Page

The page refers to the single visible screen of the application. The page is the topmost layer of an application. It will be embedded with a pageLayout.

## 3.1. Page Creation: {#3.1.-page-creation:}

| Create Blank Page: Step 1 \- Select the Add icon to create a Blank Page To create a new page click on the Add icon from the top toolbar. Three options will be shown, from those options select ‘Create Blank Page’. After selecting the option a popup will be displayed.  |
| ----- |
| **Step 2 \- Fill the popup to create a new page** In the popup, provide the ID and name/title for the new page. After providing the details, click on the **Submit** button.  |

**Note:** Newly created pages will be updated in the database only after saving. To save click on the save icon at the top toolbar (right side of the edit action button).

	

| Properties | Usage |
| :---- | :---- |
| Description | Description for the page. |
| leadentity |  **Coming Soon** |
| docid | The ID/text will be displayed along with the title (bindable). |
| icon | If value is provided, the icon will be displayed in front of the title. |
| navbyquery | In case user is navigating from a different page to the current page with passing the QP (Query Parameters) in navTo, then this field is mandatory to filter the data based on the query properties passed Example: **{“sourcePath”: “search”}** |
| navbykey | In case user is navigating from a different page to the current page with passing the D (entity unique key) in navTo, then this field is mandatory to set that particular entity’s index as active. Example: **{“sourcePath”: “list”}** |
| Pip enabled | If marked as true, picture-in-picture(PIP) mode will be enabled for the page. |
| screencontainerdefault | Default page Layout ID for the page can be provided here. |
| screencontainerdesktop | The page layout ID for the desktop can be provided here. |
| screencontainermobile | Page Layout ID for mobile can be provided here. |
| screencontainertab | Page Layout ID for the tab can be provided here |
| screenid | Not an editable field, displays the page ID. |
| title | The page name will be filled here, it will be the title for the page. |

#### 

#### **Create Page from Wizard:**  {#create-page-from-wizard:}

| Step 1 \- Select App and click on the Edit button  Step 2 \- Page selection Click on the add icon dropdown and select “Create a page from wizard”.  |
| ----- |
| **Step 2 \-  Provide page information** ![Screenshot](./img/page-builder-image57.png) Once the wizard popup is displayed, provide the screen information.  Select the Data Source and check whether Page ID, Page Title, Menu Text, Icon, or Menu Group is pre filled or not. Page Id, Page Title & Manu Text should be prefilled and will be Entity\`s description or entity\`s ID. Select the Data source (entity or query)  by clicking on the vh icon, and give page ID and Page title and Menu Information. By default, the entity id will be Page Title. Page Id should be unique in the particular app, if we are creating more than one pages with the same entity, the Page Id will be auto incremented by 01 as a suffix. Menu Group will come from the app header. We can provide a menu text and can select a group and icon to be displayed there  from the **Choose** button . It will update the page to the selected menu group. Menu Icon will come from Entity’s icon or default icon will come. Also we can allow operations by clicking on the icons provided: ![Screenshot](./img/page-builder-image58.png) This shows the options to perform CRUD in the main entity. These icons are for **Add, Edit, Delete, Multi Delete, Download Excel** operations respectively. By default all these icons are selected.  We can deselect them by simply clicking on the icons.  Click on **Next**. |
| **Step 3 \- Select the required section, relation, type, template, position and actions. ![Screenshot](./img/page-builder-image59.png)** The screen is displaying different requirements to select for all section types of each relation. **Relation:** It shows the return entity name along with the relationId of the entity. **Section:** It shows the type of section of the corresponding relations.  **Type:** It shows the screentype of the section that will be created using the relationid. **Display options:** It shows the different templates of the screentype. It depends on the Type selected for the section. **Position:** It shows the position of the sections in the application. Eg: If a relation has the Position as dialog, then it will appear as a dialog whenever    navigation happens to the section. **Required Actions:** It shows the option to perform CRUD in the corresponding section created from the relation.  We can select the **relation** required from the checkboxes displayed on the left most of the screen. **NOTE**: A 1:1 relation can be added **only as a Detail section** and is supported with **Form** and **Card** screen types. The section can be placed as a **Section or Subsection** on the page.Template Id  is supported as **Read Only**  and **Inline Editable**   Section **type** can be selected from the drop down for different sections (search, list and detail).  For List type of section, we can edit the **template** from the dropdown (Read Only, Inline Edit or Popup Edit) We can specify the **position** for sections as section(tab)  or subscreen or dialog. Actions can be provided to each section type by selecting the icons from **required actions**.(These are selected by default). The relations have a DND (Drag-and-drop) feature, if we are changing the sequence then the sections will also be generated accordingly. Template tab will not be there for wizard dialog. The detail  screen for all child entities will be opened in a popup. Template types:  **Read Only** It is non-editable. We will get an edit button for the detail tab only, not for relation list tabs. ![Screenshot](./img/page-builder-image60.png)  **Inline Edit**  We will get the Edit button for the selected tab in the relation list.  **Popup Edit** We will get an edit button in each  row of data.  Click on **Next** at the bottom of the screen. |
| **Step 4 \-** **Specify the availability of fields on screen  ![Screenshot](./img/page-builder-image61.png)** On navigating to the screen. all the properties of the lead entity & the selected relations will appear. All the properties will be selected for the detail section(if Detail is selected) & first 5 properties excluding the primary keys will be selected for the list(if List is selected). Select the required properties for the transnodes. Here, availability of fields can be specified on screen by clicking on the respective checkboxes for different sections (**Search**, **List** and **Detail**). On selecting the **navigation** icon, it will create a link for the property or field in the list  to navigate to the detail section. (Only one can be selected.) DND (Drag and Drop) features are available for the fields. The sequence will be arranged accordingly on the screen. If we are selecting any property in the search, it will be automatically selected in list and detail. If we are selecting any property in the list, it will be automatically selected in detail. At least one primary key must be selected. (Selected by default) Primary key selection is not mandatory in the search section.  **NOTE**: In the image, we have selected properties for **d\_no\_header.** In the same way you can select related entities (**d\_no\_users,** **d\_no\_tasks, d\_no\_item**) properties. To select properties for related entities, click on that entity and select its properties.  ![Screenshot](./img/page-builder-image62.png) The buttons are to go back to the previous screen, save as draft, save, and for discarding the page created respectively.  On click of the **save** button, the page will be created and saved.  On click of the **Preview** button, the page will be created but will not be saved. On Click of the **Discard** button the page will not be created and dialog will be closed  Now after specifying all required fields, click on **Save** button.  This will create and save  a new page. |
| **Note:** For list nodes, at least one primary key needs to be selected. |
|   |
| **After clicking on save, the page created from wizard will look similar to the image below.** ![Screenshot](./img/page-builder-image63.png) **NOTE**: Now we can do necessary changes from the Editor or can update the page from wizard also. The relation section name is taken from relation id ,hence the relation sections are created with similar name incremented by 01 as suffix  Refer to this [document](https://docs.google.com/document/d/1Uj0M0WQenfsxFwpkVlFEjrwTofbn4OY4I_x_9YuFF6U/edit?usp=sharing) for the tree hierarchy In **desktop** view, the list screen will look like this as shown below: ![Screenshot](./img/page-builder-image64.png) **After navigating to detail:** ![Screenshot](./img/page-builder-image65.png) Screens will be created for **mobile** view also. It's PageArea screentype will be **Tiles** and section screenType will be **card** in mobile view: ![Screenshot](./img/page-builder-image66.png) Button Configurations in screen: Buttons will be added separately for separate tabs and it will be based on the display options. ![Screenshot](./img/page-builder-image67.png) Buttons will appear at the top right corner. Save and Cancel buttons will be visible only in edit mode. If we want to switch between tabs without saving, it will show a popup. ![Screenshot](./img/page-builder-image68.png) Either edit or save button will be shown always. Scroll will start after the edit and save buttons. On selecting the multi delete button while page creation, it will allow you to select multiple items and delete at a time in the grid.  If the multi select delete button is not selected, then the delete button will not be visible  on the list type of section. Grid behaviour in the Relation Transnode  On click of the link in the relation list, it opens up the Popup in the same mode as that of the screen mode.     ![Screenshot](./img/page-builder-image69.png)   On click of the **PopupEdit** button of the grid of type **Popup Edit** grid, opens up the popup in the edit mode if the current screen mode is not in either **create** mode or **edit** mode.The next and previous buttons can be used to see the next and previous items details. With the click of the OK button, data modified will be saved and the popup will be closed.  On click of the Cancel button, the refreshTransnode api will be called which will call **refreshP BOL API** on the transnode data. (i.e., Changes will be reverted ) and the popup will be closed.   ![Screenshot](./img/page-builder-image70.png)  On click of the Add button in the toolbar, the popup opens in the Create mode. With a click of the OK button, data will not be saved,  as the previous mode is in create mode. On click of the Cancel button, the refrestTransnode api is called the refreshP BOL API on the transnode data and the popup will be closed.   **Change in Page Data model Structure** Now in the **Page Data Model**, there is no option to move entity properties from unused to used and transnodes will come in the hierarchy of the respective folded path. **Note:** If a parent transnode is getting deleted, then its respective child will be deleted as well.  Tags During wizard page creation, a default tag will be created to navigate to the detail page, this default tag can be used for deep link navigation.  ![Screenshot](./img/page-builder-image71.png)  **Update Page from Wizard:**  Developers can modify the screen created from Wizard using the **Update Page From Wizard** option.  All the elements selected during the creation of the screen will be auto-selected in the **Update Page From Wizard**. Example: Sequencing, adding, delete of properties/sections/layouts can be done using **Update Page From Wizard**.  It will reopen the  wizard popup with all provided screen information.  ![Screenshot](./img/page-builder-image72.png) Cardinality update when screen is created from wizard  If we are creating a page from wizard and it has relations with any particular cardinality. After page creation, if we are changing its cardinality from Data Studio,it will not be reflected on the UI automatically. We have to delete the transnodes manually and have to create them again. For Example: If the user is creating a wizard with 1:n relation and after creation, the cardinality of the relation will be  changed to 1::1 from the Data Studio and tries to update the page from wizard, before that the user have to delete the transnodes manually and have to recreate it again.  |

##### Deletion of a section or control {#deletion-of-a-section-or-control}

If we are deleting a section from Page Builder, it will be updated on wizard also:

* In the same way it will work for other sections.  
* If we delete any property from the Page Builder, it will be  deselected from the wizard popup also.  
* Anything we are changing from Page Builder, it will be reflected in the wizard popup.  
* In the screen we are deleting data from the parent entity, then it will delete all the entries from the child entity also.

#### **Make a copy of the page:**  {#make-a-copy-of-the-page:}

**Step 1:** Click on **‘Make a Copy of Page’** 

**Step 2:** After clicking on **‘Make a copy of page’** the below screen appears with all the details filled already. If you want then you can modify the detail as well.

![Screenshot](./img/page-builder-image73.png)

**Step 3:** Click on the submit button and the current page will be copied to the provided app.

**Note:** The above example was making a copy of a particular page in the same app. 

What if we are copying a  page in a different app and that app doesn’t have the associated entity?

If we are doing so then the Page Builder sends an alert message (“Entities/Queries are not found in the app. Do you still want to continue?”)

![Screenshot](./img/page-builder-image74.png)

 

**Note:** If we click on **OK** then the particular screen will get copied in the target app without a pagedata model. And if the target app contains the associated entity then the screen will render with all data.

## 3.2. Context Menu {#3.2.-context-menu}

Right-click by selecting the page:

| Menu Items | Description |
| :---- | :---- |
| Copy | On click, it will copy the Page. |
| Paste | On click, it will paste the copied item to the page. |
| New | **PageLayout:** On click, it will add a pageLayout to the page. **PageArea:** On click, it will add a pageArea to the page. **New Section:** On click, it will add a section to the page. **Embedded Section:** On click, it will add an embedded section to the page. **Action:** On click, it will add an action button to the page. |
| Show where used | On click, it will show the whereused list of the page |

#### **Copy page** {#copy-page}

Copying a page is done when the user wants the same page with a different page id or doesn't want to make changes to the original screen. 

Refer to this document to know how to use it [Copy](https://docs.google.com/document/d/1A33WmKgRPrkp9SRgiqhndGGll8r_O-6Q/edit#heading=h.gjdgxs) page
