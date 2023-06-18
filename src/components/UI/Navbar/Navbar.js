import React, { useState, useEffect } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import NavDrawer from "./NavDrawer";
import "animate.css";
const Navbar = (props) => {
  const style = {
    navDrawer: "flex sm:hidden items-center text-white ",
    wrapper:
      "text-gray-900 pt-1 md:py-6 z-10 w-[100%] md:w-[70%] bg-opacity-[0.9] mx-auto self-center font",
    mainNav:
      "flex items-center justify-between py-1 md:py-1 hidden sm:flex w-[100%] md:w-[90%] mx-auto",
    list: "font-light border-move-animation list-none cursor-pointer text-white md:mx-4  text-md tracking-wide",
    navContainer: "flex items-center justify-center",
    cartButton:
      " font-light rounded-lg bg-white text-black tracking-wider flex items-center justify-center mx-5 bg-red px-3 py-2 text-md   hover:opacity-[0.90] transition duration-[250ms]",
    img: "cursor-pointer",
    input: "bg-transparent text-white cursor-pointer",
  };
  const [Enter, setEnter] = useState(false);
  const [Item, setItem] = useState("home");

  // props.onScroll(Item);
  const handleScroll = (val) => {
    setItem(val);
  };

  return (
    // install the mui first for the Navdrawer
    <div className={style.wrapper}>
      <nav className={style.mainNav}>
        <div className={style.img}>
          <Link to="/">
            <h2 className="text-3xl font-bold text-white  tracking-wide">
              Odilah Tech
            </h2>
            {/* <Image
              src={"/logo_colour.svg"}
              height={200}
              width={200}
              alt="logo for website"
            /> */}
          </Link>
        </div>
        <div className="flex items-center justify-center ">
          <ul className={style.navContainer}>
            <Link to="/">
              <li className={style.list}>Home</li>
            </Link>
            <Link to="/services">
              <li className={style.list} onClick={() => setItem("services")}>
                Services
              </li>
            </Link>
            <Link to="/faq">
              <li className={style.list} onClick={() => setItem("faq")}>
                Faq
              </li>
            </Link>
            <Link to="/privacy">
              <li className={style.list} onClick={() => setItem("features")}>
                Privacy
              </li>
            </Link>
          </ul>
          <Link to="/contact">
            <button className={style.cartButton}>
              Contact
              <AiOutlinePhone
                className={`text-2xl md:text-xl text-black   mx-2 ${
                  Enter && "animate__animated animate__tada"
                }`}
              />
            </button>
          </Link>
        </div>
      </nav>
      <div className={style.navDrawer}>
        <NavDrawer onScroll={handleScroll} />
      </div>
    </div>
  );
};

export default Navbar;
