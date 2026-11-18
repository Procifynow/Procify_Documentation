---
sidebar_position: 602
sidebar_label: "Pre-requisites"
title: "Middleware Message Forwarding — Pre-requisites"
---

# Middleware Message Forwarding — Pre-requisites

### *Application Architecture Requirements*

#### *Multi-Flavor Setup*

*✅ You must have multiple flavors (source and target flavors)*

*✅ Both source and target flavors must be deployed and accessible*

*✅ Flavors should share common entities that require message sync*

#### *Entity Design*

*✅ Target Entity: Must exist with identical entity name and table name*

*✅ Target Entity: Must have ENDPOINT\_RESOLVER event configured with proper implementation*

### *Access and Permissions*

#### *Administrative Access*

*✅ Access to **Operations Monitor** application for configuration*

*✅ Permissions to create/modify Middleware Message Routing entries*

*✅ Message monitoring access for troubleshooting and monitoring*

#### *Development Environment*

*✅ Private node setup with DEV landscape (for testing)*

*✅ Access to both source and target flavor codebases*

*✅ Debugging capabilities in development environment*

### *Technical Prerequisites*

#### *Message Processing Infrastructure*

*✅ Message processing must be functional*

#### *Monitoring Tools*

*✅ Message Monitoring screen access for tracking forwarded messages*

*✅ Queue Monitor for viewing message queues and error queues*

*✅ Log access for troubleshooting and debugging*

### *Knowledge Requirements*

#### *Development Team*

*✅ Understanding of entity event implementation (ENDPOINT\_RESOLVER)*

*✅ Familiarity with addEndpoint() method usage*

*✅ Knowledge of message queue and processing*

*✅ Experience with multi-flavor application development*

#### *Configuration Team*

*✅ Understanding of flavor versioning and deployment*

*✅ Knowledge of landscape management (DEV/TEST/PROD)*

*✅ Familiarity with Operations Monitor configuration tools*
