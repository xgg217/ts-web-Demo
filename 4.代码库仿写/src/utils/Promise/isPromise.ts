/**
 * 是否是 Promise
 */
const isPromise = function isPromise(obj: any ):boolean {
  if(!obj) {
    return false;
  }

  if((typeof(obj) === 'object') && (typeof(obj?.then) === 'function')) {
    return true
  }

  return false;
};

export {
  isPromise
}
