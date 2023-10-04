/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext } from "react";
import { useGetUserAuth } from "../hooks/useAuth";

const appContext = createContext({});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  useGetUserAuth();
  return <appContext.Provider value={{}}>{children}</appContext.Provider>;
};

export default AppProvider;

export const useAppContext = () => {
  return useContext(appContext);
};
