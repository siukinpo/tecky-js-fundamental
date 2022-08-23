// console.log(true)
// console.log(false)

// //Boolean also has many Operator  && ||
// //eg. 加減乘除for number
// //eg. "I am " + "James"   for string

// // AND Operator
// console.log(true && true)         //true
// console.log(true && false)        //false
// console.log(false && true)        //false
// console.log(false && false)       //false

// // OR Operator
// console.log(true || true)        //true
// console.log(true || false)       //true
// console.log(false || true)       //true
// console.log(false || false)      //false

// //
// console.log((true || true) && false)    //false
// console.log(true || (true && false))    //true

// // NOT Operator
// console.log(!true)                 //false
// console.log(!!false)               //false

// // Comparison Operators
// console.log(5 > 5)
// console.log(4 < 5)
// console.log(5 >= 1)
// console.log(1 + 1 <= 2)

// const name = 'Alex';
// console.log ('test' == 'test');      //true
// console.log (name != 'Peter');       //true
// console.log (name != 'Alex');        //false

//Flow Control - condition
const name = 'May';

if (name == 'Alex') {
  console.log ('Hi, Alex');
  console.log ("This is today's menu. What would you like to have?");
} else if (name == 'Peter') {
  console.log ('Good Morning, Boss!');
} else {
  console.log ('Excuse Sir, Do you have a reservation?');
}
