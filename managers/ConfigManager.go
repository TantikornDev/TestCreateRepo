package managers

import (
	"fmt"
	"log"

	"github.com/jumpbox-academy/levis/models"
	"github.com/jumpbox-academy/levis/models/k8s"
	"github.com/spf13/viper"
)

func DeploymentConfigParse(path string) k8s.Deployment {
	configuration := getLevisConfigFromYaml(path) // "./examples/levis.yaml"

	return createDeploymentModel(configuration.Levis)
}

func getLevisConfigFromYaml(path string) models.Configuration {
	viper.SetConfigFile(path)
	viper.AutomaticEnv()

	err := viper.ReadInConfig()
	if err != nil {
		panic(fmt.Errorf("fatal error config file: %s \n", err))
	}

	// fmt.Println(viper.GetString("levis.name"))
	// fmt.Printf("%s \n", viper.GetString("levis.deployment.containers.image"))

	var configuration models.Configuration
	err = viper.Unmarshal(&configuration)
	if err != nil {
		log.Fatalf("unable to decode into struct, %v", err)
	}
	// fmt.Println("conf: ", configuration.Levis.Name)
	return configuration
}

func createDeploymentModel(levis models.Levis) k8s.Deployment {

	name := levis.Name

	labels := map[string]string{
		"app": "nginx",
	}

	containers := []k8s.Container{
		{
			Metadata: k8s.Metadata{
				Name:        name,
				Namespace:   "default",
				Annotations: labels,
				Labels:      labels,
			},
			Name:            name,
			Image:           levis.Deployment.Containers.Image,
			ImagePullPolicy: "Always",
		},
	}

	pod := k8s.Pod{
		Containers: containers,
	}

	return k8s.Deployment{
		ApiVersion: "app/v1",
		Kind:       "Deployment",
		Metadata: k8s.Metadata{
			Name:        name,
			Namespace:   "default",
			Annotations: labels,
			Labels:      labels,
		},
		Template: pod,
	}
}
