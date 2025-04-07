import React from "react";
import { MdOutlineAccountCircle, MdOutlineSell } from "react-icons/md";
import {
  TbHome,
  TbLayoutDashboard,
  TbShoppingCart,
  TbCategory,
  TbHelp,
  TbSettings,
} from "react-icons/tb";
import { NavLink } from "react-router-dom";

const SideNav: React.FC = () => {
  return (
    <div className="flex flex-col items-start h-full w-[80px] lg:w-[200px] gap-4 lg:gap-3 bg-transparent">
      <NavLink
        end
        to={""}
        className={
          ({ isActive }) =>
            `text-[30px] md:text-[25px] lg:text-[20px] flex gap-2 w-full p-2 px-4 ${
              isActive
                ? "scale-110 appdarkblue font-bold sidenav-background"
                : "transition duration-300 ease-out hover:bg-slate-100/75 font-medium"
            }`
        }
      >
        <TbHome />
        <p className="hidden lg:block text-sm pops text-nowrap">Home</p>
      </NavLink>
      <NavLink
        to={"dashboard"}
        className={
          ({ isActive }) =>
            `text-[30px] md:text-[25px] lg:text-[20px] flex gap-2 w-full p-2 px-4 ${
              isActive
                ? "scale-110 appdarkblue font-bold sidenav-background"
                : "transition duration-300 ease-out hover:bg-slate-100/75 font-medium"
            }`
        }
      >
        <TbLayoutDashboard />
        <p className="hidden lg:block text-sm pops text-nowrap">DashBoard</p>
      </NavLink>
      <NavLink
        to={"list-item"}
        className={
          ({ isActive }) =>
            `text-[30px] md:text-[25px] lg:text-[20px] flex gap-2 w-full p-2 px-4 ${
              isActive
                ? "scale-110 appdarkblue font-bold sidenav-background"
                : "transition duration-300 ease-out hover:bg-slate-100/75 font-medium"
            }`
        }
      >
        <MdOutlineSell />
        <p className="hidden lg:block text-sm pops text-nowrap">Sell an Item</p>
      </NavLink>
      <NavLink
        to={"my-cart"}
        className={
          ({ isActive }) =>
            `text-[30px] md:text-[25px] lg:text-[20px] flex gap-2 w-full p-2 px-4 ${
              isActive
                ? "scale-110 appdarkblue font-bold sidenav-background"
                : "transition duration-300 ease-out hover:bg-slate-100/75 font-medium"
            }`
        }
      >
        <TbShoppingCart />
        <p className="hidden lg:block text-sm pops text-nowrap">My Cart</p>
      </NavLink>
      <NavLink
        to={"category"}
        className={
          ({ isActive }) =>
            `text-[30px] md:text-[25px] lg:text-[20px] flex gap-2 w-full p-2 px-4 ${
              isActive
                ? "scale-110 appdarkblue font-bold sidenav-background"
                : "transition duration-300 ease-out hover:bg-slate-100/75 font-medium"
            }`
        }
      >
        <TbCategory />
        <p className="hidden lg:block text-sm pops text-nowrap">Category</p>
      </NavLink>

      <div className="mt-auto flex-col w-full flex gap-4 lg:gap-3">
        <NavLink
          to={"../account"}
          className={
          ({ isActive }) =>
            `text-[30px] md:text-[25px] lg:text-[20px] flex gap-2 w-full p-2 px-4 ${
              isActive
                ? "scale-110 appdarkblue font-bold sidenav-background"
                : "transition duration-300 ease-out hover:bg-slate-100/75 font-medium"
            }`
        }
        >
          <MdOutlineAccountCircle />
          <p className="hidden lg:block text-sm pops text-nowrap">Account</p>
        </NavLink>
        <NavLink
          to={"../help-and-support"}
          className={
          ({ isActive }) =>
            `text-[30px] md:text-[25px] lg:text-[20px] flex gap-2 w-full p-2 px-4 ${
              isActive
                ? "scale-110 appdarkblue font-bold sidenav-background"
                : "transition duration-300 ease-out hover:bg-slate-100/75 font-medium"
            }`
        }
        >
          <TbHelp />
          <p className="hidden lg:block text-sm pops text-nowrap">
            Help & Support
          </p>
        </NavLink>
        <NavLink
          to={"../settings"}
          className={
          ({ isActive }) =>
            `text-[30px] md:text-[25px] lg:text-[20px] flex gap-2 w-full p-2 px-4 mb-8 ${
              isActive
                ? "scale-110 appdarkblue font-bold sidenav-background"
                : "transition duration-300 ease-out hover:bg-slate-100/75 font-medium"
            }`
        }
        >
          <TbSettings />
          <p className="hidden lg:block text-sm pops text-nowrap">Settings</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideNav;
