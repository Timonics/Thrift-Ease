import React, { useState } from "react";
import ListForm from "./ListForm";

const ListItem: React.FC = () => {
  const [formIsOpen, setFormIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setFormIsOpen(true);
  };

  return (
    <div className="flex flex-col gap-5 p-4">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-[40px] leading-[48px] sm:text-[45px] md:text-[50px] md:leading-[58px] appdarkblue pops font-extrabold w-full">
          Sell your item
        </h1>
        <p className="font-light -[90%] text-sm appdarkblue leading-6 md:leading-7 text-[15px] sm:text-base md:text-lg">
          Ready to turn your pre-loved items into cash? Whether it’s a gadget
          you no longer need, clothes that don’t fit, or furniture taking up
          space, <span className="font-bold appgreen pops">ThriftEase.</span>{" "}
          makes it easy to list and sell your items to a wide audience. Simply
          upload photos, set your price, and add a description—your next buyer
          could be just a click away!
        </p>
      </div>
      {formIsOpen ? (
        <ListForm />
      ) : (
        <button
          onClick={handleClick}
          className="text-xs w-full mt-5 md:mt-10 pops bg-gray-950 font-bold p-4 text-[#2ECC71] mx- hover:bg-[#9bc8fff0] hover:text-[#34495E] transition ease-in-out duration-500"
        >
          Start earning now by giving your items a second life and connecting
          with buyers who are looking for great deals.
        </button>
      )}
    </div>
  );
};

export default ListItem;
