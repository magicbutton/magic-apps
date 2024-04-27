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
import { Group } from "@/services/magic-apps/models/group";
/**
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Group
 */
export default async function call(transactionId: string, item: Group) {
  console.log("magic-apps.group", "create");

  return run<Group>(
    "magic-apps.group",
    ["create", JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}