import React from "react";
import { useState } from "react";
import EditProfile from "./EditProfile";
import { useAppContext } from "../components/ContextProvider";

import animated_ashutosh from "../pages/animated_ashutosh.png";

function Profile() {
  const { isLightMode } = useAppContext();

  const [showProfile, setEditProfile] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isOpened, setIsOpened] = useState(false);
  const toggleMenus = () => {
    setIsOpened(!isOpened);
  };
  const [isOpens, setIsOpens] = useState(false);
  const toggleMenuss = () => {
    setIsOpens(!isOpens);
  };
  return (
    <div>
      {showProfile ? (
        <EditProfile />
      ) : (
        <div className="mx-auto lg:w-1/3  md:w-1/2 justify-items-center  rounded-xl  pb-20">
          <h1 className="text-5xl secondary-font mt-2 pt-10">Profile</h1>
          <img
            src={animated_ashutosh}
            alt=""
            className="mt-10 xl:size-24 md:size-24 max-sm:size-20"
          />
          <h2 className="pt-4">Obayomi AbdulAfeez</h2>
          <p>Web Developer</p>

          <button
            onClick={() => setEditProfile(true)}
            className="bg-cyan-950 text-white pl-6 pr-6 rounded-2xl pt-1 pb-1 mt-3"
          >
            Edit profile
          </button>

          <div className="flex">
            <div className="primary-color mt-5 pt-1 pb-1 xl:pl-8 xl:pr-8 md:pr-8 md:pl-8 rounded-md max-sm:pl-3 max-sm:pr-3">
              <p className="text-center">3</p>
              <p>Completed task</p>
            </div>
            <div className="card mt-5 ml-4 pl-8 pr-8 rounded-md pt-1 pb-1 ">
              <p className="text-center">2</p>
              <p>Pending task</p>
            </div>
          </div>
          <div className="mt-10 secondary-font">
            <div></div>
            <div className="">
              <div className="mb-6 xl:-ml-1">
                <button
                  onClick={toggleMenu}
                  className="mt-3  pl-3 xl:pr-48 md:pr-32 max-sm:pr-32 pt-1 pb-1 rounded-md border-1 border-cyan-700 "
                >
                  {" "}
                  List of completed task
                </button>
                <div
                  className={`shadow-2xl rounded-xl mt-4 pl-4  pt-2 pb-2 card  max-sm
                  ${isOpen ? "block" : "hidden"} `}
                >
                  <p>. watched redux videos </p>
                  <p>. practice the watched videos</p>
                  <p>. Eat and Sleep</p>
                </div>
              </div>
              <div className="mt-3   ">
                <button
                  onClick={toggleMenus}
                  className="pl-5 xl:pr-48 md:pr-32 max-sm:pr-32 pt-1 pb-1 rounded-md border-cyan-700 border-1"
                >
                  List of pending tasks
                </button>
                <div
                  className={`shadow-2xl rounded-xl mt-4 pl-4 pr-4  pt-2 pb-2 card  max-sm:
              ${isOpened ? "block" : "hidden"}`}
                >
                  <p>. Read Documentation on Redux</p>
                  <p>. Build an app using Redux</p>
                </div>
              </div>
              <div className="mt-4 ">
                <button
                  onClick={toggleMenuss}
                  className="mt-3 lg:  rounded-md border-1 pl-4 xl:pr-40 md:pr-24 max-sm:pr-24 pt-1 pb-1 border-cyan-700"
                >
                  Task you are on presently
                </button>
                <div
                  className={`shadow-2xl rounded-xl mt-4  pl-3  pt-2 pb-2 card  max-sm:
              ${isOpens ? "block" : "hidden"}`}
                >
                  <p className="">Watching of videos on Redux</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Profile;
