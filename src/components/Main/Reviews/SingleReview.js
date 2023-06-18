import React from "react";

const SingleReview = ({ image, name, designation, message }) => {
  const style = {
    wrapper:
      "flex flex-col items-center justify-center text-neutral-600 w-[85%] md:w-[60%] mx-8 my-6 md:my-1",
  };
  return (
    <div className={style.wrapper}>
      <img src={image} alt="" className={style.img} />
      <h2 className="font-semibold text-xl md:text-2xl lg:text-2xl mt-2 md:mt-2">
        {name}
      </h2>
      <h2 className="">{designation}</h2>{" "}
      <p className="border-b-[3px] border-stone-300 w-[12vw] md:w-[4vw] my-3"></p>
      <p className="text-sm text-center">{message}</p>
    </div>
  );
};

export default SingleReview;
