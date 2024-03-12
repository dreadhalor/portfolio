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
  SketchesIcon,
  SketchesScreenshot,
  HomepageScreenshot,
  HomepageIcon,
  SteeringTextIcon,
  GifsterIcon,
  DreadUiIcon,
  FallcrateIcon,
  FallcrateScreenshot,
} from '@repo/assets';

export const getAppUrl = (app?: PortfolioApp) => {
  const protocol = window.location.protocol;
  const prod = import.meta.env.PROD;
  if (!app?.url) return '';
  if (prod) return app.url;
  return `${protocol}//${window.location.hostname}:3000${app.url}`;
};

export const apps = [
  {
    name: 'homepage',
    url: '/home',
    github: 'https://github.com/dreadhalor/dreadfolio/tree/main/apps/home-page',
    icon: HomepageIcon,
    alt: 'Home',
    image: HomepageScreenshot,
    background: 'transparent',
    description: `Scott Hetrick's official portfolio homepage.`,
    achievements: true,
  },
  {
    name: 'enlight',
    url: '/enlight',
    github: 'https://www.github.com/dreadhalor/enlight',
    icon: EnlightIcon,
    alt: 'Enlight Icon',
    image: EnlightScreenshot,
    background: 'black',
    description: 'A relaxing playground of shine and shadow.',
    achievements: false,
  },
  {
    name: 'minesweeper',
    url: '/minesweeper',
    github: 'https://www.github.com/dreadhalor/minesweeper',
    icon: MinesweeperIcon,
    alt: 'Minesweeper Icon',
    image: MinesweeperScreenshot,
    background: 'rgb(31,47,134)',
    description: `Ittttttt's Minesweeper!`,
    achievements: true,
  },
  {
    name: 'pathfinder-visualizer',
    url: '/pathfinder-visualizer',
    github: 'https://www.github.com/dreadhalor/pathfinder-visualizer',
    icon: PathfinderVisualizerIcon,
    alt: 'Pathfinder Visualizer Icon',
    image: PathfinderVisualizerScreenshot,
    background: 'rgb(108,117,125)',
    description: 'A pathfinding visualizer, coded in React.',
    achievements: true,
  },
  {
    name: 'ascii-video',
    url: '/ascii-video',
    github: 'https://www.github.com/dreadhalor/ascii-video',
    icon: AsciiVideoIcon,
    alt: 'Matrix-Cam Icon',
    image: AsciiVideoScreenshot,
    background: 'black',
    description: 'Vanilla JS app using TensorFlow.js for person detection.',
    achievements: false,
  },
  {
    name: 'shareme',
    url: '/shareme',
    github: 'https://www.github.com/dreadhalor/shareme',
    icon: ShareMeIcon,
    alt: 'ShareMe Icon',
    image: ShareMeScreenshot,
    background: 'white',
    description: 'A Pinterest-inspired social media app.',
    achievements: true,
  },
  {
    name: 'fallcrate',
    url: '/fallcrate',
    github: 'https://www.github.com/dreadhalor/fallcrate',
    icon: FallcrateIcon,
    alt: 'Fallcrate Icon',
    image: FallcrateScreenshot,
    background: 'white',
    description:
      'A Dropbox-inspired full-stack web app for sharing and organizing files.',
    achievements: true,
  },
  {
    name: 'dread-ui',
    url: '/dread-ui',
    github: 'https://www.github.com/dreadhalor/dread-ui',
    icon: DreadUiIcon,
    alt: 'dread ui',
    image: DreadUiScreenshot,
    background: '#222425',
    description: 'A component library I use across my projects.',
    achievements: false,
  },
  {
    name: 'sketches',
    url: '/sketches',
    github: 'https://github.com/dreadhalor/dreadfolio/tree/main/apps/sketches',
    icon: SketchesIcon,
    alt: 'sketches',
    image: SketchesScreenshot,
    background: 'black',
    description: 'Various p5 sketches to play around with.',
    achievements: false,
  },
  {
    name: 'su-done-ku',
    url: '/su-done-ku',
    github: 'https://www.github.com/dreadhalor/su-done-ku',
    icon: SuDoneKuIcon,
    alt: 'su-done-ku',
    image: SuDoneKuScreenshot,
    background: '#242424',
    description: 'All other Sudoku solvers are worse than this one.',
    achievements: true,
  },
  {
    name: 'steering-text',
    url: '/steering-text',
    github: 'https://www.github.com/dreadhalor/steering-text',
    icon: SteeringTextIcon,
    alt: 'Steering Text',
    image: SteeringTextScreenshot,
    background: 'black',
    description: 'Steering behavior, demonstrated through text.',
    achievements: false,
  },
  {
    name: 'gifster',
    url: '/gifster',
    github: 'https://www.github.com/dreadhalor/gifster',
    icon: GifsterIcon,
    alt: 'gifster',
    image: GifsterScreenshot,
    background: 'white',
    description: `We're not GIPHY, but we do use their API.`,
    achievements: true,
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
