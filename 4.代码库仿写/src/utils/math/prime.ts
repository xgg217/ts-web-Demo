/**
 * 是否为素数
 */
const isPrime = function isPrime(n:number):boolean {

  if(n <= 1) {
    return false;
  }

  if(n === 2) {
    return true;
  }

  if((n % 2) === 0) {
    return false
  }

  for (let index = 3; index < Math.sqrt(n); index += 2) {
    if((n % index) === 0) {
      return false;
    }
  }
  return true;
};

/**
 * 输出所有素数
 */
const getPrime = function getPrime(n:number):number[] {
  const set = new Set<number>();
  let flage: 0 | 1 = 0
  if(n <= 1) {
    return [];
  }

  if(n === 2) {
    return [2]
  }
  if(n <= 4) {
    return [2, 3]
  }
  set.add(2);
  set.add(3);

  for (let i = 5; i <= n; i ++) {
    for (let j = 2; j <= Math.sqrt(i); j ++) {
      if((i % j) === 0) {
        flage = 1;
        break;
      } else {
        flage = 0;
      }
    }
    if(flage === 0) {
      set.add(i);
    }
  }

  return [...set];
}



export {
  isPrime,
  getPrime
}

