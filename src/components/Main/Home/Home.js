import React from "react";
import bgImg from "../../../assets/newsletterbg.jpeg";
import styled from "styled-components";
import useWindowSize from "../../../hooks/useWindowSize";
import { Link } from "react-router-dom";
import Navbar from "../../UI/Navbar/Navbar";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  window.scrollTo(0, 0);

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
    height: 77vh;
    width: 100vw;
  `;
  const style = {
    heading:
      "text-5xl md:text-6xl lg:text-7xl text-white  my-2 md:my-3 w-[100%] md:w-[100%] text-center  font-semibold",
    para: "text-white text-sm md:text-lg my-3 md:my-8 text-center  mx-auto md:mx-auto w-[100%] md:w-[90%] font-light",
    btn: " px-7 md:px-5 py-2 md:py-3 transition duration-[200ms] max-w-fit mx-auto md:mx-0 text-text text-md",
    arrow: `text-lg text-text`,
    btnContainer:
      "transition duration-[250ms] font-thin cursor-pointer hover:opacity-[0.9]  mx-auto  my-2 flex items-center justify-start bg-white  px-4 rounded-lg",
    mainContent:
      "w-[90%] md:w-[100%] h-[80%] flex flex-col items-start justify-center  mx-auto font1",
  };
  return (
    <FeaturedBackground1 className="">
      <div className="backdrop-blur-2xl h-full w-full">
        <Navbar />
        <div className={style.mainContent}>
          <h2 className={style.heading}>
            Transform Ideas into Digital Experiences
          </h2>
          <p className={style.para}>
            Elevate your online presence with our expert website development
            services. We design, develop websites on all platforms that
            captivate, engage, and convert. Let us bring your vision to life in
            the digital world, delivering exceptional user experiences and
            business growth
          </p>
          <div className={style.btnContainer}>
            <Link to={"/contact"} className="flex items-center justify-center">
              <button className={style.btn}>GET STARTED</button>
              <AiOutlineArrowRight className={style.arrow} />
            </Link>
          </div>
        </div>
      </div>
    </FeaturedBackground1>
  );
};

export default Home;
