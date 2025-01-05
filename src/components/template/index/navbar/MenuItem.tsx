import Link from "next/link";
import React from "react";

function MenuItem() {
  return (
    <ul className="flex gap-7 items-center text-zinc-300 text-lg font-medium [&>li]:cursor-pointer tablet:hidden">
      <li>
        <Link href="/">خانه</Link>
      </li>
      <li>
        <Link href="/product">فروشگاه</Link>
      </li>
      <li>
        <Link href="/about-us">درباره‌ما</Link>
      </li>
      <li>
        <Link href="/contact-us">تماس با‌ما</Link>
      </li>
      <li>
        <Link href="/blogs">وبلاگ</Link>
      </li>
    </ul>
  );
}

export default MenuItem;
