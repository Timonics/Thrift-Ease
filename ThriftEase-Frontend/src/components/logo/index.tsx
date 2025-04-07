import React from "react";
import { MdSell } from "react-icons/md";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link
      to={"/"}
      className="font-black appgreen flex items-center text-sm pops"
    >
      <MdSell />
      ThriftEase.
    </Link>
  );
};

export default Logo;
