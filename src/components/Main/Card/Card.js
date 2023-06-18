import React from "react";
import SingleCard from "./SingleCard";
import { CgWebsite } from "react-icons/cg";
import { SiAdobeindesign } from "react-icons/si";
import { AiOutlineMobile, AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const style = {
  card: "flex flex-col bg-neutral-600 py-12 md:py-16",
  cardContainer: "flex flex-wrap md:no-wrap items-center justify-center gap-12",
  headingContainer: "flex items-center jusitfy-center flex-col my-8",
  heading:
    "max-w-fit mx-auto flex items-center jusitfy-center flex-col my-8 text-gray-900 text-3xl md:text-5xl font-semibold ",
};
const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.cardContainer}>
        <SingleCard
          heading="DESIGN"
          details="Creating stunning websites that blend creativity, functionality, and user-centered design for impactful online experiences"
          icon={<SiAdobeindesign />}
        />
        <SingleCard
          heading="SUPPORT"
          details="Seamless website support and management, ensuring optimal performance, security, and reliability for your online presence"
          icon={<CgWebsite />}
        />
        <SingleCard
          heading="MOBILE"
          details="Building innovative mobile apps that deliver seamless user experiences and drive business growth with cutting-edge technology"
          icon={<AiOutlineMobile />}
        />
      </div>
      <Link to={"/services"}>
        <button className="text-sm hover:opacity-[0.87] transition duration-[250ms] bg-white text-stone-500 max-w-fit px-6 py-3 md:px-7 md:py-3 rounded-lg mx-auto mt-8 md:mt-12 flex items-center justify-center">
          LEARN MORE
          <AiFillCaretRight className="ml-3" />
        </button>
      </Link>
    </div>
  );
};

export default Card;
