let x = 0
let arr = ['alex' , 'gordon' , 'michael']


// Condition
while (x < arr.length) {
    console.log(arr[x])
    x = x + 1
}


// any other method to boost the process?
//short-hand for while loop
// Very suitable for array
// traditional for loop
for (let i = 0 ; i < arr.length ; i = i + 1) {
    console.log(arr[i])
}


// for - of loop : Array
for (const name of arr ) {
    console.log(name)
}

// for - in loop : object     //looking back to 008.js checkduplicate
 const count = {
    a: 2,
    b: 1,
    c: 2,
    d: 2,
    e: 1
 }
 for (const key in count) { 
    console.log(key)
 }
 //for - in is used to take the keys of the object

 for (const name in arr ) {
    console.log(name)
}
//output : 0 1 2
for (const key in count) { 
    console.log(key + " has be shown for " + count[key] + " times")
 }


