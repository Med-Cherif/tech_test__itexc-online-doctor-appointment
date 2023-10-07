/* eslint-disable @typescript-eslint/no-explicit-any */
export default function debounce(fn: any, delay = 400) {
  let timeout;

  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      fn.apply(this.context, this.args);
    }, delay);
  };
}
