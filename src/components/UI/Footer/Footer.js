import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const style = {
    wrapper:
      "bg-neutral-600 font text-neutral-100 flex flex-col md:flex-row w-[100%] md:w-[60%] mx-auto items-center justify-between py-6 md:py-8",
    para: "font-light border-move-animation list-none cursor-pointer text-white mx-2 md:mx-3  text-md tracking-wide",
  };
  return (
    <div className={style.wrapper}>
      <h2 className="text-3xl font-bold text-white  tracking-wide my-3 md:my-1">
        Odilah Tech
      </h2>
      {/* adding the links to the other pages */}
      <section className="flex my-4 md:my-1">
        <Link to="/">
          <p className={style.para}>Home</p>
        </Link>
        <Link to="/services">
          <p className={style.para}>Services</p>
        </Link>
        <Link to="/faq">
          <p className={style.para}>Faq</p>
        </Link>
        <Link to="/privacy">
          <p className={style.para}>Privacy</p>
        </Link>
        <Link to="/contact">
          <p className={style.para}>Contact</p>
        </Link>
      </section>
      <h2 className="my-3 md:my-1">All Rights Reserved © - 2023</h2>
    </div>
  );
};

export default Footer;
