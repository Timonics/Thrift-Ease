import React from "react";
import Hero from "../../components/hero";
import WhatToExpect from "../../components/what-to-expect";
import Note from "../../components/note";
import Footer from "../../components/footer";

const Intro: React.FC = () => {
  return (
    <div className="home-background flex flex-col">
      <div className="h-screen relative">
        <Hero />
      </div>
      <WhatToExpect />
      <Note />
      <Footer />
    </div>
  );
};

export default Intro;
