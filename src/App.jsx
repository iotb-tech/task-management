import "./App.css";
import Dashboard from "./pages/Dashboard";
import { ContextProvider } from "./components/ContextProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "./components/getStarted";
import Login from "./components/Login";
import ForgottenPassword from "./components/forgottenPassword";

function App() {
  return (
    <>
      <div>
        <ContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<GetStarted />}></Route>
              <Route path="/dashboard/*" element={<Dashboard />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/" element={<ForgottenPassword />}></Route>
            </Routes>
          </Router>
        </ContextProvider>
      </div>
    </>
  );
}

export default App;
