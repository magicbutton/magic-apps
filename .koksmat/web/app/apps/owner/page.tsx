"use client";

export interface Output {
  totalPages: number;
  totalItems: number;
  currentPage: number;
  items: Item[];
}

export interface Item {
  id: number;
  created_at: string;
  updated_at: string;
  tenant: string;
  name: string;
  description: string;
  unique_person_id: string;
  displayname: string;
  email: string;
  applications: any;
}

import { useService } from "@/koksmat/useservice";
import ErrorMessage from "@/koksmat/components/errormessage";
import Link from "next/link";

function Owner(props: { owner: Item }) {
  const { owner } = props;
  return (
    <div>
      <Link href={"/apps/owner/" + owner.id} className="text-blue-600">
        {owner.displayname}
      </Link>
    </div>
  );
}

export default function Owners() {
  const { data, error, isLoading } = useService<Output>(
    "magic-apps.person",
    ["search", "%"],
    "",
    600,
    "x"
  );
  if (error) {
    return <ErrorMessage message={error} />;
  }

  const owners: Output = data!;
  return (
    <div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold  sm:text-4xl md:text-5xl mb-4">
          Applications owners
        </h1>
      </div>
      {!data && <div>Loading...</div>}

      {owners?.items
        .sort((a, b) => a.displayname.localeCompare(b.displayname))
        .map((owner, index) => (
          <div key={index}>
            <Owner owner={owner} />
          </div>
        ))}
    </div>
  );
}
