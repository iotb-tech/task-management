import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import Pic1 from "../assets/taskmgt3.avif";
import Pic2 from "../assets/taskmgt2.png";
import Pic3 from "../assets/taskmgtpic1.png";

const GetStarted = () => {
  return (
    <div className="primary-color min-h-screen flex flex-col items-center justify-center relative px-4">
      {/* Responsive Image Group */}
      <div className="flex justify-center items-center gap-4 flex-wrap mb-10">
        {/* Small screens*/}
        <img
          src={Pic1}
          alt="Task"
          className="block md:hidden w-48 h-42 object-cover absolute top-1/2 right-0 transform -translate-y-1/2 mb-16 mr-6 rounded-xl"
        />

        {/* Medium screens*/}
        <img
          src={Pic2}
          alt=""
          className="hidden md:block lg:hidden rounded-xl w-64 h-56"
        />
        <img
          src={Pic3}
          alt=""
          className="hidden md:block lg:hidden rounded-xl w-64 h-56"
        />

        {/* Large screens */}
        <img
          src={Pic1}
          alt=""
          className="hidden lg:block rounded-xl w-80 h-68"
        />
        <img
          src={Pic2}
          alt=""
          className="hidden lg:block rounded-xl w-80 h-68"
        />
        <img
          src={Pic3}
          alt=""
          className="hidden lg:block rounded-xl w-80 h-68"
        />
      </div>

      <div className="mt-[400px] md:mt-6 lg:mt-6 px-4 sm:px-8 md:px-16 w-full">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="mb-4 font-bold secondary-font text-3xl sm:text-xl md:text-2xl text-white">
            MANAGE YOUR <br /> DAILY TASKS
          </h1>
          <h3 className="text-white mb-6 sm:text-base md:text-lg">
            Develop effective task management with our easy-to-use app
          </h3>
          <button className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-black hover:text-white text-black font-2xl rounded-full transition duration-300">
            Get Started <IoMdArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
