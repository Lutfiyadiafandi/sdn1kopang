import TextTitle from "../reusable/TextTitle";
import InputLabel from "../reusable/InputLabel";

const FormRegistration = () => {
  return (
    <main className="w-full pt-[55px] pb-[107px] px-4 xxl:px-0">
      <section className="max-w-screen-lg bg-basic-50 border border-basic-300 rounded-3xl px-4 mx-auto">
        <div className="py-10 px-10">
          <TextTitle
            title={"Formulir Pendaftaran"}
            subTitle={"Pendaftaran Peserta Didik Baru SDN1 Kopang"}
          />
          <form action="" className="mt-10">
            <InputLabel
              label={"Nama Lengkap"}
              id={"nama"}
              type={"text"}
              placeholder={"Nama Lengkap"}
              value={""}
            />
            <InputLabel
              label={"Pas Foto"}
              id={"foto"}
              type={"file"}
              placeholder={"Pas Foto"}
              value={""}
            />
            <InputLabel
              label={"Tanggal Lahir"}
              id={"foto"}
              type={"date"}
              placeholder={"Tanggal Lahir"}
              value={""}
            />
          </form>
        </div>
      </section>
    </main>
  );
};

export default FormRegistration;
