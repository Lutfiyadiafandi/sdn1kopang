import { Link } from "react-router-dom";

type Props = {
  image: string;
  title: string;
  date: string;
  className?: string;
};

const CardNews = ({ image, title, date, className }: Props) => {
  return (
    <Link
      to="/berita/a"
      className={`w-full border bg-basic-50 rounded-lg shadow-sm cursor-pointer transition-all duration-300 ease-in-out hover:border-basic-300 hover:shadow-lg ${className}`}
    >
      <img
        src={image}
        alt="article-image"
        className="object-cover rounded-t-lg w-full aspect-video"
      />
      <div className="p-4 flex flex-col gap-2 justify-between">
        <div className="w-fit bg-basic-200 border border-basic-300 px-2 py-1 rounded-full">
          <p className="text-type-s font-semibold text-primary-700">{date}</p>
        </div>
        <h3 className="text-[17px] font-semibold text-basic-900">{title}</h3>
        <p className="text-type-m font-normal text-basic-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quae
          facere. Sit dolorum pariatur architecto quas, eos id harum dicta!
        </p>
      </div>
    </Link>
  );
};

export default CardNews;
