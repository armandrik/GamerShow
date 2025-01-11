import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import React from "react";
import connectedToDB from "../../../config/db";
import ProductModel from "../../../models/Product";
import Product from "@/components/modules/product/Product";

async function Games() {
  await connectedToDB();
  const product = await ProductModel.find({}, "-__v");

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-5 gap-5 py-32 px-12 tv:grid-cols-4 desktop:grid-cols-3 tablet:grid-cols-2 mobile:gap-3 mobile:px-4">
        {product.map((item) => (
          <Product
            key={item._id.toString()}
            data={JSON.parse(JSON.stringify(item))}
            mobileWidth='w-full'
            width="auto"
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Games;
