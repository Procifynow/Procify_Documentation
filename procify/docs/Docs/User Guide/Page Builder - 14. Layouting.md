---
sidebar_position: 714
sidebar_label: "Layouting"
title: "Page Builder — Layouting"
---

# Page Builder — Layouting

## 12.1. Flexible\_col (Deprecated, Use Two Column Pagelayout Instead): {#12.1.-flexible_col-(deprecated,-use-two-column-pagelayout-instead):}

All the page Area ID(s) provided in the page’s layout section will implement the master-detail-detail paradigm by displaying up to three pages (page Areas) in separate columns. For a Flexible column layout, only three columns will be rendered, if more than three layout containers are provided in the layout section it will take the first three layout containers/sections.

#### **Configuration:** {#configuration:}

* For using the flexible column layout, select the screenType of a pageLayout as **flexi\_column**.  
* In the layout section of that pageLayout add the layouts.  
* The setLayout() method was used in Flexible Column to define the layout width. As Flexible Column is now deprecated, it is recommended to use **setFirstColumnWidth()** in pagelayout type Two Column to configure column widths.

**Example:**

Flexible\_col one Column Expanded

![Screenshot](./img/page-builder-image90.png)

Flexible\_col two Column Expanded

![Screenshot](./img/page-builder-image91.png)

Flexible\_col three Column Expanded

![Screenshot](./img/page-builder-image92.png)

## 12.2 Two Column {#12.2-two-column}

It is similar to a flexible column. The only difference is that it can only implement the master-detail paradigm up to two pages only. And also unlike a flexible column it provides a horizontal splitter between the two pages..

#### **Configuration:** {#configuration:-1}

* For using the two column layout, select the screenType of a pageLayout as **two\_column**.

* Assign pages and sections.

* Use **setFirstColumnWidth()** to configure column widths.

two\_column  one Column Expanded

![Screenshot](./img/page-builder-image93.png)

two\_column  two Column Expanded

![Screenshot](./img/page-builder-image94.png)

## 12.3. Stack {#12.3.-stack}

Stack is a layout structure where the required elements show up one by one on a particular action based on the given metadata. 

#### **Configuration:** {#configuration:-2}

* For using the stack layout, select the screenType of pageLayout / PageArea as stack.


**Example:**

We have a pageLayout of screentype stack:

Stack will render only one layoutSubscreen at a time. As a default, the first layoutSubscreen is rendered.

**![Screenshot](./img/page-builder-image95.png)**

When it is navigated to the second layoutsubscreen it hides the first one & displays the pageArea it is navigated to.

**![Screenshot](./img/page-builder-image96.png)**

## 12.4. Tab {#12.4.-tab}

Tab Layout represents a collection of tabs with associated content. The number of tabs rendered will be equal to the number of section/section  container ID(s)  given in the layout Data section. The tab title will be taken from the section/page Area’s title property, the tab title will only be visible if the flags are maintained in the layout data section and the showTitle property is marked as true.

#### **Configuration:** {#configuration:-3}

* For using the tab layout, select the screenType of pageLayout / PageArea as tab.  
* In the detail section,  mark the **showTitle** as **true**.


  

* After adding the showTitle as true, in the layout section. For the layouts added (pageArea / section ) add the property **showTitle** and **title**, provide the values.


  

**Note:** selectedKey reflects the currently active tab/section — it is not a one-time "default tab" setting. If bound to a data field, the Tab control will always show whichever tab that field currently holds, and will keep showing it on subsequent loads/refreshes unless the field's value is explicitly reset. If the supplied key doesn't match any tab/section currently rendered, the control falls back to another available tab instead of forcing the configured one. To always land users on the same section regardless of prior state, drive it explicitly through navigation rather than relying on selectedKey alone.

### 12.4.1. Tab with section, subscreen and header {#12.4.1.-tab-with-section,-subscreen-and-header}

Now similar to the object page, it is possible in the tab also to create a header for title content and sections, subsections for block contents.	

**Configuration:**

* Select the screenType of PageLayout / PageArea as the tab.

* Add the type of PageAreas  / sections as header, section or subsection.  
* 

It will reflect on screen as:

## 12.5. Object Page: {#12.5.-object-page:}

The object page layout is composed of a header (title and content), and blocks content that's wrapped in sections and subsections that structure the information.

#### **Configuration:** {#configuration:-4}

