/**
 * 算法 数组中n个连续元素的最大和
 * [2,5,3,4,6] 连续2个 --> 10
 * [2,5,3,4,6] 连续3个 --> 13
 */
// export { }

/**
 * 实现1
 */

const arr = [10, 2, 5, 3, 4, 6];

// console.log(newArr);

// 重组数组
/**
 * 
 * @param arr 
 * @param n 连续的个数
 * @returns 
 */
export default function setRecombinationArr(arr: number[], n = 2) {
  const newArr: number[][] = []; // 存储所有数组的组合
  // const n = 3; // 连续的个数
  const len = arr.length;
  // 获取所有组合
  for (let i = 0; i < len; i++) {
    if ((i + n) > len) {
      break;
    }
    const list = arr.slice(i, i + n);
    newArr.push(list);
  }
  let maxVal = getArrSum(newArr[0]);
  let ind = 0;
  newArr.forEach((item, index) => {
    if (index === 0) { return; }
    const sun = getArrSum(item);
    console.log(sun);

    if (sun > maxVal) {
      maxVal = sun;
      ind = index;
    }
  });
  return {
    val: maxVal,
    arr: newArr[ind]
  }
}

// 获取数组之和
function getArrSum(arr: number[]) {
  return arr.reduce((pre, item) => {
    return pre + item;
  }, 0);
}


