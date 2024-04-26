import Icon from "@/assets/icons/light-bulb.png";
import TextTitle from "../reusable/TextTitle";

const Excellence = () => {
  return (
    <section className="mt-[70px] max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      <TextTitle title={"Keunggulan"} subTitle={"Sekolah Kami"} />
      <div className="mt-8 flex flex-col md:flex-row justify-evenly items-center gap-5">
        <div className="border border-slate-200 bg-basic-50 rounded-xl p-10 text-center">
          <img src={Icon} alt="" className="w-20 mx-auto" />
          <h2 className="mt-5 text-type-xl font-semibold text-basic-900">
            Akreditasi A
          </h2>
          <p className="mt-3 text-type-l font-normal text-basic-900">
            Terakreditasi Dengan Baik
          </p>
        </div>
        <div className="border border-slate-200 bg-basic-50 rounded-xl p-10 text-center">
          <img src={Icon} alt="" className="w-20 mx-auto" />
          <h2 className="mt-5 text-type-xl font-semibold text-basic-900">
            Akreditasi A
          </h2>
          <p className="mt-3 text-type-l font-normal text-basic-900">
            Terakreditasi Dengan Baik
          </p>
        </div>
        <div className="border border-slate-200 bg-basic-50 rounded-xl p-10 text-center">
          <img src={Icon} alt="" className="w-20 mx-auto" />
          <h2 className="mt-5 text-type-xl font-semibold text-basic-900">
            Akreditasi A
          </h2>
          <p className="mt-3 text-type-l font-normal text-basic-900">
            Terakreditasi Dengan Baik
          </p>
        </div>
      </div>
    </section>
  );
};

export default Excellence;
