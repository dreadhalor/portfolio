import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import randomRouter from '@repo/su-done-ku-backend/src/routes/random';

const app: Express = express();
const PORT: number = 3000;
// const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

// enable cors
app.use(cors());

// Middleware to serve static files
app.use(express.static('public'));

const rootDirectory = path.join(__dirname, '../../../..');

// Serve pathfinder-visualizer
app.use(
  '/pathfinder-visualizer',
  express.static(path.join(rootDirectory, 'apps/pathfinder-visualizer/dist')),
);

// Serve minesweeper
app.use(
  '/minesweeper',
  express.static(path.join(rootDirectory, 'apps/minesweeper/dist')),
);

// Serve enlight
app.use(
  '/enlight',
  express.static(path.join(rootDirectory, 'apps/enlight/dist')),
);

// Serve matrix-cam
app.use(
  '/ascii-video',
  express.static(path.join(rootDirectory, 'apps/ascii-video/dist')),
);

// Serve dread-ui
app.use(
  '/dread-ui',
  express.static(path.join(rootDirectory, 'packages/dread-ui/dist')),
);

// Serve test-child
app.use(
  '/test-child',
  express.static(path.join(rootDirectory, 'apps/test-child/dist')),
);

// Serve shareme
app.use(
  '/shareme',
  express.static(path.join(rootDirectory, 'apps/shareme/frontend/dist')),
);

// Serve su-done-ku
app.use(
  '/su-done-ku',
  express.static(path.join(rootDirectory, 'apps/su-done-ku/frontend/dist')),
);

app.use('/su-done-ku/api/random', randomRouter);

// Serve gifster
app.use(
  '/gifster',
  express.static(path.join(rootDirectory, 'apps/gifster/dist')),
);

// Serve portfolio
app.use(
  '/',
  express.static(path.join(rootDirectory, 'apps/portfolio/frontend/dist')),
);

app.use('*', (req: Request, res: Response) => {
  // Send a 404 page
  res.status(404).send('App not found');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
