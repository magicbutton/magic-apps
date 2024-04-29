package applogic

import (
	"github.com/magicbutton/magic-apps/database"
	"github.com/magicbutton/magic-apps/database/databasetypes"
	"github.com/magicbutton/magic-apps/services/models/applicationmodel"
	"github.com/magicbutton/magic-apps/services/models/personmodel"
	"github.com/magicbutton/magic-apps/utils"
)

func MapPersonOutgoing(item database.Person) personmodel.Person {
	return personmodel.Person{
		ID:        item.ID,
		CreatedAt: item.CreatedAt,
		UpdatedAt: item.UpdatedAt,

		Name:             item.Name,
		Unique_Person_Id: item.Unique_Person_Id,
		Email:            item.Email,
		Displayname:      item.Displayname,
		Description:      item.Description,
	}
}

func MapPersonIncoming(item personmodel.Person) database.Person {

	return database.Person{
		ID:               item.ID,
		CreatedAt:        item.CreatedAt,
		UpdatedAt:        item.UpdatedAt,
		Displayname:      item.Displayname,
		Name:             " email: " + item.Email + " uniqueid: " + item.Unique_Person_Id + " displayname: " + item.Displayname,
		Description:      item.Description,
		Unique_Person_Id: item.Unique_Person_Id,

		Email: item.Email,
	}
}

func MapApplicationOutgoing(item database.Application) applicationmodel.Application {

	return applicationmodel.Application{
		ID:          item.ID,
		CreatedAt:   item.CreatedAt,
		UpdatedAt:   item.UpdatedAt,
		Name:        item.Name,
		Description: item.Description,
		Key:         item.Key,
		Displayname: item.Displayname,
		Owner: databasetypes.Reference{
			ID: string(item.Owner_id),
		},
	}
}

func MapApplicationIncoming(item applicationmodel.Application) database.Application {
	return database.Application{
		ID:          item.ID,
		CreatedAt:   item.CreatedAt,
		UpdatedAt:   item.UpdatedAt,
		Name:        "displayname: " + item.Displayname + " key: " + item.Key,
		Description: item.Description,
		Key:         item.Key,
		Displayname: item.Displayname,
		Owner_id:    utils.StrToInt(item.Owner.ID),
	}
}
