/*
Copyright © 2024 Jumpbox <admin@jumpbox.co>
*/

package models

type Configuration struct {
	Levis Levis
}

type Levis struct {
	Name       string
	Deployment Deployment
	Service    Service
}

type Deployment struct {
	Containers Containers
}

type Containers struct {
	Image string
	Port  int
}

type Service struct {
	Connection string
}
