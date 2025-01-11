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
import { cookies } from "next/headers";
import { verifyAccessToken } from "@/utils/auth";
import userModel from "../../../../models/User";

type productPropType = {
  params: {
    id: string;
  };
};

async function Product({ params }: productPropType) {
  await connectedToDB();

  const productID = params.id;
  let name : string | undefined = undefined

  const token = cookies().get("token")?.value;
  if (typeof token === "string") {
    const tokenPayload = verifyAccessToken(token);
    if (
      tokenPayload &&
      typeof tokenPayload !== "string" &&
      "data" in tokenPayload
    ) {
      const userName = await userModel.findOne({ email: tokenPayload.data });
      name = userName?.username
    }
  }

  const product = await ProductModel.findOne(
    { _id: productID },
    "-__v"
  ).populate("comments");

  if (!product) {
    return <div>Product not found</div>;
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
      <SimilarGames searchParams={product?._id.toString()} genre={product?.genre}/>
      <div className="my-20 pt-10 bg-no-repeat bg-top bg-[linear-gradient(to_top,rgba(31,33,40,1),rgba(33,31,40,0.9)),url('https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg')]">
        <Comments
          comments={JSON.parse(JSON.stringify(product?.comments))}
          productID={productID}
          name={name}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Product;
