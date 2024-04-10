import TextTitle from "../comp/TextTitle";

const VisiMision = () => {
  return (
    <section className="mt-[70px] max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      <TextTitle title={"Visi & Misi"} subTitle={"SDN 1 Kopang"} />
      <div className="mt-8 relative w-full bg-primary-700 px-10 py-6 rounded-lg grid grid-cols-2 gap-10 text-basic-50">
        <div>
          <h3 className="text-type-xl font-semibold text-center">Visi</h3>
          <ol className="mt-2 flex flex-col gap-1 list-decimal text-type-l font-normal">
            <li>
              Melaksanakan pendidikan karakter agar terwujud lulusan yang
              beriman, bertakwa dan berakhlak mulia
            </li>
            <li>
              Melaksanakan program peningkatan kompetensi peserta didik di
              bidang akademik dan non akademik yang daoat bersaing di tingkat
              nasional dan internasional
            </li>
            <li>
              Melaksanakan program peningkatan kompetensi pendidik dan tenaga
              kependidikan
            </li>
            <li>
              Melaksanakan program kerjasama dan kemitraaan dengan institusi
              pendidikan, pemerintah, usaha dan industri
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-type-xl font-semibold text-center">Misi</h3>
          <ol className="mt-2 flex flex-col gap-1 list-decimal text-type-l font-normal">
            <li>
              Melaksanakan pendidikan karakter agar terwujud lulusan yang
              beriman, bertakwa dan berakhlak mulia
            </li>
            <li>
              Melaksanakan program peningkatan kompetensi peserta didik di
              bidang akademik dan non akademik yang daoat bersaing di tingkat
              nasional dan internasional
            </li>
            <li>
              Melaksanakan program peningkatan kompetensi pendidik dan tenaga
              kependidikan
            </li>
            <li>
              Melaksanakan program kerjasama dan kemitraaan dengan institusi
              pendidikan, pemerintah, usaha dan industri
            </li>
          </ol>
        </div>
        <div className="absolute -top-5 -left-5 w-[75px] h-[75px] border-b-4 border-r-4 border-primary-700 rotate-180 rounded-br-3xl"></div>
        <div className="absolute -bottom-5 -right-5 w-[75px] h-[75px] border-t-4 border-l-4 border-primary-700 rotate-180 rounded-tl-3xl"></div>
      </div>
    </section>
  );
};

export default VisiMision;
