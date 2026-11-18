---
sidebar_position: 707
sidebar_label: "Page Area"
title: "Page Builder — Page Area"
---

# Page Builder — Page Area

The Page area is the next level in the page hierarchy after the Page Layout. Page areas are embedded with the pagelayout. The detail of the page Area that needs to be rendered for the page area will be maintained in the Page Layout’s Layout Data section.

As the page area also has [layouting](#12.0.-layouting) types, supported layouting types are object page Layout, tab, goto, stack, grid layout, and splitter layout. Layout type will be maintained in the screetype property of the Page Layout.

## 5.1. Page Area Creation {#5.1.-page-area-creation}

| Step 1 \- Add Page Area Control to Page To add a new page Area, right-click on the page, and a context menu will appear. Go to the option New. You will find Page Area control. ![Screenshot](./img/page-builder-image76.png) Click on it and a new page area will be added to your page.  Note : We can rename it by a right click on the newly created pageArea and select  the  option Rename (ensure that the new Id given should be unique among other pageArea Ids).  |
| ----- |
|  |
| **Step 2 \- Set the new Page Area** Right-click on the newly added page layout and a menu context will appear. Go to New and select the option **Assign**.   |
| **Step 3 \- Select the Layout Section** A popup will appear when you click on the ValueHelp.    |
| **Step 4 \- Add the PageArea to your layout** Another popup will appear. Select the newly created pageArea from the popup as shown below:   PageArea layout and the newly created page Area will be added to your layout.  Under Page Area layout properties you can make the necessary changes required.   |

## 5.2. Assign PageArea/Section: {#5.2.-assign-pagearea/section:}

In the page area, we can assign the section/page area that needs to be rendered under the selected page area.

**![Screenshot](./img/page-builder-image77.png)**

## 5.3. Context Menu: {#5.3.-context-menu:}

Right-click by selecting the pageArea to view the context menu. 

	![Screenshot](./img/page-builder-image78.png)

| Menu Items | Description |
| :---- | :---- |
| Copy | On click, it will copy the pageArea |
| Paste | On click, it will paste the copied item to the pageArea |
| Rename | On click, it will display a popup to rename the pageArea |
| Delete | On Click it will delete the pageArea |
| New | **New Section:** On Click it will create a new section. **Embedded Section**: On click, it will create a new embedded section. **Config:** On Click it will add a config for the selected pageArea **Toolbar:** OnClick it will add a section\_toolbar to the pageArea **Assign:**  On click, it will open a popup to assign a new  section to it.   |
| Preview | On click, it will preview the particular pageArea. |

**Note**: If we are adding config properties, the values of the properties should not be empty.
