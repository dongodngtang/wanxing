import { useCallback, useEffect, useRef, useState } from 'react';
import { useLatest } from './useLatest';

enum Status {
  idle,
  startCount,
  finish,
}

export const useCountdown = (seconds: number) => {
  const [count, setCount] = useState(seconds);
  const [stat, setStat] = useState<Status>(Status.idle);
  const timer = useRef<NodeJS.Timeout>();

  const countRef = useLatest(count);

  useEffect(() => {
    return () => timer.current && clearTimeout(timer.current);
  }, []);

  const countDown = useCallback(() => {
    timer.current = setInterval(() => {
      if (countRef.current === 0) {
        timer.current && clearTimeout(timer.current);
        setCount(0);
        setStat(Status.finish);
      } else {
        setCount(countRef.current - 1);
      }
    }, 1000);
  }, [seconds]);

  const startCount = useCallback(
    (newSeconds?: number) => {
      if (stat === Status.startCount && timer.current) {
        clearInterval(timer.current);
      }
      // countRef.current = seconds;
      setStat(Status.startCount);
      newSeconds = newSeconds ?? seconds;
      setCount(seconds);
      countDown();
    },
    [setStat, countDown, stat],
  );

  return {
    count,
    startCount,
    isFinish: stat === Status.finish,
    isStartCount: stat === Status.startCount,
    isIdle: stat === Status.idle,
  };
};
