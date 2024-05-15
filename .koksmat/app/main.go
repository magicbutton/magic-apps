package main

import (
	"runtime/debug"
	"strings"

	"github.com/magicbutton/magic-apps/magicapp"
	"github.com/magicbutton/magic-apps/utils"
)

func main() {
	info, _ := debug.ReadBuildInfo()

	// split info.Main.Path by / and get the last element
	s1 := strings.Split(info.Main.Path, "/")
	name := s1[len(s1)-1]
	description := `---
title: magic-apps
description: Describe the main purpose of this kitchen
---

# magic-apps
`
	utils.Setup(".env")
	magicapp.RegisterServeCmd("magic-apps", description, "0.0.1", 8080)
	magicapp.RegisterCmds()
	magicapp.RegisterServiceCmd()
	magicapp.RegisterSQLCmd()
	magicapp.RegisterImportCmd()
	utils.RootCmd.PersistentFlags().BoolVarP(&utils.Verbose, "verbose", "v", false, "verbose output")

	magicapp.Execute(name, "magic-apps", "")
}
