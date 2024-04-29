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
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Application
 */
export default async function call(transactionId: string ,item: Application) {
  console.log( "magic-apps.application", "update");

  return run<Application>(
    "magic-apps.application",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

