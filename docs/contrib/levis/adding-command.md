---
outline: deep
title: 'How to add Command or Sub-command'
description: How to add Command or Sub-command
---

# How to add Command or Sub-command
This guide provides step-by-step instructions on how to add a new command to the Levis binary using the `Cobra CLI` library.

Let's say we created the `Levis` executable file and if you want to add `command` or `sub-command` to `Levis` executable. like this:

**Syntax**
```bash
$ levis <command> <sub-command>
```

**Command**
```bash
$ levis create
$ levis create -f <param>
```

**Sub Command**
```
$ levis <>
$ levis config create
```

In your project directory (where your main.go file is) you would run the following:

```
cobra-cli add serve
cobra-cli add config
cobra-cli add create -p 'configCmd'
```

## Adding a Command to Levis Using Cobra CLI

## Step 1: Install Cobra CLI
First, ensure you have the Cobra CLI installed. You can install it using the following command:
```bash
go install github.com/spf13/cobra-cli@latest
```

## Step 2: Create a New Command
To add a new command, use the Cobra CLI to generate the command file. For example, to create a command called create, run:
```bash
cobra-cli add create
```
This command will generate a new file in the cmd directory called create.go.

## Step 3: Implement the Command Logic
Open the newly created create.go file in your preferred code editor and implement the logic for your command. Here’s an example:


```go
package cmd

import (
    "fmt"
    "github.com/spf13/cobra"
)

// createCmd represents the create command
var createCmd = &cobra.Command{
    Use:   "create",
    Short: "A brief description of your command",
    Long:  `A longer description that spans multiple lines and likely contains examples and usage of using your command.`,
    Run: func(cmd *cobra.Command, args []string) {
        fmt.Println("create called")
    },
}

func init() {
    rootCmd.AddCommand(createCmd)

    // Here you will define your flags and configuration settings.
    // Cobra supports Persistent Flags, which, if defined here,
    // will be global for your application.
    // createCmd.PersistentFlags().String("foo", "", "A help for foo")

    // Cobra also supports local flags, which will only run
    // when this action is called directly.
    // createCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
```

## Step 4: Build and Test Your Command
Build your project to ensure there are no errors:

```bash
go build
Then, run your new command to test it:
```

```bash
./levis create
```
You should see the output "create called".

Step 5: Refer to the Original Documentation
For more detailed information and advanced usage of the Cobra CLI, please refer to the official Cobra CLI documentation.


-------
you can use the Cobra generator to
add additional commands to your application. The command to do this is `cobra-cli add`.
