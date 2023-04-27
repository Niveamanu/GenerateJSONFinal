import { createContext, useContext, useState } from "react";
import { stream } from "./data";
const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const uniqueStream = [];

  {
    stream.map((item) => {
      uniqueStream.push(item.name);
    });
  }
  console.log(uniqueStream);
  const [currentItem, setCurrentItem] = useState(uniqueStream[0]);
  const openSidebar = () => {
    console.log("sidebar clicked");
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        currentItem,
        setCurrentItem,
        uniqueStream,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
