            /*
            File have been automatically created. To prevent the file from getting overwritten
            set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
            ---
            keep: false
            ---
            */
            //generator:  noma3.delete.v2
            package campaign
            
            import (
                "log"
            
                "github.com/magicbutton/magic-apps/applogic"
                "github.com/magicbutton/magic-apps/database"
                "github.com/magicbutton/magic-apps/services/models/campaignmodel"
            
            )
            
            func CampaignDelete(id int) ( error) {
                log.Println("Calling Campaigndelete")
            
                return applogic.Delete[database.Campaign, campaignmodel.Campaign](id)
            
            }
