---
layout: doc
title: 'ADR001: Choosing Golang and cdk8s for Levis'
description: Architecture Decision Record (ADR) for Choosing Viper and Cobra for Levis
prev:
  text: 'ADR001: Architecture Decision Record(ADR) log'
  link: '/contrib/adr/adr001-add-adr-log'
next:
  text: 'ADR003: Choose Viper and Cobra'
  link: '/contrib/adr/adr003-choose-viper-and-cobra'
---

# ADR002: Choosing Golang and cdk8s for Levis

## Context

The Levis project aims to create a tool that converts YAML files into Kubernetes manifests. To achieve this, we needed to select a programming language and a library that would allow us to efficiently manage and generate Kubernetes resources. Several options were considered, including Python with K8s libraries, JavaScript with Kubernetes-client, and Golang with cdk8s. Key considerations included performance, community support, ease of use, and maintainability.

## Decision

We have decided to use Golang as the primary programming language and cdk8s as the library for managing Kubernetes resources in the Levis project.

- `Golang`: We will use Golang because it offers strong performance, a statically typed language that is well-suited for building CLI tools, and has excellent concurrency support which is beneficial for handling multiple tasks efficiently. Additionally, Golang has a robust standard library and a growing ecosystem.

- `cdk8s`: We will use cdk8s (Cloud Development Kit for Kubernetes) as it provides a higher level of abstraction for Kubernetes resources, allowing us to define Kubernetes manifests using code. cdk8s integrates seamlessly with Golang, enabling us to leverage familiar programming constructs to manage Kubernetes resources.

## Consequences

### Positive Consequences
- **Performance:** Using Golang ensures that Levis will be performant and capable of handling large-scale operations efficiently.
- **Community and Ecosystem:** Golang has a strong and growing community, providing a wealth of libraries, tools, and support that can be leveraged in the project.
- **Abstraction and Flexibility:** cdk8s allows us to define Kubernetes resources using code, providing flexibility and reducing the complexity associated with managing raw YAML files.
- **Maintainability:** The combination of Golang and cdk8s leads to cleaner and more maintainable code, as we can use modern development practices and benefit from type safety.

### Negative Consequences
- **Learning Curve:** Team members unfamiliar with Golang or cdk8s may face a learning curve, which could slow down initial development.
Tooling: The project may require additional tooling and setup compared to more commonly used languages for Kubernetes management, such as Python.

### Neutral Consequences
- **Adoption:** While Golang is becoming increasingly popular, its adoption is still lower compared to more established languages like Python. This may have neutral effects on hiring and community support.

By making this decision, we aim to build a robust, efficient, and maintainable tool that meets the needs of our users while leveraging modern technologies and practices.
