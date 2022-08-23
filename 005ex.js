// let propery = 4000000;

// if (propery <= 2000000) {
//     stampDuty = property * 0.015
// } else if (property <= 2176470) {

//     stampDuty = 30000 + (property - 2000000) * 0.2
// } else if (property <= 3000000) {
//     stampDuty = property * 0.03
// } else if (property <= 3290330) {
//     stampDuty = 90000 + (property - 3000000) * 0.2
// }

// console.log(stampDuty);

// const propertyPrice = 2000000

// if (propertyPrice >= 2000000) {
//     console.log(30000 + propertyPrice - 2000000) * 0.2
// } else if (propertyPrice >= 2176470) {
//     console.log(propertyPrice * 0.3)
// }
// //咁樣的話 佢第一個if已經執行左
// //可以有兩個做法

1; //加個&&比佢
const propertyPrice = 2200000;

if (propertyPrice >= 2000000 && propertyPrice < 2176470) {
  console.log (30000 + propertyPrice - 2000000) * 0.2;
} else if (propertyPrice >= 2176470) {
  console.log (propertyPrice * 0.3);
} else {
  console.log (propertyPrice * 0.015);
}

2; //將大銀碼d果個放係前面
const propertyPrice1 = 2200000;
if (propertyPrice1 >= 2176470) {
  console.log (propertyPrice1 * 0.3);
} else if (propertyPrice1 >= 2000000) {
  console.log (30000 + propertyPrice1 - 2000000) * 0.2;
} else {
  console.log (propertyPrice1 * 0.015);
}
