import React from "react";
import Home from "./Home/Home";
import Card from "./Card/Card";
import Features from "./Features/Features";
import Reviews from "./Reviews/Reviews";
import Clients from "./Clients/Clients";
import Footer from "../UI/Footer/Footer";
import Newsletter from "./Newsletter/Newsletter";
import Animator from "../UI/Animator";

const Main = () => {
  return (
    <Animator>
      <div className="font">
        <Home />
        <Card />
        <Features />
        <Newsletter />
        <Reviews />
        <Clients />
        <section className="bg-neutral-600">
          <Footer />
        </section>
      </div>
    </Animator>
  );
};

export default Main;
