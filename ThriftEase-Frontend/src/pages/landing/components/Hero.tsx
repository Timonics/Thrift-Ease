import React from "react";

import background from "../../../assets/thriftEaseBackground.webp";
import { Link } from "react-router";

const Hero: React.FC = () => {
  return (
    <section className="relative">
      <img
        src={background}
        alt="Thrifted fashion items"
        className="w-full h-full object-cover absolute"
      />
      <div className="absolute h-full w-full inset-0 bg-black/70" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-25 lg:py-35 relative z-10">
        <div className="grid gap-12 items-center mt-10 lg:mt-15">
          <div className="space-y-8">
            <h1 className="font-heading font-bold text-4xl lg:text-6xl text-white/85 leading-tight">
              Welcome to ThriftEase.
              <span className="block text-primary/85">
                Discover Unique Thrifted Treasures
              </span>
            </h1>
            <p className="font-body text-lg text-gray-400 leading-relaxed">
              Join the sustainable shopping revolution. Find one-of-a-kind pieces
              at unbeatable prices while helping the planet.
            </p>
            <Link to="categories" className="bg-primary hover:bg-primary/80 text-white dark:text-black/85 font-body font-semibold px-8 py-4 text-lg rounded-xl">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
