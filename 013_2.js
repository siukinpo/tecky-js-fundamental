//https://www.npmjs.com/package/readline-sync
//https://date-fns.org/v2.29.1/docs/parseISO

const readlineSync = require ('readline-sync');
const add = require ('date-fns/add');
const parseISO = require ('date-fns/parseISO');

console.log (add (new Date (), {days: 100}));

const birthday = readlineSync.question ('What is your birthday? ');
console.log (add (parseISO (birthday), {days: 1000}));
