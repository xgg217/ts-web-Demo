import formattingDate from "./utils/time/dateType";

const a = new Date();
;
console.log(formattingDate(a));


// // import formattingDate from "./utils/time/dateType";

// // formattingDate()


// const dateObj = {
//   yyyy: '2022',
//   M: '4',
//   MM: '04',
//   d: '20',
//   dd: '20',
//   H: '23',
//   HH: '23',
//   h: '11',
//   hh: '11',
//   m: '23',
//   mm: '23',
//   s: '48',
//   ss: '48'
// } as const;

// console.log('yyyy' in dateObj);

// type dateType = keyof typeof dateObj;

// const reg = /[yyyy|M|MM|d|dd|H|HH|h|hh|m|mm|s|ss]{1,}/ig;

// const s = ('yyyy-MM-dd HH:mm:ss').replaceAll(reg, (match, $) => {
//   console.log(match);
//   console.log($);
//   if (match in dateObj) {

//     return dateObj[match as dateType];
//   }
//   return '1';
// });
// console.log('s');
// console.log(s);






