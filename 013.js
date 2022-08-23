// modules from others
// write npm (note package manager)
// write npm init

const readlineSync = require ('readline-sync');

const name = readlineSync.question ('What is your name? ');
console.log (name);

const colors = ['blue', 'yellow', 'black', 'white'];
const favouriteColor = readlineSync.keyInSelect (
  colors,
  'What is your favourite color? '
);
console.log (favouriteColor);
console.log ('Oops, your favorite color is ' + colors[favouriteColor]);

const weight = readlineSync.question ('What is your weight? ');
const height = readlineSync.question ('How tall are you?');
const weightNum = parseInt (weight);
const heightNum = parseFloat (height);
console.log (weightNum / Math.pow (heightNum, 2));
