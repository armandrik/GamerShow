import Link from "next/link";
import React from "react";

function Product() {
  return (
    <div className="rounded-2xl overflow-hidden text-xl font-medium bg-secondary transition-all mobile:hover:scale-100 mobile:snap-start mobile:w-52 mobile:flex-shrink-0 pointer-events-none">
      <img
        src="https://media.rawg.io/media/games/734/7342a1cd82c8997ec620084ae4c2e7e4.jpg"
        alt="game card"
      />
      <p className="text-white text-lg px-7 pt-7 mb-4 cursor-pointer pointer-events-auto transition-all mobile:text-base mobile:px-3 mobile:pt-3 mobile:leading-7">
        <Link href="/category/id">
          بازی Grand Theft Auto VI برای کنسول پلی استیشن ۵
        </Link>
      </p>
      <p className="text-font text-lg px-7 pb-7 text-center mobile:text-base mobile:px-3 mobile:pb-3">
        قیمت ۴/۵۰۰ هزار تومان
      </p>
      <div className="border-t border-zinc-700/50 flex items-center pt-3 justify-between shadow-card">
        <button className="flex items-center justify-center gap-1 text-white text-base w-40 bg-rose-400/90 p-5 pointer-events-auto rounded-br-2xl rounded-tl-2xl font-medium hover:bg-white hover:text-orange-500 transition-all mobile:p-3 mobile:w-28 mobile:text-sm">
          افزودن به
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
        <button className="text-font bg-font/20 p-5 pointer-events-auto rounded-bl-2xl rounded-tr-2xl font-medium hover:bg-font hover:text-white transition-all mobile:p-3">
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

export default Product;
