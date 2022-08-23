// range (10);
// range (5);

// // 1.
// function range (num) {
//   let array = [];
//   let x = 0;
//   while (x < num) {
//     array.push (x);
//     x++;
//   }
//   return array;
// }

// console.log (range (5));
// console.log (range (10));

///////////////////////////////////////////////////////////////////////////////////////

// function bonusCalculate (name , yearsOfWork , performance , monthlySalary) {
//     if (yearsOfWork > 5 && performance == "Good") {
//         return bonus = monthlySalary * 2
//     } else if (yearsOfWork > 1) {
//         return bonus = monthlySalary
//     }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function range (num) {
  let array = [];
  let x = 0;
  while (x < num) {
    array.push (x);
    x = x + 1;
  }
  return array;
}

console.log (range (5));
console.log (range (10));

/////////////////////////////////////////////////////////////////////////////

function bonusCalculator (years, performance, salary) {
  // year >= 1,                        ans: 1x salary
  // year >= 5 + performance is good   ans: 2x salary
  if (years > 5 && performance) {
    return (bonus = salary * 2);
  } else if (years > 1) {
    return (bonus = salary * 1);
  } else {
    return 0; // remember to add this return 0!!!!!!
  }
}
console.log (bonusCalculator (6, false, 10000));
console.log (bonusCalculator (5.5, true, 40000));
console.log (bonusCalculator (3, true, 80000));
console.log (bonusCalculator (7, true, 70000));
console.log (bonusCalculator (0.5, true, 20000));

console.log (
  bonusCalculator (6, false, 10000) +
    bonusCalculator (5.5, true, 40000) +
    bonusCalculator (3, true, 80000) +
    bonusCalculator (7, true, 70000) +
    bonusCalculator (0.5, true, 20000)
);
