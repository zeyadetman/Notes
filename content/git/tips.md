---
title: "Git Tips & Tricks"
---

## Ignore files changes in git locally

- **You can ignore files from the worktree** 
`git update-index --skip-worktree [files]`
- **Remove files from ignoring**
`git update-index --no-skip-worktree [files]`
- **To list the files you've added before**
`git ls-files -v . | grep "^S"`

To understand this line: 
- https://git-scm.com/docs/git-ls-files
- https://stackoverflow.com/a/42363882/5721245
