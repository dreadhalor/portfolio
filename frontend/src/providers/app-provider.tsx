import React, { createContext, useContext, useEffect, useState } from 'react';
import { apps } from '../constants';

type AppContextType = {
  app: string;
  setApp: (app: string) => void;
  switcherOpen: boolean;
  setSwitcherOpen: (open: boolean) => void;
};

const AppContext = createContext<AppContextType>({} as AppContextType);

type AppProviderProps = {
  children: React.ReactNode;
};
const AppProvider = ({ children }: AppProviderProps) => {
  const [app, setApp] = useState<string>(
    'https://dreadhalor.github.io/shareme/',
  );
  const [switcherOpen, setSwitcherOpen] = useState<boolean>(false);
  useEffect(() => {
    console.log('app', app);
  }, [app]);

  return (
    <AppContext.Provider value={{ app, setApp, switcherOpen, setSwitcherOpen }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useApp };
