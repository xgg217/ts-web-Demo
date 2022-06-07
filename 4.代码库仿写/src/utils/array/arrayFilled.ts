/**
 * 
返回填充了指定输入的数组

import filledArray from 'filled-array';

filledArray('x', 3);
//=> ['x', 'x', 'x']

filledArray(0, 3);
//=> [0, 0, 0]

filledArray(index => {
  return (++index % 3 ? '' : 'Fizz') + (index % 5 ? '' : 'Buzz') || index;
}, 15);
//=> [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
 

*/

function filledArray(fillValue:unknown, count:number = 1):any[] {
  const arr = [];
  // 传入的是函数
  if(typeof(fillValue) === 'function') {
    for(let i = 0; i < count; i++) {
      const val = fillValue(i);
      arr.push(val);
    }
    return arr;
  }

  
  for(let i = 0; i < count; i++) {
    arr.push(fillValue);
  }
  return arr;
};

export default filledArray;


