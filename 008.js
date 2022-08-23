// Object

// const alex = ["Alex" , "M" , 170]

// const alex = {
//     "name" : "Alex",
//     "gender": "M",
//     "height" : 170,    //唔可以落兩個一樣的key，如果有兩個一樣的key 取後面果個為準
//     "height" : 180,
//     "living-place":"Hong Kong"
// }

// console.log(alex)
// console.log(alex["name"])
// console.log(alex["height"])
// console["log"](alex.height)   //console.log can be written like this
// console.log(alex["living-place"])
// console.log(alex.living-place)   //error

// const students = [{name: 'Alex', height: 170}, {name: 'Gordon', height: 180}];
// students[0].height = 172;
// students[1]['living-place'] = 'Hong Kong';
//
// console.log (students[0]['height']);
// console.log (students[0].height);
// console.log (students);
//
// delete students[1]['living-place'];
// console.log (students);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1.
// const chars = ["a" , "b" , "a" , "c" , "d", "e", "d"]
// let x = 0
// while (x < chars.length) {
// console.log(chars[x])
// x = x + 1
// }

//-------------------------------------------------------------------------------------------------------

// //2. Use object to check duplicate
// const checkDuplicate = {};
// const chars = ['a', 'b', 'a', 'c', 'd', 'e', 'd'];
// let x = 0;
// while (x < chars.length) {
//   if (checkDuplicate[chars[x]] == true) {
//     console.log (chars[x] + ' is duplicated');
//   }
//   checkDuplicate[chars[x]] = true;
//   x = x + 1;
// }
// console.log (checkDuplicate);

//------------------------------------------------------------------------------------------------------------

// // 3. Use object to check duplicate
// const checkDuplicate = {};
// const chars = ['a', 'b', 'a', 'c', 'd', 'e', 'd'];
// let x = 0;
// while (x < chars.length) {
//   if (checkDuplicate[chars[x]] == true) {
//     console.log (chars[x] + ' is duplicated');
//   }
//   checkDuplicate[chars[x]] = true;
//   console.log (checkDuplicate);
//   x = x + 1;
// }
// console.log (checkDuplicate);

//---------------------------------------------------------------------------------------------------------------

//4. count how many times it appear
const checkDuplicate = {};
const chars = ['a', 'b', 'a', 'c', 'd', 'e', 'd'];
let x = 0;
while (x < chars.length) {
  if (checkDuplicate[chars[x]] == null) {
    checkDuplicate[chars[x]] = 0;
  }
  checkDuplicate[chars[x]] = checkDuplicate[chars[x]] + 1;
  console.log (checkDuplicate);
  x = x + 1;
}
console.log (checkDuplicate);
