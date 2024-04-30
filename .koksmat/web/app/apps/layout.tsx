"use client";

import { AppProvider } from "./components/appcontextprovider";
import AppLeftRail from "./components/appleftrail";
import AppTopMenu from "./components/apptopmenu";

export default function Layout(props: { children: any }) {
  const { children } = props;

  return (
    <AppProvider>
      <div className="flex">
        <div className="hidden md:block w-14 "></div>
        <div className="p-2">{/* <AppTopMenu /> */}</div>
      </div>
      <div className="flex min-h-screen">
        <div className="hidden md:block">
          <AppLeftRail />
        </div>
        <div className="grow bg-slate-50"></div>
        <div className="container">{children}</div>
        <div className="grow  bg-slate-50"></div>
        <div className="hidden md:block"></div>
      </div>
      <div className=""></div>
    </AppProvider>
  );
}
