/**
 * 返回一个数组，该数组仅包含第一个数组中的唯一值，方法是使用严格相等性进行比较从其他数组中排除所有值
  var diff = require('arr-diff');

  var a = ['a', 'b', 'c', 'd'];
  var b = ['b', 'c'];

  console.log(diff(a, b))
  //=> ['a', 'd']
 */
/**
 * 
 * @param a 
 * @param b 
 * @returns 返回第一个数组和其他数组之间的差异
 */
function diff(a:any[], b:any[]):any[] {
  const map = new Map();
  const arr:any[] = [];
  b.forEach(item => {
    map.set(item, 1);
  });

  a.forEach(val => {
    // 不存在
    if(!map.has(val)) {
      arr.push(val)
    }
  })

  return arr;
}

export default diff;
