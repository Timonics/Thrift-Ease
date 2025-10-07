import React from "react";
import { Link } from "react-router";

type AuthenticationMsgProp = {
  page: string;
};

const AuthenticationMsg: React.FC<AuthenticationMsgProp> = ({ page }) => {
  return (
    <div className="absolute border border-white/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black p-4 py-6 flex flex-col gap-4 items-center rounded-lg w-[90vw] max-w-sm">
      <h2 className="font-heading text-xl text-center text-white/70">
        Log in or Sign up to {page}
      </h2>
      <div className="flex items-center gap-4 font-body">
        <Link
          to="/auth"
          state={{ from: location.pathname }}
          className="px-3 py-1 border-2 rounded-md cursor-pointer transition duration-300 ease-in-out hover:scale-105 text-white/70 border-white/50"
        >
          Log in
        </Link>
        <Link
          to="/auth/register"
          state={{ from: location.pathname }}
          className="px-3 py-1 border-2 rounded-md cursor-pointer transition duration-300 ease-in-out hover:scale-105 text-white/70 border-white/50"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default AuthenticationMsg;
