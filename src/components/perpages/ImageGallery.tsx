import TextTitle from "../reusable/TextTitle";
import { useState } from "react";
import Img from "@/assets/images/Rectangle 23.png";

const ImageGallery = () => {
  const [typeImage, setTypeImage] = useState("Fasilitas Sekolah");

  const setType = (e: any) => {
    setTypeImage(e.target.innerText);
  };
  console.log(typeImage);

  return (
    <section className="relative mt-8 max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      <TextTitle
        title={"Galeri"}
        subTitle={"Dokumentasi Kegiatan di SDN 1 Kopang"}
      />
      <div className="mt-14 grid grid-cols-3 w-full h-[56px]">
        <div
          className={`border-basic-900 rounded-t-lg py-4 px-5 cursor-pointer ${
            typeImage === "Fasilitas Sekolah"
              ? "bg-primary-600 text-basic-50"
              : "text-basic-900 border-b"
          }`}
          onClick={setType}
        >
          <h3 className="text-type-l font-semibold text-center">
            Fasilitas Sekolah
          </h3>
        </div>
        <div
          className={`border-basic-900 rounded-t-lg py-4 px-5 cursor-pointer ${
            typeImage === "Bangunan Sekolah"
              ? "bg-primary-600 text-basic-50"
              : "text-basic-900 border-b"
          }`}
          onClick={setType}
        >
          <h3 className="text-type-l font-semibold text-center">
            Bangunan Sekolah
          </h3>
        </div>
        <div
          className={`border-basic-900 rounded-t-lg py-4 px-5 cursor-pointer ${
            typeImage === "Foto Kegiatan"
              ? "bg-primary-600 text-basic-50"
              : "text-basic-900 border-b"
          }`}
          onClick={setType}
        >
          <h3 className="text-type-l font-semibold text-center">
            Foto Kegiatan
          </h3>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <img
          src={Img}
          alt=""
          className="w-full h-[240px] aspect-video object-cover rounded-lg"
        />
        <img
          src={Img}
          alt=""
          className="w-full h-[240px] aspect-video object-cover rounded-lg"
        />
        <img
          src={Img}
          alt=""
          className="w-full h-[240px] aspect-video object-cover rounded-lg"
        />
        <img
          src={Img}
          alt=""
          className="w-full h-[240px] aspect-video object-cover rounded-lg"
        />
        <img
          src={Img}
          alt=""
          className="w-full h-[240px] aspect-video object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default ImageGallery;
