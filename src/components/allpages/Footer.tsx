import Logo from "@/assets/images/navbar-brand.png";
import { Link, NavLink } from "react-router-dom";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  const navs = [
    {
      id: 1,
      link: "beranda",
      path: "/",
    },
    {
      id: 2,
      link: "profil",
      path: "/profil",
    },
    {
      id: 3,
      link: "galeri",
      path: "/galeri",
    },
    {
      id: 4,
      link: "berita",
      path: "/berita",
    },
    {
      id: 5,
      link: "PPDB",
      path: "/ppdb",
    },
    {
      id: 6,
      link: "kontak kami",
      path: "/kontak",
    },
  ];
  return (
    <footer className="mt-[70px] w-full bg-primary-900">
      <div className="max-w-screen-xl py-[40px] px-4 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 text-basic-100">
        <div className="col-span-1 flex flex-col justify-between gap-5">
          <div>
            <img src={Logo} alt="" className="w-[279px] mb-2" />
          </div>
          <div className="flex gap-6">
            <FaYoutube size={30} className=" cursor-pointer" />
            <FaInstagram size={30} className=" cursor-pointer" />
            <FaFacebook size={30} className=" cursor-pointer" />
          </div>
        </div>
        <div className="col-span-1 lg:ml-5">
          <ul className="grid grid-cols-2 text-type-l font-semibold gap-y-5">
            {navs.map((nav) => (
              <li
                key={nav.id}
                className="capitalize cursor-pointer transition duration-300 hover:text-primary-600"
              >
                <NavLink to={nav.path}>{nav.link}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 flex flex-col gap-5">
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
        <span className="col-span-1 lg:col-span-3 text-type-s font-normal text-basic-50 text-center">
          © Copyright SD Negeri 1 Kopang 2024
        </span>
      </div>
    </footer>
  );
};

export default Footer;
