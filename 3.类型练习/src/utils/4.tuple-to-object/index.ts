// ts 实现
/**
 * ts 实现
 *  1. 返回一个对象
 *  2. 遍历数组
 */
{
  const tuple = ['xgg', '1', 2] as const;

  // type r = typeof tuple; // type r = readonly ["xgg", 1]

  // type TupleToObject<T extends readonly any[]> = {
  //   [P in keyof T]: P // key 值是 数组的索引
  // }

  // // type a = TupleToObject<typeof tuple>; // type a = number[]

  type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]]: P // key 值是 数组的值
  }

  type a = TupleToObject<typeof tuple>; // type a = number[]
  // type a = {
  //   xgg: "xgg";
  //   1: "1";
  // 2: 2;
  // }
}

// js 实现
{
  const tuple = ['xgg', '1'];

  interface IObj {
    [p: string]: string
  }

  const tupleToObject = function tupleToObject(arr:string[]):IObj {
    const obj:IObj = {};
    arr.forEach(item => {
      obj[item] = item;
    });
    return obj;
  }
}