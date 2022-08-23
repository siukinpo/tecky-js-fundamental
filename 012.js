///////Return Function 少難



// let const 
// block scope

// let a = 0 ;    
// if (2 > 1) {
//     let a = 0; 
//     a = a + 1;
//     console.log(a)         // 1
//     if (4 > 3){
//         let a = 2
//         console.log(a)     // 2
//     }
// }
// console.log(a)            // 0

// for (let a = 0; a < 3 ; a++){
//     console.log('for ' + a)
// }

// function abc(){
//     let a = 99;
//     console.log(a);
// }
// abc()

// console.log(a)


// var 
// function scope                   

// var a = 0
// if (2 > 1) {
//     var a = 0;
//     a = a + 1 
//     console.log(a)    // 1
// }
// console.log(a)        // 1             // they are sharing the same a
// //////////////////////////////////////////////////////////////
// a = 0
// function abc() {
//     var a = 0;
//     a = a + 1 
//     console.log(a)    // 1
// }
// abc()
// console.log(a)        // 0 because var only scoped in a func
// //////////////////////////////////////////////////////////////
// let b = 0;
// if (2 > 1) {
//     let b = 0;
//     b = b + 1
//     console.log(b)      // 1 
// }
// console.log(b)          // 0
// ////////// Ususally we use block scope


// // closure
// function abc() {
//     let count = 0
//     count = count + 1
//     return function (){
//         console.log(count)
//     }
// }
// const returnedFunction = abc();
// returnedFunction();          // 如果comment咗呢句就會出nothing 因爲無人執行嗰function
// returnedFunction();
// returnedFunction();
// /////////////////////////////////////////////////////////////////////  output: 1 1 1

function abc() {
    let count = 0
    return function (){            // 作用就係return的嗰個function
        count = count + 1
        console.log(count)
    }
}

const returnedFunction1 = abc();
returnedFunction1();          // 如果comment咗呢句就會出nothing 因爲無人執行嗰function
returnedFunction1();  
returnedFunction1();  
/////////////////////////////////////////////////////////////////////  output: 1 2 3 


const anotherAbc = abc();
anotherAbc();
anotherAbc();



function createCounter() {
    let count = 0;
    return {
        add: function() {
            count = count + 1
        },
        result: function() {
            return count;
        }
    }
}

const counter1 = createCounter()
counter1.add();
counter1.add();

const counter2 = createCounter()
counter2.add();
counter2.add();


console.log(counter1.result())
console.log(counter2.result())