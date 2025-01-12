import React from "react";
import { ProductSchemaType } from "../../../../types/ProductSchemaType";

type productDetailsPropType = {
  data: ProductSchemaType;
};

function ProductDetails({ data }: productDetailsPropType) {
  const date = new Date(data.released);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="max-w-[600px] mobile:w-full mobile:flex-col mobile:items-center mobile:justify-start">
      <div className="flex items-center justify-start gap-4 mb-5 mobile:justify-between mobile:mt-5">
        <p className="bg-white text-black text-xs font-light px-1 rounded-sm">
          {formattedDate}
        </p>
        <p className="font-medium text-sm text-zinc-100">
          میانگین زمان بازی : {data?.averagePlayTime} ساعت
        </p>
      </div>
      <h1 className="text-[50px] font-bold desktop:text-[44px] mobile:text-4xl">
        {data?.name}
      </h1>
      <div className="flex items-center justify-start gap-1 mt-5">
        <p>(دیدگاه کاربر {data?.comments.length})</p>
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
      <p className="text-sm text-white/60 my-6">ژانر : {data?.genre}</p>
      <div className="flex items-start justify-start gap-2 flex-wrap">
        <p className="text-sm text-white/60"> پلتفرم : </p>
        {data?.platform.map((item, index) => (
          <p key={index} className="text-sm text-zinc-200">
            {item},
          </p>
        ))}
      </div>
      <div className="flex items-center justify-start gap-2 flex-wrap my-7">
        <p className="text-sm text-white/60">موجود در : </p>
        {data?.store.map((item, index) => (
          <p
            key={index}
            className="text-xs text-zinc-200 py-1 px-2 rounded-sm bg-gray-500/50"
          >
            {item}
          </p>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-white/60">
          امتیاز متا :{" "}
          <span className="border border-emerald-600 p-1 rounded-md font-medium text-emerald-600">
            {data.metaScore}
          </span>
        </p>
        <p className="font-semibold text-2xl text-white/80">
          {data?.price.toLocaleString()} هزار تومان
        </p>
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
              d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
