import Profil from "@/assets/images/Group 24.png";

const Welcome = () => {
  return (
    <section className="relative mt-[150px] max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      <div className="mt-8 w-full lg:h-[341px] bg-primary-700 px-4 lg:px-6 py-10 rounded-lg rounded-tl-[180px] flex flex-col lg:flex-row items-center">
        <div className="flex-none max-w-[480px]">
          <img
            src={Profil}
            alt=""
            className="w-full lg:h-[476px] aspect-square mb-[134px] -mt-28 lg:-mt-0 ml-4 lg:-ml-6"
          />
        </div>
        <div className="-mt-14 lg:-mt-0 grow">
          <h4 className="text-type-l font-semibold text-basic-50">
            KATA SAMBUTAN
          </h4>
          <h3 className="mt-1 text-type-xl font-bold text-basic-50">
            Kepala SD Negeri 1 Kopang
          </h3>
          <p className="mt-8 text-type-l font-normal text-basic-50">
            “ Syukur Alhamdulillah, teriring rasa syukur kita kepada Allah SWT
            Tuhan Semesta Alam atas limpahan rahmat serta hidayahNya sehingga
            tim IT dan Humas SMA Negeri 1 Taman Sidoarjo bisa mengaktifkan
            kembali website sekolah yang selama beberapa waktu non aktif. Dengan
            onlinenya kembali website ini, harapan kami, agar masyarakat umum
            mengetahui perkembangan pelayanan pendidikan yang kami berikan ke
            masyarakat.”{" "}
          </p>
          <p className="mt-6 text-type-l font-bold text-basic-50">
            Jhon Doe, S.Pd.
          </p>
        </div>
      </div>
      <div className="absolute -bottom-4 left-1 xl:-bottom-5 xl:right-0 w-[75px] h-[75px] border-t-4 border-r-4 border-primary-700 rotate-180 rounded-tr-3xl"></div>
      <div className="absolute -top-4 right-1 xl:-top-5 xl:right-0 w-[75px] h-[75px] border-b-4 border-l-4 border-primary-700 rotate-180 rounded-bl-3xl"></div>
    </section>
  );
};

export default Welcome;
