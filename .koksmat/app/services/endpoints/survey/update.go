/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.update.v2
package survey

import (
    "log"

    "github.com/magicbutton/magic-apps/applogic"
    "github.com/magicbutton/magic-apps/database"
    "github.com/magicbutton/magic-apps/services/models/surveymodel"

)

func SurveyUpdate(item surveymodel.Survey) (*surveymodel.Survey, error) {
    log.Println("Calling Surveyupdate")

    return applogic.Update[database.Survey, surveymodel.Survey](item.ID,item, applogic.MapSurveyIncoming, applogic.MapSurveyOutgoing)

}
