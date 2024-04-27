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
 * Update an existing item
 * 
 * item - The item to update

 * @returns
 * 
 * person
 */
export default async function call(transactionId: string ,item: person) {
  console.log( "magic-apps.person", "update");

  return run<person>(
    "magic-apps.person",
    ["update" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

