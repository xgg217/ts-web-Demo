/**
 * 获取数组的第一个元素或前 n 个元素
 */

/** 示例
{
  var first = require('array-first');

  first(['a', 'b', 'c', 'd', 'e', 'f']);
  //=> 'a'

  first(['a', 'b', 'c', 'd', 'e', 'f'], 1);
  //=> 'a'

  first(['a', 'b', 'c', 'd', 'e', 'f'], 3);
  //=> ['a', 'b', 'c']
}
 */

/**
 * 
 * @param arr 
 * @param n 
 * @returns 
 */
const getFirstArr = (arr:any[], n = 1):any[] => {
  // 处理 n <= 0 的情况
  let index = (n <= 0) ? 1 : n;

  return arr.slice(0, index);
}

export default getFirstArr;
