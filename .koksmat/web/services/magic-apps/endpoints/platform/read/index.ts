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
 * Read a single item
 * 
 * id - The id of the item

 * @returns
 * 
 * Platform
 */
export default async function call(transactionId: string ,id: int) {
  console.log( "magic-apps.platform", "read");

  return run<Platform>(
    "magic-apps.platform",
    ["read" , id],
    transactionId,
    600,
    transactionId
  );
}

