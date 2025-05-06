import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(true);
  const [showBar, setShowBar] = useState(false);

  return (
    <AppContext.Provider
      value={{ isLightMode, setIsLightMode, showBar, setShowBar }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
