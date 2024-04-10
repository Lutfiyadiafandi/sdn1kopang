import TextTitle from "../comp/TextTitle";
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { toast } from "@/components/ui/use-toast";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="mt-8 max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      <TextTitle
        title={"Kontak Kami"}
        subTitle={"Jika Ada Pertanyaan Silahkan Hubungi Kami"}
      />
      <div className="mt-14 grid grid-cols-2 gap-[50px]">
        <form
          // onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 bg-basic-50 py-7 px-5 rounded-xl"
        >
          <Input type="text" placeholder="Nama Anda" />
          <Input type="email" placeholder="Email Anda" />
          <Textarea placeholder="Tulis Pesan Anda Disini..." />
          <div className="text-basic-50">
            <Button type="submit" className="w-full text-type-l font-semibold">
              Kirim
              <FaPaperPlane className="ml-2" size={18} />
            </Button>
          </div>
        </form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.636839968141!2d116.34631257418707!3d-8.63081858773456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdb46ac1ef2f4f%3A0x8a4cfff1cacc8826!2sSD%20Negeri%201%20Kopang!5e0!3m2!1sid!2sid!4v1712201827269!5m2!1sid!2sid"
          loading="lazy"
          className="w-full h-full border rounded-lg"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
