
/** 
import hirestime from 'hirestime'
setTimeout(_ => {
    //returns the elapsed milliseconds
    console.log(getElapsed()) // 1002.83
}, 1000)

setTimeout(_ => {
  //returns the elapsed seconds
  console.log(getElapsed.s()) // 1.01
  console.log(getElapsed.seconds()) // 1.01

  //returns the elapsed milliseconds
  console.log(getElapsed.ms()) // 1012.26
  console.log(getElapsed.milliseconds()) // 1012.46

  //returns the elapsed nanoseconds
  console.log(getElapsed.ns()) // 1012678900
  console.log(getElapsed.nanoseconds()) // 1012678900
}, 1000);
*/

/**
 * 
 */

interface Elapsor {
  startedAt: () => number; // 开始
  (): number // 默认调用
  seconds(): number // 秒
  s(): number // 秒
  milliseconds(): number // 毫秒
  ms(): number // 毫秒
  microseconds(): number // 微秒
  us(): number // 微秒
  nanoseconds(): number // 纳秒
  ns(): number // 纳秒
}

// node 环境处理
const hrTimeToMillis = (hrtime: [number, number]) => hrtime[0] * 1e3 + hrtime[1] / 1e6

// 保留两位小数
const round = (number: number) => Number(number.toFixed(2))

const  getElapsor = (start:number, getTime: () => number):Elapsor => {
  const elapsor:Elapsor = () => round(getTime());

  elapsor.startedAt = () => start;
  elapsor.seconds = () => round(elapsor() / 1000);
  elapsor.s = () => round(elapsor() / 1000);
  elapsor.milliseconds = () => round(elapsor());
  elapsor.ms = () => round(elapsor());
  elapsor.microseconds = () => round(elapsor() * 1000);
  elapsor.us = () => round(elapsor() * 1000);
  elapsor.nanoseconds = () => round(elapsor() * 1e6);
  elapsor.ns = () => round(elapsor() * 1e6);

  return elapsor;
}

// 浏览器 优先 专用
const hiresTimeBrowserPerformance = () => {
  const start = window.performance.now();
  return getElapsor((start), () =>  window.performance.now() - start);
};

// 最后的选择
const hiresTimeBrowserDate  = () => {
  const start = Date.now();
  return getElapsor(start, () =>  Date.now() - start);
};


// Node 专用
const hirestimeNode = () => {
  const start = process.hrtime();
  return getElapsor(hrTimeToMillis(start), () => hrTimeToMillis(process.hrtime(start)));
};


function hirestime() {
  // Node 环境
  if(typeof(process) !== 'undefined' && process.hrtime) {
    return hirestimeNode();
  }

  // 浏览器 环境1
  if(typeof(window) !== 'undefined' && window.performance) {
    return hiresTimeBrowserPerformance();
  }

  // 最后的选择
  return hiresTimeBrowserDate();
}

export default hirestime;


