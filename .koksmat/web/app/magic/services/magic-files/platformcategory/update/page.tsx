"use client";
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/
import PlatformCategoryUpdate from "@/services/magic-apps/endpoints/platformcategory/update/webcomponent";
import { VsCodeEdittoolbar } from "@/app/magic/components/VsCodeEdittoolbar";

export default function TestPlatformCategoryUpdate() {
  return (
    <div>
      <VsCodeEdittoolbar
        filePath={
          "app/magic/services/magic-apps/platformcategory/update/page.tsx"
        }
      />
      <PlatformCategoryUpdate />
    </div>
  );
}
