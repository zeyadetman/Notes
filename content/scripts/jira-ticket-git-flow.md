---
title: "Create a branch from jira ticket and push changes to it"
---

# Create a branch from jira ticket and push changes to it.

### Create a branch from jira ticket and push changes to it.

https://twitter.com/zeyadelmarsafy/status/1483423110774861825

**Code:**

```
#!bin/bash

pushit () {
    echo "Getting data...";
    jira issue list -a"Zeyad" -s"IN PROGRESS";
    echo "\nPlease enter ticket id: "
    read id;
    echo "\n"
    desc=$(jira issue list -q "key = $id" --plain);
    A=$(awk -F"$id" '{print $2}' <<< $desc)
    B=$(awk -F"In Progress" '{print $1}' <<< $A | xargs echo -n)
    commitMessage="$id: $B"
    echo "\n$commitMessage"
    echo "Pushing and committing...\n"
    git checkout -b $id
    git add .
    git commit -m "$commitMessage"
    git push origin $id

}

pushit

