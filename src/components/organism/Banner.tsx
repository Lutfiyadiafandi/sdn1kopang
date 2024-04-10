import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import images from "@/assets/images/Subtract.png";
import Header from "./Header";

const Banner = () => {
  const Image = [
    {
      id: 1,
      image: "https://sdm2dps.com/wp-content/uploads/2019/02/home1.jpg",
      alt: "gallery-image",
    },
    {
      id: 2,
      image: "https://sdm2dps.com/wp-content/uploads/2019/02/home2.jpg",
      alt: "gallery-image",
    },
    {
      id: 3,
      image: "https://sdm2dps.com/wp-content/uploads/2019/02/home3-1.jpg",
      alt: "gallery-image",
    },
  ];
  return (
    <section className="relative w-full h-screen">
      <div className="relative w-full overflow-hidden">
        <img src={images} alt="" className="w-full h-max object-cover" />
        <div className="absolute bottom-5 inset-0 bg-black opacity-30"></div>
      </div>
      {/* <Header /> */}
      <div className="w-full absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
        <h1 className="text-heading2 font-bold text-basic-50 text-center">
          Selamat Datang di <br /> Situs Web SD Negeri 1 Kopang
        </h1>
        <p className="mt-4 text-type-l font-semibold text-basic-50 text-center">
          Bertaqwa, Berakhlak Mulia, Berprestasi, Berwawasan Lingkungan dan
          Global yang <br /> berpijak pada Budaya Bangsa
        </p>
      </div>
      {/* <Swiper
        spaceBetween={0}
        effect={"fade"}
        pagination={true}
        navigation={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        rewind={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Image.map((data: any) => (
          <SwiperSlide key={data.id}>
            <img
              src={data.image}
              alt={data.alt}
              className="w-full h-[550px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </section>
  );
};

export default Banner;
