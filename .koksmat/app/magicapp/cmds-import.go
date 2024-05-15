package magicapp

import (
	"log"

	"github.com/magicbutton/magic-apps/utils"
	"github.com/spf13/cobra"
)

func RegisterImportCmd() {
	listCmd := &cobra.Command{
		Use:     "import filename",
		Short:   "Import data to the database",
		Example: `magic-files import /path/to/file`,

		Run: func(cmd *cobra.Command, args []string) {
			_, err := ImportFiles(args[0])
			if err != nil {
				log.Fatalln(err)
			}

		},
	}
	utils.RootCmd.AddCommand(listCmd)
}
