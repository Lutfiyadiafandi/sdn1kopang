import Excellence from "@/components/organism/Excellence";
import Welcome from "@/components/organism/Welcome";
import Banner from "@/components/organism/Banner";
import Header from "@/components/organism/Header";
import LatestNews from "@/components/organism/LatestNews";
import TopNav from "@/components/organism/TopNav";
import BannerRegist from "@/components/organism/BannerRegist";
import Footer from "@/components/organism/Footer";
import FaQ from "@/components/organism/FaQ";

const Home = () => {
  return (
    <main className="">
      <TopNav />
      <Header />
      <Banner />
      <Welcome />
      <Excellence />
      <BannerRegist />
      <LatestNews />
      <FaQ />
      <Footer />
    </main>
  );
};

export default Home;
