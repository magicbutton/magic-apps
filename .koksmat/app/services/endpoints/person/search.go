/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: true
---
*/
//generator:  noma3
package person

import (
	"log"

	"github.com/magicbutton/magic-apps/applogic"
	"github.com/magicbutton/magic-apps/database"
	"github.com/magicbutton/magic-apps/services/models/personmodel"
	. "github.com/magicbutton/magic-apps/utils"
)

func PersonSearch(query string) (*Page[personmodel.Person], error) {
	log.Println("Calling PersonSearch")

	return applogic.Search[database.Person, personmodel.Person]("name", query, applogic.MapPersonOutgoing)

}
