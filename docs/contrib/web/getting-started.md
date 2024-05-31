---
outline: deep
title: 'Contribution to Levis Website'
description: Contribution to Levis Website
---

# Contribution to Levis Website
Welcome to the Levis Website Contribution Guide! In this section, you'll learn how to set up your development environment and contribute to the Levis website. Whether you're adding new content, improving the design, or fixing issues, these step-by-step instructions will help you make valuable contributions to ensure the website is informative and user-friendly. Let's begin enhancing the Levis website together!

## Get Started!

Ready to dive in? Let’s make it happen! 🚀🔥

### Cloning the Repository

Ok. So you're gonna want some code right? Go ahead and fork the repository into your own GitHub account and clone that code to your local machine. GitHub's [Fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo) documentation has a great step by step guide if you are not sure how to do this.

If you cloned a fork, you can add the upstream dependency like so:

```bash
git remote add upstream git@github.com:jumpbox-academy/levis
git pull upstream main
```

After you have cloned the Levis repository, you should run the following commands once to set things up for development:

**Install bun.sh via** [Link](https://bun.sh/) **or**

**MacOs**
```bash
curl -fsSL https://bun.sh/install | bash
```

**Windows**
```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```
Note: When writing this document, Bun v1.1.9 was being used.

**Let's go ahead**

```bash
cd levis/docs  # change to root directory of project
bun install  # fetch dependency packages - may take a while
```

## How to develop this document
```bash
$ bun run docs:dev
```

## How to Build
```bash
$ bun run docs:build
```

## How to Test on `Preview Mode`
```bash
$ bun run docs:preview
```

Note: in section `How to Build` and `How to Test on Preview Mode` use for testing of publishing Levis webiste in your local environment.
