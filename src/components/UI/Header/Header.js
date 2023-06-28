import React from "react";
import bgImg from "../../../assets/newsletterbg.jpeg";
import styled from "styled-components";
import useWindowSize from "../../../hooks/useWindowSize";
import Navbar from "../../UI/Navbar/Navbar";

const Header = ({ text, para }) => {
  const { width } = useWindowSize();
  const FeaturedBackground1 = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url(${(width < 500 && bgImg) ||
      (width > 500 && width < 1000 && bgImg) ||
      (width > 1000 && bgImg)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 60vh;
    width: 100vw;
  `;
  const style = {
    wrapper: "",
    heading:
      "tracking-wide text-3xl md:text-6xl lg:text-7xl text-neutral-100  my-2 md:my-3 text-center md:text-left font-semibold text-center mx-auto",
    para: "w-[100%] md:w-[100%] lg:w-[95%] text-center my-2 md:my-4 text-white font-thin text-xs md:text-lg lg:text-lg mx-auto",
    btn: " px-7 md:px-5 py-2 md:py-3 transition duration-[200ms] max-w-fit mx-auto md:mx-0 text-text text-md",
    arrow: `text-lg text-text`,
    btnContainer:
      "font-thin cursor-pointer hover:opacity-[0.9]  mx-auto md:mx-0 my-2 flex items-center justify-start bg-white  px-4 rounded-lg",
    mainContent:
      "w-[90%] md:w-[80%] h-[80%] flex flex-col items-start justify-center  mx-auto font1",
  };
  return (
    <FeaturedBackground1 className={style.wrapper}>
      <div className="backdrop-blur-2xl h-full flex flex-col items-center justify-center ">
        <Navbar />
        <div className={style.mainContent}>
          <h2 className={style.heading}>{text}</h2>
          <p className={style.para}>{para}</p>
        </div>
      </div>
    </FeaturedBackground1>
  );
};

export default Header;
