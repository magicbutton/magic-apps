/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.read.v2
package campaign

import (
    "log"

    "github.com/magicbutton/magic-apps/applogic"
    "github.com/magicbutton/magic-apps/database"
    "github.com/magicbutton/magic-apps/services/models/campaignmodel"

)

func CampaignRead(id int) (*campaignmodel.Campaign, error) {
    log.Println("Calling Campaignread")

    return applogic.Read[database.Campaign, campaignmodel.Campaign](id, applogic.MapCampaignOutgoing)

}
