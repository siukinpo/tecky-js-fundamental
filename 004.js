console.log ('test');

const lastCharacter = 'test'.substring (3);

console.log (Math.max (1, 2, 3, 4, 5));
console.log (Math.min (1, 2, 3, 4, 5));

console.log (Math.floor (1.05));
console.log (Math.ceil (1.05));
console.log (Math.round (1.55));
console.log (Math.round (27999)); //cannot make it to be 28000
console.log (Math.round (27999 / 1000) * 1000);

const first = 63;
console.log (Math.floor (first / 60));
const second = 27369;
console.log (Math.floor (second / 60));

console.log (Math.random ()); //0-1 However,it may outout 0 but not 1
console.log (Math.floor (Math.random () * 5)); //出0/1/2/3/4
console.log (Math.floor (Math.random () * 2)); //出0/1
console.log (Math.floor (Math.random () * 3)); //出0/1/2
