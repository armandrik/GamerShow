import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import React from "react";
import connectedToDB from "../../../config/db";
import { useAuth } from "@/utils/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import BreadCrump from "@/components/modules/breadCrump/BreadCrump";
import Product from "@/components/modules/product/Product";
import userModel from "../../../models/User";

async function WishList() {
  await connectedToDB();
  const user = await useAuth();

  if (!user) {
    redirect("/login-register");
  }

  const wishlist = await userModel
    .findOne({ _id: user._id })
    .populate("wishlist")
    .lean();

  return (
    <div>
      <Navbar />
      <BreadCrump route="لیست علاقه‌مندی" />
      <h1 className="text-white font-bold text-2xl mt-10 px-12 mobile:px-4">لیست بازی های موردعلاقه‌</h1>
      <div className="px-12 my-[77px] grid grid-cols-5 gap-5 tv:grid-cols-4 desktop:grid-cols-3 tablet:grid-cols-2 mobile:gap-3 small:grid-cols-1 mobile:px-4">
        {user.wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-16 mobile:gap-10">
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
          wishlist?.wishlist.map((item, index) => (
            <Product
              key={index}
              data={JSON.parse(JSON.stringify(item))}
              mobileWidth="w-full"
              width="auto"
            />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default WishList;
