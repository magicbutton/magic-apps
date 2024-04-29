/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package surveymodel
import (
	"encoding/json"
	"time"
    "github.com/magicbutton/magic-apps/database/databasetypes"
)

func UnmarshalSurvey(data []byte) (Survey, error) {
	var r Survey
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Survey) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Survey struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Url string `json:"url"`
    Key string `json:"key"`
    Displayname string `json:"displayname"`
    Person databasetypes.Reference `json:"person"`
    Campaign databasetypes.Reference `json:"campaign"`
    Questions string `json:"questions"`

}

