const obj = {
  a: 'a',
  b: {
    c: {
      d: 'd',
      e: 'e'
    }
  },
  f: {
    g: {
      h: {
        i: 'i'
      }
    }
  }
}

function bl(obj: object) {
  let len = 1;
  const fn = (param: any | object, level = 0) => {
    if (Object.prototype.toString.call(param) === '[object Object]') {
      Object.values(param).forEach(item => {
        if (Object.prototype.toString.call(param) === '[object Object]') {
          fn(item, level + 1);
        } else {
          len = ((level + 1) > len) ? level + 1 : len;
        }
      })
    } else {
      len = (level > len) ? level : len;
    }
  }

  fn(obj);
  return len
}

console.log(bl(obj));