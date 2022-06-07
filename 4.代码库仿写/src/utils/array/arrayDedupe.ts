/**
 * 从数组中删除重复项
 */

/** 示例
{
  var dedupe = require('dedupe')

  // 基元类型
  var a = [1, 2, 2, 3]
  var b = dedupe(a)
  console.log(b)

  //result: [1, 2, 3]

  // 复杂类型
  var dedupe = require('dedupe')

  var aa = [{a: 2}, {a: 1}, {a: 1}, {a: 1}]
  var bb = dedupe(aa)
  console.log(bb)

  //result: [{a: 2}, {a: 1}]

  具有自定义哈希器的复杂类型类型
  var dedupe = require('dedupe')

  var aaa = [{a: 2, b: 1}, {a: 1, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}]
  var bbb = dedupe(aaa, value => value.a)
  console.log(bbb)

  //result: [{a: 2, b: 1}, {a: 1,b: 2}]
}
 */

interface IObj {
  [p:string]:1
}

const arrayDedupe = (arr:any[]):any[] => {
  const obj:IObj = {};

  arr.forEach(item => {
    const str = JSON.stringify(item);
    if(!obj[str]) {

      obj[str] = 1;
    }
  });

  const newArr= [];
  for(const key in obj) {
    newArr.push(JSON.parse(key));
  }
  return newArr;
}

export default arrayDedupe;
