const students = [
  {name: 'Gordon', age: 30},
  {name: 'Alex', age: 31},
  {name: 'Michael', age: 32},
];

// students.sort (); // not applicable to Array with object
// console.log (students);
// console.log (students.indexOf ('Alex')); // -1 // not applicable to Array with object

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Find index

console.log (
  students.findIndex (function (student) {
    // student is the parameter //任改的
    if (student.name == 'Alex') {
      //正常Array係唔可以直接用.name 但係因為佢會逐個逐個object俾佢 所以其實係object 就可以用.name
      return true;
    } else {
      return false;
    }
  })
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// sort

students.sort (function (studentA, studentB) {
  if (studentA.name > studentB.name) {
    return 1;
  } else if (studentA.name < studentB.name) {
    return -1;
  } else {
    return 0;
  }
});
console.log (students);
//[
//{ name: 'Alex', age: 31 },
//{ name: 'Gordon', age: 30 },
//{ name: 'Michael', age: 32 }
//]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// sort

students.sort (
  //////////////////點解呢個唔洗console.log?
  function (studentA, studentB) {
    /////呢個係一個mutation嘅method
    if (studentA.name > studentB.name) {
      /////mutation係類似改變咁解 會郁到嗰array
      return -1; /////改變左次序
    } else if (studentA.name < studentB.name) {
      ///////////////其他個啲就係無變 叫immutation
      return 1; //mutation例子： array.push array.pop array.shift array.unshift 係會令到嗰array有改變
    } else {
      return 0;
    }
  }
);
console.log (students);
//[
//{ name: 'Michael', age: 32 },
//{ name: 'Gordon', age: 30 },
//{ name: 'Alex', age: 31 }
//]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
