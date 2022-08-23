let x = 10;
while (x >= 0) {
  console.log (x);
  x = x - 1;
}
//---------------------------------------------
x = 5;
while (x > 0) {
  star = '';

  let z = 5;
  while (z > x) {
    star = star + ' ';
    z = z - 1;
  }

  let y = 0;
  while (y < x) {
    star = star + '*';
    y = y + 1;
  }
  console.log (star);
  x = x - 1;
}

// // first do the 5 star each row first
// let a = 0
// while (a < 5) {
//     console.log('*')
//     a = a + 1
// }

// let a = 0
// while (a < 5) {

//     let b = 5 - a - 1
//     let star = '*'
//     while (b > 0) {
//         star = star + '*'
//         b = b - 1
//     }
//     console.log(star)
//     a = a + 1
// }   其實同下面係一樣 只係-1的分別

let a = 0;
while (a < 5) {
  let b = 5 - a;
  let star = '';
  while (b > 0) {
    star = star + '*';
    b = b - 1;
  }
  console.log (star);
  a = a + 1;
}

// #   b   b'
// 1   5   4
// 2   4   3
// 3   3   2
// 4   2   1
// 5   1   0

// 之後要將啲star整去最右邊
a = 0;
while (a < 5) {
  let star = '';

  let c = 0;
  while (c < a) {
    star = star + ' ';
    c = c + 1;
  }

  let b = 5 - a;
  while (b > 0) {
    star = star + '*';
    b = b - 1;
  }
  console.log (star);
  a = a + 1;
}

a = 0;
while (a < 5) {
  let star = '';

  let c = 0;
  while (c < a) {
    star = star + ' ';
    c = c + 1;
  }

  let b = 5 - a;
  while (b > 0) {
    star = star + '*';
    b = b - 1;
  }
  console.log (star);
  a = a + 1;
}
