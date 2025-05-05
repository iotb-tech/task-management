import React from "react";
import Summary from "./Summary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToggleBtn from "./ToggleBtn";

const MainBar = () => {
  return (
    <div className="w-full h-full py-4 px-10 ml-0 md:ml-60">
      <ToggleBtn />
      <Routes>
        <Route path="/" element={<Summary />}></Route>
      </Routes>
    </div>
  );
};

export default MainBar;
