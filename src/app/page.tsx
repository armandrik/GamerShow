import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Articles from "@/components/template/index/articles/Articles";
import Banner from "@/components/template/index/banner/Banner";
import LatestGames from "@/components/template/index/latestgames/LatestGames";

export default async function Home() {

  return (
    <>
      <Navbar />
      <Banner/>
      <LatestGames/>
      <Articles/>
      <Footer/>
    </>
  );
}
