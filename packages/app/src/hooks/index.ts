import { useEffect, useState, useRef, useCallback } from 'react';

type Fn = (...args: any) => any;

/**
 * react hooks 防抖函数
 * @param value
 * @param delay
 * @returns
 */
export const useDebounce = <T>(value: T, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};

/**
 * react hooks 节流函数
 * @param fn
 * @param delay
 * @param dep
 * @returns
 */
export const useThrottle = <T extends Fn>(fn: T, delay?: number, dep = []) => {
  const { current } = useRef({ fn, timer: <NodeJS.Timeout | null>null });
  useEffect(() => {
    current.fn = fn;
  }, [fn]);

  return useCallback((...args: Parameters<T>) => {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        current.timer = null;
      }, delay);
      current.fn.call(this, ...args);
    }
  }, dep);
};
/**
 * 返回组件的挂载状态，如果还没挂载或者已经卸载，返回false，反之返回true
 * @returns
 */
export const useMountedRef = () => {
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  });
  return mountedRef;
};

export const useSafeDispatch = <T>(dispatch: (...args: T[]) => void) => {
  const mountedRef = useMountedRef();
  return useCallback(
    (...args: T[]) => (mountedRef.current ? dispatch(...args) : void 0),
    [dispatch, mountedRef],
  );
};
