package managers

import (
	"fmt"
	"log"

	"github.com/jumpbox-academy/levis/models"
	"github.com/spf13/viper"
)

func DeploymentConfigParse(levis models.Levis) {

	viper.SetConfigFile("./examples/levis.yaml")
	viper.AutomaticEnv()

	err := viper.ReadInConfig()
	if err != nil {
		panic(fmt.Errorf("fatal error config file: %s \n", err))
	}

	fmt.Println(viper.GetString("levis.name"))
	fmt.Printf("%s \n", viper.GetString("levis.deployment.containers.image"))

	var configuration models.Configuration
	err = viper.Unmarshal(&configuration)
	if err != nil {
		log.Fatalf("unable to decode into struct, %v", err)
	}
	fmt.Println("conf: ", configuration.Levis.Name)

}
