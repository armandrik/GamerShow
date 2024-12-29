import Link from "next/link";
import React from "react";

function RegisterButton() {
  return (
    <button className="w-32 h-10 text-white bg-primary rounded-md font-medium hover:bg-primary/80 transition-all mobile:w-28 mobile:h-8 mobile:text-sm">
      <Link
        href="/login-register"
        className="flex items-center justify-center gap-2"
      >
        ثبت‌نام
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
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
          />
        </svg>
      </Link>
    </button>
  );
}

export default RegisterButton;
