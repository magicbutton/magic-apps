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
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Platform
 */
export default async function call(transactionId: string, query: string) {
  console.log("magic-apps.platform", "search");

  return run<Platform>(
    "magic-apps.platform",
    ["search", query],
    transactionId,
    600,
    transactionId
  );
}
