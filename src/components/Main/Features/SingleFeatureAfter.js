import React from "react";

const SingleFeature = ({ text, heading, icon }) => {
  const style = {
    wrapper:
      "text-black  flex flex-row-reverse md:flex-row items-center justify-center w-[100%] my-4 md:my-0",
    textContainer: "flex flex-col items-start md:items-end ",
    para: "font-light md:font-normal text-neutral-600 text-sm md:text-right w-[100%] md:w-[80%] lg:w-[70%]",
    heading: "font-bold text-md md:text-xl text-neutral-600",
    icon: "text-3xl md:text-3xl lg:text-4xl mx-3 md:mx-6",
  };
  return (
    <div className={style.wrapper}>
      <section className={style.textContainer}>
        <p className={style.heading}>{heading}</p>
        <p className={style.para}>{text}</p>
      </section>
      <p className={style.icon}>{icon}</p>
    </div>
  );
};

export default SingleFeature;
