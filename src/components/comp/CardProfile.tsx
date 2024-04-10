import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
type Props = {
  name: string;
  image: string;
  description: string;
};

const CardProfile = ({ name, image, description }: Props) => {
  return (
    <div className="w-[250px] aspect-[3/4] p-4 bg-slate-100 rounded-lg shadow-md">
      <img
        src={image}
        alt="Movie"
        className="aspect-square object-cover mx-auto rounded-md"
      />
      <div className="text-center mt-3">
        <h2 className="text-type-l font-semibold">{name}</h2>
        <h2 className="mt-2 text-type-m font-medium">{description}</h2>
      </div>
      <div className="flex justify-center gap-5 mt-4">
        <FaInstagram size={30} className="text-red-500 cursor-pointer" />
        <FaWhatsapp size={30} className="text-green-500 cursor-pointer" />
        <FaFacebook size={30} className="text-blue-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default CardProfile;
