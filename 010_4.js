const students = [
  {name: 'Gordon', age: 30},
  {name: 'Alex', age: 31},
  {name: 'Michael', age: 32},
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 其他immutative method
// .map .filter .reduce

// 1. map

console.log (
  students.map (
    // only want the names
    function (student) {
      return student.name;
    }
  )
);
////////////////////////////////////////////
// N inputs , then N outpus
// 2. map
console.log (
  students.map (
    // only want the ages
    function (student) {
      return student.age;
    }
  )
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3.filter

console.log (
  students.filter (
    // only want the students that ages <= 30
    function (student) {
      if (student.age > 30) {
        return false;
      } else {
        return true;
      }
    }
  )
);

//4. filter (second way)
console.log (
  students.filter (
    // only want the students that ages <= 30
    function (student) {
      return student.age <= 30;
    }
  )
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5. also can use the loop taught before to do the same thing
let x = 0;
let qualifiedStudents = [];
while (x < students.length) {
  if (students[x].age <= 30) {
    qualifiedStudents.push (students[x]);
  }
  x++;
}
console.log (qualifiedStudents);