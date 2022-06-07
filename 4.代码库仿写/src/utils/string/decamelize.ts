
/**
 * 字符串分割
 */
interface IOptions {
  separator?:string;
  preserveConsecutiveUppercase?: boolean;
}

/**
 * 
 * @param str 字符串
 * @param obj { separator, preserveConsecutiveUppercase } separator 默认值 preserveConsecutiveUppercase: 默认值 false
 * @returns 
 */
const decamelize = function decamelize(str: string, obj?: IOptions):string {

  const data = {
    separator: obj?.separator ?? '_',
    preserveConsecutiveUppercase: obj?.preserveConsecutiveUppercase ?? false
  }

  const reg = /([A-Z]{1,})/g;

  return str.replace(reg, function(str, $) {
    if(!data.preserveConsecutiveUppercase) {
      return data.separator + str.toLocaleLowerCase().split('').join(data.separator);
    }

    const arr = str.toLocaleLowerCase().split('');
    if(arr.length >= 2) {
      arr[0] = arr[0].toLocaleUpperCase();
    }
    return data.separator + arr.join(data.separator)
  });
};

// 示例
decamelize('unicornRRainbow');
// unicorn_r_rainbow

decamelize('unicornRRainbow', { separator: '**' });
// unicorn**r**rainbow

decamelize('unicornRRainbow', { separator: '**', preserveConsecutiveUppercase: false });
// unicorn**r**rainbow

decamelize('unicornRRainbow', { separator: '**', preserveConsecutiveUppercase: true });
// unicorn**R**rainbow

export {
  decamelize
}


