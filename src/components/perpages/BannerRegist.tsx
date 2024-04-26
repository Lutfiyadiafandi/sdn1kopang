import { FaArrowRight } from "react-icons/fa";
import images from "../../assets/images/Rectangle 24.png";
import { Button } from "../ui/button";

const BannerRegist = () => {
  return (
    <section className="relative mt-[70px] w-full h-[335px] overflow-hidden">
      <img src={images} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="px-2 absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-heading6 md:text-heading5 font-bold text-basic-50 text-center">
          Pendaftaran Peserta Didik Baru Tahun Ajaran 2024/2025
        </h1>
        <p className="mt-4 text-type-l md:text-type-xl font-semibold text-basic-50 text-center">
          Informasi terbaru mengenai PPDB T.A. 2024/2025 dapat diakses disini.
        </p>
        <Button
          className="mt-[42px] text-type-l font-semibold"
          variant={"outline"}
        >
          Cek Informasi PPDB <FaArrowRight size={15} className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default BannerRegist;
