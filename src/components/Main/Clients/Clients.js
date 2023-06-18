import React from "react";

const Clients = () => {
  const style = {
    heading:
      "text-neutral-600 text-2xl md:text-3xl lg:text-4xl py-3 md:py-4 font-semibold text-center py-3 md:py-10",
    text: "font1  text-xl md:text-2xl  mx-8 md:mx-6 font-thin text-neutral-600 my-3 md:my-1 ",
  };
  return (
    <div className=" py-6 md:py-10">
      <h2 className={style.heading}>Our clients are featured in</h2>
      {/* adding the clients */}
      <section className="flex items-center justify-center py-3 md:py-7 flex-wrap">
        <h2 className={style.text}>Active + Healthy</h2>
        <h2 className={style.text}>TedX</h2>
        <h2 className={style.text}>Psychology</h2>
        <h2 className={style.text}>Today Elle </h2>
      </section>
    </div>
  );
};

export default Clients;
