import Navigation from "@/components/allpages/Navigation";
import Header from "@/components/allpages/Header";
import Footer from "@/components/allpages/Footer";
import LatestNews from "@/components/perpages/LatestNews";
import ViewNews from "@/components/perpages/ViewNews";

const NewsDetail = () => {
  return (
    <main>
      <Header />
      <Navigation />
      <ViewNews />
      <LatestNews />
      <Footer />
    </main>
  );
};

export default NewsDetail;
