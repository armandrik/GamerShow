import Product from "@/components/modules/product/Product";
import React from "react";
import ScrollArrows from "../index/latestgames/ScrollArrows";
import ProductModel from "../../../../models/Product";
import connectedToDB from "../../../../config/db";

type similayGamesPropType = {
  genre: string;
  searchParams: string;
};

async function SimilarGames({ genre, searchParams }: similayGamesPropType) {
  await connectedToDB();
  const games = await ProductModel.find({}, "-__v");
  const similarGame = games.filter((item) => item.genre === genre);
  const filterReapitProduct = similarGame.filter(
    (item) => item._id != searchParams
  );

  if (filterReapitProduct.length === 0) {
    return (
      <div className="px-12 my-10 mobile:px-4">
        <div className="mb-14 mobile:mb-4">
          <h2 className="text-white text-2xl font-bold mobile:text-xl">
            بازی‌های مشابه
          </h2>
        </div>
        <p className="text-white font-medium flex items-center justify-center gap-1 w-full mobile:mt-10">
          بازی مشابه وجود ندارد
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
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
        </p>
      </div>
    );
  }

  return (
    <div className="px-12 my-10 mobile:px-4">
      <div className="mb-14 mobile:mb-4">
        <h2 className="text-white text-2xl font-bold mobile:text-xl">
          بازی‌های مشابه
        </h2>
      </div>
      <ScrollArrows display="flex" elementId="similarScrollContainer" />
      <div
        id="similarScrollContainer"
        className="flex snap-x snap-mandatory gap-x-[14px] no-scrollbar overflow-x-auto no-scrollbar scroll-smooth"
      >
        {filterReapitProduct.map((item) => (
          <Product
            key={item._id.toString()}
            data={JSON.parse(JSON.stringify(item))}
            mobileWidth="w-60"
            width="80"
            imageHeight="h-auto"
          />
        ))}
      </div>
    </div>
  );
}

export default SimilarGames;
