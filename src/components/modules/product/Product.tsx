"use client";
import Link from "next/link";
import React from "react";
import { ProductSchemaType } from "../../../../types/ProductSchemaType";
import { ObjectId, Types } from "mongoose";
import { addToWishlistService } from "@/services/addToWishlistService";

type productPropType = {
  data: ProductSchemaType;
  mobileWidth: string;
  width: string;
};

function Product({ data, mobileWidth, width }: productPropType) {
  const addToWishList = async (id: string | Types.ObjectId | undefined) => {
    if (!id) {
      console.error("ID is undefined or invalid");
      return;
    }
    await addToWishlistService(id);
  };

  return (
    <div
      className={`w-${width} relative flex flex-col items-center justify-between gap-5 shadow-md rounded-2xl overflow-hidden text-xl font-medium bg-secondary transition-all snap-start flex-shrink-0 mobile:${mobileWidth}`}
    >
      <span className="absolute w-8 h-8 flex items-center justify-center top-5 right-5 text-sm borde rounded-full bg-secondary/50 text-neutral-300 mobile:right-2 mobile:top-2 mobile:w-6 mobile:h-6 mobile:text-xs">
        {data?.metaScore}
      </span>
      <img
        src={data?.image}
        alt="game card"
        className="selection:bg-transparent h-48 w-full tablet-lg:h-auto mobile:h-32 small:h-auto"
      />
      <p className="text-white text-xl py-3 cursor-pointer pointer-events-auto hover:text-white/70 transition-all mobile:text-base mobile:py-0 mobile:text-center">
        <Link href={`/product/${data?._id}`}>بازی {data?.name}</Link>
      </p>
      <p className="flex items-center justify-between text-white/80 text-lg px-7 mobile:text-base mobile:px-3">
        قیمت : <span>تومان {data?.price.toLocaleString()}</span>
      </p>
      <div className="w-full border-t border-zinc-700/50 flex items-center justify-between">
        <button className="flex items-center justify-center gap-1 text-white text-base w-40 bg-primary p-5 pointer-events-auto rounded-br-2xl rounded-tl-2xl font-medium hover:bg-primary/80 transition-all mobile:p-3 mobile:w-28 mobile:text-sm small:rounded-none small:flex-grow">
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
        <button
          onClick={() => addToWishList(data?._id)}
          className="text-white bg-rose-500 p-5 pointer-events-auto rounded-bl-2xl rounded-tr-2xl font-medium hover:bg-rose-500/80 hover:text-white transition-all mobile:p-3 small:rounded-none"
        >
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
              d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Product;
