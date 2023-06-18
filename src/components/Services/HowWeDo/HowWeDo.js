import React, { useState } from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiWritedotas } from "react-icons/si";
import { BiSupport } from "react-icons/bi";

const HowWeDo = () => {
  const [isVisible, setisVisible] = useState(false);
  const style = {
    wrapper: `font bg-neutral-600 ${isVisible && "animate__animated "}`,
    iconDesk:
      "hidden md:flex text-3xl md:text-4xl lg:text-4xl text-neutral-100 ",
    iconMob: "hidden text-3xl md:text-4xl lg:text-4xl text-neutral-100 my-4",
    icon1:
      "mx-auto text-3xl md:text-4xl text-white border-[1px] rounded-full p-4 md:p-5 border-white",
    container:
      "flex flex-col items-center justify-center  p-3 md:p-8 md:w-[25%]",
    heading:
      "text-2xl md:text-3xl font-semibold text-white my-5 md:my-4 text-center",
    para: "text-sm md:text-sm text-center text-white my-5 md:my-4",
  };

  return (
    <div className={style.wrapper}>
      <div className="w-[95%] md:w-[95%] lg:w-[85%] mx-auto flex items-center justify-center flex-col md:flex-row">
        <section className={style.container}>
          <section className={style.icon1}>
            <GoCommentDiscussion />
          </section>
          <h2 className={style.heading}>Initial consultation</h2>
          <p className={style.para}>
            We discuss your needs and come up with a preliminary plan to meet
            that needs. Additional consults are set up as needed.
          </p>
        </section>
        <FaArrowRight className={style.iconDesk} />

        <section className={style.container}>
          {" "}
          <section className={style.icon1}>
            <MdOutlineDesignServices />
          </section>
          <h2 className={style.heading}>Design</h2>
          <p className={style.para}>
            We will draft a proposal from the discussion at the consult and
            review design with you. Now you can sit back, and we’ll do all the
            heavy lifting
          </p>
        </section>
        <FaArrowRight className={style.iconDesk} />

        <section className={style.container}>
          <section className={style.icon1}>
            <SiWritedotas />
          </section>
          <h2 className={style.heading}>Execute</h2>
          <p className={style.para}>
            We go to work on your project while keeping you engaged as needed
            until the final work is delivered and approved by you.
          </p>
        </section>
        <FaArrowRight className={style.iconDesk} />

        <section className={style.container}>
          <section className={style.icon1}>
            <BiSupport />
          </section>
          <h2 className={style.heading}>Support</h2>
          <p className={style.para}>
            Choose to retain us for support or come to us as needed for support,
            upgrades or additions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HowWeDo;
