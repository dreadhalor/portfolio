import React, { createContext, useContext, useState } from 'react';
import { appSnapSpaceSize } from '../constants';

type AppSwitcherContextType = {
  activeApp: string;
  setActiveApp: React.Dispatch<React.SetStateAction<string>>;
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
    throw new Error('useBoard must be used within a BoardProvider');
  }
  return context;
};

type AppSwitcherProviderProps = {
  children: React.ReactNode;
};
export const AppSwitcherProvider = ({ children }: AppSwitcherProviderProps) => {
  const [activeApp, setActiveApp] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [offset, setOffset] = useState(0);
  const scrollIndex = offset / appSnapSpaceSize;

  return (
    <AppSwitcherContext.Provider
      value={{
        activeApp,
        setActiveApp,
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
