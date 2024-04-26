import ImageGallery from "@/components/perpages/ImageGallery";
import Footer from "@/components/allpages/Footer";
import Navigation from "@/components/allpages/Navigation";
import Header from "@/components/allpages/Header";

const Gallery = () => {
  return (
    <main className="">
      <Header />
      <Navigation />
      <ImageGallery />
      <Footer />
    </main>
  );
};

export default Gallery;
