"use client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
export interface Survey {
  id: number;
  created_at: string;
  updated_at: string;
  tenant: string;
  name: string;
  description: string;
  url: string;
  key: string;
  displayname: string;
  owner_id: number;
  campaign_id: number;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  question6: string;
  question7: string;
  question8: string;
  question9: string;
  truefalse1: string;
  truefalse2: string;
  truefalse3: string;
  datetime1: string;
  datetime2: string;
  datetime3: string;
  number1: string;
  number2: string;
  number3: string;
  questions: any;
}

export interface Root {
  id: number;
  created_at: string;
  updated_at: string;
  tenant: string;
  name: string;
  description: string;
  unique_person_id: string;
  displayname: string;
  email: string;
  applications: any;
  survey_responses: SurveyResponse[];
}

export interface SurveyResponse {
  id: number;
  created_at: string;
  updated_at: string;
  tenant: string;
  name: string;
  description: string;
  responsedate: string;
  url: string;
  key: string;
  displayname: string;
  respondent_id: number;
  survey_id: number;
  application_id: number;
  questions: any;
  answers: any;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
  answer6: string;
  answer7: string;
  answer8: string;
  answer9: string;
  truefalse1: boolean;
  truefalse2: boolean;
  truefalse3: boolean;
  datetime1: string;
  datetime2: string;
  datetime3: string;
  number1: number;
  number2: number;
  number3: number;
}

import { useService } from "@/koksmat/useservice";
import ErrorMessage from "@/koksmat/components/errormessage";
import { Fragment, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ResponseSurveys(props: {
  params: { owner_id: string; survey_id: string };
}) {
  const { owner_id, survey_id } = props.params;
  const { data, error, isLoading } = useService<Root>(
    "magic-apps.person",
    ["withsurveyresponses", owner_id, survey_id],
    "",
    600,
    "x"
  );
  const surveyItem = useService<Survey>(
    "magic-apps.survey",
    ["read", survey_id],
    "",
    600,
    "x"
  );

  const [version, setversion] = useState(0);
  const survey: Survey = surveyItem.data;
  const [allanswered, setallanswered] = useState(false);

  const [responses, setresponses] = useState<SurveyResponse[]>([]);

  useEffect(() => {
    if (!survey) return;

    setresponses(data?.survey_responses);
  }, [survey]);
  if (error) {
    return <ErrorMessage message={error} />;
  }
  return (
    <div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold  sm:text-4xl md:text-5xl">
          {survey?.displayname}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-[650px] text-lg md:text-xl">
          Here is a list of the responses to the survey
        </p>
      </div>
      <div className="mt-5">
        {!data && <div>Loading...</div>}
        <div>
          <div className="flex items-center space-x-2">
            <Button
              variant="secondary"
              onClick={() => {
                responses.map((response) => {
                  response.truefalse1 = true;
                });

                setversion(version + 1);
                setresponses(responses);
              }}
            >
              Yes to all
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                responses.map((response) => {
                  response.truefalse1 = false;
                });

                setversion(version + 1);
                setresponses(responses);
              }}
            >
              No to all
            </Button>
            <div className="grow"></div>
            <div className="flex items-center space-x-2">
              <Switch
                id="airplane-mode"
                checked={allanswered}
                onCheckedChange={() => {
                  setallanswered(!allanswered);
                }}
              />
              <Label htmlFor="airplane-mode">All have been answered</Label>
            </div>
            <Button disabled={!allanswered}>Send</Button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>{survey?.truefalse1}</th>
              </tr>
            </thead>
            <div className="">{version}</div>
            {responses
              .sort((a, b) => a.displayname.localeCompare(b.displayname))
              .map((response, index) => (
                <tr key={index}>
                  <td>
                    {" "}
                    <Label htmlFor={"survey_response" + response.id}>
                      {response.displayname}
                    </Label>
                  </td>
                  <td>
                    <Switch
                      id={"survey_response" + response.id}
                      checked={response.truefalse1}
                      onCheckedChange={(e) => {
                        response.truefalse1 = e;
                        setversion(version + 1);
                        setresponses(responses);
                      }}
                    />
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
}
