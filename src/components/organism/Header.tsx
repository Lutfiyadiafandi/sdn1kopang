// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";
// import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import Logo from "@/assets/images/navbar-brand.png";

const Header = () => {
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
      id: 5,
      link: "kontak kami",
      path: "/kontak",
    },
  ];
  return (
    // <NavigationMenu>
    //   <NavigationMenuList>
    //     <NavigationMenuItem></NavigationMenuItem>
    //     <NavigationMenuItem>
    //       <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
    //       <NavigationMenuContent>
    //         <NavigationMenuLink>Link</NavigationMenuLink>
    //       </NavigationMenuContent>
    //     </NavigationMenuItem>
    //   </NavigationMenuList>
    // </NavigationMenu>
    <nav className=" w-full h-[80px] bg-transparent border-b border-slate">
      <div className="max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
        <div className="text-type-l font-semibold text-basic-900 items-center justify-between px-2 py-[10px] flex">
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
            <ul className="hidden sm:flex">
              {navs.map((nav) => (
                <li
                  key={nav.id}
                  className="ml-10 font-medium capitalize cursor-pointer text-type-m text-primary500 hover:text-primary200"
                >
                  <Link to={nav.path}>{nav.link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div
            onClick={() => setNav(!nav)}
            className="absolute z-50 rounded-md cursor-pointer right-2 top-6 text-primary500 sm:hidden"
          >
            {nav ? (
              <FaTimes size={30} color="#12465E" />
            ) : (
              <FaBars size={30} color="#12465E" />
            )}
          </div> */}

          {/* {nav && (
            <div className="sm:hidden">
              <ul className="flex flex-col items-start gap-2 mt-5">
                {navs.map((nav) => (
                  <li
                    key={nav.id}
                    className="py-1 font-medium capitalize cursor-pointer text-type-l text-primary500 hover:text-primary200"
                  >
                    <NavLink onClick={() => setNav(!nav)} to={nav.path}>
                      {nav.link}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
