type Props = {
  title: string;
  subTitle: string;
  className?: string;
};
const TextTitle = ({ title, subTitle, className }: Props) => {
  return (
    // <h1 className={`text-heading-m font-semibold ${className}`}>
    //   {title}
    //   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">
    //     {subTitle}
    //   </span>
    // </h1>
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
