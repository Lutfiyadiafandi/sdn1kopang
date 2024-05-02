import { Link } from "react-router-dom";
import CardNews from "../reusable/CardNews";
import TextTitle from "../reusable/TextTitle";
import { Button } from "../ui/button";

const LatestNews = () => {
  return (
    <section className="mt-[70px] max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      <TextTitle
        title={"Berita Dan Artikel"}
        subTitle={"Update Berita dan Artikel Terbaru Kami"}
      />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        <CardNews
          image={
            "https://strapi.lenteravisiedutama.com/uploads/Img_Artikel_Banner_63c481bdb8.png"
          }
          title={"Ini Contoh Untuk Judul Berita Satu Baris"}
          date={"09 Mei 2024"}
        />
        <CardNews
          image={
            "https://strapi.lenteravisiedutama.com/uploads/Img_Artikel_Banner_63c481bdb8.png"
          }
          title={"Ini Adalah Contoh Untuk Judul Berita Dua Baris"}
          date={"09 Mei 2024"}
        />
        <CardNews
          image={
            "https://strapi.lenteravisiedutama.com/uploads/Img_Artikel_Banner_63c481bdb8.png"
          }
          title={"Ini Contoh Untuk Judul Berita Satu Baris"}
          date={"09 Mei 2024"}
        />
      </div>
      <div className="mt-5 flex justify-center text-basic-50">
        <Link to="/berita">
          <Button
            size={"lg"}
            variant={"default"}
            className="text-type-l font-semibold"
          >
            Lihat Semua
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LatestNews;
