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
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Campaign
 */
export default async function call(transactionId: string ,item: Campaign) {
  console.log( "magic-apps.campaign", "update");

  return run<Campaign>(
    "magic-apps.campaign",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

