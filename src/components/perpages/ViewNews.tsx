import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  FaCalendarAlt,
  FaFacebook,
  FaInstagram,
  FaUserCircle,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import News from "@/assets/images/wes-hicks-4-EeTnaC1S4-unsplash.jpg";

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

      <article className="mt-5">
        <img
          src={News}
          alt=""
          className="w-full h-[500px] rounded-lg object-cover"
        />
        <div className="mt-5">
          <div>
            <h1 className="text-heading5 font-semibold text-basic-900">
              Pentingnya Team Work sebagai soft skill
            </h1>
            <div className="mt-2 flex gap-8">
              <p className="text-type-m font-normal text-basic-500 flex">
                <FaCalendarAlt size={18} />
                <span className="ml-[6px]">09 April 2024</span>
              </p>
              <p className="text-type-m font-normal text-basic-500 flex items-center">
                <FaUserCircle size={18} />
                <span className="ml-[6px]">Admin</span>
              </p>
            </div>
          </div>
          <div className="mt-5">
            <div className="w-3/4 text-type-l font-normal text-basic-700 flex flex-col gap-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                saepe doloribus consequatur rem hic consectetur, laboriosam
                dolore. Quos eos earum quia deleniti quo aspernatur voluptate,
                dicta quaerat dolorum dolores magni eligendi officia
                consequuntur inventore labore. Rerum, amet reiciendis maxime
                nobis molestiae perspiciatis debitis officia ad aspernatur,
                magnam, explicabo quod voluptatem omnis eos quasi repudiandae
                beatae ratione sunt impedit! Hic, officia tenetur ab non
                recusandae magnam quod sit blanditiis, harum illo molestias
                praesentium quas porro id labore fugit quae veritatis debitis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                saepe doloribus consequatur rem hic consectetur, laboriosam
                dolore. Quos eos earum quia deleniti quo aspernatur voluptate,
                dicta quaerat dolorum dolores magni eligendi officia
                consequuntur inventore labore. Rerum, amet reiciendis maxime
                nobis molestiae perspiciatis debitis officia ad aspernatur,
                magnam, explicabo quod voluptatem omnis eos quasi repudiandae
                beatae ratione sunt impedit! Hic, officia tenetur ab non
                recusandae magnam quod sit blanditiis, harum illo molestias
                praesentium quas porro id labore fugit quae veritatis debitis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                saepe doloribus consequatur rem hic consectetur, laboriosam
                dolore. Quos eos earum quia deleniti quo aspernatur voluptate,
                dicta quaerat dolorum dolores magni eligendi officia
                consequuntur inventore labore. Rerum, amet reiciendis maxime
                nobis molestiae perspiciatis debitis officia ad aspernatur,
                magnam, explicabo quod voluptatem omnis eos quasi repudiandae
                beatae ratione sunt impedit! Hic, officia tenetur ab non
                recusandae magnam quod sit blanditiis, harum illo molestias
                praesentium quas porro id labore fugit quae veritatis debitis.
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
        </div>
      </article>
    </section>
  );
};

export default ViewNews;
