// console.log(123)
// console.log(-456)
// console.log(7.21)
// console.log(8.31)
// console.log(-10.1)
// //all the above are number

// console.log(1 + 1)
// console.log(5 - 2)
// console.log(6 * 2)
// console.log(8 / 7)
// console.log(0.1 + 0.2)   //會出0.3000000000000000000004   之後會有方法解決 電腦計算小數點會有唔精準的問題

// console.log(5 % 2)
// console.log(1337 % 13)
// console.log(70 % 7)
// console.log(1273612735 % 2)
//place command + / to chang it like the above

const sentence = 'Tecky Academy is good';
const lastIndexOfGood = sentence.length - 4;

console.log (sentence.substring (sentence.length - 4));
console.log (sentence.substring (lastIndexOfGood));

const teckyAcademyLength = 'Tecky Academy'.length;
console.log (
  sentence.substring (0, teckyAcademyLength).toLowerCase () + // teckyAcademyLength = 13
    sentence.substring (teckyAcademyLength)
);
