# CDShort

![Vercel](https://vercelbadge.vercel.app/api/reharri7/cdshort)

# Table of Contents

 1. [Overview](#overview)
 2. [Prerequisites](#prerequisites)
 3. [Getting started with Git](#getting-started-with-git)
 4. [Starting this project](#starting-this-project)
 5. [Useful Commands](#useful-commands-and-their-descriptions)
 6. [Contributing](#contributing)
 7. [Chain of Command](#chain-of-command)
 8. [Git WorkFlow](#git-flow)
 9. [Git Cheatsheet](#git-cheatsheet)
 10. [Other Resources](#other-resources)

## Overview

Our official CodeDevils URL shortener, LinkTree clone, and CodeDevil resumé board all in one! This will be a place to get quick information about The CodeDevils Organization and its members that are job seeking. It will also allow CodeDevils members to create their own short links!

## Prerequisites

* Install NodeJS (latest LTS version): <https://nodejs.org/en/download/>
* Install Angular `npm i @angular/cli`
* Install Firebase `npm i firebase`
* Install Ionic `npm i @ionic/cli`

## Getting started with Git

 1. Run `git clone https://github.com/reharri7/cdshort.git`

## Starting this project

 1. In your terminal, navigate to the directory of the project
 2. Run `npm start`
 3. Navigate in your browser to `localhost:4200`

## Useful commands and their descriptions

TODO

# Contributing

This document plans to outline the following for _all_ contributors of the CDShort project. Please follow these guidelines to the best of your knowledge and understanding, and feel free to message `@reharri7` in the CodeDevils Slack workspace if you have any questions or need help!

## Chain of Command

The CDShort project manager is Rhett Harrison ([@reharri7](https://github.com/reharri7)). They control the day-to-day operation of this project, with oversight and policy dictated by the CodeDevil Officers.

> To see your CodeDevil officers, visit the  `#about`  channel of the CodeDevils Slack workspace.

# Git Flow

Overall, the Git flow is mostly laidback. You, as a contributor, have lots of wiggle room to make your own inputs in your commits to this repo. Forking is not necessary - use the origin repo's branches for your own code bases. You have full control over your own development branches and Git flow. That said, there are some general guidelines you need to follow.

## Personal Branch

This is your own branch. You can call it whatever you want locally and push it into the remote repository. Your working commits will be on this branch and when you are ready to create a pull request (PR) for a specific GitHub issue you will use your personal branch for that PR.

## Main Branch

The  `main`  branch is the  _production code_  that CDShort is currently operating on. Whatever is in  `main`  is what will be on the internet. PRs from personal branches to  `main`  will  **require an approved code review from a project manager**.

## Contribution Requirements

Observe the following in your git flow:

* Make an Issue prior to working on your code. We don't want you to work on something that is actually banned or already implemented!
* Your personal development branches must start with your name and be consistent. E.g.,  `bobby-dev`,  `bobby-new-feature-here`
* Though there is no limit to the number of reviewers you request, your pull requests to  `main`  **must**  at least include  **a project manager**.
* Comment in your code following the functionality and process within it.

## Workflow examples

### Marlee's Quick Patch (Simple)

> My name is Marlee, and I noticed a mispelling in the README.
>
> I would create a GitHub issue for this, then create a branch called  `marlee-hotfix`, make the correction, then submit a pull request to  `main`  making sure to request review from  [@reharri7](https://github.com/reharri7).

Good job Marlee!

### Clyde & Darryl's Calendar (Collab)

> My name is Clyde, and I'm working with Darryl on a sweet new command that allows something to do with calendars.
>
> I would create a GitHub issue for the new feature, then checkout a new branch entitled  `calendar-dev`, acting as the default branch for the calendar between Darryl and I, making sure to keep it updated with  `main`. Darryl and I would then have our own branches whatever we want to call them following the guideline, say  `darryl-calendar`  and  `clyde-dev`. We push and pull from  `calendar-dev`  for development.
>
> When our cool new command is done,  _making sure to pull  `calendar-dev`  from  `main`  so that there are not merge conflicts_, I would then make a pull request on  `main`. Billy-Bob is good with calendars, so I would like his review too. I would request review from  `@BillyBobUSA`  along with a project manager such as  [@reharri7](https://github.com/reharri7).

Nicely done!

# Git Cheatsheet

## Checkout Existing Branch

```
git checkout existing-branch

```

## Checkout a New Branch

```
git checkout -B your-new-branch

```

## Push to Repo

```
git push origin destination-branch

```

Pro tip: add  `-u`  to skip the naming of the branch in future pushes.

## Update Current Branch from Repo

```
git fetch && git pull

```

## Update Current Branch from Target Branch

```
git fetch ; git merge target-branch

```

Use Case: Your development branch (current branch) is behind  `dev`  and you want to update your branch with the code from  `dev`  (or some other target branch).

## Other Resources

* Installing Git:  [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* Git Basics:  [https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
* GitHub - Creating a Pull Request:  [https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
