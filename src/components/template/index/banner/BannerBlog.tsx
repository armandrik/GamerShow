import React from "react";

function BannerBlog() {
  return (
    <div className="absolute flex flex-col justify-between item-start top-[440px] left-32 w-[550px] h-[320px] rounded-3xl bg-primary/10 backdrop-blur-lg border-[2px] pt-5 border-zinc-400/30 desktop:w-[400px] desktop:h-72 tablet:left-16 tablet:top-[490px] mobile:w-[85%] mobile:mx-auto mobile:left-0 mobile:right-0 mobile:top-[600px] mobile:pt-3 mobile:gap-5 mobile:h-auto">
      <div className="flex flex-col items-start justify-center gap-4 text-white px-9 mobile:px-4">
        <p className="text-font font-medium text-sm bg-font/15 px-3 py-1 rounded-full">
          مقاله جدید
        </p>
        <h2 className="font-bold text-4xl desktop:text-3xl mobile:text-xl">Call of Duty Warzone</h2>
        <p className="font-normal text-[19px] text-right desktop:text-base mobile:text-sm">
          مانند دیگر بازی‌های بتل رویال سوار یک هواپیما خواهید شد و روی نقشه
          فرود خواهید آمد. وجه تفاوت این بازی نسبت به بقیه در تعداد بازیکنان آن
          است.
        </p>
      </div>
      <div className="flex items-center justify-between text-white pr-9 mobile:pr-4">
        <div className="flex items-center justify-start gap-1 bg-primary py-[1px] pl-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 text-primary rounded-full p-1 bg-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          <p className="font-normal text-xs">۲۰ نظر</p>
        </div>
        <button className="bg-primary p-5 rounded-bl-[23px] rounded-tr-xl rounded-br-lg hover:bg-primary/80 transition-all mobile:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default BannerBlog;
