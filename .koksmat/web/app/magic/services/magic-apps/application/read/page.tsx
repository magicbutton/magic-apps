"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import ApplicationRead from "@/services/magic-apps/endpoints/application/read/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestApplicationRead() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-apps/application/read/page.tsx"
}
/>
<ApplicationRead />
</div>
);
}
    
