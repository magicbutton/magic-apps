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
import { Groupsegment } from "@/services/magic-apps/models/groupsegment";
/**
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Groupsegment
 */
export default async function call(transactionId: string, item: Groupsegment) {
  console.log("magic-apps.groupsegment", "update");

  return run<Groupsegment>(
    "magic-apps.groupsegment",
    ["update", JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}
