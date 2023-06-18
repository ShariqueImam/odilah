import React, { useState } from "react";
import SingleFeatureBefore from "./SingleFeatureBefore";
import { Link } from "react-router-dom";
import SingleFeatureAfter from "./SingleFeatureAfter";
import { AiFillCaretRight } from "react-icons/ai";
import { FaMobileAlt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { TbSeo } from "react-icons/tb";
import { MdPublishedWithChanges } from "react-icons/md";
import { GrHostMaintenance } from "react-icons/gr";
import { BsDatabaseCheck } from "react-icons/bs";
import phoneImg from "../../../assets/homePhone.png";
import VisibilitySensor from "react-visibility-sensor";
const Features = () => {
  const [isVisible, setisVisible] = useState(false);
  const [IsSensor, setIsSensor] = useState(true);
  const style = {
    wrapper: "w-[95%] md:w-[70%] lg:w-[60%] mx-auto my-12",
    card: "flex flex-col my-12 md:mb-24 md:mt-16 ",
    cardContainer:
      "flex flex-wrap md:no-wrap items-center justify-center gap-12",
    headingContainer: "flex items-center jusitfy-center flex-col my-8",
    heading:
      "max-w-fit mx-auto flex items-center jusitfy-center flex-col my-3 md:my-6 text-gray-900 text-3xl md:text-5xl font-semibold text-stone-600 ",
    phoneImg: `hidden md:flex ${
      isVisible && "animate__animated animate__fadeInUp"
    }`,
    left: `flex flex-col justify-around md:w-[40%] ${
      isVisible && "animate__animated animate__fadeInLeft"
    }`,
    right: `flex flex-col justify-around md:w-[40%] ${
      isVisible && "animate__animated animate__fadeInRight"
    }`,
  };
  const handleVisibility = (isVisible) => {
    if (IsSensor && isVisible) {
      setisVisible(isVisible);
      setIsSensor(false);
    }
  };

  return (
    <VisibilitySensor
      active={IsSensor}
      partialVisibility
      offset={{ bottom: 300 }}
      onChange={handleVisibility}
      scrollCheck={true}
    >
      <div className={style.wrapper}>
        <section className={style.headingContainer}>
          <h2 className={style.heading}>OUR FEATURES</h2>
          <p className="border-b-[3px] border-stone-300 w-[12vw] md:w-[4vw]"></p>
          <p className="text-neutral-600 w-[90%] md:w-[45%] lg:w-[55%] text-center my-2 md:my-4">
            Our website development company offers comprehensive services
            including design, development, optimization, and maintenance
          </p>
        </section>
        {/* adding the content of the features */}
        <div className="flex justify-between flex-col md:flex-row">
          <section className={style.left}>
            <SingleFeatureAfter
              text="Free and top notch Search Engine Optimization for your new or existing website or application"
              heading="SEO"
              icon={<TbSeo />}
            />
            <SingleFeatureAfter
              text="Embark on a digital journey with a brand new website that showcases your vision and enthusiasm"
              heading="NEW WEBSITE"
              icon={<CgWebsite />}
            />
            <SingleFeatureAfter
              text="Breathe new life into your online presence as we revamp your website with stunning design"
              heading="REVAMPING"
              icon={<MdPublishedWithChanges />}
            />
          </section>
          <img src={phoneImg} alt="" className={style.phoneImg} />
          <section className={style.right}>
            <SingleFeatureBefore
              text="Nurture your online presence as we expertly manage your website's content and performance"
              heading="MANAGE"
              icon={<GrHostMaintenance />}
            />
            <SingleFeatureBefore
              text="Elevate your online presence with reliable hosting services that provide the foundation for your website"
              heading="HOSTING"
              icon={<BsDatabaseCheck />}
            />
            <SingleFeatureBefore
              text="Unlock the power of innovation and user-centric solutions with a leading mobile application development"
              heading="MOBILE"
              icon={<FaMobileAlt />}
            />
          </section>
        </div>
        <Link to={"/services"}>
          <button className="text-sm hover:opacity-[0.87] transition duration-[250ms] text-white max-w-fit px-6 py-3 md:px-7 md:py-3 rounded-lg mx-auto mt-8 md:mt-12 flex items-center justify-center bg-neutral-600">
            LEARN MORE
            <AiFillCaretRight className="ml-3" />
          </button>
        </Link>
      </div>
    </VisibilitySensor>
  );
};

export default Features;
