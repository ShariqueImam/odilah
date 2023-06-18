import React, { useState } from "react";

const style = {
  card: "font transition duration-[400ms] rounded flex flex-col flex-wrap md:no-wrap items-center justify-center  w-[70%] md:w-[25%] ",
  icon: "mx-auto text-3xl md:text-4xl text-white border-[1px] rounded-full p-6 md:p-8 border-white",
  heading:
    "my-4 md:my-5 text-white text-center text-2xl sm:text-xl md:text-2xl lg:text-3xl font-semibold",
  details:
    "text-neutral-100  text-center text-md sm:text-sm md:text-md lg:text-md",
};

const SingleCard = ({ heading, details, icon }) => {
  return (
    <div
      // href="/properties"
      className={style.card}
    >
      <div className={style.icon}>{icon}</div>
      <div className={style.heading}>{heading}</div>
      <div className={style.details}>{details}</div>
    </div>
  );
};

export default SingleCard;
