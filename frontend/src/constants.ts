import {
  AsciiVideoIcon,
  AsciiVideoScreenshot,
  EnlightIcon,
  EnlightScreenshot,
  MinesweeperIcon,
  MinesweeperScreenshot,
  PathfinderVisualizerIcon,
  PathfinderVisualizerScreenshot,
  ShareMeIcon,
  ShareMeScreenshot,
} from '@repo/assets';

export const apps = [
  {
    name: 'test-child',
    url: '/test-child',
    devUrl: '',
    icon: '',
    alt: 'Test App',
    image: '',
    background: 'bg-red-500',
    description: 'This is a test child app',
  },
  {
    name: 'enlight',
    url: '/enlight',
    devUrl: 'https://dreadhalor.github.io/enlight/',
    icon: EnlightIcon,
    alt: 'Enlight Icon',
    image: EnlightScreenshot,
    background: 'black',
    description: 'A simple, elegant, and modern web browser.',
  },
  {
    name: 'minesweeper',
    url: '/minesweeper',
    devUrl: 'https://dreadhalor.github.io/minesweeper/',
    icon: MinesweeperIcon,
    alt: 'Minesweeper Icon',
    image: MinesweeperScreenshot,
    background: 'rgb(31,47,134)',
    description: 'A classic game of Minesweeper.',
  },
  {
    name: 'pathfinder-visualizer',
    url: '/pathfinder-visualizer',
    devUrl: 'https://dreadhalor.github.io/pathfinder-visualizer/',
    icon: PathfinderVisualizerIcon,
    alt: 'Pathfinder Visualizer Icon',
    image: PathfinderVisualizerScreenshot,
    background: 'rgb(108,117,125)',
    description: 'A visualizer for pathfinding algorithms.',
  },
  {
    name: 'ascii-video',
    url: '/ascii-video',
    devUrl: '',
    icon: AsciiVideoIcon,
    alt: 'Matrix-Cam Icon',
    image: AsciiVideoScreenshot,
    background: 'black',
    description: 'A webcam that renders video as ASCII.',
  },
  {
    name: 'shareme',
    url: '/shareme',
    devUrl: 'https://dreadhalor.github.io/shareme/',
    icon: ShareMeIcon,
    alt: 'ShareMe Icon',
    image: ShareMeScreenshot,
    background: 'rgb(20,20,20)',
    description: 'A simple, elegant, and modern web browser.',
  },
  {
    name: 'dread-ui',
    url: '/dread-ui',
    devUrl: '',
    icon: '',
    alt: 'dread ui',
    image: '',
    background: 'rgb(31,47,134)',
    description: 'A simple, elegant, and modern web browser.',
  },
] as const;

export const appIconSizeSmall = 30;
export const appIconSizeLarge = 80;
export const appIconJumpTopBound = 160;
export const selectedAppIconMarginLarge = 20;
export const selectedAppIconMarginSmall = 8;
export const perspective = 500;
export const appSnapSpaceSize = 120;
export const maxNavbarWidth = 800;

export const navbarMargin = 10; // margin between navbar & the side of the screen
// very mathy value to create the navbar margin via perspective
export const getK = (iconSize: number, parentWidth: number) => {
  const excess = navbarMargin + iconSize + selectedAppIconMarginLarge;
  const k = perspective / Math.pow(parentWidth - excess, 2);
  return k;
};
