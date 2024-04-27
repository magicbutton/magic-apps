/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   
//GenerateGoModel v1
package ownermodel
import (
	"encoding/json"
	"time"
    
)

func UnmarshalOwner(data []byte) (Owner, error) {
	var r Owner
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *Owner) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type Owner struct {
    ID        int    `json:"id"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
        Tenant string `json:"tenant"`
    Name string `json:"name"`
    Description string `json:"description"`
    Displayname string `json:"displayname"`
    Email string `json:"email"`

}

