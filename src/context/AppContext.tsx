import React, { useState, createContext, useContext } from "react";
import { IAppContext } from "./IAppContext";

export const AppContext = createContext<IAppContext>({} as IAppContext);
export const useAppContext = () => useContext(AppContext);

interface AppContextProviderProps {
  children?: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const appContext: IAppContext = {
    inputText,
    buttonIsLoading: isLoading,

    setInputText,
    setButtonIsLoading: setIsLoading,
  };

  return <AppContext.Provider value={appContext}>{children}</AppContext.Provider>;
};
