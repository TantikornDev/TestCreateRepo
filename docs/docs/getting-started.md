---
outline: deep
---

# Getting Started

Levis is a binary tool designed to simplify the deployment process for users who don’t need to focus on the complexities of Kubernetes objects. By reading YAML files and converting them into Kubernetes manifests using the cdk8s library, Levis allows users to deploy their applications effortlessly. This tool addresses the need for a straightforward deployment solution, enabling users to concentrate on their applications rather than the intricacies of Kubernetes.

## Quick Usage Guide

```bash
Usage: levis create -f <name>.yaml -o <output-path>/<name>.yaml

Description:
  Converts the specified YAML file into Kubernetes manifests using the cdk8s library and saves the output to the specified path.

Options:
  -f <name>.yaml    Specifies the YAML file that contains the application configuration to be transformed.
  -o <output-path>/<name>.yaml    Specifies the output path where the generated Kubernetes manifests will be saved.
  -h                   Displays help information for the create command.
```

## Install
See the github page for the various ways you can install and use yq

## Known Issues / Missing Features
