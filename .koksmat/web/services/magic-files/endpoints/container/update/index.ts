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
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * Container
 */
export default async function call(transactionId: string, item: Container) {
  console.log("magic-apps.container", "update");

  return run<Container>(
    "magic-apps.container",
    ["update", JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}
