import Footer from "@/components/organism/Footer";
import Header from "@/components/organism/Header";
import LatestNews from "@/components/organism/LatestNews";
import TopNav from "@/components/organism/TopNav";
import ViewNews from "@/components/organism/ViewNews";

const NewsDetail = () => {
  return (
    <main>
      <TopNav />
      <Header />
      <ViewNews />
      <LatestNews />
      <Footer />
    </main>
  );
};

export default NewsDetail;
