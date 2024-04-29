"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import ApplicationUpdate from "@/services/magic-apps/endpoints/application/update/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestApplicationUpdate() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-apps/application/update/page.tsx"
}
/>
<ApplicationUpdate />
</div>
);
}
    
