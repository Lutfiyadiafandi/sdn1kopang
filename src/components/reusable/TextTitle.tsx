type Props = {
  title: string;
  subTitle: string;
  className?: string;
};
const TextTitle = ({ title, subTitle, className }: Props) => {
  return (
    <>
      <h3
        className={`text-type-l font-semibold text-basic-900 text-center uppercase ${className}`}
      >
        {title}
      </h3>
      <h1
        className={`mt-[5px] text-heading6 font-bold text-basic-900 text-center ${className}`}
      >
        {subTitle}
      </h1>
    </>
  );
};

export default TextTitle;
