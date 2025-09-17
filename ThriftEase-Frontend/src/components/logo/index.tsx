import React from "react";
import { Link } from "react-router";

const Logo: React.FC = () => {
  return (
    <Link
      to={"/"}
      className="text-green-500 text-lg font-bold font-heading rounded-lg"
    >
      ThriftEase.
    </Link>
  );
};

export default Logo;
