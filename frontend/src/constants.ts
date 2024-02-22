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
  SuDoneKuIcon,
  SuDoneKuScreenshot,
  GifsterScreenshot,
  DreadUiScreenshot,
  SteeringTextScreenshot,
} from '@repo/assets';

export const getAppUrl = (app?: PortfolioApp) => {
  const protocol = window.location.protocol;
  const prod = import.meta.env.PROD;
  if (!app?.url) return '';
  if (prod) return app.url;
  return `${protocol}//${window.location.hostname}:3000${app.url}`;
};

export const apps = [
  // {
  //   name: 'test-child',
  //   url: '/test-child',
  //   icon: '',
  //   alt: 'Test App',
  //   image: '',
  //   background: 'bg-red-500',
  //   description: 'This is a test child app',
  // },
  {
    name: 'steering-text',
    url: '/steering-text',
    icon: '',
    alt: 'Steering Text',
    image: SteeringTextScreenshot,
    background: 'black',
    description: 'Steering behavior, demonstrated through text.',
  },
  {
    name: 'enlight',
    url: '/enlight',
    icon: EnlightIcon,
    alt: 'Enlight Icon',
    image: EnlightScreenshot,
    background: 'black',
    description: 'A relaxing playground of shine and shadow.',
  },
  {
    name: 'minesweeper',
    url: '/minesweeper',
    icon: MinesweeperIcon,
    alt: 'Minesweeper Icon',
    image: MinesweeperScreenshot,
    background: 'rgb(31,47,134)',
    description: `Ittttttt's Minesweeper!`,
  },
  {
    name: 'pathfinder-visualizer',
    url: '/pathfinder-visualizer',
    icon: PathfinderVisualizerIcon,
    alt: 'Pathfinder Visualizer Icon',
    image: PathfinderVisualizerScreenshot,
    background: 'rgb(108,117,125)',
    description: 'A pathfinding visualizer, coded in React.',
  },
  {
    name: 'ascii-video',
    url: '/ascii-video',
    icon: AsciiVideoIcon,
    alt: 'Matrix-Cam Icon',
    image: AsciiVideoScreenshot,
    background: 'black',
    description: 'Vanilla JS app using TensorFlow.js for person detection.',
  },
  {
    name: 'shareme',
    url: '/shareme',
    icon: ShareMeIcon,
    alt: 'ShareMe Icon',
    image: ShareMeScreenshot,
    background: 'rgb(20,20,20)',
    description: 'A Pinterest-inspired social media app.',
  },
  {
    name: 'dread-ui',
    url: '/dread-ui',
    icon: '',
    alt: 'dread ui',
    image: DreadUiScreenshot,
    background: 'rgb(31,47,134)',
    description: 'A component library I use across my projects.',
  },
  {
    name: 'sketches',
    url: '/sketches',
    icon: '',
    alt: 'sketches',
    image: '',
    background: 'black',
    description: 'Various p5 sketches to play around with.',
  },
  {
    name: 'su-done-ku',
    url: '/su-done-ku',
    icon: SuDoneKuIcon,
    alt: 'su-done-ku',
    image: SuDoneKuScreenshot,
    background: 'rgb(31,47,134)',
    description: 'All other Sudoku solvers are worse than this one.',
  },
  {
    name: 'gifster',
    url: '/gifster',
    icon: '',
    alt: 'gifster',
    image: GifsterScreenshot,
    background: 'rgb(31,47,134)',
    description: `We're not GIPHY, but we do use their API.`,
  },
] as const;
export type PortfolioApp = (typeof apps)[number];

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
