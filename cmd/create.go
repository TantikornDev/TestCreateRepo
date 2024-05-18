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
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Create is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("create called: ", args[FIRST_ARGUMENT])
	},
}

func init() {
	rootCmd.AddCommand(createCmd)
	createCmd.Flags().BoolP("file", "f", false, "get levis config")
	err := createCmd.MarkFlagRequired("file")
	if err != nil {
		fmt.Println("createCmd MarkFlagRequired Error:", err)
	}
}
