import CardNews from "../reusable/CardNews";
import TextTitle from "../reusable/TextTitle";
import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

const FullNews = () => {
  return (
    <section className="mt-8 max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      <TextTitle
        title={"Berita Dan Artikel"}
        subTitle={"Semua Berita dan Artikel Kami"}
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
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default FullNews;
