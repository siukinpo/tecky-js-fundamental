// let a = Math.floor(Math.random() * 71) + 1
// console.log("Registration number: " + a)            //出0-70
// let b = Math.ceil(a / 7)
// console.log("Row: " + b)
// let c = a  % 7
// console.log("Column: " + c)                        //My answer but 錯曬      第7個座位會出0

// // const random = Math.floor(Math.random() * 70 ) + 1

// // console.log('Registration number: ' + random)
// // console.log('Row: ' + Math.ceil(random / 7))
// // console.log('Column: ' + ((random - 1) % 7) + 1)            //((random - 1) % 7) 會比‘Column： ’食左變string 跟住 再加1的就會令啲數字的個位數變曬做1

const random = Math.floor (Math.random () * 70) + 1;

const row = Math.ceil (random / 7);
const col = (random - 1) % 7 + 1;

console.log ('Registration number: ' + random);
console.log ('Row: ' + row);
console.log ('Column: ' + col);
