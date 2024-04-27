"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
import ContainerCreate from "@/services/magic-apps/endpoints/container/create/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestContainerCreate() {
  return (
    <div>
      <VsCodeEdittoolbar
        filePath={"app/magic/services/magic-apps/container/create/page.tsx"}
      />
      <ContainerCreate />
    </div>
  );
}
