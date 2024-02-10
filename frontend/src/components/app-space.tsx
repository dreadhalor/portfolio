/* tslint:disable */

import { animate, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import {
  appIconJumpTopBound,
  appIconSizeLarge,
  appIconSizeSmall,
  apps,
} from '../constants';
// import { AppIcon } from "./app-icon";
import { cn } from '@repo/utils';
import { useRef, useState } from 'react';
import { useApp } from '../providers/app-provider';
import { Button, DatePicker } from 'dread-ui';
type AppSpaceProps = {
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
  parentRef?: React.RefObject<HTMLDivElement>;
  app: (typeof apps)[number];
  progress: number;
};
const AppSpace = ({
  app,
  className,
  style,
  parentRef,
  progress,
}: AppSpaceProps) => {
  const { description, name, background, image, alt } = app;
  const index = apps.findIndex((a) => a.name === name);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    target: ref,
    container: parentRef,
    offset: ['end start', 'start end'],
    axis: 'x',
    layoutEffect: false,
  });

  const o_1 = 100;
  const o_2 = 0;
  // useMotionValueEvent(scrollXProgress, 'change', (latest) => {
  //   setCoords((prev) => {
  //     let newCoords = prev;
  //     const t = latest;
  //     const o_high = Math.max(o_1, o_2);
  //     const o_low = Math.min(o_1, o_2);
  //     const leftHigh = o_1 > o_2;
  //     const topHigh = (-2 * o_high - 400) * t + 200;
  //     const topLow = (-2 * o_high - 400) * t + o_high - o_low + 200;
  //     const bottomHigh = (-2 * o_high - 400) * t + o_high + o_low + 300;
  //     const bottomLow = (-2 * o_high - 400) * t + 2 * o_high + 300;
  //     // if (name === "enlight") console.log(`deltaY from ${name}`, deltaY);
  //     newCoords = {
  //       topLeft: { y: 0, x: leftHigh ? topHigh : topLow },
  //       topRight: {
  //         y: 100,
  //         x: leftHigh ? topLow : topHigh,
  //       },
  //       bottomRight: {
  //         y: 100,
  //         x: leftHigh ? bottomLow : bottomHigh,
  //       },
  //       bottomLeft: {
  //         y: 0,
  //         x: leftHigh ? bottomHigh : bottomLow,
  //       },
  //     };
  //     return newCoords;
  //   });
  // });

  // const [coords, setCoords] = useState({
  //   topLeft: { x: 0, y: 0 },
  //   topRight: { x: 0, y: 0 },
  //   bottomRight: { x: 0, y: 0 },
  //   bottomLeft: { x: 0, y: 0 },
  // });

  const descriptionWidth = 300;
  const { setApp, switcherOpen, setSwitcherOpen } = useApp();

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

  const p_inner_0 = (100 * index + 50) / (apps.length - 1);
  const p_inner_1 = (100 * (index - 1)) / (apps.length - 1);
  const p_inner_delta = p_inner_0 - p_inner_1;
  if (index === 0)
    console.log(
      'progress, p_inner_0, p_inner_1, p_inner_delta',
      progress,
      p_inner_0,
      p_inner_1,
      p_inner_delta,
    );

  const getP = () => {
    const p_inner_raw = progress - p_inner_1;
    if (p_inner_raw < 0) return 0;
    if (p_inner_raw > p_inner_delta) return 1;
    return p_inner_raw / p_inner_delta;
  };

  return (
    <motion.div
      ref={ref}
      id={`${name}-space`}
      className={cn(
        'relative flex h-full shrink-0 grow-0 flex-col items-center justify-center overflow-visible border-4 p-0 duration-300 ease-in-out',
        className,
      )}
      style={{
        width: biggestSquare,
        scrollSnapAlign: 'center',
        // clipPath: `polygon(${coords.topLeft.x}% ${coords.topLeft.y}%, ${coords.topRight.x}% ${coords.topRight.y}%, ${coords.bottomRight.x}% ${coords.bottomRight.y}%, ${coords.bottomLeft.x}% ${coords.bottomLeft.y}%)`,
        transitionProperty: 'transform, filter, opacity',
        opacity: switcherOpen ? 1 : 0,
        filter: switcherOpen ? 'none' : 'blur(5px)',
        scale: switcherOpen ? 1 : 1.2,
        pointerEvents: switcherOpen ? 'auto' : 'none',
        marginRight:
          index === apps.length - 1
            ? (getAvailableWidth() - biggestSquare) / 2
            : 0,
        marginLeft: index === 0 ? (getAvailableWidth() - biggestSquare) / 2 : 0,
        ...style,
      }}
    >
      {/* create a polygon that is a parallelogram that connects the top-left corner to the bottom-right corner  */}
      {/* <div
        className={cn(
          "absolute left-0 top-0 h-full w-full border-4",
          background,
        )}
        style={{
          clipPath: `polygon(${coords.topLeft.x}% ${coords.topLeft.y}%, ${coords.topRight.x}% ${coords.topRight.y}%, ${coords.bottomRight.x}% ${coords.bottomRight.y}%, ${coords.bottomLeft.x}% ${coords.bottomLeft.y}%)`,
        }}
      /> */}
      {/* <motion.div
        className="absolute left-0 top-1/2 z-10 h-[5px] bg-yellow-500"
        style={{
          width: `${scrollYProgress.get() * 100}%`,
        }}
      /> */}
      <div className='absolute inset-0 flex min-w-0 place-items-center'>
        <motion.div
          className='absolute z-10 flex flex-col items-center justify-center gap-4 rounded-lg bg-black/60 p-5 text-center text-white'
          style={{
            width: descriptionWidth,
            left: `calc(50% - ${descriptionWidth / 2}px)`,
            transform: `translateX(${(getP() - 0.6) * 100}%)`,
          }}
        >
          <h1 className='text-2xl font-bold'>{name}</h1>
          {description}
          <Button variant={'default'}>WHAT</Button>
          <DatePicker />
          <button
            className='rounded-md border-2 p-2'
            onClick={() => {
              setSwitcherOpen(false);
              setApp(
                process.env.NODE_ENV === 'production'
                  ? app.url
                  : 'https://dreadhalor.github.io/shareme/',
              );
            }}
          >
            Start {app.name}
          </button>
        </motion.div>
      </div>

      <div
        className='w-full shrink-0'
        style={{
          height: appIconJumpTopBound / 3,
        }}
      ></div>
      <motion.div
        className='relative flex min-h-0 w-full min-w-0 flex-1 items-center justify-center object-contain p-4 md:p-8'
        style={{
          transform: `translateY(${-Math.pow(getP() - 0.6, 4) * 50}%)`,
        }}
      >
        {image ? (
          // <div className="z-10 flex h-full w-full items-center justify-center rounded-lg p-8">
          <img
            className='max-h-full max-w-full rounded-lg'
            src={image}
            alt={alt}
          />
        ) : (
          // </div>
          alt
        )}
      </motion.div>
      <div
        className='w-full shrink-0'
        style={{
          height: appIconJumpTopBound,
        }}
      ></div>

      {/* <motion.div
        className={cn(
          'absolute left-0 top-0 -z-10 h-full w-[100%] opacity-50 brightness-50 filter',
          // apps.findIndex((a) => a.name === name) === apps.length - 1 &&
          //   'w-[200%]',
          background,
        )}
      ></motion.div> */}
    </motion.div>
  );
};

export { AppSpace };
