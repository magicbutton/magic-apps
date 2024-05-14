"use client";

import { APPNAME } from "@/app/global";
import { MagicboxContext } from "@/koksmat/magicbox-context";
import { useService } from "@/koksmat/useservice";
import { redirect } from "next/navigation";
import { useContext, useEffect } from "react";
import { Dashboard } from "./apps/page";
import { useSQLSelect } from "@/koksmat/usesqlselect";
import Redirector from "./redirector";

export default function Home() {
  const magicbox = useContext(MagicboxContext);
  const userInfo = useSQLSelect<any>(
    "magic-apps.app",
    "SELECT * FROM dashboard WHERE person_id = 1"
  );

  useEffect(() => {
    return;

    redirect("/" + APPNAME);
  }, []);

  return (
    <div>
      {magicbox.user?.email && <Redirector email={magicbox.user.email} />}
    </div>
  );
}
