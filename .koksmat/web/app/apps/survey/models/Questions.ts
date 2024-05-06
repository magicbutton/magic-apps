"use client";

export interface Answers {
  Result: Result[];
}

export interface Result {
  truefalse1: boolean;
  count: number;
}

export const questionsSQL = (
  survey_id: string
) => ` SELECT displayname,description, truefalse1 FROM public.survey WHERE id =  ${survey_id}

`;
