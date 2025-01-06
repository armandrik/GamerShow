import React from "react";

function ProductDetails() {
  return (
    <div className="mobile:w-full mobile:flex-col mobile:items-center mobile:justify-start">
      <div className="flex items-center justify-start gap-4 mb-5 mobile:justify-between mobile:mt-5">
        <p className="bg-white text-black text-xs font-light px-1 rounded-sm">
          APR 20, 2018
        </p>
        <p className="font-medium text-sm text-zinc-100">
          میانگین زمان بازی : 14 ساعت
        </p>
      </div>
      <h1 className="text-[50px] font-bold desktop:text-[44px] mobile:text-4xl">
        God of war (2018)
      </h1>
      <div className="flex items-center justify-start gap-1 mt-5">
        <p>(دیدگاه کاربر 4979)</p>
        {Array.apply(null, Array(5)).map((item, index) => (
          <svg
            key={index}
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
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        ))}
      </div>
      <p className="text-sm text-white/60 my-6">ژانر : اکشن</p>
      <p className="text-sm text-white/60 ">مناسب برای : playstation 5 / pc</p>
      <div className="flex items-center justify-start gap-2 my-7">
        <p className="text-sm text-white/60">پلتفرم : </p>
        <p className="text-xs text-zinc-200 py-1 px-2 rounded-sm bg-gray-500/50">
          استیم
        </p>
        <p className="text-xs text-zinc-200 py-1 px-2 rounded-sm bg-gray-500/50">
          اپیک گیمز
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-white/60">
          امتیاز متا :{" "}
          <span className="border border-emerald-600 p-1 rounded-md font-medium text-emerald-600">
            94
          </span>
        </p>
        <p className="font-semibold text-2xl text-white/80">۴/۵۰۰/۰۰۰ هزار تومان</p>
      </div>
      <div className="flex-col items-start justify-between mt-10 [&>*]:w-full [&>*]:font-medium [&>*]:text-lg [&>*]:py-3 [&>*]:rounded [&>*]:transition-all desktop:mt-9 mobile:[&>*]:text-base">
        <button className="bg-primary mb-5 hover:bg-primary/80 flex items-center justify-center gap-1">
          افزودن به سبد خرید
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
        <button className="bg-rose-500 hover:bg-rose-500/80 flex items-center justify-center gap-1">
          افزودن به علاقه‌مندی
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
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
