import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { appIconJumpTopBound, appIconSizeSmall, apps } from './constants';
import { AppSpace } from './components/app-space';
import { useApp } from '@providers/app-provider';
import { cn } from '@repo/utils';

function ParentApp() {
  const { app, setApp, switcherOpen, setSwitcherOpen } = useApp();
  // useEffect(() => {
  //   setApp(apps[0].name);
  // }, [setApp]);

  const parentRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: parentRef,
  });
  // function useParallax(value: MotionValue<number>, distance: number) {
  //   return useTransform(value, [0, 1], [-distance, distance]);
  // }
  // const y = useParallax(scrollYProgress, 10);
  useMotionValueEvent(scrollXProgress, 'change', (latest) => {
    setWidth(latest * 100);
  });
  const [width, setWidth] = useState(0);
  // console.log('width', width);
  // console.log('apps', apps);

  const getAvailableWidth = () => {
    if (parentRef && parentRef.current) {
      return parentRef.current.offsetWidth;
    }
    return window.innerWidth;
  };
  const getAvailableHeight = () => {
    if (parentRef && parentRef.current) {
      return parentRef.current.offsetHeight;
    }
    return window.innerHeight;
  };
  const biggestSquare = Math.min(
    getAvailableWidth(),
    getAvailableHeight() - appIconJumpTopBound,
  );
  const getPadding = () => {
    return 0;
  };

  return (
    <div className='flex h-full w-full bg-blue-400'>
      {app && (
        <iframe
          id='viewer'
          src={app}
          className={cn('fixed w-full', switcherOpen && 'pointer-events-none')}
          style={{
            height: `calc(100% - ${appIconSizeSmall}px)`,
          }}
        />
      )}
      <div
        className={cn(
          'hide-scrollbar relative z-10 flex w-full flex-1 snap-x snap-mandatory flex-nowrap items-center overflow-auto overscroll-none',
          !switcherOpen && 'pointer-events-none',
        )}
        style={{ paddingLeft: getPadding(), paddingRight: getPadding() }}
        ref={parentRef}
      >
        <motion.div
          className='fixed left-0 top-0 z-10 h-1 w-full bg-gray-500'
          style={{ width: `${scrollXProgress.get() * 100}%` }}
        />
        {/* <div
        className="fixed right-0 top-1/2 z-10 h-1 w-full bg-gray-500"
        style={{ width: `100%` }}
      /> */}

        {apps.map((app) => (
          <AppSpace
            key={app.name}
            app={app}
            onClick={() => setApp(app.url)}
            parentRef={parentRef}
            progress={width}
          />
        ))}
      </div>
      <button
        className='absolute z-10 rounded-md border-2 border-white'
        style={{
          width: appIconSizeSmall,
          height: appIconSizeSmall,
          right: 0,
          bottom: 0,
        }}
        onClick={() => setApp('')}
      >
        X
      </button>
      <div
        className='absolute z-10 rounded-md border-2 border-white'
        style={{
          width: appIconSizeSmall,
          height: appIconSizeSmall,
          bottom: 0,
          left: `calc(50% - ${appIconSizeSmall / 2}px)`,
        }}
      ></div>
      {apps.map(({ name, icon, alt }, index) => (
        <button
          key={name}
          className='absolute z-10 overflow-hidden rounded-md border border-gray-500'
          style={{
            width: appIconSizeSmall,
            height: appIconSizeSmall,
            bottom: 0,
            left: `calc(50% - ${
              scrollXProgress.get() * (apps.length - 1) * appIconSizeSmall
            }px)`,
            transform: `translateX(${-50 + 100 * index}%)`,
          }}
          onClick={() => {
            console.log('clicked', name);
            setSwitcherOpen(true);
            // const appSpace = document.getElementById(`${name}-space`);
            // appSpace?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <img src={icon} alt={alt} />
        </button>
      ))}
    </div>
  );
}

export { ParentApp as App };
