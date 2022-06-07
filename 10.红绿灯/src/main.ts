import { circleArr, setStop } from './rgy';
import './style.css';

import type { IFun } from './type/IFun';


(async function () {
  const liArrEle = document.querySelectorAll('li');
  const countDownEle = document.querySelector('.count_down span');

  const countDownObj = {
    index: 0, // 倒计时
    ID: 0, // 倒计时 定时器ID
    isStop: false // 是否暂停
  };

  const stopEle = document.querySelector('.stop');
  // const startEle = document.querySelector('.start');


  /**
   * @description: 回调参数
   * @param {string} color 当前灯的颜色
   * @param {number} num 倒计时的时长
   * @return {*}
   */
  const getColor: IFun = (color: string, num: number) => {
    setBGC(color); // 设置背景色
    setCountDown(num); // 设置倒计时
  }

  // 设置背景色
  const setBGC = (color: string) => {
    liArrEle.forEach(item => {
      // 删除
      const eleColor = item.dataset.color;
      if (eleColor && item.classList.contains(eleColor)) {
        item.classList.remove(eleColor);
      }

      // 添加 class
      if (item.dataset.color === color) {
        item.classList.add(color);
      }
    })
  };

  /**
   * @description: 设置倒计时
   * @param {number} num 倒计时初始数字
   * @return {*}
   */
  const setCountDown = (num: number) => {
    countDownIndex = (num / 1000) - 1; // 为了显示0
    if (countDownEle) {
      countDownEle.textContent = (countDownIndex) + '';
    }
    countDownHandle();
  }

  // 倒计时定时器函数
  const countDownHandle = () => {
    const { index, ID, isStop } = countDownObj;
    if ((index < 0) || isStop) { return }
    clearTimeout(ID);
    countDownObj.ID = setTimeout(() => {
      countDownObj.index = index - 1;
      if (countDownEle) {
        countDownEle.textContent = index + '';
      }
      // 重复
      countDownHandle();
    }, 1000);
  }

  // 循环背景色
  const forLamp = async () => {
    const { ID } = countDownObj;
    for (const item of circleArr) {
      const isBool = await item(getColor)
      // 暂停操作
      if (!isBool) {
        clearTimeout(ID);
        return
      }
    }
    forLamp();
  }

  stopEle?.addEventListener('click', () => {
    setStop();
  })

  // 初始化
  const init = () => {
    forLamp();
  }

  init();

})();
