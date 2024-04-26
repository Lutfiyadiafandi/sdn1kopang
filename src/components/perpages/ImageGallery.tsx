// import PhotoAlbum from "react-photo-album";
import TextTitle from "../reusable/TextTitle";
import { useState } from "react";
// import { FaTimes } from "react-icons/fa";
import Img from "@/assets/images/Rectangle 23.png";

const ImageGallery = () => {
  // const images = [
  //   {
  //     src: "https://source.unsplash.com/ts1zXzsD7xc",
  //     width: 1080,
  //     height: 1620,
  //   },
  //   {
  //     src: "https://source.unsplash.com/F_r83HEzsXI",
  //     width: 1080,
  //     height: 1426,
  //   },
  //   {
  //     src: "https://source.unsplash.com/m82uh_vamhg",
  //     width: 1080,
  //     height: 1440,
  //   },
  //   {
  //     src: "https://source.unsplash.com/br-Xdb9KE0Q",
  //     width: 1080,
  //     height: 716,
  //   },
  //   {
  //     src: "https://source.unsplash.com/6mze64HRU2Q",
  //     width: 1080,
  //     height: 1620,
  //   },
  //   {
  //     src: "https://source.unsplash.com/7ENqG6Gmch0",
  //     width: 1080,
  //     height: 718,
  //   },
  //   {
  //     src: "https://source.unsplash.com/KMn4VEeEPR8",
  //     width: 1080,
  //     height: 718,
  //   },
  //   {
  //     src: "https://source.unsplash.com/uQDRDqpYJHI",
  //     width: 1080,
  //     height: 1620,
  //   },
  //   {
  //     src: "https://source.unsplash.com/AD6rn3vqG7o",
  //     width: 1080,
  //     height: 1620,
  //   },
  //   {
  //     src: "https://source.unsplash.com/SYx3UCHZJlo",
  //     width: 1080,
  //     height: 720,
  //   },
  //   {
  //     src: "https://source.unsplash.com/qH-JPcFXUTY",
  //     width: 1080,
  //     height: 1620,
  //   },
  //   {
  //     src: "https://source.unsplash.com/NLUkAA-nDdE",
  //     width: 1080,
  //     height: 1441,
  //   },
  //   {
  //     src: "https://source.unsplash.com/55OH6wnJqXo",
  //     width: 1080,
  //     height: 1587,
  //   },
  //   {
  //     src: "https://source.unsplash.com/CSs8aiN_LkI",
  //     width: 1080,
  //     height: 1626,
  //   },
  // ];
  // const [isFullscreen, setIsFullscreen] = useState(false);
  // const [currentImageIndex, setCurrentImageIndex] = useState(-1);
  const [typeImage, setTypeImage] = useState("Fasilitas Sekolah");

  const setType = (e: any) => {
    setTypeImage(e.target.innerText);
  };
  console.log(typeImage);
  // const openFullscreen = (index: any) => {
  //   setCurrentImageIndex(index);
  //   setIsFullscreen(true);
  // };

  // const closeFullscreen = () => {
  //   setIsFullscreen(false);
  // };
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
      {/* <PhotoAlbum
          layout="rows"
          photos={images}
          targetRowHeight={250}
          onClick={({ index }) => openFullscreen(index)}
        /> */}

      {/* {isFullscreen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity- z-50 flex justify-center items-center">
            <img
              src={images[currentImageIndex].src}
              alt={`Gambar ${currentImageIndex}`}
              className="max-h-full max-w-full"
            />
            <button
              className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600"
              onClick={closeFullscreen}
            >
              <FaTimes size={24} />
            </button>
          </div>
        )} */}
    </section>
  );
};

export default ImageGallery;
