import TextTitle from "../reusable/TextTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Achievement = () => {
  const Image = [
    {
      id: 1,
      image: "https://sdm2dps.com/wp-content/uploads/2019/02/home1.jpg",
      alt: "Juara 1 Lomba Pramuka Antar Kecamatan Tahun 2018",
    },
    {
      id: 2,
      image: "https://sdm2dps.com/wp-content/uploads/2019/02/home2.jpg",
      alt: "Juara 1 Lomba Pramuka Antar Kecamatan Tahun 2018",
    },
    {
      id: 3,
      image: "https://sdm2dps.com/wp-content/uploads/2019/02/home3-1.jpg",
      alt: "Juara 1 Lomba Pramuka Antar Kecamatan Tahun 2018",
    },
    {
      id: 4,
      image: "https://sdm2dps.com/wp-content/uploads/2019/02/home3-1.jpg",
      alt: "Juara 1 Lomba Pramuka Antar Kecamatan Tahun 2018",
    },
    {
      id: 5,
      image: "https://sdm2dps.com/wp-content/uploads/2019/02/home3-1.jpg",
      alt: "Juara 1 Lomba Pramuka Antar Kecamatan Tahun 2018",
    },
  ];
  return (
    <section className="mt-[70px] max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      <TextTitle
        title={"Prestasi"}
        subTitle={"SDN 1 Kopang"}
        className="text-center"
      />
      <div className="mt-8">
        <Swiper
          modules={[Autoplay, Navigation]}
          rewind={true}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          // navigation={{
          //   nextEl: ".review-swiper-button-next",
          //   prevEl: ".review-swiper-button-prev",
          // }}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            880: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            // 1280: {
            //   slidesPerView: 3,
            //   spaceBetween: 0,
            // },
          }}
        >
          {Image.map((data: any) => (
            <SwiperSlide key={data.id}>
              <div className="flex justify-center gap-10">
                <div className="pb-5 bg-neutral0 items-center justify-center flex flex-col gap-5 mx-4 rounded-2xl border-2 border-gradient">
                  <img
                    src={data.image}
                    className="w-full aspect-video object-cover rounded-t-2xl"
                    alt="product-image"
                  />
                  <p className="text-type-l font-semibold text-basic-900 text-center">
                    {data.alt}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Achievement;
