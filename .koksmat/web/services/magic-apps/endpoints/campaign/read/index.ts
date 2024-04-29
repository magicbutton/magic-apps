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
import { Campaign } from "@/services/magic-apps/models/campaign";
/**
 * Read a single item
 * 
 * id - The id of the item

 * @returns
 * 
 * Campaign
 */
export default async function call(transactionId: string ,id: int) {
  console.log( "magic-apps.campaign", "read");

  return run<Campaign>(
    "magic-apps.campaign",
    ["read" , id],
    transactionId,
    600,
    transactionId
  );
}

