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
  HermitcraftHornsIcon,
  HermitcraftHornsScreenshot,
  DredgedUpIcon,
  DredgedUpScreenshot,
  // IntroIcon,
  // IntroScreenshot,
  RootBeerReviewsIcon,
  RootBeerReviewsScreenshot,
} from '@repo/assets';

export const getAppUrl = (app?: PortfolioApp, external = false) => {
  if (external) return app?.url;
  const protocol = window.location.protocol;
  const prod = import.meta.env.PROD;
  if (!app?.url) return '';
  if (prod) return app.url;
  return `${protocol}//${window.location.hostname}:3000${app.url}`;
};

export const apps = [
  // {
  //   id: 'intro',
  //   name: 'Intro',
  //   url: '/',
  //   github: 'https://github.com/dreadhalor/portfolio',
  //   icon: IntroIcon,
  //   alt: 'Intro Icon',
  //   image: IntroScreenshot,
  //   background: 'black',
  //   description: `You're right, that WAS a pretty cool intro.`,
  //   achievements: false,
  //   external: false,
  //   directUrl: true,
  // },
  {
    id: 'home',
    name: 'Homepage',
    url: '/home',
    github: 'https://github.com/dreadhalor/dreadfolio/tree/main/apps/home-page',
    icon: HomepageIcon,
    alt: 'Home',
    image: HomepageScreenshot,
    background: 'transparent',
    description: `Scott Hetrick's official portfolio homepage.`,
    achievements: true,
    external: false,
    directUrl: false,
  },
  {
    id: 'hermitcraft-horns',
    name: 'HermitCraft Horns',
    url: 'https://hermitcraft-horns.com',
    github: 'https://www.github.com/dreadhalor/hermitcraft-horns',
    icon: HermitcraftHornsIcon,
    alt: 'Hermitcraft Horns Icon',
    image: HermitcraftHornsScreenshot,
    background: 'hsl(224,100%,73%)',
    description: `An app for making & sharing audio clips of Hermitcraft videos. Currently receives 5,000 requests per day.`,
    achievements: false,
    external: true,
    directUrl: false,
  },
  {
    id: 'enlight',
    name: 'Enlight',
    url: '/enlight',
    github: 'https://www.github.com/dreadhalor/enlight',
    icon: EnlightIcon,
    alt: 'Enlight Icon',
    image: EnlightScreenshot,
    background: 'black',
    description: 'A relaxing playground of shine and shadow.',
    achievements: false,
    external: false,
    directUrl: false,
  },
  {
    id: 'dredged-up',
    name: 'DredgedUp',
    url: 'https://dredgedup.com',
    github: 'https://www.github.com/dreadhalor/dredge',
    icon: DredgedUpIcon,
    alt: 'Dredged Up Icon',
    image: DredgedUpScreenshot,
    background: 'black',
    description: `A companion app for the game Dredge that uses a bin-packing algorithm to optimally pack your spatial inventory for you.`,
    achievements: false,
    external: true,
    directUrl: false,
  },
  {
    id: 'minesweeper',
    name: 'Minesweeper',
    url: '/minesweeper',
    github: 'https://www.github.com/dreadhalor/minesweeper',
    icon: MinesweeperIcon,
    alt: 'Minesweeper Icon',
    image: MinesweeperScreenshot,
    background: 'rgb(31,47,134)',
    description: `Ittttttt's Minesweeper!`,
    achievements: true,
    external: false,
    directUrl: false,
  },
  {
    id: 'root-beer-reviews',
    name: 'Root Beer Reviews',
    url: 'https://summit.scottjhetrick.com',
    github: 'https://www.github.com/dreadhalor/root-beer-reviews',
    icon: RootBeerReviewsIcon,
    alt: 'Root Beer Reviews Icon',
    image: RootBeerReviewsScreenshot,
    background: 'rgb(249,250,251)',
    description: `A place to review and discover new root beers.`,
    achievements: false,
    external: true,
    directUrl: false,
  },
  {
    id: 'pathfinder-visualizer',
    name: 'Pathfinder Visualizer',
    url: '/pathfinder-visualizer',
    github: 'https://www.github.com/dreadhalor/pathfinder-visualizer',
    icon: PathfinderVisualizerIcon,
    alt: 'Pathfinder Visualizer Icon',
    image: PathfinderVisualizerScreenshot,
    background: 'rgb(108,117,125)',
    description: 'A pathfinding visualizer, coded in React.',
    achievements: true,
    external: false,
    directUrl: false,
  },
  {
    id: 'ascii-video',
    name: 'Matrix-Cam',
    url: '/ascii-video',
    github: 'https://www.github.com/dreadhalor/ascii-video',
    icon: AsciiVideoIcon,
    alt: 'Matrix-Cam Icon',
    image: AsciiVideoScreenshot,
    background: 'black',
    description: 'Vanilla JS app using TensorFlow.js for person detection.',
    achievements: false,
    external: false,
    directUrl: false,
  },
  {
    id: 'shareme',
    name: 'ShareMe',
    url: '/shareme',
    github: 'https://www.github.com/dreadhalor/shareme',
    icon: ShareMeIcon,
    alt: 'ShareMe Icon',
    image: ShareMeScreenshot,
    background: 'white',
    description: 'A Pinterest-inspired social media app.',
    achievements: true,
    external: false,
    directUrl: false,
  },
  {
    id: 'fallcrate',
    name: 'Fallcrate',
    url: '/fallcrate',
    github: 'https://www.github.com/dreadhalor/fallcrate',
    icon: FallcrateIcon,
    alt: 'Fallcrate Icon',
    image: FallcrateScreenshot,
    background: 'white',
    description:
      'A Dropbox-inspired full-stack web app for sharing and organizing files.',
    achievements: true,
    external: false,
    directUrl: false,
  },
  {
    id: 'dread-ui',
    name: 'DreadUI',
    url: '/dread-ui',
    github: 'https://www.github.com/dreadhalor/dread-ui',
    icon: DreadUiIcon,
    alt: 'dread ui',
    image: DreadUiScreenshot,
    background: '#222425',
    description:
      'My personal component library I created to use across my projects.',
    achievements: false,
    external: false,
    directUrl: false,
  },
  {
    id: 'sketches',
    name: 'p5.js Sketches',
    url: '/sketches',
    github: 'https://github.com/dreadhalor/dreadfolio/tree/main/apps/sketches',
    icon: SketchesIcon,
    alt: 'sketches',
    image: SketchesScreenshot,
    background: 'black',
    description: 'Various p5 sketches to play around with.',
    achievements: false,
    external: false,
    directUrl: false,
  },
  {
    id: 'su-done-ku',
    name: 'Su-Done-Ku',
    url: '/su-done-ku',
    github: 'https://www.github.com/dreadhalor/su-done-ku',
    icon: SuDoneKuIcon,
    alt: 'su-done-ku',
    image: SuDoneKuScreenshot,
    background: '#242424',
    description: 'All other Sudoku solvers are worse than this one.',
    achievements: true,
    external: false,
    directUrl: false,
  },
  {
    id: 'steering-text',
    name: 'Steering Text',
    url: '/steering-text',
    github: 'https://www.github.com/dreadhalor/steering-text',
    icon: SteeringTextIcon,
    alt: 'Steering Text',
    image: SteeringTextScreenshot,
    background: 'black',
    description: 'Steering behavior, demonstrated through text.',
    achievements: false,
    external: false,
    directUrl: false,
  },
  {
    id: 'gifster',
    name: 'Gifster',
    url: '/gifster',
    github: 'https://www.github.com/dreadhalor/gifster',
    icon: GifsterIcon,
    alt: 'gifster',
    image: GifsterScreenshot,
    background: 'white',
    description: `We're not GIPHY, but we do use their API.`,
    achievements: true,
    external: false,
    directUrl: false,
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
