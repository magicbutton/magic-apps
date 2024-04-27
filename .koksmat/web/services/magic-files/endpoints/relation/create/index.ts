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
import { Relation } from "@/services/magic-apps/models/relation";
/**
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Relation
 */
export default async function call(transactionId: string, item: Relation) {
  console.log("magic-apps.relation", "create");

  return run<Relation>(
    "magic-apps.relation",
    ["create", JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}
