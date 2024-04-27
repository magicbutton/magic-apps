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
import { User } from "@/services/magic-apps/models/user";
/**
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * User
 */
export default async function call(transactionId: string, item: User) {
  console.log("magic-apps.user", "create");

  return run<User>(
    "magic-apps.user",
    ["create", JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}