import { cn } from '@repo/utils';
import { appSnapSpaceSize, apps } from '../constants';
import { useAppSwitcher } from '../providers/app-switcher-context';
import { useRef } from 'react';
import { AppImage } from './app-image';
import { Navbar } from './navbar';

type ScrollAreaProps = {
  parentRef?: React.RefObject<HTMLDivElement>;
};
const ScrollArea = ({ parentRef }: ScrollAreaProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen, setOffset } = useAppSwitcher();

  const handleScroll = () => {
    console.log('handleScroll');
    const _offset = overlayRef.current?.scrollLeft ?? 0;
    window.requestAnimationFrame(() => {
      setOffset(() => _offset);
    });
  };

  return (
    <div
      ref={overlayRef}
      className={cn(
        'relative z-0 flex h-full w-full snap-x snap-mandatory flex-nowrap overflow-auto border-0 transition-colors duration-200 ease-in-out',
        // 'border-4',
        // isOpen ? 'bg-blue-400/90' : 'bg-transparent',
        'bg-transparent',
        isOpen ? 'pointer-events-auto' : 'pointer-events-none',
        // isOpen ? 'pointer-events-none' : 'pointer-events-none',
      )}
      style={
        {
          // padding: `0 ${(window.innerWidth - appSnapSpaceSize) / 2}px`,
        }
      }
      onPointerDown={(e) => {
        if (isOpen && e.target === overlayRef.current) setIsOpen(false);
      }}
      onScroll={handleScroll}
    >
      {/* {apps.map((_, index) => (
        <AppImage key={index} index={index} parentRef={overlayRef} />
      ))} */}
      {apps.map((_, index) => (
        <div
          key={index}
          className={cn(
            'z-20 shrink-0 border border-red-500 bg-white/20',
            'snap-center',
          )}
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
        className='absolute left-0 top-0 z-30 overflow-hidden border-0 border-white'
        style={{
          width: window.innerWidth + appSnapSpaceSize * (apps.length - 1),
          height: '100%',
        }}
      >
        <div className='relative h-full w-full border border-black'>
          {apps.map((_, index) => (
            <AppImage key={index} index={index} parentRef={overlayRef} />
          ))}
        </div>
      </div>
      <div
        className='absolute left-0 top-0 z-40 flex border-2 border-blue-400'
        style={{
          width: window.innerWidth + appSnapSpaceSize * (apps.length - 1),
          height: '100%',
        }}
      >
        <Navbar parentRef={parentRef} />
      </div>
    </div>
  );
};

export { ScrollArea };
