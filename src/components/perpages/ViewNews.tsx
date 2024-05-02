import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  FaFacebook,
  FaInstagram,
  FaUserCircle,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ViewNews = () => {
  return (
    <section className="mt-8 max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      <Breadcrumb className="text-type-l">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link
                to="/"
                className="text-basic-500 font-normal hover:text-basic-900 hover:font-medium"
              >
                Beranda
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link
                to="/berita"
                className="text-basic-500 font-normal hover:text-basic-900 hover:font-medium"
              >
                Berita
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-basic-900 font-medium">
              Judul Artikel
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <article className="w-full mt-5">
        <div>
          <h1 className="text-heading6 lg:text-heading5 font-semibold text-basic-900">
            Pentingnya Team Work sebagai soft skill
          </h1>
          <div className="mt-2 flex gap-5">
            <div className="w-fit bg-basic-200 border border-basic-300 px-2 py-1 rounded-full">
              <p className="text-type-s font-semibold text-primary-700">
                09 Mei 2024
              </p>
            </div>
            <div className="w-fit flex gap-1.5 bg-basic-200 border border-basic-300 px-2 py-1 rounded-full">
              <FaUserCircle size={18} />
              <p className="text-type-s font-semibold text-primary-700">
                Admin
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/4 mt-5">
          <img
            src={
              "https://strapi.lenteravisiedutama.com/uploads/Img_Artikel_Banner_63c481bdb8.png"
            }
            alt=""
            className="w-full rounded-lg object-cover aspect-video"
          />
        </div>
        <div className="w-full lg:w-3/4 mt-10">
          <div className="text-type-l font-normal text-basic-700 flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              saepe doloribus consequatur rem hic consectetur, laboriosam
              dolore. Quos eos earum quia deleniti quo aspernatur voluptate,
              dicta quaerat dolorum dolores magni eligendi officia consequuntur
              inventore labore. Rerum, amet reiciendis maxime nobis molestiae
              perspiciatis debitis officia ad aspernatur, magnam, explicabo quod
              voluptatem omnis eos quasi repudiandae beatae ratione sunt
              impedit! Hic, officia tenetur ab non recusandae magnam quod sit
              blanditiis, harum illo molestias praesentium quas porro id labore
              fugit quae veritatis debitis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              saepe doloribus consequatur rem hic consectetur, laboriosam
              dolore. Quos eos earum quia deleniti quo aspernatur voluptate,
              dicta quaerat dolorum dolores magni eligendi officia consequuntur
              inventore labore. Rerum, amet reiciendis maxime nobis molestiae
              perspiciatis debitis officia ad aspernatur, magnam, explicabo quod
              voluptatem omnis eos quasi repudiandae beatae ratione sunt
              impedit! Hic, officia tenetur ab non recusandae magnam quod sit
              blanditiis, harum illo molestias praesentium quas porro id labore
              fugit quae veritatis debitis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              saepe doloribus consequatur rem hic consectetur, laboriosam
              dolore. Quos eos earum quia deleniti quo aspernatur voluptate,
              dicta quaerat dolorum dolores magni eligendi officia consequuntur
              inventore labore. Rerum, amet reiciendis maxime nobis molestiae
              perspiciatis debitis officia ad aspernatur, magnam, explicabo quod
              voluptatem omnis eos quasi repudiandae beatae ratione sunt
              impedit! Hic, officia tenetur ab non recusandae magnam quod sit
              blanditiis, harum illo molestias praesentium quas porro id labore
              fugit quae veritatis debitis.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <h3 className="text-type-xl font-normal text-basic-900">
              Bagikan ke:
            </h3>
            <FaInstagram size={25} className="text-red-500 cursor-pointer" />
            <FaFacebook size={25} className="text-blue-500 cursor-pointer" />
            <FaWhatsapp size={25} className="text-green-500 cursor-pointer" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default ViewNews;
