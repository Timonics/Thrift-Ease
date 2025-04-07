import React, { useState } from "react";
import Nav from "../../components/nav";
import MobileCategoryNav from "../../components/mobile-category-nav";
import CategoryNav from "../../components/category-nav";
import { Outlet } from "react-router-dom";

const CategoryLayout: React.FC = () => {
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
        <div
          className={`mobile-nav md:hidden fixed top-1 h-[98.5%] w-[250px] border backdrop-blur-sm rounded-r-lg transition-transform duration-300 ease-in-out ${
            isNavOpen ? "translate-x-0 z-10" : "-translate-x-full"
          }`}
        >
          <MobileCategoryNav />
        </div>
        <div className="hidden md:block">
          <CategoryNav />
        </div>
        <div className="overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CategoryLayout;
