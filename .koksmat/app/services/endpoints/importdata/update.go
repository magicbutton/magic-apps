/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.update.v2
package importdata

import (
    "log"

    "github.com/magicbutton/magic-apps/applogic"
    "github.com/magicbutton/magic-apps/database"
    "github.com/magicbutton/magic-apps/services/models/importdatamodel"

)

func ImportDataUpdate(item importdatamodel.ImportData) (*importdatamodel.ImportData, error) {
    log.Println("Calling ImportDataupdate")

    return applogic.Update[database.ImportData, importdatamodel.ImportData](item.ID,item, applogic.MapImportDataIncoming, applogic.MapImportDataOutgoing)

}
