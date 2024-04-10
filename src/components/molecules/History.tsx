import TextTitle from "../comp/TextTitle";

const History = () => {
  return (
    <section className="mt-8 max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      <div className="grid grid-cols-2 gap-[50px] justify-between items-center">
        <div>
          <TextTitle title={"Sejarah"} subTitle={"SDN 1 Kopang"} />
          <p className="mt-5 text-type-l font-normal text-basic-900 text-balance">
            Berdiri sejak tahun 1975, semula adalah SMPP-35 menjadi SMA Negeri
            78 sejak tahun 1984. Sekolah yang berlokasi di Jl. Bhakti IV/1
            Komplek Pajak Kemanggisan ini menjadi sekolah favorit di Jakarta
            Barat karena sumberdaya dan lokasinya yang strategis. Dengan luas
            lahan lebih dari 10 ribu meter persegi dan saran laboratorium,
            olahraga, dan pendukung lainnya yang lengkap menjadi pusatkegiatan
            guru (PKG) utuk mata pelajaran sains.
            <br />
            <br />
            Pada Tahun 2002, SMA Negeri 78 menerapkan kurikulum berbasis
            kompetensi (KBK) atas inisiatp sendiri. Dengan pelaksnaaan mandiri
            KBK di sekolah, pimpinan dan guru berupaya melaksanakan model
            pebelajaran yang kreatif, aktif, dan memaksimalkan pemberdayaan
            siswa dalam aktifitas pembelajaran
          </p>
        </div>
        <div className="relative w-full">
          <img
            src="https://sdm2dps.com/wp-content/uploads/2019/02/home3-1.jpg"
            alt=""
            className="w-full mx-auto aspect-video object-cover rounded-lg"
          />
          <div className="absolute -top-5 -right-5 w-[75px] h-[75px] border-b-4 border-l-4 border-primary-700 rotate-180 rounded-bl-3xl"></div>
          <div className="absolute -bottom-5 -left-5 w-[75px] h-[75px] border-t-4 border-r-4 border-primary-700 rotate-180 rounded-tr-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default History;
