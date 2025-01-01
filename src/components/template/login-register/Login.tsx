"use client";
import Link from "next/link";
import React, { useState } from "react";

type loginPropType = {
  goToRegister: () => void;
};

function Login({ goToRegister }: loginPropType) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="w-[520px] mx-auto px-4 mobile:w-full">
      <h1 className="text-white/90 font-bold text-3xl text-center mb-10 mobile:text-2xl">
        ورود
      </h1>
      <form className="flex flex-col justify-start items-start gap-8 text-white/80 [&>*]:w-full">
        <div className="relative">
          <input
            type="text"
            required={true}
            placeholder="آدرس ایمیل یا نام‌کاربری"
            className="w-full h-12 outline-none rounded-md px-5 bg-white/10 mobile:text-sm"
          />
          <div className="flex items-center justify-center absolute top-3 left-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mobile:size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>
            /
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 mobile:size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            required={true}
            placeholder="رمز عبور"
            className="w-full h-12 outline-none rounded-md px-5 bg-white/10 mobile:text-sm"
          />
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => setShowPassword(!showPassword)}
              className="size-6 absolute top-3 left-3 cursor-pointer mobile:size-5 mobile:top-[14px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => setShowPassword(!showPassword)}
              className="size-6 absolute top-3 left-3 cursor-pointer mobile:size-5 mobile:top-[14px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          )}
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-1 bg-primary mb-8 h-12 rounded-md text-xl font-medium hover:bg-primary/80 transition-all mobile:text-lg"
        >
          وارد شوید
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 -rotate-45"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </button>
      </form>
      <div className="w-full flex items-center justify-between">
        <p className="text-white/90 text-sm">
          حساب کاربری ندارید؟{" "}
          <span onClick={goToRegister} className="cursor-pointer text-font hover:text-font/80 transition-all">
            ثبت‌نام کنید
          </span>
        </p>
        <p className="text-white text-sm underline hover:text-font transition-all">
          <Link href="/forget-password">فراموشی رمز‌عبور</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
