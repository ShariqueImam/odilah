import React, { useState } from "react";
import SingleReview from "./SingleReview";
import Client1Img from "../../../assets/client-1.png";
import Client2Img from "../../../assets/client-2.png";
import Client3Img from "../../../assets/client-3.png";
import VisibilitySensor from "react-visibility-sensor";

const Reviews = () => {
  const [isVisible, setisVisible] = useState(false);
  const [IsSensor, setIsSensor] = useState(true);
  const style = {
    wrapper: "w-[95%] md:w-[80%] lg:w-[70%] mx-auto my-12",
    phoneImg: "hidden md:flex",
    card: "flex flex-col my-12 md:mb-24 md:mt-16 ",
    cardContainer:
      "flex flex-wrap md:no-wrap items-center justify-center gap-12",
    headingContainer: "flex items-center jusitfy-center flex-col my-8",
    heading:
      "max-w-fit mx-auto flex items-center jusitfy-center flex-col my-3 md:my-6 text-gray-900 text-3xl md:text-5xl font-semibold text-stone-600 text-center",
    reviewLeft: `${isVisible && "animate__animated animate__fadeInLeft"} mx-auto flex items-center justify-center`,
    reviewRight: `${isVisible && "animate__animated animate__fadeInRight"} mx-auto flex items-center justify-center`,
    reviewCenter: `${isVisible && "animate__animated animate__fadeInUp"} mx-auto flex items-center justify-center`,
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
      offset={{ bottom: 200 }}
      onChange={handleVisibility}
      scrollCheck={true}
    >
      <div className={style.wrapper}>
        <section className={style.headingContainer}>
          <h2 className={style.heading}>WHAT OUR CLIENTS SAY</h2>
          <p className="border-b-[3px] border-stone-300 w-[12vw] md:w-[4vw]"></p>
          <p className="text-neutral-600 w-[90%] md:w-[45%] lg:w-[45%] text-center my-2 md:my-4">
            Glowing Client Reviews Showcase the Excellence of Our Website: Hear
            What Our Customers Have to Say!
          </p>
        </section>
        <section className="flex flex-col items-center justify-center md:flex-row">
          <section className={style.reviewLeft}>
            <SingleReview
              image={Client1Img}
              name="Ms Gracey's Lashes"
              designation="Local Business Owner"
              message="I actually landed here searching for a web designer in my area but no one wanted to work with urgency I had. They took on my website, worked with my step by step and had me on my way with a brand new e-commerce site for my business in less than 3 weeks. Awesome."
            />
          </section>{" "}
          <section className={style.reviewCenter}>
            <SingleReview
              image={Client2Img}
              name="Anne Marie P"
              designation="Business Manager"
              message="
I am glad I got introduced to you when I was starting my skin care business. I was able to hand off everything web related and I was able to focus on getting my business. I appreciate the support and recommendations over the years."
            />{" "}
          </section>{" "}
          <section className={style.reviewRight}>
            <SingleReview
              image={Client3Img}
              name="Leslie J"
              designation="Business Owner"
              message="I handed over my website built with six to them because the wix developer at the time was not able to manage it anymore. After the initial consult I just knew this is what I needed. I now have a great website that I own  (not on six, so no more monthly fees) and it is soo beautiful.
"
            />{" "}
          </section>
        </section>
      </div>
    </VisibilitySensor>
  );
};

export default Reviews;
