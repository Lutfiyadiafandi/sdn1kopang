import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "@/assets/images/navbar-brand.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <nav className="w-full h-[80px] bg-transparent border-b border-slate-400">
      <div className="relative max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
        <div className="lg:items-center justify-between px-2 py-[10px] flex flex-col lg:flex-row">
          <div>
            <Link to={"/"}>
              <img
                src={Logo}
                className="w-[195px] bg-basic-900 rounded-md p-2"
                alt="logo-image"
              />
            </Link>
          </div>
          <div>
            <ul className="text-type-l font-medium text-basic-900 hidden lg:flex">
              {navs.map((nav) => (
                <li
                  key={nav.id}
                  className="ml-10 capitalize cursor-pointer transition duration-300 hover:text-primary-600"
                >
                  <NavLink to={nav.path}>{nav.link}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute z-40 cursor-pointer right-6 top-6 text-primary-600 lg:hidden"
          >
            {isOpen ? <FaBars size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>
      {isOpen && (
        <aside
          className={`fixed w-full h-screen inset-0 z-[999] bg-black bg-opacity-70 transition duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div
            className={`w-9/12 h-full px-6 py-5 rounded-r-xl bg-primary-200`}
          >
            <div className="flex justify-between items-center">
              <img
                src={Logo}
                className="w-[150px] bg-basic-900 rounded-md p-2"
                alt="logo-image"
              />
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer text-primary-600"
              >
                {isOpen ? <FaTimes size={30} /> : ""}
              </div>
            </div>
            <ul className="text-type-l font-semibold text-basic-900 flex flex-col items-start gap-2 mt-5">
              {navs.map((nav) => (
                <li
                  key={nav.id}
                  className="py-1.5 capitalize cursor-pointer hover:border-b-2 border-black"
                >
                  <NavLink onClick={() => setIsOpen(!isOpen)} to={nav.path}>
                    {nav.link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </nav>
  );
};

export default Navigation;
