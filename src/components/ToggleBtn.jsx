import React from "react";
import { useAppContext } from "./ContextProvider";

const ToggleBtn = () => {
  const { isLightMode, setIsLightMode } = useAppContext();

  return (
    <div
      onClick={() => {
        setIsLightMode(!isLightMode);
      }}
      className={`w-14 md:w-22 h-8 md:h-12 flex items-center ${
        isLightMode ? "bg-[#19475B] justify-start" : "bg-white justify-end"
      } rounded-full p-1 absolute right-8 md:right-10 shadow-md ease-in`}
    >
      <div
        className={`secondary-font font-bold w-6 md:w-10 h-6 md:h-10 ${
          isLightMode ? "bg-white text-[#19475B]" : "bg-[#19475B] text-white"
        } rounded-full flex justify-center items-center ease-in`}
      >
        {isLightMode ? "L" : "D"}
      </div>
    </div>
  );
};

export default ToggleBtn;
