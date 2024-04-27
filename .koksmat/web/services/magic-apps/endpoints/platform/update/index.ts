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
import { Platform } from "@/services/magic-apps/models/platform";
/**
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Platform
 */
export default async function call(transactionId: string ,item: Platform) {
  console.log( "magic-apps.platform", "update");

  return run<Platform>(
    "magic-apps.platform",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

