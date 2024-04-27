"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
import GroupsegmentCreate from "@/services/magic-apps/endpoints/groupsegment/create/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestGroupsegmentCreate() {
  return (
    <div>
      <VsCodeEdittoolbar
        filePath={"app/magic/services/magic-apps/groupsegment/create/page.tsx"}
      />
      <GroupsegmentCreate />
    </div>
  );
}
