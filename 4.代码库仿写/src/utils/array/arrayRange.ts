/**
var range = require('array-range')
range(3)       // -> [ 0, 1, 2 ]
range(1, 4)    // -> [ 1, 2, 3 ]

array(start, end)
创建具有一定长度元素的新密集数组。 是包容性的，是排他性的。负值也有效，例如end-startstartendrange(-10, 10)

array(len)
创建一个包含多个元素（从零到 ） 的新密集数组。lenlen-1
如果未指定，则默认为零（空数组）。len
 */

/**
 * 创建一个包含多个元素（从零到 ） 的新密集数组。lenlen-1
 * @param len
 */
// function range(len:number):number[];
// function range(n1:number, n2:number):number[];

/**
 * 创建具有一定长度元素的新密集数组。 是包容性的，是排他性的。负值也有效，例如end-startstartendrange(-10, 10)
 * @param start 开始
 * @param end 结束
 * @returns 
 */
function range(start:number = 0, end?:number):number[] {
  if(start === 0) {
    return []
  }
  if(typeof(end) === 'undefined') {
    return setLenArr(start);
  }

  if(start >= end) {
    return [];
  }
  return setStartAndEndArr(start, end);
}

/**
 * 根据长度生成数组
 * @param len 
 * @returns 
 */
const setLenArr = (len:number):number[] => {
  const arr:number[] = [];
  for(let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
}

/**
 * 根据区间生成数组
 * @param start 
 * @param end 
 * @returns 
 */
const setStartAndEndArr = (start:number, end:number):number[] => {
  const arr:number[] = [];
  for(let i = start; i < end; i++) {
    arr.push(i);
  }
  return arr;
}

export default range;
