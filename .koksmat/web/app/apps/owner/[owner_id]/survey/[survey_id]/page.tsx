"use client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { AlertCircle } from "lucide-react";

import { parseISO, differenceInDays } from "date-fns";
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
import { run } from "@/koksmat/magicservices";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { YesNo } from "./YesNo";
import { SendResponse } from "./SendResponse";
import { InputText } from "./Text";
import Question from "./question";
import { Data } from "../../page";

function Questions(props: {
  owner_id: string;
  survey_id: string;

  responses: SurveyResponse[];

  question1: string;
  question2: string;
  question3: string;
  question4: string;
  onSubmitted?: () => void;
  surveyVersion: number;
}) {
  const {
    survey_id,
    owner_id,
    surveyVersion,
    onSubmitted,
    question1,
    question2,
    question3,
    question4,
  } = props;
  const [version, setversion] = useState(0);
  const [responses, setresponses] = useState<SurveyResponse[]>([]);
  const [allanswered, setallanswered] = useState(false);

  const [submitting, setsubmitting] = useState(false);

  const submit = async () => {
    setsubmitting(true);
  };

  const { data, error, isLoading } = useService<Root>(
    "magic-apps.person",
    ["withsurveyresponses", owner_id, survey_id],
    surveyVersion.toString(),
    600,
    "x"
  );

  useEffect(() => {
    if (!data) return;

    setresponses(data?.survey_responses);
  }, [data]);
  if (error) {
    return <ErrorMessage message={error} />;
  }
  return (
    <div>
      <div className="flex items-center space-x-2 mt-6 mb-6">
        <Button
          variant="secondary"
          onClick={() => {
            responses.map((response) => {
              response.truefalse3 = true;
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
              response.truefalse2 = false;
              response.truefalse3 = false;
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
        <Button
          disabled={!allanswered}
          onClick={() => {
            submit();
          }}
        >
          Send
        </Button>
        {submitting && (
          <SendResponse
            responses={responses}
            dialogChange={(onoff) => {
              setsubmitting(onoff);
              if (onSubmitted) {
                onSubmitted();
              }
            }}
            isOpen={submitting}
          />
        )}
      </div>
      <div className="hidden">{version}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
        {!data && <div>Loading...</div>}
        {responses
          .sort((a, b) => a.displayname.localeCompare(b.displayname))
          .map((response, index) => {
            const timestamp = parseISO(response.responsedate);
            const days = differenceInDays(new Date(), timestamp);
            const isNull = days > 700000;
            const timestampText = isNull
              ? "Never answered"
              : "answered " + days + " days ago";

            return (
              <div key={index}>
                <Question
                  index={index}
                  response={response}
                  id={response.id.toString()}
                  title={response.displayname}
                  question1={question1}
                  question2={question2}
                  question3={question3}
                  question4={question4}
                  isNull={false}
                  timestampText={timestampText}
                  // Has this app been tested on Windows 11?
                  onTrueFalse1Change={function (value: boolean): void {
                    setversion(version + 1);
                    if (!value) {
                      response.truefalse2 = false;
                    }
                    response.truefalse1 = value;
                  }}
                  // Did you find any issues?
                  onTrueFalse2Change={function (value: boolean): void {
                    setversion(version + 1);
                    response.truefalse2 = value;
                  }}
                  // Is this application relevant for our Windows 11 upgrade compatibilty test?
                  onTrueFalse3Change={function (value: boolean): void {
                    setversion(version + 1);
                    response.truefalse3 = value;
                  }}
                  onText1Change={function (value: string): void {
                    setversion(version + 1);
                    response.answer1 = value;
                  }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default function ResponseSurveys(props: {
  params: { owner_id: string; survey_id: string };
}) {
  const { toast } = useToast();
  const { owner_id, survey_id } = props.params;
  const personItem = useService<Data>(
    "magic-apps.person",
    ["read", owner_id],
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

  const survey: Survey = surveyItem.data!;
  const [version, setversion] = useState(0);
  return (
    <div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold  sm:text-4xl md:text-5xl">
          {survey?.displayname}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 p-10 text-lg md:text-xl">
          Here is a list of application(s) we have recorded as owned by{" "}
          <b>{personItem.data?.displayname}</b>. If this is incorrect please
          state this for each application by entering the email of the suggested
          owner.
        </p>
      </div>

      <div className="mt-5 border rounded-lg p-10">
        <Questions
          surveyVersion={version}
          onSubmitted={() => {
            setversion(version + 1);
          }}
          question1={survey?.truefalse1}
          question2={survey?.truefalse2}
          question3={survey?.question1}
          question4={survey?.truefalse3}
          owner_id={owner_id}
          survey_id={survey_id}
          responses={[]}
        />
      </div>
    </div>
  );
}
