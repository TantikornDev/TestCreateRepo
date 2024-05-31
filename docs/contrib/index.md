---
outline: deep
title: 'Contribution to Levis'
description: Contribution to Levis
---

# Contribution to Levis
We're on a mission to make Levis the go-to toolbox for generating Kubernetes manifests. Imagine it as the Kubernetes for developer experience. This is a big goal, and we can't do it without you!

We invite you to join our vibrant community of contributors. Every contribution counts and is highly valued. Your efforts help create an exceptional developer experience. Contributions are always recognized and appreciated. ❤️

Be part of something big, and let's build the future of open-source infrastructure together!

If you need help, just jump into our [email](mailto:levis.tools@gmail.com)

## Overview
Thank you again! for your interest in contributing to Levis! This document is divided into two sections to guide you through the process of contributing to both the `Levis` execuable file and the `Levis website`. Follow the step-by-step instructions to get started.

1. Implementing Levis
In this section, you will find detailed steps to implement and develop the Levis execuable file. Whether you are adding new features, fixing bugs, or improving the existing codebase, this guide will help you set up your development environment and contribute effectively. If you're interested in contributing, please refer to the detailed guide at [Levis Contribution Guide](./levis/getting-started).

2. Implementing the Levis Website
This section provides a comprehensive guide to implementing and developing the Levis website. From setting up the project to deploying updates, these steps will help you contribute to the website’s development, ensuring it is informative and user-friendly. If you're interested in contributing, please refer to the detailed guide at [Levis Website Contribution Guide](./web/getting-started).

## Repository Structure

### Levis
```bash
levis
├── ...
├── docs
├── examples
├── cmd
│   ├── create.go
│   ├── root.go
│   └── version.go
├── imports
├── main.go
└── ...
```

### Levis Website
```bash
levis
├── ...
├── docs
└── pages
```
please refer to the detailed structure at [Levis Repository Structure](./structure).

## Licensing

This repository is under the same license as MPLv2. You can find the full text of each license in the `LICENSE` files in this repository.


## Submitting a pull request
One PR should contain only
- one feature
- fixed bugs
- refactor

so the reviewer can focus only on list above also this will keep PR in a reasonable size to review.


## Commit message
For the commit message, use the following format: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#specification)


## Steps to contribute

<!-- ![how to contribute flow diagram](assets/images/how-to-contribute.png) -->

### 1. Create an Issue
[Create a new issue](https://github.com/jumpbox-academy/levis/issues/new). Please describe details of what you want to do. You can see [our previous issues](https://github.com/jumpbox-academy/levis/issues) as examples. Create an issue is easy; make it simple. When you have an idea, create it. It does not need to be perfect from the start. (Try type `g i` and then `c` with your keyboard.)

### 2. Make a Discussion
Let you, the admin team, and other members a chance to make conversation on the issue topic:

  - Discuss solutions and alternatives. Two heads are better than one.
  - From the discussion, we may prevent duplicate or unnecessary works that save your valuable time later.
  - Ask any questions that you want people to help.
  - Let people know in advance what you are going to do is always a good idea.

Once things ready, set `Assignees` to a member who wishes to work on the issue. It can be either the issue's creator or anyone else. And you can remove `help wanted` label, if any.

> These first two steps are not required in all scenarios, but we encourage you because more collaboration makes things better and more enjoyable.✨

### 3. Open a Pull Request
- Fork this repository to your own GitHub account and then clone it to your local machine.
- Create a new branch, name it to what you are going to change/add. Please use `kebab-case` naming.
  ```sh
  git checkout -b your-branch-name
  ```
- Start your work, commit the code.
- Push your changes to your origin.
  ```sh
  git push origin -u your-branch-name
  ```

- Create a new Pull Request (PR) targeting the `main` branch of `levis`

### 4. Review and Complete the Work
- Waiting for reviewing. Push more commits if needed to fix your work from pull request feedback.
  ```sh
  git push
  ```
- A pull request needs at least one careful approval before anyone can merge to `main` branch. Then it will automatically deploy to the server.
