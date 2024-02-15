import { useRef, useState } from 'react';
import { appIconSizeSmall, appSnapSpaceSize, perspective } from './constants';
// import { throttle } from 'lodash';
import { AppIcon } from './components/app-icon';
import { AppImage } from './components/app-image';
import { cn } from '@repo/utils';
import { apps } from './constants';
import './app.scss';
import { Navbar } from './components/navbar';
import { useAppSwitcher } from './providers/app-switcher-context';
import { AppSwitcher } from './components/app-switcher';

function App() {
  const items = Array(20).fill(0);
  const { isOpen } = useAppSwitcher();

  return (
    <div className='relative flex h-full w-full'>
      <div className='fixed left-1/2 z-10 h-full w-px bg-white'></div>
      <div
        className={cn(
          'fixed left-0 right-0 top-0 bg-red-400',
          isOpen ? 'pointer-events-none' : 'pointer-events-auto',
        )}
        style={{
          bottom: appIconSizeSmall,
        }}
      ></div>
      <AppSwitcher />
    </div>
  );
}

export { App };
