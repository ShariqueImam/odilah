import React from "react";
import Header from "../UI/Header/Header";
import ContactForm from "./ContactForm";
import Footer from "../UI/Footer/Footer";
import Animator from "../UI/Animator";
import { InlineWidget } from "react-calendly";

const Contact = () => {  window.scrollTo(0, 0);

  const style = {
    wrapper: "font text-neutral-600",
    smallHeading:
      "font-semibold text-2xl md:text-3xl max-w-fit mx-auto py-2  my-3 md:my-5 font flex items-center justify-center flex-col text-center",
  };
  return (
    <Animator>
      <div className={style.wrapper}>
        <Header
          text="CONTACT US"
          para="We'd love to hear from you! Whether you're ready to embark on a new project or have questions about our services, our team is just a message away. Get in touch today!"
        />
        <h2 className={style.smallHeading}>
          Schedule a meeting with our team
          <p className="border-b-[4px] border-stone-300 w-[25vw] md:w-[10vw] mt-5"></p>
        </h2>
        <div className="App">
          <InlineWidget url="https://calendly.com/odilah/15min" />
        </div>

        <ContactForm />
        <div className="bg-neutral-600">
          <Footer />
        </div>
      </div>
    </Animator>
  );
};

export default Contact;
