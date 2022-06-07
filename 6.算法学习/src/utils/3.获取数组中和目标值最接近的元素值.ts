// 数组中找到与目标值最接近的数字
// const arr = [1, 3, 5, 6, 7];
// target = 7; --> 6
// target = 3; --> 3

// 方法1
// 数组拆分
export default function setSplitting(arr: number[], target: number) {
  const minArr: number[] = []; // 比目标值小
  const maxArr: number[] = []; // 比目标值大

  arr.forEach(item => {
    if (item >= target) {
      maxArr.push(item);
    } else {
      minArr.push(item);
    }
  });

  // 重新排序
  minArr.sort((a, b) => {
    return a - b;
  });
  maxArr.sort((a, b) => {
    return a - b;
  });

  // minArr 最后一位与 target做对比
  // maxArr 第一位 与 target做对比
  const mini = Math.abs(target - minArr[minArr.length - 1]);
  const max = Math.abs(maxArr[0] - target);

  console.log(minArr);
  console.log(maxArr);
  if (mini > max) {
    console.log(maxArr[0]);

  } else {

    console.log(minArr[minArr.length - 1]);

  }


}
