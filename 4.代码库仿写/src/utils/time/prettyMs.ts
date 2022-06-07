/**
 * 根据数值转成日期格式
 */

import c from "../../a";

interface IOptions {
  secondsDecimalDigits: number; // 秒小数点后显示的位数 默认1
  millisecondsDecimalDigits: number; // 默认0 秒小数点后显示的位数 
  keepDecimalsOnWholeSecondsL: boolean; // 默认false 是否保持毫秒为整秒  13s -->13.0s
  compact: boolean; // 默认 false 仅仅显示一个单位 1h 10m --> 1h
  unitCount: number; // 默认 Infinity。要显示的单元数。覆盖 compact:true
  verbose: boolean; // 默认 false。 使用全长单位。 5h 1m 45s  --> 5 hours 1 minute 45 seconds
  separateMilliseconds: boolean; // 默认 false。分别显示毫秒。这意味着它们不会包含在秒的小数部分
  formatSubMilliseconds: boolean; // 默认 false。显示微秒和纳秒
  colonNotation: boolean; // 默认 false。  5h 1m 45s  -->5:01:45   1s --> 0:01  使用冒号表示法显示时间;始终以至少分钟显示时间。colonNotation:true 会覆盖 compact formatSubMilliseconds separateMilliseconds verbose
}

const dateType = {
  year: {
    name: 'year',
    unit: '年',
    abbreviation: 'y',
    count: 31536000 * 1000,
  },
  month: {
    name: 'month',
    unit: '月',
    abbreviation: 'm',
    count: 2592000 * 1000,
  },
  day: {
    name: 'day',
    unit: '天',
    abbreviation: 'd',
    count: 86400 * 1000,
  },
  hour: {
    name: 'hour',
    unit: '时',
    abbreviation: 'h',
    count: 3600 * 1000,
  },
  minute: {
    name: 'minute',
    unit: '分',
    abbreviation: 'min',
    count: 60 * 1000,
  },
  second: {
    name: 'second',
    unit: '秒',
    abbreviation: 's',
    count: 1 * 1000,
  }, // 秒
  millisecond: {
    name: 'millisecond',
    unit: '毫秒',
    abbreviation: 'ms',
    count: 1,
  }, // 毫秒
  microsecond: {
    name: 'microsecond',
    unit: '微秒',
    abbreviation: 'μs',
    count: 1,
  }, // 微秒
  nanosecond: {
    name: 'nanosecond',
    unit: '纳秒',
    abbreviation: 'ns',
    count: 1,
  }
} as const;

// 设置时间格式
function setDate(num:number) {
  // 获取年
  const y = Math.trunc(num / dateType.year.count);
  // 获取月
  const m = Math.trunc((num % dateType.year.count) / dateType.month.count);
  // 获取日
  const d = Math.trunc((num % dateType.month.count) / dateType.day.count);
  // 获取时
  const h = Math.trunc((num % dateType.day.count) / dateType.hour.count);
  // 获取分
  const min = Math.trunc((num % dateType.hour.count) / dateType.minute.count);
  // 获取秒
  const s = Math.trunc((num % dateType.minute.count) / dateType.second.count);
  // 获取毫秒
  const ms = Math.trunc((num % dateType.second.count) / dateType.millisecond.count);

  console.log(y);
  
  return {
    y,
    m,
    d,
    h,
    min,
    s,
    ms
  } as const;
  
}

function prettyMilliseconds(milliseconds:number, options?:IOptions) {
  const{
    secondsDecimalDigits = 1,
    millisecondsDecimalDigits = 0,
    keepDecimalsOnWholeSecondsL = false,
    compact = false,
    unitCount = Infinity,
    verbose = false,
    separateMilliseconds = false,
    formatSubMilliseconds = false,
    colonNotation = false
  } = options || {};

  const date = setDate(milliseconds);
  console.log(date);
  


}

export default prettyMilliseconds;


