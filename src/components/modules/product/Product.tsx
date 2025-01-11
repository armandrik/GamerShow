"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ProductSchemaType } from "../../../../types/ProductSchemaType";

type productPropType = {
  data: ProductSchemaType;
  mobileWidth: string;
  width : string
};

function Product({ data, mobileWidth , width }: productPropType) {
  const [isLoading, setIsLoading] = useState(!data); // Initially true if no data

  useEffect(() => {
    if (data) {
      setIsLoading(false); // Stop loading as soon as data is available
    }
  }, [data]); // Re-run effect when data changes

  if (isLoading) {
    return (
      <div className="w-80 flex flex-col items-center justify-between gap-5 rounded-2xl overflow-hidden text-xl font-medium bg-secondary transition-all snap-start mobile:w-52 flex-shrink-0 animate-pulse">
        <div className="h-48 w-full mobile:h-32 bg-gray-700"></div>
        <div className="w-3/4 h-6 bg-gray-700 rounded-md"></div>
        <div className="w-1/2 h-6 bg-gray-700 rounded-md"></div>
        <div className="w-full border-t border-zinc-700/50 flex items-center justify-between">
          <div className="w-40 h-12 bg-gray-700 rounded-br-2xl rounded-tl-2xl mobile:w-28"></div>
          <div className="w-12 h-12 bg-gray-700 rounded-bl-2xl rounded-tr-2xl mobile:w-10"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-${width} flex flex-col items-center justify-between gap-5 rounded-2xl overflow-hidden text-xl font-medium bg-secondary transition-all snap-start flex-shrink-0 mobile:${mobileWidth}`}>
      <img
        src={data?.image}
        alt="game card"
        className="selection:bg-transparent h-48 w-full tablet-lg:h-36 mobile:h-32 small:h-28"
      />
      <p className="text-white text-xl py-3 cursor-pointer pointer-events-auto hover:text-white/70 transition-all mobile:text-base mobile:py-0 mobile:text-center small:px-1 small:text-sm">
        <Link href={`/product/${data?._id}`}>بازی {data?.name}</Link>
      </p>
      <p className="flex items-center justify-between text-white/80 text-lg px-7 mobile:text-base mobile:px-3 small:text-sm">
        قیمت : <span>تومان {data?.price.toLocaleString()}</span>
      </p>
      <div className="w-full border-t border-zinc-700/50 flex items-center justify-between">
        <button className="flex items-center justify-center gap-1 text-white text-base w-40 bg-rose-400/90 p-5 pointer-events-auto rounded-br-2xl rounded-tl-2xl font-medium hover:bg-white hover:text-orange-500 transition-all mobile:p-3 mobile:w-28 mobile:text-sm small:p-2">
          افزودن به
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 small:size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
        <button className="text-font bg-font/20 p-5 pointer-events-auto rounded-bl-2xl rounded-tr-2xl font-medium hover:bg-font hover:text-white transition-all mobile:p-3 small:p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 small:size-5"
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

export default Product;
function handleMouseUp(this: HTMLElement, ev: MouseEvent) {
  throw new Error("Function not implemented.");
}
