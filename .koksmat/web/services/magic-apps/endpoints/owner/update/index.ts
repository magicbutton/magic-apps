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
import { Owner } from "@/services/magic-apps/models/owner";
/**
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Owner
 */
export default async function call(transactionId: string ,item: Owner) {
  console.log( "magic-apps.owner", "update");

  return run<Owner>(
    "magic-apps.owner",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

