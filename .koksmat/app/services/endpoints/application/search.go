/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: true
---
*/
//generator:  noma3.search.v1
package application

import (
	"log"

	"github.com/magicbutton/magic-apps/applogic"
	"github.com/magicbutton/magic-apps/database"
	"github.com/magicbutton/magic-apps/services/models/applicationmodel"
	. "github.com/magicbutton/magic-apps/utils"
)

func ApplicationSearch(query string) (*Page[applicationmodel.Application], error) {
	log.Println("Calling Applicationsearch")

	return applogic.Search[database.Application, applicationmodel.Application]("name", query, applogic.MapApplicationOutgoing)

}
