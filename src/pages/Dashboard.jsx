import React from "react";
import SideBar from "../components/SideBar";
import MainBar from "../components/MainBar";
import { useAppContext } from "../components/ContextProvider";

const Dashboard = () => {
  const { isLightMode } = useAppContext();

  return (
    <div
      className={`min-h-screen ${
        isLightMode ? "bg-gray-100" : "primary-color"
      }  flex`}
    >
      <SideBar />
      <MainBar />
    </div>
  );
};

export default Dashboard;
