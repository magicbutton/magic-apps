/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package platformmodel
import (
	"encoding/json"
	"time"
    "github.com/magicbutton/magic-apps/database/databasetypes"
)

func UnmarshalPlatform(data []byte) (Platform, error) {
	var r Platform
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Platform) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Platform struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Url string `json:"url"`
    Category databasetypes.Reference `json:"category"`

}

