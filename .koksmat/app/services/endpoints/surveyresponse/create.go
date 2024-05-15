/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.create.v2
package surveyresponse

import (
    "log"

    "github.com/magicbutton/magic-apps/applogic"
    "github.com/magicbutton/magic-apps/database"
    "github.com/magicbutton/magic-apps/services/models/surveyresponsemodel"

)

func SurveyResponseCreate(item surveyresponsemodel.SurveyResponse) (*surveyresponsemodel.SurveyResponse, error) {
    log.Println("Calling SurveyResponsecreate")

    return applogic.Create[database.SurveyResponse, surveyresponsemodel.SurveyResponse](item, applogic.MapSurveyResponseIncoming, applogic.MapSurveyResponseOutgoing)

}
