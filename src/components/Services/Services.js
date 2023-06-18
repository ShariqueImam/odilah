import React from "react";
import Header from "../UI/Header/Header";
import Reviews from "../Main/Reviews/Reviews";
import OurServices from "./OurServices/OurServices";
import Footer from "../UI/Footer/Footer";
import HowWeDo from "./HowWeDo/HowWeDo";
import Animator from "../UI/Animator";
const Services = () => {  window.scrollTo(0, 0);

  const style = {
    wrapper: "font",
  };
  return (
    <Animator>
      <div className={style.wrapper}>
        <Header
          text="OUR SERVICES"
          para="Our website development company offers comprehensive services including design, development, optimization, and maintenance"
        />
        <OurServices />
        <HowWeDo />
        <Reviews />
        <div className="bg-neutral-600">
          <Footer />
        </div>
      </div>
    </Animator>
  );
};

export default Services;
