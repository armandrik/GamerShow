import Link from "next/link";
import React from "react";

function LoginRegisterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-dvh bg-cover bg-center bg-[linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.7)),url('https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg')]">
      <div className="w-full bg-white/10 flex items-center justify-center py-5">
        <Link href="/" className="flex items-center justify-center gap-1">
          <img src="./images/logo.svg" alt="logo" className="mobile:w-11" />
          <h1 className="text-white font-bold text-3xl mobile:text-2xl">گیمرشو</h1>
        </Link>
      </div>
      {children}
    </div>
  );
}

export default LoginRegisterLayout;
