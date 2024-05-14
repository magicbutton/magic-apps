"use client";

import { APPNAME } from "@/app/global";
import { MagicboxContext } from "@/koksmat/magicbox-context";
import { useService } from "@/koksmat/useservice";
import { redirect } from "next/navigation";
import { useContext, useEffect } from "react";
import { Dashboard } from "./apps/page";
import { useSQLSelect } from "@/koksmat/usesqlselect";

export default function Redirector(props: { email: string }) {
  const { email } = props;

  const userInfo = useSQLSelect<any>(
    "magic-apps.app",
    `SELECT distinct survey_id,respondent_id from surveyresponse  where respondent_id in (
        SELECT id
        FROM public.person
    WHERE name ILIKE  '%email:${email}%')
    `
  );

  useEffect(() => {
    if (userInfo?.data == undefined) {
      return;
    }
    if (userInfo.data?.Result.length !== 1) {
      redirect("/" + APPNAME);
    }

    redirect(
      "/" +
        APPNAME +
        "/owner/" +
        userInfo.data.Result[0].respondent_id +
        "/survey/" +
        userInfo.data.Result[0].survey_id
    );
  }, [userInfo]);
  return (
    <div>
      {userInfo.error && <div className="text-red-500">{userInfo.error}</div>}
    </div>
  );
}
