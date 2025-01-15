import AccountButton from "@/components/template/index/navbar/AccountButton";
import MenuItem from "@/components/template/index/navbar/MenuItem";
import RegisterButton from "@/components/template/index/navbar/RegisterButton";
import Link from "next/link";
import React from "react";
import Badge from "../badge/Badge";
import Drawer from "@/components/template/index/navbar/Drawer";
import { useAuth } from "@/utils/auth";

async function Navbar() {
  const user = await useAuth();
  const wishlist = user?.wishlist
  const cart = user?.cart

  return (
    <nav className="px-12 mt-16 mb-11 tablet:mt-5 mobile:px-4 mobile:mb-5">
      <main className="flex justify-between items-center">
        <div className="flex items-center justify-end tablet:gap-3 mobile:gap-1">
          <div>
            <Drawer />
          </div>
          <Link href="/">
            <img
              src="/images/logo.svg"
              alt="logo"
              className="mobile:w-11 ml-7"
            />
          </Link>
          <MenuItem />
        </div>
        <div className="flex items-center justify-between gap-5">
          <Link href="/cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white cursor-pointer hover:text-primary transition-all mobile:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <Badge showNotif={cart?.length || 0} bg="bg-primary" />
          </Link>
          <Link href="/wishlist" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white cursor-pointer hover:text-rose-500 transition-all mobile:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
            <Badge showNotif={wishlist?.length || 0} bg="bg-rose-500" />
          </Link>
          <div>{user ? <AccountButton /> : <RegisterButton />}</div>
        </div>
      </main>
    </nav>
  );
}

export default Navbar;
