import React, { createContext, ReactNode, useContext, useState } from "react";
import { Blog, User } from "../types/index";

export interface AppContextInterface {
  searchBy: any;
  setSearchBy: React.Dispatch<React.SetStateAction<any>>;
}
export const AppStateContext = createContext<AppContextInterface | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [searchBy, setSearchBy] = useState({ value: "name", label: "Name" });
  const [filterBy, setFilterBy] = useState(null);
  const [work, setWork] = useState(null);
  const [experience, setExperience] = useState(null);

  return (
    <AppStateContext.Provider
      value={{
        searchBy,
        setSearchBy,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateContext;
export const useAppStateContext = () => useContext(AppStateContext);
