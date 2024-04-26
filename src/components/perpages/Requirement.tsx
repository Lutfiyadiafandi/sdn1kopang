import TextTitle from "../reusable/TextTitle";

const Requirement = () => {
  return (
    <section className="mt-8 max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      <TextTitle
        title={"Syarat & Ketentuan"}
        subTitle={"Pendaftaran Peserta Didik Baru"}
      />
      <div className="mt-5 w-4/5 mx-auto">
        <h3 className="text-type-xl font-medium text-basic-900">
          Persyaratan Umum
        </h3>
        <ol className="mt-2 flex flex-col gap-1 list-decimal text-type-l font-normal">
          <li>
            Calon peserta didik baru kelas 1 SD diprioritaskan harus memenuhi
            usia 7 tahun atau paling rendah 6 tahun per 1 Juli tahun berjalan.
            Dibuktikan dengan akta kelahiran atau surat keterangan lahir.
          </li>
          <li>
            Pengecualian untuk usia paling rendah 5 tahun 6 bulan per 1 Juli
            tahun berjalan bagi calon peserta didik yang memiliki kecerdasan
            dan/atau bakat istimewa dan kesiapan psikis, dibuktikan dengan
            rekomendasi profesional atau dewan guru sekolah yang bersangkutan.
          </li>
          <li>
            Persyaratan usia dikecualikan untuk peserta didik baru penyandang
            disabilitas dan utnuk sekolah yang menyelenggarakan pendidikan
            khusus, pendidikan layanan khusus dan berada di daerah 3T (Terdepan,
            Terpencil dan Tertinggal).
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Requirement;
