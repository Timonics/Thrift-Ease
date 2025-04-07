import React from "react";
import { Link } from "react-router-dom";

type Props = {
  message: string;
};

const AuthMsg: React.FC<Props> = ({ message }) => {
  return (
    <div className="absolute h-screen border top-0 left-0 flex justify-center items-center w-full pointer-events-none">
      <div className="w-[90%] min-[480px]:w-auto lg:w-[40%] p-8 flex flex-col justify-center items-center gap-8 product-background shadow-2xl shadow-slate-500 pointer-events-auto">
        <h1 className="text-lg appdarkblue font-bold text-center pops">
          Log in or Sign up to {message}
        </h1>
        <div className="flex gap-10 rubik">
          <Link
            to="/auth/log-in"
            className="p-2 w-[100px] md:w-[120px] text-center text-[#34495E] bg-[#2ECC71] transition duration-500 ease-out hover:scale-125 hover:text-[#2ECC71] hover:bg-[#34495E] font-bold text-sm"
          >
            Login
          </Link>
          <Link
            to="/auth/sign-up"
            className="p-2 w-[100px] md:w-[120px] text-center text-[#34495E] bg-[#2ECC71] transition duration-500 ease-out hover:scale-125 hover:text-[#2ECC71] hover:bg-[#34495E] font-bold text-sm"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthMsg;
