/**
 * Promise版本定时器
 */
const sleepPromise = function sleepPromise(n:number = 1000) {
  return new Promise<void>(res => {
    setTimeout(() => {
      res();
    }, n);
  });
};

export default sleepPromise;