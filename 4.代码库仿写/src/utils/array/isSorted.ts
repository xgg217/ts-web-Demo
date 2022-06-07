/**
 * 用于检查数组是否已排序
 */

/** 示例
{
  var sorted = require('is-sorted')

  console.log(sorted([1, 2, 3]))
  // => true
  
  console.log(sorted([3, 1, 2]))
  // => false
  
  // supports custom comparators
  console.log(sorted([3, 2, 1], function (a, b) { return b - a }))
  // => true
}
 */


function defaultComparator (a:number, b:number) {
  return a - b
}

 const sorted = (arr:number[], fn = defaultComparator):boolean => {
  for(let i = 1; i < arr.length; i++) {
    if(fn(arr[i - 1], arr[i]) > 0) {
      return false;
    }
  }
  return true;
}

export default sorted
