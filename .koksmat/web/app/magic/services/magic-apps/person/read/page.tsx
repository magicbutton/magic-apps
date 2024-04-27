"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import personRead from "@/services/magic-apps/endpoints/person/read/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestpersonRead() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-apps/person/read/page.tsx"
}
/>
<personRead />
</div>
);
}
    
