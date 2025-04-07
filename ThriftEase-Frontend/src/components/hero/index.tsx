import React from "react";

import introBackground from "../../assets/introBackground.jpg";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="absolute h-screen w-full flex justify-center items-center">
      <img
        src={introBackground}
        alt=""
        className="object-cover h-full w-full"
      />
      <div className="absolute h-full w-full inset-0 bg-black/80 backdrop-blur-[2px] md:backdrop-blur-[1px]" />
      <div className="absolute border-white z-20 w-full h-full text-white flex flex-col p-2">
        <div className="h-[10%] flex items-center">
          <p className="p-2 font-black appgreen pops text-sm">ThriftEase.</p>
        </div>
        <div className="h-[90%] flex flex-col justify-center items-center gap-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pops font-bold text-white/75 text-center">
            Welcome to{" "}
            <span className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl appgreen font-extrabold">
              ThriftEase.
            </span>
          </h1>
          <p className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] text-[15px] sm:text-base md:text-lg lg:text-xl font-thin text-center text-white/65">
            Discover a whole new way to buy and sell second-hand items. Whether
            you're looking for something unique or wanting to give your unused
            items a new home, ThriftEase makes it simple and seamless.
          </p>
          <div className="text-sm sm:text-base flex w-full gap-5 rubik text-center justify-center mt-5">
            <Link
              to={"home"}
              className="border-4 flex items-center justify-center w-[150px] sm:w-[180px] transition ease-in-out duration-300  shadow-lg shadow-gray-950/80 hover:bg-gray-950 p-2 appgreen font-bold"
            >
              Start Shopping
            </Link>
            <Link
              className="p-2 flex items-center justify-center w-[150px] sm:w-[180px] shadow-lg shadow-gray-950/80 bg-[#2ECC71] text-[#34495E] font-bold transition ease-in-out duration-300 hover:bg-[#34495E] hover:text-[#2ECC71]"
              to={"register"}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
