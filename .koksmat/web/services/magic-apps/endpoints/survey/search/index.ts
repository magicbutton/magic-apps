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
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Survey
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-apps.survey", "search");

  return run<Survey>(
    "magic-apps.survey",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}

