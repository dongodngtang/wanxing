import { useCountdown } from '@/hooks/useCountdown';
import { useEffect, useState } from 'react';

const DAY_SECONDS = 24 * 60 * 60;
const HOUR_SECONDS = 60 * 60;
const MIN_SECONDS = 60;

const getTimeToken = (time: number) => {
  const day = Math.floor(time / DAY_SECONDS);
  time -= DAY_SECONDS * day;
  const hour = Math.floor(time / HOUR_SECONDS);
  time -= HOUR_SECONDS * hour;
  const min = Math.floor(time / MIN_SECONDS);
  time -= MIN_SECONDS * min;
  const seconds = time;
  return {
    day,
    hour,
    min,
    seconds,
  };
};

export const useFormatCountdown = (time: number, autostart?: boolean) => {
  const { count, ...rest } = useCountdown(time);

  const [overtime, setOvertime] = useState(false);

  const timeObj = getTimeToken(Math.abs(count));

  useEffect(() => {
    if (autostart) {
      rest.startCount();
    }
  }, []);

  useEffect(() => {
    if (count < 0) {
      setOvertime(true);
    }
  }, [count]);

  return {
    ...timeObj,
    ...rest,
    overtime,
  };
};
