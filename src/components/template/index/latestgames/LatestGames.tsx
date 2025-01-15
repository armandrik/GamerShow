import Product from "@/components/modules/product/Product";
import Link from "next/link";
import React from "react";
import ScrollArrows from "./ScrollArrows";
import connectedToDB from "../../../../../config/db";
import ProductModel from "../../../../../models/Product";

async function LatestGames() {
  await connectedToDB();
  const games = await ProductModel.find({}, "-__v");

  return (
    <div className="px-12 mt-28 mb-20 tablet:mt-48 mobile:px-4 mobile:mt-60">
      <div className="flex items-center justify-between gap-4 mb-14 mobile:mb-4">
        <h2 className="text-white text-2xl font-bold mobile:text-xl">
          جدیدترین بازی های فروشگاه
        </h2>
        <button className="w-40 h-12 bg-zinc-700/70 text-white rounded-2xl font-bold text-lg hover:bg-zinc-700 transition-all mobile:w-28 mobile:h-9 mobile:text-sm">
          <Link href="/product">مشاهده همه</Link>
        </button>
      </div>
      <ScrollArrows display="hidden" elementId="scrollContainer" />
      <div
        id="scrollContainer"
        className="flex snap-x snap-mandatory gap-x-[14px] no-scrollbar overflow-x-auto no-scrollbar scroll-smooth"
      >
        {games.slice(0, 5).map((item) => (
          <Product
            key={item._id.toString()}
            data={JSON.parse(JSON.stringify(item))}
            mobileWidth="w-60"
            width="80"
          />
        ))}
      </div>
    </div>
  );
}

export default LatestGames;
