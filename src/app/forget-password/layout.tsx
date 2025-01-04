import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

function ForgetPasswordLayout({ children }: { children: React.ReactNode }) {

    const cookie = cookies()
    const isUserLoggedIn = cookie.get('token')
    if(isUserLoggedIn){
        return redirect('/')
    }

  return <div>{children}</div>;
}

export default ForgetPasswordLayout;
