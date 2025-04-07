import React from "react";

const WhatToExpect: React.FC = () => {
  type Expect = {
    icon: string;
    name: string;
    desc: string;
  };

  const expect: Expect[] = [
    {
      icon: "🛍️",
      name: "Shop Preloved Items",
      desc: "Explore a wide variety of gently used goods, from fashion to electronics, all at negotiable prices.",
    },
    {
      icon: "🖼️",
      name: "Sell with Ease",
      desc: "Declutter your space and make extra cash by selling items you no longer need—listing your items is quick and easy!",
    },
    {
      icon: "🔒",
      name: "Safe & Secure",
      desc: "We prioritize secure transactions and protect your data, ensuring a safe marketplace for everyone.",
    },
    {
      icon: "💬",
      name: "Negotiate & Connect",
      desc: "Chat directly with sellers or buyers to negotiate prices, ask questions, and finalize your deals.",
    },
  ];

  const elements = expect.map((item) => (
    <div className="shadow-2xl w-full lg:w-1/4 h-[300px] flex flex-col items-start bg-[#2ecc70ad]">
      <div className="h-2/5 w-full bg-slate-400" />
      <div className="px-4 py-2 text-[#2C3E50]">
        <div className="flex gap-3 mt-6">
          {item.icon}
          <h3 className="text-xl font-bold monte">{item.name}</h3>
        </div>
        <p className="text-sm font-light">{item.desc}</p>
      </div>
    </div>
  ));

  return (
    <div className="px-8 py-12 flex flex-col lg:flex-row gap-5 items-center">
      {elements}
    </div>
  );
};

export default WhatToExpect;
