import React from "react";
import InfoCard from "./InfoCard";
import infos from "../data/info";
import userIcon from "../assets/userIcon.jpg";
import { useAppContext } from "./ContextProvider";

const Summary = () => {
  const { isLightMode, showBar, setShowBar } = useAppContext();

  return (
    <div className="w-full">
      <div className="flex flex-col justify-start items-center md:items-start text-center md:text-start mb-6">
        <div
          className={`w-20 h-20 overflow-hidden rounded-lg shadow-xl mb-4 ${
            isLightMode ? "border-[3px] border-[#19475B]" : ""
          }`}
        >
          <img src={userIcon} alt="" />
        </div>
        <div>
          <h3
            className={`secondary-font text-3xl font-bold ${
              isLightMode ? "text-[#19475B]" : ""
            } `}
          >
            Hi, user
          </h3>
          <p
            className={`primary-font text-md ${
              isLightMode ? "text-[#19475B]" : ""
            }`}
          >
            Below is your task review
          </p>
        </div>
      </div>

      <h1
        className={`${
          isLightMode ? "text-[#19475B]" : "text-white"
        } text-center primary-font text-4xl font-bold mb-8`}
      >
        Task Review
      </h1>
      <div className="flex flex-wrap justify-center gap-[4%]">
        {infos.map((inf, index) => (
          <InfoCard
            key={index}
            number={inf.number}
            info={inf.info}
            icon={inf.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Summary;
