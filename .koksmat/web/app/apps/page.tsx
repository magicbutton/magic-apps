/**
 * v0 by Vercel.
 * @see https://v0.dev/t/piUCmvToKUQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function Component() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Link href="/apps/application">
            <Card x-chunk="dashboard-05-chunk-1">
              <CardHeader className="pb-2">
                <CardDescription>Number of applications</CardDescription>
                <CardTitle className="text-4xl">3.012</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <div className="text-xs text-muted-foreground">
            +25% from last week
          </div> */}
              </CardContent>
              <CardFooter>
                {/* <Progress value={25} aria-label="25% increase" /> */}
              </CardFooter>
            </Card>
          </Link>
          <Link href="/apps/owner">
            <Card x-chunk="dashboard-05-chunk-1">
              <CardHeader className="pb-2">
                <CardDescription>Number of owners</CardDescription>
                <CardTitle className="text-4xl">321</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <div className="text-xs text-muted-foreground">
            +25% from last week
          </div> */}
              </CardContent>
              <CardFooter>
                {/* <Progress value={25} aria-label="25% increase" /> */}
              </CardFooter>
            </Card>
          </Link>
          <Link href="/apps/owner/150">
            <Card x-chunk="dashboard-05-chunk-1">
              <CardHeader className="pb-2">
                <CardDescription>Apps you own</CardDescription>
                <CardTitle className="text-4xl">4</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <div className="text-xs text-muted-foreground">
            +25% from last week
          </div> */}
              </CardContent>
              <CardFooter>
                {/* <Progress value={25} aria-label="25% increase" /> */}
              </CardFooter>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  );
}
