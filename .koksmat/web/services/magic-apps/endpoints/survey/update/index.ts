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
import { Survey } from "@/services/magic-apps/models/survey";
/**
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Survey
 */
export default async function call(transactionId: string ,item: Survey) {
  console.log( "magic-apps.survey", "update");

  return run<Survey>(
    "magic-apps.survey",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

