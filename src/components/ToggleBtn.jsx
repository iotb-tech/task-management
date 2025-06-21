import React from "react";
import { useAppContext } from "./ContextProvider";

const ToggleBtn = () => {
  const { isLightMode, setIsLightMode } = useAppContext();

  return (
    <div
      onClick={() => setIsLightMode(!isLightMode)}
      className={`w-14 sm:w-16 md:w-20 h-8 sm:h-9 md:h-12 flex items-center ${
        isLightMode ? "bg-[#19475B] justify-start" : "bg-white justify-end"
      } rounded-full px-1 absolute right-4 sm:right-6 md:right-10 top-4 shadow-md cursor-pointer transition-all duration-300`}
    >
      <div
        className={`font-bold w-6 sm:w-7 md:w-10 h-6 sm:h-7 md:h-10 ${
          isLightMode ? "bg-white text-[#19475B]" : "bg-[#19475B] text-white"
        } rounded-full flex items-center justify-center transition-all duration-300`}
      >
        {isLightMode ? "L" : "D"}
      </div>
    </div>
  );
};

export default ToggleBtn;
