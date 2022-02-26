type Fn = (...args: any) => any;
function debounce<T extends Fn>(fn: T, delay: number) {
  let task: NodeJS.Timeout | null = null;
  return function (...args: Parameters<T>) {
    if (task) {
      clearTimeout(task);
    }
    task = setTimeout(() => {
      fn(args);
    }, delay);
  };
}

function throttle1<T extends Fn>(fn: T, delay: number) {
  let task: NodeJS.Timeout | null = null;
  return function (...args: Parameters<T>) {
    if (!task) {
      task = setTimeout(() => {
        task = null;
      }, delay);
      fn(args);
    }
  };
}
/**
 * 节流函数
 */
export const throttle = <T extends Function>(func: T, ms: number) => {
  let lastTime = Date.now();
  return new Proxy(func, {
    apply(target, thisArg, args) {
      const currrentTime = Date.now();
      if (currrentTime - lastTime >= ms) {
        lastTime = currrentTime;
        Reflect.apply(target, thisArg, args);
      }
    },
  }) as T;
};
