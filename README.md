# levis

Levis is a binary tool designed to simplify the deployment process for users who don’t need to focus on the complexities of Kubernetes objects. Levis allows users to deploy their applications effortlessly

**For example:**

you can generate Kubernetes Manifest via a simple `yaml` file
1. Create `levis.yaml` configuration
```yaml
levis:
  deployment:
    containers:
      image: "nginx"
      port: 80
```

2. generate Kubernetes Manifest via `levis create` command
```bash
levis create -f levis.yaml
```

## Step by Step Instruction for creation this repository
[Creation Instruction](./docs/instuction.md)

## How to contribute
1. install `pre-commit`
```bash
    brew install pre-commit
```
**install lib `goimports`**
```bash
    go install golang.org/x/tools/cmd/goimports@latest
    go install github.com/golangci/golangci-lint/cmd/golangci-lint@v1.58.1
```

2. install `commitlint` **( if require permission use `sudo` )**
```bash
    npm install -g @commitlint/cli @commitlint/config-conventional
```
3. active `pre-commit` configuration
```bash
    pre-commit install
```

## Contributing

We welcome community contributions and pull requests. See our [contribution
guide](./CONTRIBUTING.md) for more information on how to report issues, set up a
development environment and submit code.

## License
This project is distributed under the [MPLv2, Copyright (c) 2024 Jumpbox Co., Ltd.](./LICENSE)
