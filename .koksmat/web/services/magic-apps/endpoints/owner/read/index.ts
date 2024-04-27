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
 * Read a single item
 * 
 * id - The id of the item

 * @returns
 * 
 * Owner
 */
export default async function call(transactionId: string ,id: int) {
  console.log( "magic-apps.owner", "read");

  return run<Owner>(
    "magic-apps.owner",
    ["read" , id],
    transactionId,
    600,
    transactionId
  );
}

