/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.create.v2
package survey

import (
    "log"

    "github.com/magicbutton/magic-apps/applogic"
    "github.com/magicbutton/magic-apps/database"
    "github.com/magicbutton/magic-apps/services/models/surveymodel"

)

func SurveyCreate(item surveymodel.Survey) (*surveymodel.Survey, error) {
    log.Println("Calling Surveycreate")

    return applogic.Create[database.Survey, surveymodel.Survey](item, applogic.MapSurveyIncoming, applogic.MapSurveyOutgoing)

}
