/**
 * 去除数组的假值
 * // 例如
 * const obj = {
 *   a: null,
 *   b: false,
 *   c: true,
 *   d: 0,
 *   e:1,
 *   f: "",
 *   g: "a",
 *   h: [null, false, "", true, 1, "a"],
 *   i: { j: 0, k: false, l: "a" }
 * }
 * 
 * 想要得到的结果
 * {c: true, e: 1, g: "a", h: [true, 1, "a"], i : { l: 'a' }}
 */

export interface IObj {
  [k: string]: any
}

const compactObject = function compactObject(data: IObj | any[]): IObj {
  // const val = Array.isArray(data) ? data.filter(Boolean) : data;
  let val:IObj | any[] = data;
  if(Array.isArray(data)) {
    val = data.filter(item => {
      return Boolean(item);
    })
  }

  console.log(Object.keys(val));
  console.log(Object.keys(val));

  

  return Object.keys(val).reduce((acc, key) => {
    console.log(val);
    console.log('111');
    console.log(key);
    console.log('222');
    if(Array.isArray(val)) {
      acc
    }
    // const value = val[key];
    // if(value) {
    //   acc[key] = value;
    // }
    // return acc
    return 1;
  }, Array.isArray(data) ? ([] as any) : ({} as IObj));

  // let newObj: IObj;
  // let isArr = false;
  // if (Array.isArray(obj)) {
  //   // 数组
  //   isArr = true;
  //   newObj = [];
  // } else {
  //   // 对象
  //   newObj = {};
  // }

  // const arr = Object.entries(obj);

  // for (const [key, val] of arr) {
  //   // 数组
  //   if (Array.isArray(val)) {
  //     const newArr = val.filter(item => {
  //       return !!item;
  //     });
  //     if (isArr) {
  //       (newObj as any[]).push(newArr)
  //     } else {
  //       newObj[key] = newArr;
  //     }
  //     continue;

  //   }

  //   // 对象
  //   if (Object.prototype.toString.call(val) === '[object Object]') {
  //     const nObj: IObj = {};
  //     for (const item in val) {
  //       if (val[item]) {

  //         nObj[item] = val[item];
  //       }
  //     }
  //     if (isArr) {
  //       (newObj as any[]).push(nObj)
  //     } else {
  //       newObj[key] = nObj;
  //     }
  //     continue;
  //   }

  //   if (!val) {
  //     // 假值
  //     continue;
  //   }

  //   // 常规值
  //   if (isArr) {
  //     (newObj as any[]).push(val)
  //   } else {
  //     newObj[key] = val;
  //   }

  // }

  // return newObj;
}

// console.log(compactObject(obj));

export {
  compactObject
}


