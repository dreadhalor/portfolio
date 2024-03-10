import { appIconSizeSmall, getAppUrl } from './constants';
import { cn } from '@repo/utils';
import { useAppSwitcher } from './providers/app-switcher-context';
import { AppSwitcher } from './components/app-switcher';
import { useEffect, useState } from 'react';

function App() {
  const { isOpen, activeApp } = useAppSwitcher();
  const [background, setBackground] = useState('bg-black');

  useEffect(() => {
    setBackground(activeApp.background);
  }, [activeApp]);

  return (
    <div
      className='relative flex h-full w-full'
      style={{
        backgroundColor: background,
      }}
    >
      {/* <Home /> */}
      {true && (
        <>
          {true && (
            <iframe
              className={cn(
                'absolute left-0 top-0 w-full',
                isOpen ? 'pointer-events-none' : 'pointer-events-auto',
              )}
              style={{
                height: `calc(100% - ${appIconSizeSmall}px)`,
              }}
              src={getAppUrl(activeApp)}
            />
          )}
          <AppSwitcher />
        </>
      )}
    </div>
  );
}

export { App };
