import Navbar from "@/components/modules/navbar/Navbar";
import Banner from "@/components/template/index/banner/Banner";
import LatestGames from "@/components/template/index/latestgames/LatestGames";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner/>
      <LatestGames/>
    </>
  );
}
