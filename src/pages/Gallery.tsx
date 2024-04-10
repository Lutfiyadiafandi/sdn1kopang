import ImageGallery from "@/components/molecules/ImageGallery";
import Footer from "@/components/organism/Footer";
import Header from "@/components/organism/Header";
import TopNav from "@/components/organism/TopNav";

const Gallery = () => {
  return (
    <main className="">
      <TopNav />
      <Header />
      <ImageGallery />
      <Footer />
    </main>
  );
};

export default Gallery;
