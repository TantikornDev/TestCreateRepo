/*
Copyright © 2024 Jumpbox <admin@jumpbox.co>
*/
package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

const FIRST_ARGUMENT = 0

// createCmd represents the create command
var createCmd = &cobra.Command{
	Use:   "create",
	Args:  cobra.MaximumNArgs(1),
	Short: "converts the Levis configuration (levis.yaml) file into Kubernetes manifests",
	Long: `
Converts the specified YAML file into Kubernetes manifests, simplifying application deployment.

For example:

	levis create -f levis.yaml

`,
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("create called: ", args[FIRST_ARGUMENT])
	},
}

func init() {
	rootCmd.AddCommand(createCmd)
	createCmd.Flags().BoolP("file", "f", false, "levis config file")
	err := createCmd.MarkFlagRequired("file")
	if err != nil {
		fmt.Println("createCmd MarkFlagRequired Error:", err)
	}
}
