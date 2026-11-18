---
sidebar_position: 305
sidebar_label: "Commit process"
title: "Git Integration — Commit process"
---

# Git Integration — Commit process

# *After successful checkout you can change your branch from vscode ui or by git commands:*

Note: by default it will checkout from branch which is configured, but there might be case that you don’t have valid access of that branch, so before doing any change checkout that branch.  
For gitconfigured flavors any change made will not show in existing button(commit All) so you can’t save your changes to public via that button, for committing your change to public commit to corresponding git branch 

> ⚠️ **Note — newly created files:** The above applies to changes to *existing* files. When you **create** a new file (controller / entity / query / rules / view), the Private Node save still records it in the app so it appears in your file explorer — but **Build & Deploy reads these file types only from your Git repository**, never from the app database. You must commit and push the new file to Git — even if it still holds just the initial template it was scaffolded with — **before** running Build & Deploy. Skipping this step causes the build to succeed with no warning, but the file will be missing from the deployed app, and the screen using it will fail to load at runtime.
