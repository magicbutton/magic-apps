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
        "github.com/magicbutton/magic-apps/services/endpoints/importdata"
                    "github.com/magicbutton/magic-apps/services/models/importdatamodel"
        "github.com/stretchr/testify/assert"
    )
    
    func TestImportDataupdate(t *testing.T) {
                                // transformer v1
            object := importdatamodel.ImportData{}
         
            result,err := importdata.ImportDataUpdate(object)
            if err != nil {
                t.Errorf("Error %s", err)
            }
            assert.NotNil(t, result)
        
    
    }
    
