import React from "react";
import { Link } from "react-router";
import dashboardIcon from "../assets/dashboardIcon.png";
import { useAppContext } from "./ContextProvider";

const SideBar = () => {
  const { isLightMode } = useAppContext();
  return (
    <div className="min-w-60 min-h-screen fixed secondary-color ">
      <div
        className={`primary-color p-4 items-center ${
          isLightMode ? "" : "border-r border-white"
        } `}
      >
        <Link to="/">
          <div className="flex gap-4 items-center">
            <img src={dashboardIcon} alt="" width={60} />
            <h4 className="secondary-font text-lg font-medium">Dashboard</h4>
          </div>
        </Link>
      </div>

      <div className="p-6">
        <Link to="/profile">
          <p className="primary-color primary-font text-md p-2 rounded-sm my-2 hover:bg-white hover:text-[#19475B]">
            Profile
          </p>
        </Link>
        <Link to="/add">
          <p className="primary-color primary-font text-md p-2 rounded-sm my-2 hover:bg-white hover:text-[#19475B]">
            Add Task
          </p>
        </Link>
        <Link to="/list">
          <p className="primary-color primary-font text-md p-2 rounded-sm my-2 hover:bg-white hover:text-[#19475B]">
            Task List
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
