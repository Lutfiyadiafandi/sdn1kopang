import Footer from "@/components/organism/Footer";
import Header from "@/components/organism/Header";
import LatestNews from "@/components/organism/LatestNews";
import TopNav from "@/components/organism/TopNav";

const News = () => {
  return (
    <main className="">
      <TopNav />
      <Header />
      <LatestNews />
      <Footer />
    </main>
  );
};

export default News;
