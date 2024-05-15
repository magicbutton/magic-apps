/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.create.v2
package application

import (
    "log"

    "github.com/magicbutton/magic-apps/applogic"
    "github.com/magicbutton/magic-apps/database"
    "github.com/magicbutton/magic-apps/services/models/applicationmodel"

)

func ApplicationCreate(item applicationmodel.Application) (*applicationmodel.Application, error) {
    log.Println("Calling Applicationcreate")

    return applogic.Create[database.Application, applicationmodel.Application](item, applogic.MapApplicationIncoming, applogic.MapApplicationOutgoing)

}
