// 时间格式化

interface IDate {
  readonly yyyy: string; // 年
  readonly M: string; // 月 不补0
  readonly MM: string; // 月
  readonly d: string; // 日 不补0
  readonly dd: string; // 日
  readonly H: string; // 时 24小时制；不补0
  readonly HH: string; // 时 24小时制
  readonly h: string; // 时 12小时制 不补0
  readonly hh: string; // 时 12小时制
  readonly m: string; // 分 不补0
  readonly mm: string; // 分
  readonly s: string; // 秒 不补0
  readonly ss: string; // 秒
}

// 设置时间格式
function setDate(date: Date) {
  const month = date.getMonth() + 1; // 月
  const day = date.getDate(); // 日
  const hour = date.getHours(); // 小时 24小时制
  const minute = date.getMinutes(); // 分
  const seconds = date.getSeconds(); // 秒
  const dateObj: IDate = {
    yyyy: date.getFullYear().toString(),
    M: month.toString(),
    MM: month.toString().padStart(2, '0'),
    d: day.toString(),
    dd: day.toString().padStart(2, '0'),
    H: hour.toString(),
    HH: hour.toString().padStart(2, '0'),
    h: (hour % 12).toString(),
    hh: (hour % 12).toString().padStart(2, '0'),
    m: minute.toString(),
    mm: minute.toString().padStart(2, '0'),
    s: seconds.toString(),
    ss: seconds.toString().padStart(2, '0'),
  } as const;
  return dateObj;
}
const reg = /[yyyy|M|MM|d|dd|H|HH|h|hh|m|mm|s|ss]*/g

// 格式化时间
function formattingDate(date: Date = new Date(), dateFormat = 'yyyy-MM-dd HH:mm:ss') {
  const newDate = setDate(date);
  console.log(newDate);

  const str = dateFormat.replaceAll(reg, (match, $) => {
    if (match in newDate) {
      return newDate[match as keyof IDate];
    }
    return ''
  });
  return str;
}

// 解析时间
/**
 * 按照 dateFormat 格式解析 dateStr
 * @param dateStr 
 * @param dateFormat 
 */
function parseDate(dateStr: string, dateFormat = 'yyyy-MM-dd HH:mm:ss') {

}

export default formattingDate;



