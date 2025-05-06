import React, { useRef, useEffect } from "react";
import { Link } from "react-router";
import dashboardIcon from "../assets/dashboardIcon.png";
import { useAppContext } from "./ContextProvider";

const SideBar = () => {
  const { isLightMode, showBar, setShowBar } = useAppContext();
  const showBarRef = useRef(null);

  useEffect(() => {
    const hideBar = (event) => {
      if (showBarRef.current && !showBarRef.current.contains(event.target)) {
        setShowBar(false);
      }
    };

    if (showBar) {
      document.addEventListener("mousedown", hideBar);
    } else {
      document.body.removeEventListener("mousedown", hideBar);
    }

    return () => {
      document.body.removeEventListener("mousedown", hideBar);
    };
  }, [showBar]);

  return (
    <>
      <div
        className={`min-w-60 min-h-screen fixed secondary-color hidden md:block`}
      >
        <div
          className={`primary-color p-4 items-center ${
            isLightMode ? "" : "border-r border-white"
          } `}
        >
          <Link to="/dashboard">
            <div className="flex gap-4 items-center">
              <img src={dashboardIcon} alt="" width={60} />
              <h4 className="secondary-font text-lg font-medium">Dashboard</h4>
            </div>
          </Link>
        </div>

        <div className="p-6">
          <Link to="/dashboard/profile">
            <p className="primary-color primary-font text-md p-2 rounded-sm my-2 hover:bg-white hover:text-[#19475B]">
              Profile
            </p>
          </Link>
          <Link to="/dashboard/add">
            <p className="primary-color primary-font text-md p-2 rounded-sm my-2 hover:bg-white hover:text-[#19475B]">
              Add Task
            </p>
          </Link>
          <Link to="/dashboard/list">
            <p className="primary-color primary-font text-md p-2 rounded-sm my-2 hover:bg-white hover:text-[#19475B]">
              Task List
            </p>
          </Link>
        </div>
      </div>

      <div
        className={`min-w-60 min-h-screen fixed secondary-color ${
          showBar ? "block" : "hidden"
        } md:hidden shadow-2xl z-[2]`}
        ref={showBarRef}
      >
        <div
          className={`primary-color p-4 items-center ${
            isLightMode ? "" : "border-r border-white"
          } `}
        >
          <div className="flex gap-4 items-center ">
            <div
              className="w-7 h-7 m-1 secondary-font text-xl font-light flex justify-center items-center border border-white rounded-md"
              onClick={() => setShowBar(false)}
            >
              x
            </div>
            <Link to="/dashboard">
              <h4
                className="secondary-font text-lg font-medium"
                onClick={() => setShowBar(false)}
              >
                Dashboard
              </h4>
            </Link>
          </div>
        </div>

        <div className="p-6">
          <Link to="/dashboard/profile" onClick={() => setShowBar(false)}>
            <p className="primary-color primary-font text-md p-2 rounded-sm my-2 hover:bg-white hover:text-[#19475B]">
              Profile
            </p>
          </Link>
          <Link to="/dashboard/add" onClick={() => setShowBar(false)}>
            <p className="primary-color primary-font text-md p-2 rounded-sm my-2 hover:bg-white hover:text-[#19475B]">
              Add Task
            </p>
          </Link>
          <Link to="/dashboard/list" onClick={() => setShowBar(false)}>
            <p className="primary-color primary-font text-md p-2 rounded-sm my-2 hover:bg-white hover:text-[#19475B]">
              Task List
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
