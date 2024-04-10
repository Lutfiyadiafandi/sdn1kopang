import {
  FaMapMarkerAlt,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const TopNav = () => {
  return (
    <header className="w-full bg-primary-600">
      <div className="max-w-screen-xl h-[38px] px-4 py-2 mx-auto md:px-5 xxl:px-0 flex justify-between items-center text-type-m font-normal text-basic-100">
        <span>SD Negeri 1 Kopang</span>
        <div className="flex gap-2">
          <FaMapMarkerAlt size={20} />
          <span>
            Jl Sawunggaling 2, Jemundo, Taman, Sidoarjo, Jawa Timur. Kode Pos :
            61257
          </span>
        </div>
        <div className="flex gap-4">
          <FaYoutube size={20} className="cursor-pointer" />
          <FaInstagram size={20} className="cursor-pointer" />
          <FaFacebook size={20} className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default TopNav;
