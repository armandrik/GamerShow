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

type productPropType = {
  params: {
    id: string;
  };
};

function Product({ params }: productPropType) {
  return (
    <div>
      <div className="bg-cover border border-main bg-no-repeat bg-top bg-[linear-gradient(to_top,rgba(31,33,40,1),rgba(33,31,40,0.9)),url('https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg')]">
        <Navbar />
        <BreadCrump route={`/product/${params.id}`} />
        <main className="flex items-start justify-center gap-10 text-white px-12 mt-16 mb-11 tablet:mt-5 mobile:px-4 desktop:gap-6 desktop:mt-10 tablet-lg:flex-col tablet-lg:justify-start">
          <Gallery />
          <ProductDetails />
        </main>
      </div>
      <div className="w-[1150px] mx-auto text-white px-12 mt-16 mb-11 desktop:w-[1000px] tablet-lg:w-full tablet:mt-5 mobile:px-4">
        <AboutGame />
        <TagGame />
        <SystemRequierment />
      </div>
      <SimilarGames />
      <div className="my-20 pt-10 bg-no-repeat bg-top bg-[linear-gradient(to_top,rgba(31,33,40,1),rgba(33,31,40,0.9)),url('https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg')]">
        <Comments />
      </div>
      <Footer />
    </div>
  );
}

export default Product;
