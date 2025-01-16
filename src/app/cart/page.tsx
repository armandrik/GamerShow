"use client";
import React, { useEffect, useState } from "react";
import { ProductSchemaType } from "../../../types/ProductSchemaType";
import { toasMessage } from "@/utils/helper";
import { redirect } from "next/navigation";
import CartProduct from "@/components/template/cart/CartProduct";
import CartProductSkeleton from "@/components/modules/sceleton/CartProductSkeleton";
import EmptyCart from "@/components/template/cart/EmptyCart";

type wishListProp = {
  _id: string;
  cart: ProductSchemaType[];
};

function Cart() {
  const [data, setData] = useState<wishListProp>();
  const [loading, setLoading] = useState<boolean>(true);

  // Use conditional checks for calculations
  const gamesPrice =
    !loading && data?.cart ? data.cart.map((item) => item.price) : [];
  const totalPrice = gamesPrice.reduce((sum, price) => sum + price, 0);
  const priceWithTax = totalPrice + totalPrice * 0.02;

  useEffect(() => {
    setLoading(true);
    const getWishlist = async () => {
      try {
        const req = await fetch("api/cart");
        if (req.status === 200) {
          const res = await req.json();
          setData(res.cart);
        } else {
          toasMessage("دوباره تلاش کنید", "error")();
          setTimeout(() => {
            redirect("/");
          }, 600);
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
        toasMessage("خطایی رخ داد", "error")();
      } finally {
        setLoading(false);
      }
    };
    getWishlist();
  }, []);

  return (
    <div className="px-12 mobile:px-4">
      <h1 className="text-white font-bold mt-10 mb-24 text-2xl mobile:text-xl">
        سبدخرید
      </h1>
      {data?.cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="flex items-start justify-center gap-7 tablet-lg:flex-col tablet-lg:items-center tablet-lg:gap-0">
          <div className="flex flex-col items-start justify-start gap-4 mb-20 p-3 pb-0 rounded-lg shadow-lg bg-secondary tablet-lg:w-full tablet-lg:mb-10 mobile:p-2">
            {loading ? (
              <CartProductSkeleton />
            ) : (
              data?.cart.map((item, index) => (
                <CartProduct key={index} data={item} />
              ))
            )}
          </div>
          <div className="bg-secondary shadow-lg p-4 rounded-lg w-96 text-white/90 mb-20 tablet-lg:w-full">
            <h1 className="text-xl">خلاصه سفارش</h1>
            <div className="flex items-center justify-between my-10">
              <p className="text-lg text-white/70 mobile:text-base">
                جمع بازی‌ها
              </p>
              {loading ? (
                <div className="w-32 h-6 bg-gray-500 rounded-md animate-pulse mobile:w-28"></div>
              ) : (
                <p className="font-medium text-lg mobile:text-base">
                  {totalPrice?.toLocaleString()} تومان
                </p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <p className="text-lg text-white/70 flex item-center justify-start mobile:text-base">
                مالیات
              </p>
              {loading ? (
                <div className="w-10 h-6 bg-gray-500 rounded-md animate-pulse"></div>
              ) : (
                <p className="font-medium text-lg mobile:text-base">2%</p>
              )}
            </div>
            <form className="mt-10">
              <label className="flex items-center justify-start gap-1 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 mobile:size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6h.008v.008H6V6Z"
                  />
                </svg>
                کد تخفیف دارید؟
              </label>
              <input
                required={true}
                type="text"
                className="bg-transparent border border-zinc-500 rounded-md py-2 outline-none px-1 w-[80%] tablet-lg:w-[88%] mobile:w-[78%]"
              />
              <button className="bg-zinc-700/70 text-white mr-2 p-2 rounded-md hover:bg-zinc-700 transition-all mobile:text-sm mobile:p-3">
                اعمال
              </button>
            </form>
            <div className="flex items-center justify-between mt-10">
              <p className="text-lg text-white/70">جمع کل</p>
              {loading ? (
                <div className="w-36 h-6 bg-gray-500 rounded-md animate-pulse"></div>
              ) : (
                <p className="font-medium text-lg">
                  {priceWithTax?.toLocaleString()} تومان
                </p>
              )}
            </div>
            <button className="flex items-center justify-center gap-1 w-full bg-primary text-white text-xl rounded-md py-2 mt-10 hover:bg-primary/80 transition-all">
              پرداخت
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
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
