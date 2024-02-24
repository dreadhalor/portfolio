import { cn } from '@repo/utils';
import { useEffect, useState } from 'react';

const Home = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => {
      setState(1);
    });
  }, []);

  return (
    <div className='relative flex h-full w-full border'>
      <h1
        className={cn(
          'absolute left-1/2 top-full -translate-x-1/2 transition-[top] duration-300',
          state === 1 && 'top-1/2 -translate-y-1/2',
        )}
      >
        Hi, I'm Scott
      </h1>
    </div>
  );
};

export { Home };
