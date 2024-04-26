import Header from "@/components/allpages/Header";
import Navigation from "@/components/allpages/Navigation";
import Excellence from "@/components/perpages/Excellence";
import Welcome from "@/components/perpages/Welcome";
import Banner from "@/components/perpages/Banner";
import LatestNews from "@/components/perpages/LatestNews";
import BannerRegist from "@/components/perpages/BannerRegist";
import Footer from "@/components/allpages/Footer";
import FaQ from "@/components/perpages/FaQ";

const Home = () => {
  return (
    <main className="">
      <Header />
      <Navigation />
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
