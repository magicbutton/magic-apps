/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
//GenerateMapModel v1.1
package applogic
import (
	//"encoding/json"
	//"time"
	"github.com/magicbutton/magic-apps/database"
	"github.com/magicbutton/magic-apps/services/models/surveyresponsemodel"
   
)


func MapSurveyResponseOutgoing(db database.SurveyResponse) surveyresponsemodel.SurveyResponse {
    return surveyresponsemodel.SurveyResponse{
        ID:        db.ID,
        CreatedAt: db.CreatedAt,
        UpdatedAt: db.UpdatedAt,
                Tenant : db.Tenant,
        Name : db.Name,
        Description : db.Description,
        Url : db.Url,
        Key : db.Key,
        Displayname : db.Displayname,
        Questions : db.Questions,
        Answers : db.Answers,

    }
}

func MapSurveyResponseIncoming(in surveyresponsemodel.SurveyResponse) database.SurveyResponse {
    return database.SurveyResponse{
        ID:        in.ID,
        CreatedAt: in.CreatedAt,
        UpdatedAt: in.UpdatedAt,
                Tenant : in.Tenant,
        Name : in.Name,
        Description : in.Description,
        Url : in.Url,
        Key : in.Key,
        Displayname : in.Displayname,
        Questions : in.Questions,
        Answers : in.Answers,

    }
}
