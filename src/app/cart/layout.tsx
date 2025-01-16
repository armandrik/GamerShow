import React from "react";
import Navbar from "../../components/modules/navbar/Navbar";
import BreadCrump from "../../components/modules/breadCrump/BreadCrump";
import Footer from "../../components/modules/footer/Footer";
import { useAuth } from "@/utils/auth";
import { redirect } from "next/navigation";

async function WishlistLaout({ children }: { children: React.ReactNode }) {
  const user = await useAuth();
  
  if (!user) {
    return redirect("/login-register");
  }

  return (
    <div>
      <Navbar />
      <BreadCrump route="سبدخرید" />
      {children}
      <Footer />
    </div>
  );
}

export default WishlistLaout;
