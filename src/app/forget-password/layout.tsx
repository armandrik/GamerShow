import { useAuth } from "@/utils/auth";
import { redirect } from "next/navigation";
import React from "react";

async function ForgetPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const user = await useAuth();
  if (user) {
    return redirect("/");
  }

  return <div>{children}</div>;
}

export default ForgetPasswordLayout;
