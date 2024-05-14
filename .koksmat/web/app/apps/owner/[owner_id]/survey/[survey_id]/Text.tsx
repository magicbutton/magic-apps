"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Fragment } from "react";

export function InputText(props: {
  id: string;
  question: string;
  value: string;
  isnull: boolean;
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
}) {
  const { id, question, value, onChange, label, placeholder } = props;

  return (
    <div className="space-y-3">
      <div className="">{question}</div>
      <div className="flex items-center space-x-2">
        <Input
          placeholder={placeholder}
          type="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
