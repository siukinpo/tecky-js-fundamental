// let x = 0
// let randomList1 = []
// while (x < 10) {
//     randomList1.push(Math.floor(Math.random()*100))
//     x = x + 1
// }
// console.log(randomList1)

// x = 0
// let randomList2 = []
// while (x < 10) {
//     a = Math.floor(Math.random()*100)
//     if (a % 2 == 0){
//         randomList2.push(a)
//     } else {
//         randomList2.unshift(a)
//     }
//     x = x + 1
// }
// console.log(randomList2)

const randomList = [];

let x = 0;
while (x < 10) {
  randomList.push (Math.floor (Math.random () * 10) + 1);
  x = x + 1;
}
console.log (randomList);
console.log (randomList.length);

//=======================================================================================

const randomList2 = [];

let y = 0;
while (y < 10) {
  const num = Math.floor (Math.random () * 10) + 1;
  if (num % 2 == 0) {
    randomList2.push (num);
  } else {
    randomList2.unshift (num);
  }
  y = y + 1;
}
console.log (randomList2);
