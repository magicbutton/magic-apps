    /* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
    //generator:  noma4.1
    package tests
    import (
        "testing"
        "github.com/magicbutton/magic-apps/services/endpoints/owner"
                    "github.com/magicbutton/magic-apps/services/models/ownermodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestOwnerupdate(t *testing.T) {
                                // transformer v1
            object := ownermodel.Owner{}
         
            result,err := owner.OwnerUpdate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
