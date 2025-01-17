import BreadCrump from "@/components/modules/breadCrump/BreadCrump";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import ProductDetails from "@/components/template/product/ProductDetails";
import AboutGame from "@/components/template/product/AboutGame";
import Gallery from "@/components/template/product/Gallery";
import SimilarGames from "@/components/template/product/SimilarGames";
import SystemRequierment from "@/components/template/product/SystemRequierment";
import TagGame from "@/components/template/product/TagGame";
import React from "react";
import Comments from "@/components/modules/comments/Comments";
import commentModel from "../../../../models/Comments";
import ProductModel from "../../../../models/Product";
import connectedToDB from "../../../../config/db";
import { useAuth } from "@/utils/auth";
import userModel from "../../../../models/User";
import { redirect } from "next/navigation";
import mongoose from "mongoose";

export const metadata = {
  title: "بازی های فروشگاه | Gamer Show",
  describtion: "مشخصات و توضیحات بازی با امکان ثبت نظر",
  icons: {
    icon: "/images/logo.svg",
  },
};

type productPropType = {
  params: {
    id: string;
  };
};

async function Product({ params }: productPropType) {
  await connectedToDB();

  const productID = params.id;

  // Validate if the productID is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(productID)) {
    redirect("/not-found"); // Redirect to the homepage
  }

  const user = await useAuth();

  const product = await ProductModel.findOne(
    { _id: productID },
    "-__v"
  ).populate("comments");

  if (!product) {
    redirect("/not-found"); // Redirect if product doesn't exist
  }

  const dynamicBg = `linear-gradient(to top, rgba(31,33,40,1), rgba(33,31,40,0.9)), url(${product?.image})`;

  return (
    <div>
      <div
        className={`bg-cover border border-main bg-no-repeat bg-top`}
        style={{
          backgroundImage: dynamicBg,
        }}
      >
        <Navbar />
        <BreadCrump route={`/product/${product?.name}`} />
        <main className="flex items-start justify-center gap-10 text-white px-12 mt-16 mb-11 tablet:mt-5 mobile:px-4 desktop:gap-6 desktop:mt-10 tablet-lg:flex-col tablet-lg:justify-start">
          <Gallery screenshots={product?.screenshots ?? []} />
          <ProductDetails data={JSON.parse(JSON.stringify(product))} />
        </main>
      </div>
      <div className="w-[1150px] mx-auto text-white px-12 mt-16 mb-11 desktop:w-[1000px] tablet-lg:w-full tablet:mt-5 mobile:px-4">
        <AboutGame about={product?.about ?? ""} />
        <TagGame tag={product?.tags ?? []} />
        <SystemRequierment requirements={product.requirements ?? ""} />
      </div>
      <SimilarGames
        searchParams={product?._id.toString()}
        genre={product?.genre}
      />
      <div className="my-20 pt-10 bg-no-repeat bg-top bg-[linear-gradient(to_top,rgba(31,33,40,1),rgba(33,31,40,0.9)),url('https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg')]">
        <Comments
          comments={JSON.parse(JSON.stringify(product?.comments))}
          productID={productID}
          name={user?.username}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Product;
