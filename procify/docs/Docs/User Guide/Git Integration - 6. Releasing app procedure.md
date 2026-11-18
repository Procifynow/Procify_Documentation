---
sidebar_position: 306
sidebar_label: "Releasing app procedure"
title: "Git Integration — Releasing app procedure"
---

# Git Integration — Releasing app procedure

Before releasing an app create a tag in that app via private node and push it to origin ( can be done via following ways:

git tag \-a 1-0-1 \-m "Releasing  1-0-1"  
git push origin 1-0-1 

Now go to Workspace Hub and click on edit and add this tag there 1-0-1  
Click on verify to check if tag is already there, now click on save and then you can release

Note: never add that tag if you are not going to release that app  
(while build it will take data till that tag only), make sure that git tag is created after last commit in that repository.
