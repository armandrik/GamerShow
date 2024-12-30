import Link from "next/link";
import React from "react";
import Articles from "./Articles";

function Footer() {
  return (
    <div className="px-[100px] py-16 bg-zinc-700/60 flex items-start justify-start flex-wrap gap-12 text-white desktop:px-12 mobile:px-4 mobile:py-10 mobile:gap-9">
      <div className="mobile:w-full">
        <h2 className="text-xl font-bold mb-8 mobile:text-lg">داغترین مطالب هفته</h2>
        <Articles />
      </div>
      <div className="mx-auto mobile:w-full">
        <h2 className="text-xl font-bold mb-8 mobile:text-lg">پربازدیدترین صفحات</h2>
        <ul className="flex flex-col justify-start items-start gap-4 text-base font-normal [&>li]:cursor-pointer">
          <li>
            <Link href="/">جدیدترین بازی ها</Link>
          </li>
          <li>
            <Link href="/">مقالات</Link>
          </li>
          <li>
            <Link href="/">فروشگاه</Link>
          </li>
          <li>
            <Link href="/">درباره ما</Link>
          </li>
          <li>
            <Link href="/">تماس با ما</Link>
          </li>
        </ul>
      </div>
      <div className="tablet:w-full mobile:w-full">
        <h2 className="text-xl font-bold mb-8 mobile:text-lg">عضویت در خبرنامه</h2>
        <div className="flex items-center mb-10 mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-9 text-primary -ml-12 z-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <input
            placeholder="ایمیل خود را وارد کنید"
            className="bg-main rounded-xl pr-14 outline-none flex-grow h-12 text-base"
          />
          <button className="h-12 px-3 rounded-xl bg-primary mr-2 hover:bg-primary/80 transition-all">
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </div>
        <div className="bg-white rounded-xl p-4 flex items-center justify-center">
          <img src="./images/Frame 45.svg" alt="truested icons" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
