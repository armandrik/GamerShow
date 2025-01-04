import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="w-full h-dvh pt-20 bg-cover bg-center bg-[linear-gradient(to_right,rgba(0,0,0,1),rgba(0,0,0,0.7)),url('https://media.rawg.io/media/screenshots/d5d/d5d8a572ae165d6d0887101858f6e104.jpg')] mobile:pt-32">
      <div className="text-center w-full">
        <div className="flex items-center justify-center">
          <img src="./images/not-found.png" className="w-[500px] mobile:w-[300px]"/>
        </div>
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-white/80 -mt-10 mb-16 mobile:text-3xl mobile:mb-10">
          صفحه موردنظر یافت نشد
        </h1>
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="rounded-md bg-primary px-7 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary/80 transition-all"
          >
            بازگشت به صفحه‌اصلی  
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
