import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { YesNo } from "./YesNo";
import { InputText } from "./Text";
import { SurveyResponse } from "../page";
import { on } from "events";
import { useEffect, useState } from "react";
export default function Question(props: {
  index: number;
  response: SurveyResponse;

  id: string;
  title: string;

  question1: string;
  question2: string;
  question3: string;
  question4: string;
  isNull: boolean;

  timestampText: string;
  onTrueFalse1Change(value: boolean): void;
  onTrueFalse2Change(value: boolean): void;
  onTrueFalse3Change(value: boolean): void;
  onText1Change(value: string): void;
}) {
  const {
    response,
    question1,
    question2,
    question3,
    question4,
    title,
    index,
    isNull,
    onTrueFalse1Change,
    onTrueFalse2Change,
    onTrueFalse3Change,
    onText1Change,
    timestampText,
  } = props;
  const [changeownerDialogueVisible, setchangeownerDialogueVisible] =
    useState(false);
  useEffect(() => {
    setchangeownerDialogueVisible(false);
  }, []);

  return (
    <Card key={index} className="m-2">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      {response.answer1 && (
        <CardDescription className="px-6">
          Suggested Owner: {response.answer1}
        </CardDescription>
      )}
      <CardContent>
        {/* <pre>{JSON.stringify(response, null, 2)}</pre> */}
        <YesNo
          type="radio"
          label={question4}
          isnull={isNull}
          id={response.id.toString()}
          question={""}
          checked={response.truefalse3}
          onChange={onTrueFalse3Change}
        />
        {response.truefalse3 && (
          <YesNo
            type="radio"
            label={question1}
            isnull={isNull}
            id={response.id.toString()}
            question={""}
            checked={response.truefalse1}
            onChange={onTrueFalse1Change}
          />
        )}
        {response.truefalse1 && (
          <YesNo
            type="radio"
            label={question2}
            isnull={isNull}
            id={"q2" + response.id.toString()}
            question={""}
            checked={response.truefalse2}
            onChange={onTrueFalse2Change}
          />
        )}

        {/* <InputText
        id={""}
        question={""}
        value={response.answer1}
        isnull={false}
        label={question3}
        onChange={function (value: string): void {
          response.answer1 = value;
          setversion(version + 1);
        }}
      /> */}
        <div className="flex mt-4">
          <Dialog
            open={changeownerDialogueVisible}
            onOpenChange={setchangeownerDialogueVisible}
          >
            <DialogTrigger>
              {" "}
              <Button
                variant={response.answer1 ? "default" : "secondary"}
                className="mt-2"
              >
                {response.answer1
                  ? "Change suggested owner"
                  : "I don't own this app"}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Report wrong ownership </DialogTitle>
                <DialogDescription>
                  If you don&lsquo;t consider yourself as owner of the app,
                  please enter the email of the suggested owner.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3">
                <InputText
                  placeholder="Email of the suggested owner."
                  id={""}
                  question={""}
                  value={response.answer1}
                  isnull={false}
                  label={question3}
                  onChange={function (value: string): void {
                    onText1Change(value);
                  }}
                />
                <div className="space-x-2">
                  <Button
                    onClick={() => {
                      setchangeownerDialogueVisible(false);
                    }}
                  >
                    Save
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setchangeownerDialogueVisible(false);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <div className="grow"></div>
          <div className="text-xs mt-4 text-right">{timestampText}</div>
        </div>
      </CardContent>
    </Card>
  );
}
