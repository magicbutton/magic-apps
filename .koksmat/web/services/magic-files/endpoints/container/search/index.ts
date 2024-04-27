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
import { Container } from "@/services/magic-apps/models/container";
/**
 * Search for items
 * 
 * query - The search query

 * @returns
 * 
 * Container
 */
export default async function call(transactionId: string, query: string) {
  console.log("magic-apps.container", "search");

  return run<Container>(
    "magic-apps.container",
    ["search", query],
    transactionId,
    600,
    transactionId
  );
}
