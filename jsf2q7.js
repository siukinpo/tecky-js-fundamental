// console.log(process.argv);

// let numbers = process.argv[2]
// // "1 , 2 , 3" => [1,2,3]
// let replaceWord = process.argv[3]
// let newString = "";
// for ( let char of word )

// let numberArr = numbers.split(",")
// for ( let i = 0;)

let numbers = process.argv[2];
// "1,2,3" -> [1,2,3]
let numberArr = numbers.split (',');
let result = 0;
for (let i = 0; i < numberArr.length; i++) {
  // Number(numberArr[i])
  result += parseInt (numberArr[i]);
}
console.log ('The sum of the numbers is: ' + result);
