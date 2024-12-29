import Link from "next/link";
import React from "react";
import DropDown from "./DropDown";

function AccountButton() {
  return (
    <div className="relative group w-36 h-10 rounded-md bg-primary hover:bg-primary/80 transition-all mobile:w-28 mobile:h-8 mobile:text-sm">
      <h1 className="font-medium text-center h-10 text-white flex items-center gap-1 justify-center mobile:h-8">
        <Link href="/p-user">حساب کاربری</Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 group-hover:rotate-180 transition-all mobile:size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </h1>
      <DropDown />
    </div>
  );
}

export default AccountButton;
