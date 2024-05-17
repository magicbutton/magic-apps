"use client";

import { MagicboxContext } from "@/koksmat/magicbox-context";
import { useContext, useEffect } from "react";
import Redirector from "./redirector";
import { Button } from "@/components/ui/button";

export default function Home() {
  const magicbox = useContext(MagicboxContext);

  useEffect(() => {
    console.log("magicbox", magicbox.user);
    //redirect("/" + APPNAME);
  }, [magicbox.user]);
  if (!magicbox.user) {
    return (
      <div className="flex h-screen">
        <div className="grow"></div>
        <div className="flex flex-col">
          <div className="grow"></div>
          <div>
            {" "}
            <Button
              onClick={async () => {
                const signedIn = await magicbox.signIn(["User.Read"], "");

                magicbox.refresh();
              }}
            >
              Sign In using Microsoft 365 account
            </Button>
          </div>
          <div className="grow"></div>
        </div>
        <div className="grow"></div>
      </div>
    );
  }
  return (
    <div>
      {magicbox.user?.email && <Redirector email={magicbox.user.email} />}
    </div>
  );
}
