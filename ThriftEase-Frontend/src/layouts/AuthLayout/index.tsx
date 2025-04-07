import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../components/logo";

const AuthLayout: React.FC = () => {
  return (
    <div className="h-screen auth-background flex items-center justify-center">
      <div className="min-w-[85%] max-w-[95%] md:max-w-ma h-auto md:min-w-[55%] xl:min-w-[35%] bg-slate-100 shadow-2xl shadow-black/60 flex flex-col p-2">
        <Logo />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
