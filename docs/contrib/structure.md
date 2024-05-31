
# Levis Repository Structure
The Levis repository is organized to facilitate ease of development, contribution, and documentation. Here is an overview of the main components and their purposes:

```go
levis
├── LICENSE
├── README.md
├── cdk8s.yaml
├── cmd
├── commitlint.config.js
├── examples
├── go.mod
├── go.sum
├── imports
├── main.go
├── managers
├── models
├── dist
├── node_modules
└── docs
```
## Directory and File Descriptions

### Levis Execuable file
|File/Directory | Description|
|--|--|
|LICENSE | Contains the licensing information for the Levis project.|
|README.md | Provides an overview of the project, including instructions on how to set up and use Levis.|
|cdk8s.yaml | Configuration file for cdk8s, specifying the project setup and dependencies.|
|cmd | Contains the command-line interface (CLI) commands for Levis. Each command is implemented as a separate Go file.|
|commitlint.config.js | Configuration file for commit message linting, ensuring consistent and conventional commit messages.|
|examples | Contains example configurations and usage scenarios for Levis, demonstrating how to use the tool effectively.|
|go.mod | The Go module file, which defines the module's path and its dependencies.|
|go.sum | The checksum file for Go modules, ensuring the integrity of dependencies.|
|imports | Directory for imported libraries and dependencies that are used within the project.|
|main.go | The main entry point for the Levis application, containing the primary logic for starting the application.|
|managers | Contains various manager packages that handle different functionalities of the application.|
|models | Defines the data models and structures used throughout the application.|
|*dist | Directory for distribution files. It typically contains built and compiled output files.|
|*node_modules | Directory for Node.js modules installed using the Bun package manager, containing project dependencies.|

Note:
- `*`: This symbol represent `generated file/folder` by library and ignored by .gitignore.

### Levis Website
|File/Directory | Description|
|--|--|
|docs | This directory contains the source files for the project documentation written using VitePress. These files are used to generate the static documentation site.|


**Levis Website Documentation with VitePress**

The docs directory is dedicated to documentation and is built using VitePress. The content in this directory is written in Markdown and provides detailed information on how to use and contribute to Levis. When the documentation is built using VitePress, the output is generated as a static site.

To run the documentation on `local`, you can run the following command:

```sh
cd docs && bun run bun run docs:dev
```

This command compiles the Markdown files in the docs directory into a static site, which is then run in the local for development.

please refer to the detailed [Levis Website Contribution](./web/getting-started).


## Summary
This repository structure is designed to keep the codebase organized and maintainable. Each directory and file serves a specific purpose, contributing to the overall functionality and documentation of the Levis project. By following this structure, contributors can easily navigate the project and make meaningful contributions.
