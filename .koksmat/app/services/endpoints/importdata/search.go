/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.search.v2
package importdata

import (
    "log"

    "github.com/magicbutton/magic-apps/applogic"
    "github.com/magicbutton/magic-apps/database"
    "github.com/magicbutton/magic-apps/services/models/importdatamodel"
    . "github.com/magicbutton/magic-apps/utils"
)

func ImportDataSearch(query string) (*Page[importdatamodel.ImportData], error) {
    log.Println("Calling ImportDatasearch")

    return applogic.Search[database.ImportData, importdatamodel.ImportData]("name", query, applogic.MapImportDataOutgoing)

}
