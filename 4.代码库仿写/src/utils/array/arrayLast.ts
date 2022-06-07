/**
 * 获取数组中的最后一个或最后 n 个元素
 */

/** 示例
{
  var last = require('array-last');

  last(['a', 'b', 'c', 'd', 'e', 'f']);
  //=> 'f'

  last(['a', 'b', 'c', 'd', 'e', 'f'], 1);
  //=> 'f'

  last(['a', 'b', 'c', 'd', 'e', 'f'], 3);
  //=> ['d', 'e', 'f']
}
 */

const arrayLast = (arr:any[], n = -1):any[] => {
  let index = (n <= 0) ? -1 : -n;
  return arr.slice(index);
}

export default arrayLast;
