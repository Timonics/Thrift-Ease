import React from "react";
import { NavLink } from "react-router-dom";

import { FiPackage } from "react-icons/fi";
import { GiAmpleDress, GiLipstick } from "react-icons/gi";
import { HiDevicePhoneMobile, HiOutlineHomeModern } from "react-icons/hi2";
import { IoMdFootball } from "react-icons/io";
import { IoCarSportSharp } from "react-icons/io5";
import { PiBooks } from "react-icons/pi";
import { TbMusic } from "react-icons/tb";
import { useApiContext } from "../../contexts/ApiContext";

const CategoryNav: React.FC = () => {
  const { categories } = useApiContext();

  const icons = [
    { id: 1, icon: <HiDevicePhoneMobile size={17} /> },
    { id: 2, icon: <GiAmpleDress size={17} /> },
    { id: 3, icon: <HiOutlineHomeModern size={17} /> },
    { id: 4, icon: <PiBooks size={17} /> },
    { id: 5, icon: <IoMdFootball size={17} /> },
    { id: 6, icon: <TbMusic size={17} /> },
    { id: 7, icon: <GiLipstick size={17} /> },
    { id: 8, icon: <IoCarSportSharp size={17} /> },
    { id: 9, icon: <FiPackage size={17} /> },
  ];

  const navElements = categories.map((category) => {
    const filteredIconArr = icons.filter((icon) => icon.id === category.id);
    const iconElement = filteredIconArr.map((iconObj) => iconObj.icon);

    const categoryNameArr = category.name.split(" ");
    categoryNameArr[1] = "-and-";
    const categoryPath = categoryNameArr.join("").toLowerCase();

    return (
      <NavLink
        to={categoryPath}
        className={({ isActive }) =>
          `text-[30px] md:text-[25px] lg:text-[20px] flex gap-2 w-full p-2 px-4 ${
            isActive
              ? "scale-110 appdarkblue font-bold sidenav-background"
              : "transition duration-300 ease-out hover:bg-slate-100/75"
          }`
        }
      >
        {iconElement}
        <p className="hidden lg:block text-sm pops text-nowrap">
          {category.name}
        </p>
      </NavLink>
    );
  });

  return (
    <div className="flex flex-col items-start h-full w-[80px] lg:w-[250px] gap-4 lg:gap-3 bg-transparent">
      {navElements}
    </div>
  );
};

export default CategoryNav;
