# Instruction

## Initialize this project
1. create levis repository in github: `https://github.com/jumpbox-academy/levis.git`

2. clone repository via git clone

3. develop the project via `develop` branch by `git checkout -b develop` command

4. create this project via command
```bash
go mod init github.com/jumpbox-academy/levis
```

5. create `cdk8s.yaml` file
```yaml
language: go
app: go run .
imports:
  - k8s
```

6. run `cdk8s import` or `cdk8s import cdk8s.yaml` command
7. test by example coding via `main.go` shown below:
```go
package main

import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/cdk8s-team/cdk8s-core-go/cdk8s/v2"
	"github.com/jumpbox-academy/levis/imports/k8s"
)

func NewChart(scope constructs.Construct, id string, ns string, appLabel string) cdk8s.Chart {

	chart := cdk8s.NewChart(scope, jsii.String(id), &cdk8s.ChartProps{
		Namespace: jsii.String(ns),
	})

	labels := map[string]*string{
		"app": jsii.String(appLabel),
	}

	k8s.NewKubeDeployment(chart, jsii.String("deployment"), &k8s.KubeDeploymentProps{
		Spec: &k8s.DeploymentSpec{
			Replicas: jsii.Number(3),
			Selector: &k8s.LabelSelector{
				MatchLabels: &labels,
			},
			Template: &k8s.PodTemplateSpec{
				Metadata: &k8s.ObjectMeta{
					Labels: &labels,
				},
				Spec: &k8s.PodSpec{
					Containers: &[]*k8s.Container{{
						Name:  jsii.String("app-container"),
						Image: jsii.String("nginx:1.19.10"),
						Ports: &[]*k8s.ContainerPort{{
							ContainerPort: jsii.Number(80),
						}},
					}},
				},
			},
		},
	})

	return chart
}

func main() {
	app := cdk8s.NewApp(nil)

	NewChart(app, "getting-started", "default", "my-app")

	app.Synth()
}
```

8. testing via `go run main.go`

9. fix your own and enjoys!!!
