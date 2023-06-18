import React from "react";
import SingleService from "./SingleService";
import Image1 from "../../../assets/1.jpeg";
import Image2 from "../../../assets/2.webp";
import Image3 from "../../../assets/3.jpeg";
import Image4 from "../../../assets/4.jpeg";
import Image5 from "../../../assets/5.jpeg";
import Image6 from "../../../assets/6.jpeg";
import Image7 from "../../../assets/7.jpeg";
const OurServices = () => {
  return (
    <div className="flex flex-col">
      <SingleService
        heading="NEW WEBSITE"
        para="Experience the art of digital craftsmanship as our team of experts brings your vision to reality with a  website service that combines stunning design and performance. Stand out from the crowd and establish an online presence with a website that truly represents your identity"
        image={Image1}
        imageLeft={true}
      />
      <SingleService
        heading="REVAMPING EXISTING SITE"
        para="Revitalize your online presence with our comprehensive website revamping service. We'll enhance your design, optimize performance, and create an engaging user experience that leaves a lasting impression on your visitors."
        image={Image2}
        imageLeft={false}
      />
      <SingleService
        heading="MANAGE AND UPDATING CONTENT"
        para="Simplify your website management with our content-focused service. We handle regular updates, ensure accurate information, and deliver engaging content that captivates your audience and drives success."
        image={Image3}
        imageLeft={true}
      />
      <SingleService
        heading="E-COMMERCE SERVICES"
        para="Elevate your online business with our comprehensive eCommerce service. From seamless shopping experiences to secure payment gateways, we empower you to succeed in the competitive world of online retail"
        image={Image4}
        imageLeft={false}
      />
      <SingleService
        heading="MOBILE APPLICATION"
        para="Transform your ideas into cutting-edge mobile applications with our top-notch development service. We create intuitive and feature-rich apps that engage users and elevate your brand in the mobile realm"
        image={Image6}
        imageLeft={true}
      />
      <SingleService
        heading="SEO SERVICES"
        para="Boost your online visibility and drive organic traffic to your website with our expert SEO service. Dominate search engine rankings and achieve long-term success in the digital landscape."
        image={Image5}
        imageLeft={false}
      />
    </div>
  );
};

export default OurServices;
