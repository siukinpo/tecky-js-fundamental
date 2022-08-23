num1 = 63
let sec1 = num1 % 60
let min1 = (num1-sec1) / 60
answer1 = min1 + 'm' + sec1 + 's'

num2 = 27369
let sec2 = num2 % 3600 % 60
let hr2 = (num2 - num2%3600) / 3600
let min2 = (num2 - sec2) /60 %60
answer2 = hr2 + 'h' + min2 + 'm' + sec2 + 's'

console.log(answer1)
console.log(answer2)
 

console.log('m' * 2)   //string cannot mutiply a number, so it will print NaN(Not a number)