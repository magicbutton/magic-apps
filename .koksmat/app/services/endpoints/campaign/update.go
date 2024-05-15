/*
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
---
keep: false
---
*/
//generator:  noma3.update.v2
package campaign

import (
    "log"

    "github.com/magicbutton/magic-apps/applogic"
    "github.com/magicbutton/magic-apps/database"
    "github.com/magicbutton/magic-apps/services/models/campaignmodel"

)

func CampaignUpdate(item campaignmodel.Campaign) (*campaignmodel.Campaign, error) {
    log.Println("Calling Campaignupdate")

    return applogic.Update[database.Campaign, campaignmodel.Campaign](item.ID,item, applogic.MapCampaignIncoming, applogic.MapCampaignOutgoing)

}
