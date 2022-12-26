import React, { createContext, ReactNode, useContext, useState } from "react";

export interface AppContextInterface {
  sidebarToggleCollapse: boolean;
  setSidebarToggleCollapse: React.Dispatch<React.SetStateAction<boolean>>;
  searchBy: any;
  setSearchBy: React.Dispatch<React.SetStateAction<any>>;
  work: any;
  setWork: React.Dispatch<React.SetStateAction<string>>;
  experience: any;
  setExperience: React.Dispatch<React.SetStateAction<string>>;
}
export const AppStateContext = createContext<AppContextInterface | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [sidebarToggleCollapse, setSidebarToggleCollapse] = useState(false);
  const [searchBy, setSearchBy] = useState("Name");
  const [work, setWork] = useState("");
  const [experience, setExperience] = useState("");

  return (
    <AppStateContext.Provider
      value={{
        sidebarToggleCollapse,
        setSidebarToggleCollapse,
        searchBy,
        setSearchBy,
        work,
        setWork,
        experience,
        setExperience,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateContext;
export const useAppStateContext = () => useContext(AppStateContext);
