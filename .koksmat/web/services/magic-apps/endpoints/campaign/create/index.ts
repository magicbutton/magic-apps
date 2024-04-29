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
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Campaign
 */
export default async function call(transactionId: string ,item: Campaign) {
  console.log( "magic-apps.campaign", "create");

  return run<Campaign>(
    "magic-apps.campaign",
    ["create" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

