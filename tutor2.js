
// Q7.

console.log(process.argv)
function summation(...nums) {
    console.log(process.argv)
    let sum = 0
    let array = []
    for (let num of nums){
        sum = sum + num
        array.push(num)
    }
    console.log("$ node q7.js " + array)
    console.log("The sum of the numbers is: " + sum)
}
summation(1,3,4,5,9,10,11,14)






// Q8. 

function transformation(words) {
    let a = words.substring(1 , words.length)

    console.log("$ node q7.js " + words + " " + words.substring(0 , 1))
    console.log("Result: " + a)
}
transformation("elephant")
transformation("appropriate")