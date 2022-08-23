const students = [
  {name: 'Gordon', age: 30},
  {name: 'Alex', age: 31},
  {name: 'Michael', age: 32},
];

/////////////////////////////////////////////////////////////////////
// some

console.log (
  students.some (function (student) {
    ///////////////其他個啲就係無變 叫immutation
    if (student.age > 40) {
      return true;
    }
  })
);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// find

console.log (
  students2.find (
    //佢會比左成嗰object你
    function (student) {
      if (student.name == 'Alex') {
        return true;
      } else {
        return false;
      }
    }
  )
);
////////////////////////////////////////////////
console.log (
  students2.find (
    //佢會比左成嗰object你
    function (student) {
      if (student.name == 'Alex') {
        return true;
      } else {
        return false;
      }
    }
  ).age
); //佢比左Alex嗰object你之後 再搵佢幾多歲
