import { useCallback, useEffect, useRef, useState } from 'react';

type Stat = 'idle' | 'startCount' | 'finish';

export const useCountdown = (seconds: number) => {
  const [count, setCount] = useState(seconds);
  const [stat, setStat] = useState<Stat>('idle');
  const countRef = useRef(seconds);
  useEffect(() => {
    countRef.current = count;
  }, [count]);
  const countDown = useCallback(() => {
    setTimeout(() => {
      if (countRef.current === 0) {
        setCount(seconds);
        countRef.current = seconds;
        setStat('finish');
      } else {
        setCount(countRef.current - 1);
        countDown();
      }
    }, 1000);
  }, [seconds]);

  const startCount = useCallback(() => {
    if (stat === 'startCount') return;
    setStat('startCount');
    countDown();
  }, [stat]);

  return {
    count,
    startCount,
    isFinish: stat === 'finish',
    isStartCount: stat === 'startCount',
    isIdle: stat === 'idle',
  };
};
