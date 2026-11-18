---
sidebar_position: 603
sidebar_label: "How to enable the feature"
title: "Middleware Message Forwarding — How to enable the feature"
---

# Middleware Message Forwarding — How to enable the feature

### *Setting Up Flavor Mapping*

*To enable message forwarding, you need to configure mappings in the Mw Message Routing Screen in Operations Monitor:*

*Configuration Screen \- Mw Message Routing* 

*Access this screen through Operations Monitor \> Middleware Message Routing*

#### *Required Fields*

***Source Flavor:** The flavor where changes originate*

***Target Flavor:** The flavor that where the changes should be also be forwarded for message generation.*

***Is Active:** Set to true to enable forwarding*

***Target Version:** Only for DEV Specify a particular version of the target flavor. Use this for debugging purposes. In QA & Production, the latest version is used.*

##### *Configuration Steps*

1. *Open Operations Monitor application*  
2. *Navigate to "Middleware Message Routing"*  
3. *Click "Add New" to create a mapping*  
4. *Fill in Source Flavor and Target Flavor names*  
5. *Set "Is Active" to true*  
6. *Save the configuration*
