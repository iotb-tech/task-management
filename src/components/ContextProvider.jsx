import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <AppContext.Provider value={{ isLightMode, setIsLightMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
