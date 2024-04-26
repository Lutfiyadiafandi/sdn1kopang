import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TextTitle from "../reusable/TextTitle";

const FaQ = () => {
  return (
    <section className="mt-[70px] max-w-screen-xl px-4 mx-auto md:px-5 xxl:px-0">
      <TextTitle title={"FAQ"} subTitle={"Pertanyaan Seputar Kami"} />
      <Accordion
        type="multiple"
        className="mt-8 bg-basic-50 text-basic-900 px-5 rounded-lg"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-type-l font-semibold">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="text-type-m font-normal">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-type-l font-semibold">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="text-type-m font-normal">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-type-l font-semibold">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="text-type-m font-normal">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FaQ;
