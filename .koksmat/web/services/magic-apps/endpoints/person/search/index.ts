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
import { person } from "@/services/magic-apps/models/person";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * person
 */
export default async function call(transactionId: string ,query: string) {
  console.log( "magic-apps.person", "search");

  return run<person>(
    "magic-apps.person",
    ["search" , query],
    transactionId,
    600,
    transactionId
  );
}
