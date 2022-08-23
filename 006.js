// const employee = "Chan Tai Man"
// employee = "Chan Siu Man"
// console.log(employee)

// let x = 1
// console.log(x)

// x = x + 1
// console.log(x)
// x = x + 1
// console.log(x)
// x = x + 1
// console.log(x)
// x = x + 1
// console.log(x)
// x = x + 1
// console.log(x)
// //都係好重複 有無其他方法可以一次過做曬？ -》 while loop

// while (true) {
//     console.log(x)
// }
// // 唔好亂用啊 會無限loop -》 如果真係無限loop 可以按control+C去解決(for both window and mac)

let x = 1;

while (x < 10) {
  console.log (x);
  x = x + 1;
}

console.log ('Done!');

let y = 2;
// 2, 4, 6, 8, 10, ... 20
while (y <= 20) {
  console.log (y);
  y = y + 2;
}

x = 1;
while (x <= 10) {
  console.log (x * 2);
  x = x + 1;
}

// x = 0
// while (x < 6) {
//     x = x + 1
// }
// x     : 0, 1, 2, 3, 4, 5
// output: 0, 1, 0, 1, 0, 1
x = 0;
while (x < 6) {
  console.log (x % 2);
  x = x + 1;
}

// *
// **
// ***
// ****
// *****
// x = 0
// while(x < 5){
//     console.log('*')
//     x = x + 1
// }
//there are two ways to do it!!1
1;
let star = '*';
x = 0;
while (x < 5) {
  console.log (star);
  star = star + '*';
  x = x + 1;
}
// same as the above
star = '';
x = 0;
while (x < 5) {
  star = star + '*';
  console.log (star);
  x = x + 1;
}
//==========================================
2;
x = 0;
while (x < 5) {
  star = '*';
  let y = 0;
  while (y < x) {
    star = star + '*';
    y = y + 1;
  }
  console.log (star);
  x = x + 1;
}

console.log (
  '////////////////////////////////////////////////////////////////////////////'
);

x = 5;
while (x > 0) {
  star = '';

  let y = 0;
  while (y < x) {
    star = star + '*';
    y = y + 1;
  }

  console.log (star);
  x = x - 1;
}
