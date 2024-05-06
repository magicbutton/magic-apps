"use client";

import { Overview } from "../../components/stats";

import { Answers, answersSQL } from "../models/Answers";
import { Unanswered, unansweredSQL } from "../models/Unanswered";
import { useEffect, useState } from "react";
import { questionsSQL } from "../models/Questions";
import { useSQLSelect } from "@/koksmat/usesqlselect";

export default function SurveyDetails(props: {
  params: { survey_id: string };
}) {
  const { survey_id } = props.params;
  const [data, setdata] = useState<any>();
  const answers = useSQLSelect<Answers>(
    "magic-apps.app",
    answersSQL(survey_id)
  );

  const unanswered = useSQLSelect<Unanswered>(
    "magic-apps.app",
    unansweredSQL(survey_id)
  );
  const question = useSQLSelect<Unanswered>(
    "magic-apps.app",
    questionsSQL(survey_id)
  );
  useEffect(() => {
    if (!answers || !unanswered) {
      return;
    }
    const yes = answers.data?.Result.find((r) => r.truefalse1 === true)?.count;
    const no = answers.data?.Result.find((r) => r.truefalse1 === false)?.count;
    const unansweredCount = unanswered.data?.Result[0].unanswered;
    setdata([
      {
        name: "Yes",

        "First answer": yes,
        amt: 2400,
      },
      {
        name: "No",

        "First answer": no,
        amt: 2210,
      },
      {
        name: "n.a",

        "First answer": unansweredCount,
        amt: 2210,
      },
    ]);
  }, [answers, unanswered]);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>SurveyDetails</h1>

      <Overview data={data} datakey="First answer" />

      <pre>
        {JSON.stringify(
          {
            survey_id,
            question,
            answers,
            unanswered,
          },
          null,
          2
        )}
      </pre>
    </div>
  );
}
