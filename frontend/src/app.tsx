import { appIconSizeSmall, getAppUrl } from './constants';
import { cn } from '@repo/utils';
import { useAppSwitcher } from './providers/app-switcher-context';
import { AppSwitcher } from './components/app-switcher';
import { useEffect, useState } from 'react';
import { IframeChild } from 'dread-ui';
import { useIntro } from './providers/intro-provider';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  const { step } = useIntro();
  const { isOpen, activeApp } = useAppSwitcher();
  const [background, setBackground] = useState('bg-black');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setBackground(activeApp.background);
  }, [activeApp]);

  useEffect(() => {
    if (
      step === 'closed' &&
      activeApp.id === 'home' &&
      location.pathname !== '/#/home'
    )
      navigate('/#/home');
  }, [step, activeApp, navigate, location]);

  return (
    <div
      className='relative flex h-full w-full'
      style={{
        backgroundColor: background,
      }}
    >
      {true && (
        <>
          {true && (
            <IframeChild
              className={cn(
                'absolute left-0 top-0 w-full',
                isOpen ? 'pointer-events-none' : 'pointer-events-auto',
              )}
              style={{
                height: `calc(100% - ${appIconSizeSmall}px)`,
              }}
              src={getAppUrl(activeApp, activeApp.external)}
            />
          )}
          <AppSwitcher />
        </>
      )}
    </div>
  );
}

export { App };
