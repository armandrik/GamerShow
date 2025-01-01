"use client";
import Login from "@/components/template/login-register/Login";
import Register from "@/components/template/login-register/Register";
import React, { useState } from "react";

function LoginRegister() {
  const [authType, setAuthType] = useState<"LOGIN" | "REGISTER">("LOGIN");

  const goToRegister = () => setAuthType("REGISTER");
  const goToLogIn = () => setAuthType("LOGIN");

  return (
    <div className="w-full h-[90%] flex items-center justify-center">
      {authType === "LOGIN" ? (
        <Login goToRegister={goToRegister} />
      ) : (
        <Register goToLogIn={goToLogIn} />
      )}
    </div>
  );
}

export default LoginRegister;
