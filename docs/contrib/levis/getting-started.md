---
outline: deep
title: 'Contribution to Levis'
description: Contribution to Levis
---

# Contribution to Levis
Welcome to the Levis execuable file Contribution Guide! This section will walk you through the step-by-step process of setting up your development environment and contributing to the Levis execuable file. You'll find detailed instructions on how to add new features, fix bugs, and improve the existing codebase. Let's get started on making Levis even better!

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

### Install Cobra
```bash
go get -u github.com/spf13/cobra@latest
```

### Install Cobra CLI
```bash
 go install github.com/spf13/cobra-cli@latest
```
for more information about `Cobra`: [Link](https://github.com/spf13/cobra)

### Install Viper
```bash
go get github.com/spf13/viper
```
for more information about `Viper`: [Link](https://github.com/spf13/viper)

### Setup Pre-Commit
```bash
pre-commit install
```
You can check the rule of `pre-commit` in this [configuration](../../.pre-commit-config.yaml) file
