// const students = "Alex Gordon Lau Michael"
// const students1 = "Alex, Gordon Lau, Michael, Chan Tai Man,Jason"

// const student1 = "Alex"
// const student2 = "Michael"

//That's why we need Array (List/collection in python/C#)

const students = [
  'Alex',
  'Gordon',
  'Michael',
  '123',
  '456',
  '678',
  '789',
  'Chan Tai Man, Jason',
];
// console.log(students[0])
// console.log(students[1])
// console.log(students[3])
// console.log(students.length)
// console.log(students[students.length-1])

// let x = 0
// console.log(students[x])
// x = x + 1
// console.log(students[x])
// .
// .
// .
// 就算用const開頭 Array入面都可以更改
students[0] = students[0] + ' Lau';

students.push ('Tracy'); //add something to the end
students.pop (); //remove something from the end
students.unshift ('Joan'); //add something to the beginning
students.shift (); //remove something from the beginning
students.shift ();

let x = 0;
while (x < students.length) {
  console.log (students[x]);
  x = x + 1;
}

//create an array [0, 1, 2, 3, 4, 5, 6]
let y = 0;
let numLists = [];
while (y < 7) {
  numLists.push (y);
  y = y + 1;
}
console.log (numLists);

//create an array [6, 5, 4, 3, 2, 1]
let z = 1;
let numLists2 = [];
while (z < 7) {
  numLists2.unshift (z);
  z = z + 1;
}
console.log (numLists2);
