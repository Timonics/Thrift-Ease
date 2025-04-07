import React from "react";
import { Link } from "react-router-dom";
import SoldOut from "../../components/badges/sold-out";

const Home: React.FC = () => {
  const elementArr = [...Array(6).keys()];

  const ele = elementArr.map((element, index) => (
    <Link key={index} to={""} className="relative shadow-slate-500 shadow-2xl">
      <SoldOut />
      <img
        src={"image"}
        alt="product-image"
        className="w-full h-[130px] bg-slate-800 outline-transparent focus:outline-transparent border-transparent"
      />
      <div className="py-3 px-2 gap-2 flex flex-col product-background">
        <h2 className="font-semibold ">{"Name: " + element}</h2>
        <p className="text-xs font-light">{"Description: " + element}</p>
        <p className="text-sm font-extrabold">{"Price: $" + element}</p>
      </div>
    </Link>
  ));
  return (
    <div className="flex flex-col gap-10 items-center md:text-start">
      <div className="flex flex-col gap-3 items-center text-center md:text-start md:items-start">
        <h1 className="font-extrabold text-[40px] leading-[48px] sm:text-[45px] md:text-[50px] md:leading-[58px] mt-4 appdarkblue pops">
          Buy, Sell, and Negotiate for Thrifted Treasures!
        </h1>
        <p className="w-[90%] font-light appdarkblue leading-6 md:leading-7 text-[15px] sm:text-base md:text-lg">
          At <span className="font-bold appgreen pops">ThriftEase.</span>, we
          make it easy for you to find great deals on second-hand items or sell
          your own pre-loved belongings. Whether you’re looking to save money on
          quality products or make some extra cash by selling items you no
          longer need, you've come to the right place!
        </p>
      </div>
      <div className="px-7 flex flex-col gap-7 w-full">
        <h1 className="text-[28px] leading-[1.21em] monte text-center md:text-start md:text-[35px] font-extrabold appgreen">
          Check out our featured products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-12">
          {ele}
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center auth-background h-[220px] w-full mb-10 md:mb-0">
        <div className="text-center">
          <h1 className="text-[30px] sm:text-[35px] pops font-bold text-green-700">
            Explore Our Categories
          </h1>
          <p className="text-[15px] sm:text-[17px] appdarkblue">
            Browse through our wide range of categories
          </p>
        </div>
        <Link
          to={"category"}
          className="px-7 py-2.5 bg-appdarkblue appgreen rubik font-semibold hover:text-[#9bc8fff0] transition duration-300 ease-linear sm:text-lg"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default Home;
