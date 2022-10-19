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