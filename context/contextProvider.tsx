import React, { createContext, ReactNode, useContext, useState } from "react";

export interface AppContextInterface {
  sidebarToggleCollapse: boolean;
  setSidebarToggleCollapse: React.Dispatch<React.SetStateAction<boolean>>;
  searchBy: any;
  setSearchBy: React.Dispatch<React.SetStateAction<any>>;
}
export const AppStateContext = createContext<AppContextInterface | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [sidebarToggleCollapse, setSidebarToggleCollapse] = useState(false);
  const [searchBy, setSearchBy] = useState({ value: "name", label: "Name" });

  return (
    <AppStateContext.Provider
      value={{ sidebarToggleCollapse, setSidebarToggleCollapse, searchBy, setSearchBy }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateContext;
export const useAppStateContext = () => useContext(AppStateContext);
