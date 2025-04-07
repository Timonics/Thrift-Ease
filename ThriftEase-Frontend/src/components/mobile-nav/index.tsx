import React from "react";
// import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineSell } from "react-icons/md";
import {
  TbCategory,
  TbHome,
  TbLayoutDashboard,
  TbShoppingCart,
} from "react-icons/tb";
import { NavLink } from "react-router-dom";

const MobileNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 right-0 left-0 h-[50px] py-6 px-4 flex gap-4 items-center justify-between backdrop-blur-xl z-10 bg-gray-500/20">
      <NavLink
        end
        to={""}
        className={({ isActive }) =>
          `text-[30px] transition ease-in-out ${
            isActive && "scale-110 text-green-700"
          }`
        }
      >
        <TbHome />
      </NavLink>
      <NavLink
        to={"dashboard"}
        className={({ isActive }) =>
          `text-[30px] transition ease-in-out ${
            isActive && "scale-110 text-green-700"
          }`
        }
      >
        <TbLayoutDashboard />
      </NavLink>
      <NavLink
        to={"list-item"}
        className={({ isActive }) =>
          `text-[30px] transition ease-in-out ${
            isActive && "scale-110 text-green-700"
          }`
        }
      >
        <MdOutlineSell />
      </NavLink>
      <NavLink
        to={"my-cart"}
        className={({ isActive }) =>
          `text-[30px] transition ease-in-out ${
            isActive && "scale-110 text-green-700"
          }`
        }
      >
        <TbShoppingCart />
      </NavLink>
      <NavLink
        to={"category"}
        className={({ isActive }) =>
          `text-[30px] transition ease-in-out ${
            isActive && "scale-110 text-green-700"
          }`
        }
      >
        <TbCategory />
      </NavLink>
    </div>
  );
};

export default MobileNav;
