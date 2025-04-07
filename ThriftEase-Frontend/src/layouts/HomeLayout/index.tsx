import React, { useState } from "react";
import Nav from "../../components/nav";
import { Outlet } from "react-router-dom";
import SideNav from "../../components/side-nav";
import MobileNav from "../../components/mobile-nav";

const HomeLayout: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <div className="home-background relative min-h-screen md:h-screen flex flex-col">
      <div className="md:h-[8%] lg:h-[10%] flex items-center">
        <Nav toggleNav={toggleNav} isNavOpen={isNavOpen} />
      </div>
      <div className="md:h-[92%] lg:h-[90%] flex md:gap-3">
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <SideNav />
        </div>
        <div className="mt-5 md:mt-0 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
