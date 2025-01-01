import Link from "next/link";
import React from "react";

function ForgetPassword() {
  return (
    <div className="w-full h-dvh bg-cover bg-center bg-[linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.7)),url('https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg')]">
      <div className="w-full bg-white/10 flex items-center justify-center py-5">
        <Link href="/" className="flex items-center justify-center gap-1">
          <img src="./images/logo.svg" alt="logo" className="mobile:w-11" />
          <h1 className="text-white font-bold text-3xl mobile:text-2xl">
            گیمرشو
          </h1>
        </Link>
      </div>
      <div className="w-full h-[90%] flex items-center justify-center">
        <div className="w-[520px] mx-auto px-4 mobile:w-full">
          <h1 className="text-white/90 font-bold text-3xl text-center mb-10 mobile:text-2xl">
            بازیابی رمز عبور
          </h1>
          <form className="flex flex-col justify-start items-start gap-8 text-white/80 [&>*]:w-full">
            <div className="relative">
              <input
                type="email"
                required={true}
                placeholder="آدرس ایمیل"
                className="w-full h-12 outline-none rounded-md px-5 bg-white/10 mobile:text-sm"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mobile:size-5 absolute top-3 left-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                />
              </svg>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-1 bg-primary mb-8 h-12 rounded-md text-xl font-medium hover:bg-primary/80 transition-all mobile:text-lg"
            >
              ارسال لینک
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
            </button>
          </form>
          <p className="text-white text-sm hover:text-font transition-all">
            <Link
              className="flex items-start justify-start gap-1"
              href="/login-register"
            >
              بازگشت به صفحه ورود
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
