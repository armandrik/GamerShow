import React from "react";

type registerPropType = {
  goToLogIn: () => void;
};

function Register({ goToLogIn }: registerPropType) {
  return (
    <div className="w-[520px] mx-auto px-4 mobile:w-full">
      <h1 className="text-white/90 font-bold text-3xl text-center mb-10 mobile:text-2xl">
        ثبت‌نام
      </h1>
      <form className="flex flex-col justify-start items-start gap-8 text-white/80 [&>*]:w-full">
        <div className="relative">
          <input
            type="text"
            required={true}
            placeholder="نام‌کاربری"
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
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
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
        <div className="relative">
          <input
            type="password"
            required={true}
            placeholder="رمز عبور"
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
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-1 bg-primary mb-8 h-12 rounded-md text-xl font-medium hover:bg-primary/80 transition-all mobile:text-lg"
        >
          ثبت‌نام
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
              d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            />
          </svg>
        </button>
      </form>
      <div className="w-full flex items-center justify-between">
        <p className="text-white/90 text-sm">
          قبلا ثبت نام کرده اید؟{" "}
          <span onClick={goToLogIn} className="cursor-pointer text-font hover:text-font/80 transition-all">
            وارد شوید
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
