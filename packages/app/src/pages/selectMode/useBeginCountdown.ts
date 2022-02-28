import { useCountdown } from '@/hooks/useCountdown';

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

export const useBeginCountdown = (time: number) => {
  const { count, ...rest } = useCountdown(time);
  const timeObj = getTimeToken(count);
  return {
    ...timeObj,
    ...rest,
  };
};
