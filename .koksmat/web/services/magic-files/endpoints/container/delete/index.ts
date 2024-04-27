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
 * Delete an existing item
 * 
 * id - The id of the item

 * @returns
 * 
 * Container
 */
export default async function call(transactionId: string, id: int) {
  console.log("magic-apps.container", "delete");

  return run<Container>(
    "magic-apps.container",
    ["delete", id],
    transactionId,
    600,
    transactionId
  );
}
