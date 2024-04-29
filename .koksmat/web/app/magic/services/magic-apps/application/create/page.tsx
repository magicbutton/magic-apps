"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import ApplicationCreate from "@/services/magic-apps/endpoints/application/create/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestApplicationCreate() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-apps/application/create/page.tsx"
}
/>
<ApplicationCreate />
</div>
);
}
    
