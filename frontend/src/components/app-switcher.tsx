import { cn } from '@repo/utils';
import { appSnapSpaceSize, apps } from '../constants';
import { useAppSwitcher } from '../providers/app-switcher-context';
import { useRef } from 'react';
import { AppImage } from './app-image';
import { Navbar } from './navbar';

const AppSwitcher = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen, setOffset } = useAppSwitcher();

  const handleScroll = () => {
    const _offset = overlayRef.current?.scrollLeft ?? 0;
    window.requestAnimationFrame(() => {
      setOffset(() => _offset);
    });
  };

  return (
    <div
      ref={overlayRef}
      className={cn(
        'relative z-0 flex h-full w-full snap-x snap-mandatory flex-nowrap overflow-auto overscroll-none border-0 transition-colors duration-200 ease-in-out',
        isOpen ? 'bg-black/70' : 'bg-transparent',
        isOpen ? 'pointer-events-auto' : 'pointer-events-none',
      )}
      onScroll={handleScroll}
    >
      {apps.map((_, index) => (
        <div
          key={index}
          className={cn('z-20 shrink-0 border-0 border-red-500', 'snap-center')}
          style={{
            width: appSnapSpaceSize,
            marginLeft:
              index === 0 ? (window.innerWidth - appSnapSpaceSize) / 2 : 0,
            marginRight:
              index === apps.length - 1
                ? (window.innerWidth - appSnapSpaceSize) / 2
                : 0,
          }}
        />
      ))}
      <div
        className='absolute inset-0 z-40 flex border-0 border-blue-400'
        style={{
          width: window.innerWidth + appSnapSpaceSize * (apps.length - 1),
          height: '100%',
        }}
      >
        <div
          className='sticky inset-0 overflow-hidden border-0 border-green-400'
          style={{
            width: window.innerWidth,
          }}
        >
          <div
            ref={stickyRef}
            className='relative h-full w-full border-0 border-blue-300'
            onClick={(e) => {
              if (isOpen && e.target === stickyRef.current) setIsOpen(false);
            }}
          >
            {apps.map((_, index) => (
              <AppImage key={index} index={index} parentRef={overlayRef} />
            ))}
            <Navbar parentRef={overlayRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { AppSwitcher };
