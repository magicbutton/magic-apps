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
import { SurveyResponse } from "@/services/magic-apps/models/surveyresponse";
/**
 * Create a new item
 * 
 * item - The item to create

 * @returns
 * 
 * SurveyResponse
 */
export default async function call(transactionId: string ,item: SurveyResponse) {
  console.log( "magic-apps.surveyresponse", "create");

  return run<SurveyResponse>(
    "magic-apps.surveyresponse",
    ["create" , JSON.stringify(item)],
    transactionId,
    600,
    transactionId
  );
}

