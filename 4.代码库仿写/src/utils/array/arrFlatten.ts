/**
 * 递归平化一个或多个数组
 */

/** 示例
{
  var flatten = require('arr-flatten');

  flatten(['a', ['b', ['c']], 'd', ['e']]);
  //=> ['a', 'b', 'c', 'd', 'e']
}
 */
const arrFlatten = <T = any>(arr:any[]):T[] => {
  const newArr:T[] = [];
  arr.forEach(item => {
    if(Array.isArray(item)) {
      // 递归循环
      const arr = arrFlatten(item);
      newArr.push(...arr)
    } else {
      newArr.push(item);
    }
  })
  return newArr;
}

export default arrFlatten;
