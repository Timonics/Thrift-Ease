import React from "react";
import Hero from "./components/Hero";
import Values from "./components/Values";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "../../components/footer";

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Values />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default AboutUsPage;
