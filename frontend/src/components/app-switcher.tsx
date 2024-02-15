import { useRef } from 'react';
import { apps } from '../constants';
import { cn } from '@repo/utils';
import { AppImage } from './app-image';
import { Navbar } from './navbar';
import { ScrollArea } from './scroll-area';
import { AppIcon } from './app-icon';

const AppSwitcher = () => {
  const overlayRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={overlayRef}
      className={cn(
        'relative flex h-full w-full flex-nowrap overflow-hidden border-0',
      )}
    >
      {/* <div className='pointer-events-none fixed inset-0 z-10 overflow-hidden'> */}
      {/* {apps.map((_, index) => (
          <AppImage key={index} index={index} parentRef={overlayRef} />
        ))} */}
      {/* <Navbar parentRef={overlayRef} /> */}
      {/* </div> */}
      <ScrollArea parentRef={overlayRef} />
    </div>
  );
};

export { AppSwitcher };
