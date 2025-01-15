import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import React from "react";
import connectedToDB from "../../../config/db";
import ProductModel from "../../../models/Product";
import Product from "@/components/modules/product/Product";
import BreadCrump from "@/components/modules/breadCrump/BreadCrump";
import SelectFilter from "@/components/modules/selectFilter/SelectFilter";

async function Games() {
  await connectedToDB();
  const product = await ProductModel.find({}, "-__v");

  return (
    <div>
      <Navbar />
      <BreadCrump route="product" />
      <div className="flex items-center justify-start gap-5 px-12 mt-10 mobile:px-4 mobile:gap-3">
        <SelectFilter options={["بیشترین قیمت" , "کم‌ترین قیمت" , "جدیدترین" , "بالاترین نمره"]} category="مرتب سازی بر اساس"/>
        <SelectFilter options={["شوتر" , "پازل" , "اکشن" , "RPG" , "مولتی پلیر"]} category="ژانر"/>
      </div>
      <div className="grid grid-cols-5 gap-5 py-10 px-12 tv:grid-cols-4 desktop:grid-cols-3 tablet:grid-cols-2 mobile:gap-3 mobile:px-4 small:grid-cols-1">
        {product.map((item) => (
          <Product
            key={item._id.toString()}
            data={JSON.parse(JSON.stringify(item))}
            mobileWidth="w-full"
            width="auto"
            imageHeight="h-auto"
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Games;
