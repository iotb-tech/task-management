import "./App.css";
import Dashboard from "./pages/Dashboard";
import { ContextProvider } from "./components/ContextProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <ContextProvider>
          <Router>
            <Dashboard />
          </Router>
        </ContextProvider>
      </div>
    </>
  );
}

export default App;
