// function sayHello (name) {
//   console.log ('Say hello');
//   console.log ('`Hello! ' + name + '`');
// }
// sayHello ('Alex');
// sayHello ('Gordon');
// sayHello ('Michael');
// sayHello ('Jason');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function stampDutyCalculate (propertyPrice) {
//   if (propertyPrice >= 2176470) {
//     console.log (propertyPrice * 0.3);
//   } else if (propertyPrice >= 2000000) {
//     console.log (30000 + propertyPrice - 2000000) * 0.2;
//   } else {
//     console.log (propertyPrice * 0.015);
//   }
// }
// stampDutyCalculate (1900000);
// stampDutyCalculate (2100000);
// stampDutyCalculate (2500000);

// console.log(1900000 * 0.2 + stampDutyCalculate(1900000))
//stampDutyCalculate(1900000)出黎嘅係一個動作，所以要好似下面咁打先得（console.log改成return）
// console.log一定要用if else if else
// 但係return可以用三個if都得，因為一return就會break咗嗰function

function stampDutyCalculate (propertyPrice) {
  if (propertyPrice >= 2176470) {
    return propertyPrice * 0.3;
  } else if (propertyPrice >= 2000000) {
    return 30000 + propertyPrice - 2000000 * 0.2;
  } else {
    return propertyPrice * 0.015;
  }
}
console.log (stampDutyCalculate (1900000));
console.log (stampDutyCalculate (2100000));
console.log (stampDutyCalculate (2500000));

console.log (2500000 * 0.2 + stampDutyCalculate (2500000));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function double (num) {
  return num * 2;
}
console.log (double (10));

/////////////////////////////////////////////////////////

function doubleAdd (num, add) {
  return num * 2 + add;
}
console.log (double (10, 5));
