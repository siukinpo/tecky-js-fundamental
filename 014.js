const fs = require ('fs');

let i = fs.readFileSync ('014-count.txt', 'utf-8');
i++;
console.log ('You have run this program the ' + i + ' times.');
fs.writeFileSync ('014-count.txt', i); // THE NEW VERSION NOT ALLOW AN NUMBER AS A PARAMETER

// fs.writeFileSync ('014-demo.txt', 'Hello World');
// const data = fs.readFileSync ('014-demo.txt', 'utf-8'); // both utf8 / utf-8 also ok
// console.log (data);
