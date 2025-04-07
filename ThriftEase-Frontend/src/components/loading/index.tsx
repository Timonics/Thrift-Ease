import React from "react";
import { MdSell } from "react-icons/md";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm">
      <div className="text-4xl appgreen bg-appdarkblue p-2 rounded-lg animate-spin">
        <MdSell />
      </div>
    </div>
  );
};

export default Loading;
