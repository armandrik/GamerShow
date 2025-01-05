import BreadCrump from "@/components/modules/breadCrump/BreadCrump";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import ProductDetails from "@/components/modules/product/ProductDetails";
import Gallery from "@/components/template/product/Gallery";
import React from "react";

type productPropType = {
  params: {
    id: string;
  };
};

function Product({ params }: productPropType) {
  return (
    <div>
      <div className="bg-cover border border-main bg-no-repeat bg-top bg-[linear-gradient(to_top,rgba(30,31,40,1),rgba(33,31,40,0.9)),url('https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg')]">
        <Navbar />
        <BreadCrump route={`/product/${params.id}`} />
        <main className="flex items-start justify-center gap-10 text-white px-12 mt-16 mb-11 tablet:mt-5 mobile:px-4 desktop:gap-6 desktop:mt-10 tablet-lg:flex-col tablet-lg:justify-start">
          <Gallery />
          <ProductDetails/>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
