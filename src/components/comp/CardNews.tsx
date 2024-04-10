import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

type Props = {
  image: string;
  title: string;
  date: string;
};

const CardNews = ({ image, title, date }: Props) => {
  return (
    <div className="w-full border bg-basic-50 rounded-lg shadow-sm cursor-pointer">
      <img
        src={image}
        alt="article-image"
        className="object-cover rounded-t-lg w-full aspect-video"
      />
      <div className="p-4 flex flex-col gap-3 justify-between">
        <p className="text-type-m font-normal text-basic-500 flex">
          <FaCalendarAlt size={18} />
          <span className="ml-2">{date}</span>
        </p>
        <h3 className="text-type-l font-bold text-basic-900">{title}</h3>
        <Link
          to={"/berita/a"}
          className="text-type-m font-semibold text-basic-900 flex items-center"
        >
          <span className="mr-[6px]">Selengkapnya</span>
          <FaArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
};

export default CardNews;
