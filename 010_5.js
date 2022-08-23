const students = [
  { name: "Gordon", age: 30 },
  { name: "Alex", age: 31 },
  { name: "Michael", age: 32 },
];

////////////////////////////////////////////////////////////////
// 1. filter + map                          // To get the age(map) of students aged above 30(filter)
console.log(
  students
    .filter(function (student) {
      return student.age > 30;
    })
    .map(function (student) {
      return student.name;
    })
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. reduce    Alex話呢個好難

console.log(
  //(previous , current) -> callback
  students.reduce(function (previous, current) {
    return previous + current.age;
  }, 0)
);
// 第一轉： previous係0   current係Alex，年齡31     return 31
// 第二轉： previous係31  current係Gordon，年齡30   return 61
// 第三轉： previous係61  current係Michael，年齡32  return 93

///////////////////////////////////////////////////////////////////////////////////
// 3. reduce 比較age，搵最細嗰個

console.log(
  students.reduce(
    // wanna find the youngest one
    function (previous, current) {
      if (current.age < previous) {
        return current.age;
      } else {
        return previous;
      }
    },
    9999
  )
);
// 第一轉： previous係9999   current係Alex，年齡31     return 31
// 第二轉： previous係31     current係Gordon，年齡30   return 30
// 第三轉： previous係30     current係Michael，年齡32  return 30

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. 我想知道埋age最細嗰個人嘅名

console.log(
  students.reduce(
    // wanna find the youngest one
    function (previous, current) {
      if (current.age < previous.age) {
        return current; //return an object
      } else {
        return previous;
      }
    },
    { name: "The old", age: 100000 }
  ).name
);
