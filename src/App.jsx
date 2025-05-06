import "./app.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "./components/getStarted";
import Login from "./components/Login";
import ForgottenPassword from "./components/forgottenPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotten-password" element={<ForgottenPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
