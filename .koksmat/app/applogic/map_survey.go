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
	"github.com/magicbutton/magic-apps/services/models/surveymodel"
   
)


func MapSurveyOutgoing(db database.Survey) surveymodel.Survey {
    return surveymodel.Survey{
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

    }
}

func MapSurveyIncoming(in surveymodel.Survey) database.Survey {
    return database.Survey{
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

    }
}
