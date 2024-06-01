---
layout: doc
title: 'ADR003: Choosing Viper and Cobra for Levis'
description: Architecture Decision Record (ADR) for [TITLE] [DESCRIPTION]
---

# ADR003: Choosing Viper and Cobra for Levis

## Context

The Levis project requires a robust and flexible system for managing configuration and creating command-line interfaces (CLI). The configuration management should support various formats and be easy to use, while the CLI should be user-friendly and extensible. After evaluating several options, including plain Golang flag packages, other CLI libraries, and configuration management libraries, we considered Viper and Cobra as the best fit for our needs.

## Decision

We have decided to use Viper for configuration management and Cobra for creating the CLI of the Levis project.

- `Viper`: We will use Viper because it provides a comprehensive solution for configuration management. Viper supports reading from JSON, TOML, YAML, HCL, and Java properties files, environment variables, and remote configuration systems. It also allows live watching and re-reading of config files, making it highly flexible and powerful.

- `Cobra`: We will use Cobra because it is a widely-used library for creating powerful and user-friendly command-line applications in Go. Cobra provides a simple and consistent way to define commands and flags, and it integrates seamlessly with Viper, making it easier to manage configuration and command execution.

## Consequences

### Positive Consequences
- **Flexibility and Power:** Viper allows us to manage configuration in multiple formats and sources, providing flexibility and robustness.
- **Ease of Use:** Both Viper and Cobra have straightforward APIs that are easy to use and well-documented, which reduces the development time and effort.
- **Integration:** The seamless integration between Viper and Cobra simplifies the process of managing configuration and command-line arguments, leading to cleaner and more maintainable code.
- **Extensibility:** Cobra's support for subcommands and nested commands allows us to build a complex CLI with minimal effort.

### Negative Consequences
- **Learning Curve:** Team members unfamiliar with Viper or Cobra may face a learning curve, which could slow down initial development.
Dependency Management: Introducing new dependencies may lead to potential issues with version compatibility and maintenance.

### Neutral Consequences
- **Community Support:** Both Viper and Cobra have strong community support and are widely adopted in the Go ecosystem, which may have neutral effects on hiring and external contributions.

By making this decision, we aim to build a robust, flexible, and maintainable CLI for the Levis project that meets the needs of our users and leverages modern development practices and tools.
