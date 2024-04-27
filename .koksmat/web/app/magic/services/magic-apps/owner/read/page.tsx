"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
import OwnerRead from "@/services/magic-apps/endpoints/owner/read/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestOwnerRead() {
return (
<div>
<VsCodeEdittoolbar
filePath={
  "app/magic/services/magic-apps/owner/read/page.tsx"
}
/>
<OwnerRead />
</div>
);
}
    