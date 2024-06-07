import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;
  return (
    <div className="flex">
      <Sidebar />
      <main className="absolute right-0 w-[82vw]">{children}</main>
    </div>
  );
}
