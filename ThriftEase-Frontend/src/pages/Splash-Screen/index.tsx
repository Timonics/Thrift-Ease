import React, { useEffect } from "react";
import { MdSell } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface SplashScreenProps {
  setFirstPageLoaded: React.Dispatch<React.SetStateAction<string | null>>;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ setFirstPageLoaded }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("firstVisit", "true");
      setFirstPageLoaded("true"); 
      navigate("../");
    }, 1500);
  }, [navigate, setFirstPageLoaded]);

  return (
    <div className="h-screen auth-background flex items-center justify-center">
      <div className="pops font-extrabold text-[#039832f9] flex items-center text-[40px] min-[375px]:text-[50px] sm:text-[65px] md:text-[75px] lg:text-[85px] xl:text-[95px]">
        <MdSell /> ThriftEase.
      </div>
    </div>
  );
};

export default SplashScreen;
