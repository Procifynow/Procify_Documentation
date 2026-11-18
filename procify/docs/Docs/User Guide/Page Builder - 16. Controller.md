---
sidebar_position: 716
sidebar_label: "Controller"
title: "Page Builder — Controller"
---

# Page Builder — Controller

## 14.1. Hook Methods: {#14.1.-hook-methods:}

#### **onPageInit** {#onpageinit}

onPageInit hook method will be called only once as soon as the controller is loaded

The transaction, model , and the UI is yet to be created for this, so those will not be available in this method.

#### **onPageModelReady** {#onpagemodelready}

onPageModelReady event will be called when the model is created and the transnodes are initialized, but the data is not set to the model yet.

From this hook method developer can call skipModelPreparation method which will skip setting the data and executing the query. If the developer skips the model preparation, then developer should be responsible for setting the data is the model

#### **onPageEnter** {#onpageenter}

onPageEnter hook method will be called whenever the page enters the visible area by means of navigation(both forward and backward navigation). 

If the navigation is within the same page, this method will not be triggered

#### **onPageExit:** {#onpageexit:}

onPageExit hook method will be called in the source page whenever the user navigates to a different page

**onPageDestroy:**

onPageDestroy hook method will be called only once when the page is destroyed.

Page will be destroyed during the back navigation

Example : if you are navigating back from PageB to pageA then PageB will be destroyed		

### 14.1.1. TransNode API: {#14.1.1.-transnode-api:}

Refer to this [link](https://docs.google.com/document/d/1iqEcu0WGWFdPYJpFbO5vEGaL3K1g5SBjZ7z8m4KyhE8/edit#heading=h.xm4l4na3l1d2) for TransNode API.

### 14.1.2. Navigation API: {#14.1.2.-navigation-api:}

Refer to this [link](https://docs.google.com/document/d/1iqEcu0WGWFdPYJpFbO5vEGaL3K1g5SBjZ7z8m4KyhE8/edit) for navigation API.
