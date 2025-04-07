import React from "react";

import { Link } from "react-router-dom";
import Logo from "../logo";
import { useAuthContext } from "../../contexts/AuthContext";
import { IoLogOut, IoNotifications } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";

interface NavProps {
  toggleNav: () => void;
  isNavOpen: boolean;
}

const Nav: React.FC<NavProps> = ({ toggleNav }) => {
  const { isAuthenticated, logoutUser } = useAuthContext();

  return (
    <div className="flex justify-between w-full px-4 py-7 md:py-0 sm:px-6">
      <Logo />
      <div className="space-x-8 font-light flex">
        <button className="md:hidden" onClick={toggleNav}>
          <TbMenu2 />
        </button>
        {!isAuthenticated && (
          <Link
            to={"/auth/log-in"}
            className="py-1.5 sm:py-2 px-4 md:px-6 border-4 border-appdarkblue font-extrabold rubik bg-appgreen appdarkblue transition ease-in-out duration-500 hover:bg-appblue text-sm md:text-base lg:text-lg"
          >
            Login
          </Link>
        )}
        {isAuthenticated && (
          <div className="flex gap-10 text-[25px] text-[#34495E]">
            <IoNotifications className="text-[25px] transition hover:text-[#2ECC71] duration-500 ease-in-out" />
            <IoLogOut
              onClick={() => logoutUser()}
              className="text-[25px] transition hover:text-[#2ECC71] duration-500 ease-in-out"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
