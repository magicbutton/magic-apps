"use server";
/*
Parameters

*/
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import { run } from "@/koksmat/magicservices";
import { ShowCodeFragment } from "@/services/ShowCodeFragment";
import { Application } from "@/services/magic-apps/models/application";
/**
 * Delete an existing item
 * 
 * id - The id of the item

 * @returns
 * 
 * Application
 */
export default async function call(transactionId: string ,id: int) {
  console.log( "magic-apps.application", "delete");

  return run<Application>(
    "magic-apps.application",
    ["delete" , id],
    transactionId,
    600,
    transactionId
  );
}

