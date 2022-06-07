/**
 * 
 */

interface IFulfilledObject {
  [str:string]:any
}

const promiseAllProps = function promiseAllProps(obj: object) {
  return Promise.all(Object.values(obj)).then(res => {
    Object.keys(obj).reduce((fulfilledObject:IFulfilledObject, key, index) => {
      // fulfilledObject[key] = res[index];
      console.log(res);
      
      fulfilledObject[key] = res[index];

      return fulfilledObject;
    }, {});
  })
}

export default promiseAllProps;