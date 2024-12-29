"use client"
import Link from "next/link";
import React, { useState } from "react";
import DropDown from "./DropDown";

function AccountButton() {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  return (
    <div className="relative w-36 h-10 rounded-md bg-primary hover:bg-primary/80 transition-all mobile:w-36 mobile:h-9 mobile:text-base">
      <h1
        onClick={() => setShowDropDown(!showDropDown)}
        className="font-medium text-center h-10 text-white flex items-center gap-1 justify-center mobile:h-9"
      >
        <Link href="/">حساب کاربری</Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-5 transition-all ${
            showDropDown ? "rotate-180" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </h1>
      {showDropDown && <DropDown />}
    </div>
  );
}

export default AccountButton;
