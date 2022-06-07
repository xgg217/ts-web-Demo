import type { IFun } from './type/IFun'

// 计算

const redTime = 4000; // 红灯显示时长
const greenTime = 2000; // 绿灯显示时长
const yellowTime = 3000; // 黄灯显示时长

const circle = {
  timeID: 0, // 定时器ID
  runData: {
    nowTime: 0, // 本次灯亮的持续时间
    isStop: false, // 是否暂停
    date: 0, // 时间戳
    state: '', // 当前灯的状态
    timeRemaining: 0 // 剩余时间--只有在暂停的时候才有用
  },
  // 绿灯
  green(fun: IFun) {
    // console.log('green');
    circle.runData.state = 'green';
    return delay(greenTime, 'green', fun);
  },

  // 黄灯
  yellow(fun: IFun) {
    // console.log('yellow');
    circle.runData.state = 'yellow';
    return delay(yellowTime, 'yellow', fun);
  },

  // 红灯
  red(fun: IFun) {
    // console.log('red');
    circle.runData.state = 'red';
    return delay(redTime, 'red', fun);
  },

  // 获取定时器ID
  getTime() {
    console.log(circle.timeID);
  },

  // 暂停红绿灯
  setStop() {
    // circle.runData.state = color;
    const { date, nowTime } = circle.runData;
    circle.runData.isStop = true;
    circle.runData.timeRemaining = nowTime - (Date.now() - date) / 1000;
    clearTimeout(circle.timeID); // 清楚定时器
  }
};

function delay(duration = 1000, color: string, fun: IFun): Promise<boolean> {
  return new Promise((resolve): void => {
    fun(color, duration);

    // 当前已经是暂停状态
    if (circle.runData.isStop) {
      resolve(false);
      return;
    }

    circle.timeID = setTimeout(() => {
      // 记录当前时间戳
      circle.runData.date = Date.now();
      circle.runData.state = color;
      circle.runData.nowTime = duration;
      // console.log(color);

      resolve(true);
    }, duration)
  })
}

const circleArr = [circle.green, circle.yellow, circle.red];
const setStop = circle.setStop;

export {
  circleArr,
  setStop
};

