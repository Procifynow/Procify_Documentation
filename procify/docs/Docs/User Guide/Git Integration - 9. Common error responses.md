---
sidebar_position: 309
sidebar_label: "Common error responses"
title: "Git Integration — Common error responses"
---

# Git Integration — Common error responses

### Q: Checkout Not Working for Git-Configured Apps

A: Open a new **Command Prompt (CMD)** window and verify the configured Git username and email:

git config \--global user.name  
git config \--global user.email

If no values are returned, configure them using:

git config \--global user.name "Your Name"  
git config \--global user.email "your.email@example.com"

After configuring the Git user details, retry the checkout operation.

### Q: A newly created controller/entity/query/rules file works in the Private Node but the screen fails to load ("module not found") after Build & Deploy

A: The file was created but never committed/pushed to the configured Git repository. Build & Deploy sources these file types exclusively from Git, so a file that exists only in the app is not present in the build output. Commit and push the file (even with just its initial template) to the configured branch, then re-run Build & Deploy. If the file is no longer needed, delete it from within Klobase so the stale entry is cleaned up — otherwise the same error recurs on every build.