* For using the Object Page Layout(OPL), select the screenType of pageLayout / PageArea as the object page.  
* In the detail section of the pageLayout / pageArea add the respective types for the layouts. Types are given below:  
  * Header  
  * Section  
  * Subsection.

  		

**Note:** If the object page layout needs to be rendered as an iconTabBar, mark the iconTabBar option as true in the layout section.

	

## 12.6. Hsplitter {#12.6.-hsplitter}

All the section ID(s) provided in the page Area’s layout section field will be horizontally split into equal columns. The columns can be resizable.

#### **Configuration:** {#configuration:-5}

* For using the hsplitter layout, select the screenType of pageLayout / PageArea as hsplitter.  
* In the layout section of the pageLayout / pageArea add the layouts.


#### **Examples:** {#examples:}

![Screenshot](./img/page-builder-image97.png)

## 12.7. Vsplitter {#12.7.-vsplitter}

All the section ID(s) provided in the page Area’s layout section field will be vertically split into equal columns. The columns can be resizable.

#### **Configuration:** {#configuration:-6}

* For using the vsplitter layout, select the screenType of pageLayout / PageArea as vsplitter.  
* In the layout section of the pageLayout / pageArea add the layouts.

#### **Examples:** {#examples:-1}

![Screenshot](./img/page-builder-image98.png)

## 12.8. Default: {#12.8.-default:}

Default will section/pageArea provided in the layout will be rendered in a single page one by one.

**Note:** If screenType is not maintained it will consider it as a default.

#### **Configuration:** {#configuration:-7}

	

#### **Examples:** {#examples:-2}

## 12.9. Grid Layout: {#12.9.-grid-layout:}

Page layout / page Area of type grid\_layout / css grid is similar to the section type card / card list. In grid layout we have to provide the modeller details for the layout, the layout sections / PA will render accordingly

#### **Configuration:** {#configuration:-8}

	

**Modeller Details**

Step 1: Preview the page Area  / page layout

Step 2 : By selecting the PA / PL select the modeller tab in the detail section.

Step 3 : in the modeller click on the icon(refer the below image) to open the grid modeller

Step 4 : in the grid modeller popup provide the span details for the respective screen size

#### **Examples:** {#examples:-3}

In the below example we are having a two page area’s under the css grid type page layout, and we have provided the modeller configurations as below

Based on the modeller data the page will be rendered as below

## 12.10. Dialog: {#12.10.-dialog:}

Using the Dialog type container we can render the sections / PA inside the popup / dialog

#### **Configuration:** {#configuration:-9}

#### **Footer Buttons:** {#footer-buttons:}

If any footer button is needed for the dialog, add the kloAction control for the pageArea’s section toolbar.

#### **API** {#api}

To open the container as a dialog we have  to use the below API

![Screenshot](./img/page-builder-image99.png)

To close the dialog container we have to use the below API

![Screenshot](./img/page-builder-image100.png)

## 12.11. Tiles: {#12.11.-tiles:}

Page area  of type Tile will clone the child section based on the number of the entities in entityset and display it as tiles. Refer [tile](https://docs.google.com/document/d/1IUy3WBQ5zoaCCJsu8a-WQ6A_HAxer2tUROu6nspY_ac/edit#heading=h.t7li91ljyzty) for more information

#### **Configuration:** {#configuration:-10}

Step 1 : select the screen type as ‘tiles’ for the page area

Step 2 : select the path for the page area (path should to transnode type entityset)

Step 3 : Assign  a section(section type which supports entity like form, card) for the pageArea

Examples:

## 12.12. Auto\_Default {#12.12.-auto_default}

Page Area with screentype as auto\_default, it will work differently for desktop and mobile screens.

For **desktop**, screentype will be **Popup** and for **mobile** the same PageArea will be shown as **stack**.

#### **Configuration:** {#configuration:-11}

* Select the screentype of pageArea as auto\_default.  
* Assign a section to the PageArea.


  

## 12.13. Auto\_flex {#12.13.-auto_flex}

Page Area with screentype as auto\_flex, it will work differently for desktop and mobile screens.

For **desktop**, screentype will be **two\_column** and for **mobile**, the same PageArea will be shown as **stack**.

#### **Configuration:** {#configuration:-12}

* Select the screentype of pageArea as auto\_flex.  
* Assign a section  to the PageArea.
