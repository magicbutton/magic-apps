            /*
            File have been automatically created. To prevent the file from getting overwritten
            set the Front Matter property ´´keep´´ to ´´true´´ syntax for the code snippet
            ---
            keep: false
            ---
            */
            //generator:  noma3.delete.v2
            package person
            
            import (
                "log"
            
                "github.com/magicbutton/magic-apps/applogic"
                "github.com/magicbutton/magic-apps/database"
                "github.com/magicbutton/magic-apps/services/models/personmodel"
            
            )
            
            func PersonDelete(id int) ( error) {
                log.Println("Calling Persondelete")
            
                return applogic.Delete[database.Person, personmodel.Person](id)
            
            }
