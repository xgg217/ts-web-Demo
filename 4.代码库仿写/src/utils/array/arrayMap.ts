/**

将对象键和值映射到数组中

const mapArray = require('map-array');
const obj = {
  giorgio: 'Bianchi',
  gino: 'Rossi'
};
console.log(mapArray(obj, (key, value) => key + ' ' + value));

 * 
 */

type func = (key:string, value:any)=>any
function mapArray(T:object, fun:func) {
  const arr = [];
  for(const [ key, val] of Object.entries(T)) {
    const value = fun(key, val);
    arr.push(value);
  }
  return arr;
}

export default mapArray;