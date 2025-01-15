"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Product from "@/components/modules/product/Product";
import { ProductSchemaType } from "../../../types/ProductSchemaType";
import { redirect } from "next/navigation";
import { toasMessage } from "@/utils/helper";
import ProductSkeleton from "@/components/modules/sceleton/ProductSkeleton";
import { Types } from "mongoose";

type wishListProp = {
  _id: string;
  wishlist: ProductSchemaType[];
};

function WishList() {
  const [data, setData] = useState<wishListProp>();
  const [loading, setLoading] = useState<boolean>(true);

  const removeFromWishlist = async (
    id: string | undefined | Types.ObjectId
  ) => {
    try {
      const res = await fetch("api/wishlist", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (res.status === 200) {
        toasMessage("آیتم با موفقیت حذف شد", "success")();
        setTimeout(() => {
          window.location.reload();
        }, 400);
      } else if (res.status === 401) {
        toasMessage("ابتدا وارد اکانت شوید", "error")();
        setTimeout(() => {
          window.location.href = "/login-register";
        }, 500);
      } else if (res.status === 404) {
        toasMessage("دوباره سعی‌ کنید", "error")();
      } else {
        console.error(
          "Failed to remove product:",
          res.status,
          await res.text()
        );
        toasMessage("دوباره سعی‌ کنید", "error")();
      }
    } catch (error) {
      console.error("Error while removing product from wishlist:", error);
      toasMessage("دوباره سعی‌ کنید", "error")();
    }
  };

  useEffect(() => {
    setLoading(true);
    const getWishlist = async () => {
      const req = await fetch("api/wishlist");
      if (req.status === 200) {
        const res = await req.json();
        setData(res.wishList);
        setLoading(false);
      } else {
        toasMessage("دوباره تلاش کنید", "error")();
        setTimeout(() => {
          redirect("/");
        }, 600);
      }
    };
    getWishlist();
  }, []);

  return (
    <div>
      <h1 className="text-white font-bold text-2xl mt-10 px-12 mobile:px-4 mobile:text-xl">
        لیست بازی های موردعلاقه‌
      </h1>
      {data?.wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-16 my-24 mobile:gap-10">
          <h1 className="text-white text-3xl font-bold flex items-center justify-center gap-2 mobile:text-xl">
            بازی موردعلاقه اضافه نشده
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 mobile:size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </h1>
          <button className="text-lg bg-primary text-white p-3 rounded-lg flex items-center justify-center gap-1 hover:bg-primary/80 transition-all mobile:text-base">
            <Link href="/product">بازدید از فرشگاه</Link>
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
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
        </div>
      ) : (
        <div className="px-12 my-[77px] grid grid-cols-5 gap-5 tv:grid-cols-4 desktop:grid-cols-3 tablet:grid-cols-2 mobile:gap-3 small:grid-cols-1 mobile:px-4">
          {loading ? (
            <ProductSkeleton />
          ) : (
            data?.wishlist.map((item, index) => (
              <div key={index} className="relative">
                <Product
                  data={JSON.parse(JSON.stringify(item))}
                  mobileWidth="w-full"
                  width="auto"
                  imageHeight="h-auto"
                />
                <button
                  onClick={() => removeFromWishlist(item?._id)}
                  className="absolute left-2 top-2 flex items-center justify-center bg-rose-500/50 w-9 h-9 rounded-full text-white hover:bg-rose-500 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5"
                    />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default WishList;
