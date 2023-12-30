---
title: Copy Changed Files between git branches
---
## Intro
In some cases, [`cherry-pick`](https://git-scm.com/docs/git-cherry-pick) commits will be tough when you're working on a git project with a long history and a group of contributors. Conflicts may eat your time and focus leading you to a uncertainty action, or i mean action with no validation either it's wrong or right.

## Some situations could be solved with different solutions
The solution that will be introduced in this post is tailored specifically to some certain situations, just keep it in your mind, you may find it helpful to you someday.

1. Generate a file of the changed files by your fingers using your email
   
```bash
git log --author "YOUR_EMAIL" --oneline --pretty=format:%H | sort -u  | xargs -I {} git show --pretty=format: --name-only {} > changed_files.txt
```

The file will be something like this

```txt
path/file.txt
path/folder/file.ts
```

2. Create a new clone of the project with the destination branch.
3. Copy the files from the generated changed file to the destination repo, I use [`rsync`](https://man7.org/linux/man-pages/man1/rsync.1.html) instead of [`cp`](https://man7.org/linux/man-pages/man1/cp.1.html) to copy using the full path.

```bash
rsync -a --files-from=changed_files.txt . ../cloned-repo-destination-branch
```


> [!warning] The commands run on macOS, find the suitable command lines that do the same thing on your OS.


## Let's explain the terminal commands

- Log the commits hashes by specific author using its email
```bash
git log --author "YOUR_EMAIL" --oneline --pretty=format:%H
```

- Sort and Just pick the unique, we just need the changed files without repetition.
```bash
sort -u
```

- To show just the commit changed files we use this line
```bash
git show --pretty=format: --name-only "hash"
```

- Until then we have a list of commits hashes, we need to view the changed files in each commit. we will use [`xargs`](https://man7.org/linux/man-pages/man1/xargs.1.html) here to get the input from the prev commands using pipes
```bash
xargs -I {}
```


Some resources

- https://mpov.timmorgan.org/use-rsync-instead-of-cp/

> [!note] Use chatGPT to explain that more
> If you're still have questions, you can also share your thoughts with me, or use chatGPT to explain the commands more to you, also you can use google.

[[git]]