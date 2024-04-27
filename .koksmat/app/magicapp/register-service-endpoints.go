/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
package magicapp

import (
	"github.com/magicbutton/magic-apps/services"
	"github.com/nats-io/nats.go/micro"
)

func RegisterServiceEndpoints(root micro.Group) {
    root.AddEndpoint("person", micro.HandlerFunc(services.HandlepersonRequests))
        root.AddEndpoint("application", micro.HandlerFunc(services.HandleApplicationRequests))
    }
