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
import { PlatformCategory } from "@/services/magic-apps/models/platformcategory";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * PlatformCategory
 */
export default async function call(transactionId: string, query: string) {
  console.log("magic-apps.platformcategory", "search");

  return run<PlatformCategory>(
    "magic-apps.platformcategory",
    ["search", query],
    transactionId,
    600,
    transactionId
  );
}
