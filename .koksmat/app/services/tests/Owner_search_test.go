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
        
        "github.com/stretchr/testify/assert"
    )
    
    func TestOwnersearch(t *testing.T) {
                    
            result,err := owner.OwnerSearch(".")
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
