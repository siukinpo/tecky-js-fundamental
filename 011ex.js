
// // how to change it to array?
// const number = "1 2 3 4 5 6 8 9 0 10 6".split(" ")
// console.log(number)

// const numbers = `3 5 30 31 43 48
// 2 11 13 45 46 49
// 11 14 21 28 37 44
// 18 29 32 33 36 40
// 2 20 24 30 32 46
// 5 17 35 37 42 49
// 1 24 25 27 31 37
// 15 17 29 30 34 37
// 5 10 18 20 28 33
// 1 22 25 27 31 36`.split(" ")
// console.log(numbers)

const numbers = `3 5 30 31 43 48
2 11 13 45 46 49
11 14 21 28 37 44
18 29 32 33 36 40
2 20 24 30 32 46
5 17 35 37 42 49
1 24 25 27 31 37
15 17 29 30 34 37
5 10 18 20 28 33
1 22 25 27 31 36`.split("\n").join(" ").split(" ")    //change from string to Array
console.log(numbers)

const checkOccurrence = {}
for (const number of numbers) {
    if (checkOccurrence[number] == null) {
        checkOccurrence[number] = 0
    }
    checkOccurrence[number] += 1;
}
console.log(checkOccurrence)

let maxNumber;                           //undefined
let maxOccurrence = 0;                    // defined as 0
for (const number in checkOccurrence) {
    if (checkOccurrence[number] > maxOccurrence) {
        maxNumber = number;
        maxOccurrence = checkOccurrence[number];
    }
}
console.log(`${maxNumber} has been shown the most. Its occurrence is ${maxOccurrence}`)
