import React, { createContext, useContext, useState } from 'react';
import { appSnapSpaceSize, apps } from '../constants';

type AppSwitcherContextType = {
  activeApp: string;
  setActiveApp: (app?: string) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  scrollIndex: number;
};

// Create a new context for the app switcher
export const AppSwitcherContext = createContext({} as AppSwitcherContextType);

export const useAppSwitcher = () => {
  const context = useContext(AppSwitcherContext);
  if (!context) {
    throw new Error(
      'useAppSwitcher must be used within an AppSwitcherProvider',
    );
  }
  return context;
};

type AppSwitcherProviderProps = {
  children: React.ReactNode;
};
export const AppSwitcherProvider = ({ children }: AppSwitcherProviderProps) => {
  const [activeApp, setActiveApp] = useState<string>(apps[0].devUrl);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [offset, setOffset] = useState(0);
  const _setActiveApp = (app?: string) => {
    setIsOpen(false);
    setActiveApp(() => app ?? apps[0].devUrl);
  };
  const scrollIndex = offset / appSnapSpaceSize;

  return (
    <AppSwitcherContext.Provider
      value={{
        activeApp,
        setActiveApp: _setActiveApp,
        isOpen,
        setIsOpen,
        offset,
        setOffset,
        scrollIndex,
      }}
    >
      {children}
    </AppSwitcherContext.Provider>
  );
};
