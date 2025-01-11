import AccountButton from "@/components/template/index/navbar/AccountButton";
import MenuItem from "@/components/template/index/navbar/MenuItem";
import RegisterButton from "@/components/template/index/navbar/RegisterButton";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import Badge from "../badge/Badge";
import Drawer from "@/components/template/index/navbar/Drawer";

function Navbar() {
  const token = cookies();
  const isUserLoggedIn = token.get("token")?.value;

  return (
    <nav className="px-12 mt-16 mb-11 tablet:mt-5 mobile:px-4 mobile:mb-5">
      <main className="flex justify-between items-center">
        <div className="flex items-center justify-start gap-7 tablet:gap-3 mobile:gap-1">
          <div>
            <Drawer />
          </div>
          <Link href="/">
            <img src="/images/logo.svg" alt="logo" className="mobile:w-11" />
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
            <Badge showNotif={0} bg="bg-primary" />
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <Badge showNotif={0} bg="bg-rose-500" />
          </Link>
          <div>{isUserLoggedIn ? <AccountButton /> : <RegisterButton />}</div>
        </div>
      </main>
    </nav>
  );
}

export default Navbar;
