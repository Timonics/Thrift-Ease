import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Sun, Moon, Search, ShoppingCart, User, ArrowLeft } from "lucide-react";
import Logo from "../logo";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const Nav: React.FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

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
  const isAuthenticated = useSelector(
    (state: RootState) => state.usersReducer.isAuthenticated
  );

  return (
    <>
      <div className="z-50 sticky top-0 flex items-center justify-between p-6 w-full bg-background/85 backdrop-blur-md border-b border-foreground/30">
        <Logo />
        {pathname !== "/" && !pathname.includes("auth") && (
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
              {!isAuthenticated && (
                <Link
                  to="auth"
                  className="flex items-center font-body transition-colors px-2 py-1 rounded-md hover:bg-primary/10 cursor-pointer hover:text-primary"
                >
                  Sign in
                </Link>
              )}
            </div>
          )}

          <div className="flex items-center space-x-8">
            {isAuthenticated && (
              <button className="hover:bg-primary/10 p-2 rounded-lg bg-foreground/10 hover:text-primary">
                <User className="w-5 h-5" />
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
