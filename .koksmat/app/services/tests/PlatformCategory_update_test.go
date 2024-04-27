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
        "github.com/magicbutton/magic-apps/services/endpoints/platformcategory"
                    "github.com/magicbutton/magic-apps/services/models/platformcategorymodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestPlatformCategoryupdate(t *testing.T) {
                                // transformer v1
            object := platformcategorymodel.PlatformCategory{}
         
            result,err := platformcategory.PlatformCategoryUpdate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
