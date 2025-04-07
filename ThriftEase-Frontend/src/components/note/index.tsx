import React from "react";
import { Link } from "react-router-dom";

const Note: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[450px] sm:min-h-[350px] md:min-h-[300px] py-6 gap-10 justify-center items-center bg-[#34495E]">
      <h3 className="w-[90%] text-center text-2xl font-bold text-slate-300 rubik">
        Join a community that's all about sustainability, great deals, and
        finding new homes for preloved items. Get started today by browsing the
        latest deals or listing your first item!
      </h3>
      <Link
        className="p-2 rounded-xl w-[200px] hover:scale-125 transition ease-in-out duration-500 text-[#34495E] text-center bg-[#2ECC71] hover:bg-[#9bc8fff0] hover:text-slate-900 font-bold"
        to={""}
      >
        Explore
      </Link>
    </div>
  );
};

export default Note;
