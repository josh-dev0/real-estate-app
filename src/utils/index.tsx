export * from './dom';

/**
 * @name debounce
 * @referred https://stackoverflow.com/a/59104900/9644424
 */
export const debounce = (n: number, fn: (...params: any[]) => any, immed: boolean = false) => {
  let timer: any = undefined;

  return function (this: any, ...args: any[]) {
    if (timer === undefined && immed) {
      fn.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), n);
    return timer;
  }
};

/**
 * @name sleep
 * @description sleep for the give time(unit: ms)
 */
export const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  })
}

export const formatNumber = (val: any): string => {
  return parseInt(val as string).toLocaleString();
}

export const random = (min: number, max: number): number => {
  return min + Math.floor(Math.random() * (max - min));
}

export function toggleInArray<T>(array: T[] | undefined, item: T): T[] {
  if (!array) return [item];
  return array.includes(item)
    ? array.filter((it, i) => array.indexOf(item) !== i)
    : [...array, item];
}

export const toCamelcase = (val: string) => val.charAt(0).toUpperCase() + val.substring(1, val.length);