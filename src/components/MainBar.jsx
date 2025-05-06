import React from "react";
import Summary from "./Summary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToggleBtn from "./ToggleBtn";
import DashIcon from "./DashIcon";
import TaskList from "../pages/TaskList";
import Task from "../pages/Task";
import Profile from "../pages/Profile";

const MainBar = () => {
  return (
    <div className="w-full min-h-screen py-4 px-10 ml-0 md:ml-60">
      <ToggleBtn />
      <DashIcon />
      <Routes>
        <Route path="/" element={<Summary />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="list" element={<TaskList />}></Route>
        <Route path="add" element={<Task />}></Route>
      </Routes>
    </div>
  );
};

export default MainBar;
