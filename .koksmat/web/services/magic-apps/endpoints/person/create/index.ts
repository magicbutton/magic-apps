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
import { Person } from "@/services/magic-apps/models/person";
/**
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * Person
 */
export default async function call(transactionId: string ,item: Person) {
  console.log( "magic-apps.person", "create");

  return run<Person>(
    "magic-apps.person",
    ["create" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

