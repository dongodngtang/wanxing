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

/**
 * 获取操作系统版本
 */
 export const getOS = () => {
  const sUserAgent = navigator.userAgent;
  let isWin = navigator.platform == 'Win32' || navigator.platform == 'Windows';
  let isMac =
    navigator.platform == 'Mac68K' ||
    navigator.platform == 'MacPPC' ||
    navigator.platform == 'Macintosh' ||
    navigator.platform == 'MacIntel';
  if (isMac) return 'Mac';
  if (isWin) {
    let isWin2K =
      sUserAgent.indexOf('Windows NT 5.0') > -1 ||
      sUserAgent.indexOf('Windows 2000') > -1;
    if (isWin2K) return 'Win2000';
    let isWinXP =
      sUserAgent.indexOf('Windows NT 5.1') > -1 ||
      sUserAgent.indexOf('Windows XP') > -1;
    if (isWinXP) return 'WinXP';
    let isWin2003 =
      sUserAgent.indexOf('Windows NT 5.2') > -1 ||
      sUserAgent.indexOf('Windows 2003') > -1;
    if (isWin2003) return 'Win2003';
    let isWinVista =
      sUserAgent.indexOf('Windows NT 6.0') > -1 ||
      sUserAgent.indexOf('Windows Vista') > -1;
    if (isWinVista) return 'WinVista';
    let isWin7 =
      sUserAgent.indexOf('Windows NT 6.1') > -1 ||
      sUserAgent.indexOf('Windows 7') > -1;
    if (isWin7) return 'Win7';
    let isWin10 =
      sUserAgent.indexOf('Windows NT 10') > -1 ||
      sUserAgent.indexOf('Windows 10') > -1;
    if (isWin10) return 'Win10';
  }
  return 'other';
};