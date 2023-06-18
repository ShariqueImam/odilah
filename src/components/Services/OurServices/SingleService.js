import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const SingleService = ({ heading, para, image, imageLeft }) => {
  const style = {
    wrapper: `w-[95%] md:w-[80%] lg:w-[60%] mx-auto flex flex-col md:flex-row ${
      imageLeft ? "md:flex-row" : "md:flex-row-reverse"
    } items-center text-neutral-600 my-6 md:my-16`,
    btnContainer: `max-w-fit font-thin md:font-normal tracking-wider transition duration-[250ms] cursor-pointer hover:opacity-[0.9] my-4 md:my-8 flex items-center justify-start text-white bg-neutral-600 px-4 rounded-lg  ${
      imageLeft ? "mx-auto md:m-0 md:ml-auto" : "mx-auto md:m-0  md:mr-auto"
    }`,
    btn: " px-5 md:px-5 py-2 md:py-3 transition duration-[200ms] max-w-fit mx-auto md:mx-0 text-md",
    arrow: `text-lg text-white`,
    img: "w-64 md:w-72 h-48 md:h-64",
    serviceContent: `md:mx-16  ${imageLeft && "md:ml-48"} flex flex-col `,
    heading:
      "font-semibold text-2xl md:tetx-3xl lg:text-4xl text-center md:text-left my-4",
    para: "font-light text-sm md:text-lg lg:text-xl text-center md:text-left my-2",
  };
  return (
    <div className={style.wrapper}>
      <img src={image} alt="" className={style.img} />
      <section className={style.serviceContent}>
        <h2 className={style.heading}>{heading}</h2>
        <p className={style.para}>{para}</p>
        <Link to={"/contact"}>
          <div className={style.btnContainer}>
            <button className={style.btn}>Get Started</button>
            <AiOutlineArrowRight className={style.arrow} />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default SingleService;
