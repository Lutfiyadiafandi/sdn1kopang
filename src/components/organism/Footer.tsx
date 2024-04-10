import Logo from "@/assets/images/navbar-brand.png";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-[70px] w-full bg-primary-600">
      <div className="max-w-screen-xl pt-[40px] pb-[40px] px-4 mx-auto grid grid-cols-3 gap-10 text-basic-100">
        <div className="flex flex-col justify-between">
          <div>
            <img src={Logo} alt="" className="w-[279px] mb-2" />
            <span className="text-type-s font-normal text-basic-50 pl-16">
              © 2024 Copyright SD Negeri 1 Kopang
            </span>
          </div>
          <div className="flex gap-6">
            <FaYoutube size={30} className=" cursor-pointer" />
            <FaInstagram size={30} className=" cursor-pointer" />
            <FaFacebook size={30} className=" cursor-pointer" />
          </div>
        </div>
        <div className="ml-5">
          <ul className="grid grid-cols-2 text-type-l font-semibold gap-y-5">
            <li>
              <Link to="/beranda">Beranda</Link>
            </li>
            <li>
              <Link to="/profil">Profil</Link>
            </li>
            <li>
              <Link to="/galeri">Galeri</Link>
            </li>
            <li>
              <Link to="/berita">Berita</Link>
            </li>
            <li>
              <Link to="/ppdb">PPDB</Link>
            </li>
            <li>
              <Link to="/kontak">Kontak Kami</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-type-l font-bold">Alamat</h3>
            <div className="mt-1 flex items-start gap-2">
              <FaMapMarkerAlt size={20} />
              <span className="text-type-m font-normal">
                Jl Sawunggaling 2, Jemundo, Taman, Sidoarjo, Jawa Timur.
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-type-l font-bold">Email</h3>
            <div className="mt-1 flex items-start gap-2">
              <FaEnvelope size={20} />
              <span className="text-type-m font-normal">
                sdn1kopang@gmail.com
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-type-l font-bold">Telepon</h3>
            <div className="mt-1 flex items-start gap-2">
              <FaPhoneAlt size={20} />
              <span className="text-type-m font-normal">021-xxxx-xxxx</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
