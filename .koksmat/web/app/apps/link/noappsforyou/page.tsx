import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl mb-5">
        We haven&lsquo;t got records of any apps owned by you
      </h1>
      <Link href="/apps/owner">
        <Button>Open list of app owners</Button>
      </Link>
    </div>
  );
}
