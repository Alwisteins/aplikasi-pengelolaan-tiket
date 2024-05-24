import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="absolute right-0 w-[82vw]">{children}</main>
    </div>
  );
}
