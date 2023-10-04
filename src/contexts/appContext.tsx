/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, createContext, useContext, useEffect } from "react";
import { useGetUserAuth } from "../hooks/useAuth";
import { useLocation } from "react-router-dom";

interface TAppContext {
  closeSidebar: () => void;
  openSidebar: () => void;
  isSidebarOpen: boolean;
}

const appContext = createContext<TAppContext>({} as TAppContext);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  useGetUserAuth();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  useEffect(() => {
    closeSidebar();
  }, [location]);

  return (
    <appContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  return useContext(appContext);
};
