import React from "react";
import { ProductSchemaType } from "../../../../types/ProductSchemaType";
import Link from "next/link";
import { Types } from "mongoose";
import { toasMessage } from "@/utils/helper";

type CartProductPropType = {
  data: ProductSchemaType;
};

function CartProduct({ data }: CartProductPropType) {
  const removeFromWishlist = async (
    id: string | undefined | Types.ObjectId
  ) => {
    try {
      const req = await fetch("api/cart", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (req.status === 200) {
        toasMessage("آیتم با موفقیت حذف شد", "success")();
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else if (req.status === 401) {
        toasMessage("ابتدا وارد اکانت شوید", "error")();
        setTimeout(() => {
          window.location.href = "/login-register";
        }, 500);
      } else if (req.status === 404) {
        toasMessage("دوباره سعی‌ کنید", "error")();
      } else {
        console.error(
          "Failed to remove product:",
          req.status,
          await req.text()
        );
        toasMessage("دوباره سعی‌ کنید", "error")();
      }
    } catch (error) {
      console.error("Error while removing product from wishlist:", error);
      toasMessage("دوباره سعی‌ کنید", "error")();
    }
  };

  return (
    <div className="w-full p-3 pb-6 border-b border-zinc-700 flex items-start justify-start gap-4 last:border-b-0 mobile:p-1 mobile:pb-4 small:flex-col">
      <img
        src={data?.image}
        alt="game image"
        className="w-52 h-32 rounded-lg mobile:w-52 mobile:h-28 small:w-full small:h-auto"
      />
      <div className="h-32 text-white flex flex-col items-start justify-start mobile:h-28 small:h-auto">
        <div>
          <Link
            href={`/product/${data?._id}`}
            className="text-lg hover:text-white/80 transition-all cursor-pointer mobile:text-base"
          >
            {data?.name}
          </Link>
          <p className="text-sm text-zinc-500 mt-1 mobile:mb-4">
            {data?.genre}
          </p>
        </div>
        <p className="text-lg mobile:text-base mt-10 mobile:mt-4">
          {data?.price.toLocaleString()} هزارتومان
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        onClick={() => removeFromWishlist(data?._id)}
        className="size-6 text-white cursor-pointer self-start mr-auto hover:text-rose-500/80 transition-all small:size-6 small:-mt-9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
        />
      </svg>
    </div>
  );
}

export default CartProduct;
