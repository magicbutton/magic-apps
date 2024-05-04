"use client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function YesNo(props: {
  id: string;
  question: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  const { id, question, checked, onChange } = props;
  return (
    <div className="space-y-3">
      <div className="bold">{question}</div>
      <div className="flex items-center space-x-2">
        <Switch
          className="pointer "
          id={"survey_response" + id}
          checked={checked}
          onCheckedChange={onChange}
        />
        <Label
          className="pointer text-sm text-slate-500"
          htmlFor={"survey_response" + id}
        >
          Turn on to answer yes or off to answer no.
        </Label>
      </div>
    </div>
  );
}
