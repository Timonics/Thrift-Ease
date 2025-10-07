import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import {
  Sun,
  Moon,
  Search,
  ShoppingCart,
  User,
  ArrowLeft,
  Menu,
  Info,
  LogOut,
  User2,
} from "lucide-react";
import Logo from "../logo";
import axios from "axios";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { BsShop } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";

const Nav: React.FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const { isAuthenticated } = useSelector(
    (state: RootState) => state.usersReducer
  );

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const location = useLocation();
  const pathname = location.pathname;

  const cartItems = useSelector((state: RootState) => state.cartReducer.items);

  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  const [showUserOptions, setShowUserOptions] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3002/users/logout", undefined, {
        withCredentials: true
      });
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  return (
    <>
      <div
        className="z-50 sticky top-0 flex items-center justify-between p-6 w-full bg-background/85 backdrop-blur-md border-b border-foreground/30"
        onClick={() => {
          if (showUserOptions) setShowUserOptions(false);
        }}
      >
        <div className="flex items-center gap-2">
          <Logo />
          {pathname.includes("admin") && (
            <div className="px-3 py-0.5 border-2 rounded-lg font-bold font-heading text-red-600 text-sm ">
              ADMIN
            </div>
          )}
        </div>
        {pathname !== "/" &&
          !pathname.includes("auth") &&
          !pathname.includes("admin") && (
            <div className="hidden md:flex flex-1 max-w-2xl mx-8 rounded-lg font-body">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  placeholder="Search for thrifted treasures..."
                  className="pl-10 border-2 border-foreground/30 rounded-lg outline-none p-1 w-full focus:border-primary focus:ring-primary"
                />
              </div>
            </div>
          )}

        <nav className="md:hidden ">
          <Menu
            className="w-6 h-6 hover:text-primary cursor-pointer"
            onClick={() => setMobileNavIsOpen(true)}
          />
        </nav>
        <div
          className={`fixed left-0 top-[75px] w-full h-screen bg-black/70 backdrop-blur-lg bg-opacity-50 transition-all z-50 duration-300 ease-in-out ${
            mobileNavIsOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileNavIsOpen(false)}
        />

        <div
          className={`fixed top-0 right-0 border-2 border-foreground/40 mx-auto min-h-96 max-w-4xl w-full rounded-b-2xl bg-background/90 backdrop-blur-lg shadow-2xl z-50 transform transition-transform ease-in-out duration-500 py-6 px-4 space-y-20 flex flex-col items-center justify-center ${
            mobileNavIsOpen ? "translate-y-0" : "-translate-y-[100vh]"
          } shadow-2xl font-body text-xl font-bold`}
        >
          <div className="flex flex-col items-start w-full gap-5 text-base">
            <div className="flex items-center justify-between w-full">
              <Logo />
              <div className="flex gap-3 items-center px-1 py-1 rounded-full bg-slate-700/20">
                <Sun
                  onClick={() => setMode("light")}
                  className={`p-1 rounded-full size-8 cursor-pointer ${
                    mode === "light"
                      ? "bg-gray-700/85 text-white"
                      : "opacity-70"
                  }`}
                />
                <Moon
                  onClick={() => setMode("dark")}
                  className={`p-1 rounded-full size-8 cursor-pointer ${
                    mode === "dark" ? "bg-gray-700 text-white" : "opacity-80"
                  }`}
                />
              </div>
            </div>
            <Link
              to="shop"
              className="hover:text-primary transition-colors mt-4 flex items-center gap-4 font-body"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMobileNavIsOpen(false);
              }}
            >
              <BsShop />
              Shops
            </Link>
            <Link
              to="about-us"
              className="font-body hover:text-primary transition-colors flex items-center gap-4"
              onClick={() => setMobileNavIsOpen(false)}
            >
              <Info />
              About Us
            </Link>
            {!isAuthenticated && (
              <Link
                to="auth"
                className="flex gap-4 items-center font-body transition-colors px-2 py-1 rounded-md hover:bg-primary/10 cursor-pointer hover:text-primary"
                onClick={() => setMobileNavIsOpen(false)}
              >
                <User />
                Sign in
              </Link>
            )}
            {isAuthenticated && (
              <button className="hover:bg-primary/10 p-2 rounded-lg bg-foreground/10 hover:text-primary flex items-center gap-4 font-body">
                <User className="w-5 h-5" />
                Account
              </button>
            )}
            {!pathname.includes("dashboard") && (
              <Link
                to={"/dashboard"}
                className="flex items-center gap-4 font-body bg-primary font-semibold text-foreground justify-center p-2 rounded-lg"
                onClick={() => setMobileNavIsOpen(false)}
              >
                <MdDashboard />
                My Dashboard
              </Link>
            )}
            <div className="flex items-center gap-4 font-body text-foreground hover:text-red-500">
              <LogOut />
              Log out
            </div>
            <Link
              to="my-cart"
              className="hover:bg-primary/10 hover:text-primary relative py-2 rounded-full flex items-center gap-4 font-body"
              onClick={() => setMobileNavIsOpen(false)}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItems.length ? (
                <span className="absolute top-0 -right-4 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItems.length}
                </span>
              ) : (
                <></>
              )}
              My Cart
            </Link>
            {pathname !== "/" && (
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo({ behavior: "smooth", top: 0 });
                  setMobileNavIsOpen(false);
                }}
              >
                <button className="flex items-center font-heading px-2 py-1 rounded-md bg-primary/10 cursor-pointer text-primary">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </button>
              </Link>
            )}
          </div>
        </div>

        <nav className="hidden md:flex space-x-8 items-center">
          {pathname === "/" && (
            <div className="flex space-x-8 items-center">
              <Link
                to="shop"
                className="font-body hover:text-primary transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Shops
              </Link>
              <Link
                to="about-us"
                className="font-body hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </div>
          )}

          {!isAuthenticated && (
            <Link
              to="auth"
              className="flex items-center font-body transition-colors px-2 py-1 rounded-md hover:bg-primary/10 cursor-pointer hover:text-primary"
            >
              Sign in
            </Link>
          )}

          {!pathname.includes("admin") && (
            <div className="flex items-center space-x-8">
              {isAuthenticated && (
                <button
                  onClick={() => setShowUserOptions(!showUserOptions)}
                  className={`hover:bg-primary/10 p-2 rounded-lg ${
                    showUserOptions
                      ? "bg-primary/10 text-primary"
                      : "bg-foreground/10"
                  } hover:text-primary relative`}
                >
                  <User className="w-5 h-5" />
                  {showUserOptions && (
                    <div className="p-4 border-2 border-foreground/20 shadow-lg gap-4 z-50 rounded-lg bg-background absolute top-10 w-[200px] left-1/2 -translate-x-1/2 flex flex-col items-center">
                      {!pathname.includes("dashboard") && (
                        <Link
                          to={"/dashboard"}
                          className="flex items-center gap-4 font-body hover:bg-primary font-semibold text-primary hover:text-background bg-primary/10 w-full justify-center p-2 rounded-lg"
                        >
                          <MdDashboard />
                          My Dashboard
                        </Link>
                      )}
                      <div className="flex items-center gap-4 font-body hover:text-background font-semibold border-2 text-foreground hover:bg-primary hover:border-0 w-full justify-center p-2 rounded-lg border-foreground/20">
                        <User2 />
                        Account
                      </div>
                      <div
                        onClick={() => handleLogout()}
                        className="flex items-center gap-4 font-body text-foreground hover:text-red-500"
                      >
                        <LogOut />
                        Log out
                      </div>
                    </div>
                  )}
                </button>
              )}
              <Link
                to="my-cart"
                className="hover:bg-primary/10 hover:text-primary relative p-2 rounded-full"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItems.length ? (
                  <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                ) : (
                  <></>
                )}
              </Link>
            </div>
          )}

          {pathname !== "/" && (
            <Link
              to="/"
              onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}
            >
              <button className="flex items-center font-heading px-2 py-1 rounded-md hover:bg-primary/10 cursor-pointer hover:text-primary">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </button>
            </Link>
          )}

          <div className="flex gap-3 items-center px-1 py-1 rounded-full bg-slate-700/20">
            <Sun
              onClick={() => setMode("light")}
              className={`p-1 rounded-full size-8 cursor-pointer ${
                mode === "light" ? "bg-gray-700/85 text-white" : "opacity-70"
              }`}
            />
            <Moon
              onClick={() => setMode("dark")}
              className={`p-1 rounded-full size-8 cursor-pointer ${
                mode === "dark" ? "bg-gray-700 text-white" : "opacity-80"
              }`}
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
