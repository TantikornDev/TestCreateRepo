package main

import (
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/aws/jsii-runtime-go"
	"github.com/cdk8s-team/cdk8s-core-go/cdk8s/v2"
	"github.com/jumpbox-academy/levis/imports/k8s"
)

func NewChart(scope constructs.Construct, id string, namespace string, appLabel string) cdk8s.Chart {

	chart := cdk8s.NewChart(scope, jsii.String(id), &cdk8s.ChartProps{
		Namespace: jsii.String(namespace),
	})

	labels := map[string]*string{
		"app": jsii.String(appLabel),
	}

	k8s.NewKubeDeployment(chart, jsii.String("deployment"), &k8s.KubeDeploymentProps{
		Spec: &k8s.DeploymentSpec{
			Replicas: jsii.Number(5),
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

	NewChart(app, "getting-started", "kai", "nginx")

	app.Synth()
}
