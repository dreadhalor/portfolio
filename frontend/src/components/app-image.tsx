import { useLayoutEffect, useRef, useState } from 'react';
import { appIconSizeLarge, apps } from '../constants';
import { Variants, motion } from 'framer-motion';
import { useAppSwitcher } from '../providers/app-switcher-context';
import { useNavigate } from 'react-router-dom';

type AppImageProps = {
  index: number;
  parentRef?: React.RefObject<HTMLDivElement>;
};
const AppImage = ({ index, parentRef }: AppImageProps) => {
  const { isOpen, scrollIndex, setActiveApp } = useAppSwitcher();
  const [animating, setAnimating] = useState(false);
  const [internalOpen, setInternalOpen] = useState(false);
  const app = apps[index];
  const url = import.meta.env.PROD ? app?.url : app?.devUrl;
  const image = app?.image;
  const navigate = useNavigate();

  useLayoutEffect(() => {
    // we need to set open internally to trigger the animation
    setInternalOpen(() => isOpen);
    setAnimating(() => true);
  }, [isOpen]);

  const normalizedX = index - scrollIndex;
  const getParentHeight = () => {
    return parentRef?.current?.offsetHeight ?? 0;
  };
  const getParentWidth = () => {
    return parentRef?.current?.offsetWidth ?? 0;
  };

  const getIconBottom = () => {
    return (getParentHeight() / 100) * 12;
  };

  const marginX = 20;
  const marginY = 15;
  const getBoxWidth = () => {
    return getParentWidth();
  };
  const getBoxHeight = () => {
    const iconBottom = getIconBottom();
    const iconHeight = appIconSizeLarge;
    const iconSpace = iconBottom + iconHeight;
    const result = getParentHeight() - iconSpace;
    return result;
  };

  const getHeight = () => {
    const min = Math.min(
      getBoxHeight() - 2 * marginY,
      getBoxWidth() - 2 * marginX,
    );
    return min;
  };
  const getWidth = () => {
    return getHeight();
  };
  const getWidthWithMargin = () => {
    return getWidth() + 2 * marginX;
  };

  const parallaxOffset = scrollIndex * getWidthWithMargin();
  const dist = Math.abs(normalizedX * getWidthWithMargin());

  const getBottom = () => {
    const iconTop = getIconBottom() + appIconSizeLarge; // height of top of the icon
    const unadjustedBottom = iconTop + marginY; // bottom of the space available for the description
    const adjustment =
      Math.pow(Math.abs((dist * getWidth()) / getParentWidth() / 4), 2) / 300;
    return unadjustedBottom + adjustment;
  };

  const variants: Variants = {
    false: {
      bottom: 0,
      opacity: 0,
    },
    true: {
      bottom: getBottom(),
      opacity: 1,
    },
  };

  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      className='absolute'
      style={{
        width: getHeight(),
        height: getWidth(),
        left: ((parentRef?.current?.offsetWidth ?? 0) - getWidth()) / 2,
        transform: `translate3d(${
          -parallaxOffset + index * getWidthWithMargin()
        }px, 0, 0)`,
      }}
      variants={variants}
      transition={{ duration: animating ? 0.2 : 0 }}
      animate={internalOpen ? 'true' : 'false'}
      onAnimationComplete={() => {
        setAnimating(() => false);
      }}
      onClick={() => {
        setActiveApp(url);
        navigate(`/#/${app?.name}`);
      }}
    >
      <div
        ref={ref}
        className='relative flex h-full w-full cursor-pointer items-center justify-center rounded-md border-8 transition-opacity duration-200'
        style={{
          background: `hsl(${(index * 360) / 20}, 100%, 30%)`,
          opacity: Math.abs(normalizedX) > 1.1 ? 0 : 1,
        }}
      >
        {/* <div className='absolute left-1/2 h-full w-px bg-white'></div> */}
        {image ? <img src={image} className='h-full w-full' /> : index}
      </div>
    </motion.div>
  );
};

export { AppImage };
