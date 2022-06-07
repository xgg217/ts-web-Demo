/**

如果数组中存在值，则返回 true。比使用 indexOf 更快，并且不会在空值上爆炸

var inArray = require('in-array');
console.log(inArray(['a', 'b', 'c'], 'a'));
//=> true

console.log(inArray(null, 'a'));
//=> false

console.log(inArray(null));
//=> false

*/

function inArray(arr:any[], str:any) {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        if(arr[i] === str) {
            return true;
        }
    }
    return false;
}

export default inArray;