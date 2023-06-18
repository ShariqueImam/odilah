import React, { useState } from "react";
import axios from "axios";
const Newsletter = () => {
  const [Email, setEmail] = useState("");
  const tokenWithWriteAccess =
    "skMYb2qhBcd5DgUBwQXHcpHWKn98TcBEGcApaVrGna7gUoQWDXC9VGRHJLy5G9CW7Fwhff0JmevJhBgxqh2Y22kWJR7R7E9fgDmJWDpIQGT558IOEMKAuKoVXg7v1rQ8trGDaMGG30c0nOhEwxW2Ad5ZnNL632XuIGX7i0aqOUWA1oV3XdaS";
  const submitHandler = (event) => {
    event.preventDefault();
    const sendData = async () => {
      // setIsSubmit(true);
      const { data } = await axios.post(
        `https://1d8xcsdc.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
        {
          mutations: [
            {
              create: {
                _type: "newsletter",
                createdAt: new Date().toISOString(),
                email: Email,
              },
            },
          ],
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${tokenWithWriteAccess}`,
          },
        }
      );
      // to represent the success message
      const flashTime = setTimeout(() => {
        // setIsSubmit(false);
      }, 2000);
      return () => {
        clearTimeout(flashTime);
      };
    };
    if (Email != "") {
      sendData();
      setEmail("");
    }
  };
  return (
    <div className="newsletterBg">
      <div className="flex flex-col mx-auto items-center justify-center py-6 md:py-8">
        <p className=" text-white my-2 text-2xl md:text-4xl py-3 md:py-4 font-semibold text-center">
          Lets get some awesome website offers
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center mb-7">
          <input
            type="email"
            className="px-4 md:px-6 py-2 md:py-2 w-[80vw] md:w-[20vw] outline-none my-3 rounded-lg "
            placeholder="Email..."
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={submitHandler}
            className="bg-white text-stone-500 px-4 md:px-6 py-2 md:py-2 mx-3 my-2 w-[100%] md:w-auto transition duration-[250ms] hover:opacity-[0.85] rounded-lg"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
