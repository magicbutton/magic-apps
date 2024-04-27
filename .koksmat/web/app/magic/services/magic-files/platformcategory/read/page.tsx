"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
import PlatformCategoryRead from "@/services/magic-apps/endpoints/platformcategory/read/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestPlatformCategoryRead() {
  return (
    <div>
      <VsCodeEdittoolbar
        filePath={
          "app/magic/services/magic-apps/platformcategory/read/page.tsx"
        }
      />
      <PlatformCategoryRead />
    </div>
  );
}
