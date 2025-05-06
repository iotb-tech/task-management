import React from "react";
import { useAppContext } from "./ContextProvider";
import dashboardIcon from "../assets/dashboardIcon.png";

const DashIcon = () => {
  const { showBar, setShowBar } = useAppContext();

  return (
    <div
      className={`absolute left-8 ${showBar ? "hidden" : "block"} md:hidden`}
      onClick={() => {
        setShowBar(true);
        console.log(showBar);
      }}
    >
      <img src={dashboardIcon} alt="" width={40} />
    </div>
  );
};

export default DashIcon;
