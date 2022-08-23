const fs = require ('fs');
const readFileSync = require ('readline-sync');

const existingStudents = fs.readFileSync ('014-students.txt', 'utf8'); // they are string
const existingStudentsArray = existingStudents.split ('\n');
existingStudentsArray.splice (1, 1);
console.log (existingStudentsArray);
fs.writeFileSync ('014-students.txt', existingStudentsArray.join ('\n'));

// const name = readFileSync.question ('What is the student name? ');
// const existingStudents = fs.readFileSync ('014-students.txt', 'utf8');
// fs.writeFileSync ('014-students.txt', existingStudents + '\n' + name);
