// const students = [
//     {"Name": "Peter" , "Height":175 , "Hobbies":"Football, Basketball"},
//     {"Name": "John" , "Height":180 , "Hobbies":"Basketball, sleeping"},
//     {"Name": "Betty" , "Height":170 , "Hobbies":"Reading"},
//     {"Name": "Mary" , "Height":160 , "Hobbies":"Eating, Sleeping, Reading"},
// ]

// let x = 0
// while (x < students.length) {
//     if (students[x]["Height"] > 170){
//         console.log(students[x]["Name"] + " is taller than 170")
//     }
//     x = x + 1
// }

const friends = [];

friends.push ({
  name: 'Peter',
  height: 175,
  hobbies: ['Football', 'Basketball'],
});

friends.push ({
  name: 'John',
  height: 180,
  hobbies: ['Basketball', 'Sleeping'],
});

friends.push ({
  name: 'Betty',
  height: 170,
  hobbies: ['Reading'],
});

friends.push ({
  name: 'Mary',
  height: 160,
  hobbies: ['Eating', 'Sleeping', 'Reading'],
});

// let x = 0
// while (x < friends.length) {
//     if (friends[x].height > 170){
//         console.log(friends[x].name)
//     }
//     x = x + 1

// }

let x = 0;
while (x < friends.length) {
  if (friends[x].height > 170) {
    console.log (friends[x].name);
  }
  x = x + 1;
}

console.log (
  '-----------------------------------------------------------------------------------------'
);

for (let x = 0; x < friends.length; x++) {
  if (friends[x].height > 170) {
    console.log (friends[x].name);
  }
}
