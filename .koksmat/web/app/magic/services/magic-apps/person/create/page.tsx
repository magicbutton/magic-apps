"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import personCreate from "@/services/magic-apps/endpoints/person/create/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestpersonCreate() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-apps/person/create/page.tsx"
}
/>
<personCreate />
</div>
);
}
    
