/**
var remove = require('unordered-array-remove')

var list = ['a', 'b', 'c', 'd', 'e']
remove(list, 2) // remove 'c'
console.log(list) // returns ['a', 'b', 'e', 'd'] (no 'c')
 */

function remove (arr:any[], index:number) {
  const len = arr.length;
  if ((index >= len) || (index < 0)){
    return '';
  }

  for(let i = 0; i < len; i++){
    if(index === i) {
      return arr[i];
    }
  }
}
export default remove;