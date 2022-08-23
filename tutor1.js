
// // Q1. 
// let a = 1
// let b = 2
// let c = 3

// console.log(a > b)          // false
// console.log(c < b * 2)      // true

// d = b + a * 2               // d = 4
// console.log(d > c)              // true

// a = 10                       
// console.log (a % b == 0)           /// true 
// console.log("50" == (b+c) * a)    // (b + c) * a = 50  ==》 true    // but if use ===  ==> the answer become false
// console.log(50 is (b + c) * a)    // NaN or Undefined ?  = undefined

// console.log(True or False)        // NaN or Undefined ?  = undefined



// // Q2. 
// let x = 2               //number
// let y = "hi"            //string
// let z = 5               //number

// if(y[0].toUpperCase() + y[1] == "Hi") {    
//     a1 = y * x                    // a1 = NaN  // Number * string = NaN
//     a2 = parseInt(z + "")          // a2 = 5
// } else {
//     a3 = "True"                   // Undefined because it would not be run
// }


// console.log(a1)
// console.log(a2)
// console.log(a3)


// //Q3. 
// let weight = 88
// let height = 1.8 
// let BMI = weight / height ** 2  //  weight / Math.pow(height , 2)  or weight / (height * height)

// console.log("Weight (kg): " + weight)
// console.log("Height (m): " + height)
// console.log("\n")
// console.log("BMI: " + Math.round(BMI))
// if ( BMI < 18.5) {
//     console.log("Result: Overweight")
// } else if (BMI < 25) {
//     console.log("Result: Normal")
// } else if (BMI < 30) {
//     console.log("Result: Overweight")
// } else {
//     console.log("Result: Obese")
// }


// // Q4. 
// for (let x = 1 ; x < 12 ; x++) {
//     if (x % 3 == 0) {
//         continue;
//     } else {
//         console.log(x);
//     }
// }
// // can use !=



// //Q5. 
// let star = ""
// let n = 4
// for (let x = 0 ; x < n ; x++){

//     for (let y = 0 ; y < n - x ; y++){
//         star = star + " ";
//     }

//     for (let z = 0; z < 2 * x - 1 ; z++){
//         star = star + "*";
//     }
// star = star + "\n";
// }
// console.log(star);


// n - x = 4 - x 
//  x    y    n-x  space    z   (2 * x - 1)    star           \n
//  0    0     4     1
//  0    1     4     2
//  0    2     4     3
//  0    3     4     4
//  0                       0       -1                       enter
//  1    0     3     1
//  1    1     3     2 
//  1    2     3     3
//  1                       0        1            star
//  1                       1        1                       enter   
//  2    0     2     1
//  2    1     2     2
//  2                       0        3            star
//  2                       1        3            star
//  2                       2        3            star
//  2                       3        3                        enter
//  3    0     1     1   
//  3                       0        5            star      
//  3                       1        5            star
//  3                       2        5            star
//  3                       3        5            star
//  3                       4        5            star
//  3                       5        5                        enter



// // Q6. 
// n = 4;
// let string = "";
// // External loop
// for (let x = 0; x < n; x++) {
//   // printing spaces
//   for (let y = 0; y < x; y++) {
//     string += " ";
//   }
//   // printing star
//   for (let z = 0; z < 2 * (n-x) - 1; z++) {
//     if ((x - z ) % 2 == 0) {
//       string += "+";
//     } else {
//       string += "-"
//     }

//   }
//   string += "\n";
// }
// console.log(string);
// n - x = 4 - x 
//  x  >   y     space    z   (2 * (n - x) - 1)       x - z       star           \n
//  0      0           
//  0                     0           7                 0           +
//  0                     1           7                 -1          -
//  0                     2           7                 -2          +
//  0                     3           7                 -3          -
//  0                     4           7                 -4          +
//  0                     5           7                 -5          -
//  0                     6           7                 -6          +
//  0                     7           7                                           enter
//  1      0       1
//  1      1       
//  1                     0           5                 1           -             
//  1                     1           5                 0           + 
//  1                     2           5                 -1          -
//  1                     3           5                 -2          +
//  1                     4           5                 -3          -
//  1                     5           5                                            enter
//  2      0       1
//  2      1       2
//  2      2       
//  2                     0           3                  2           + 
//  2                     1           3                  1           -
//  2                     2           3                  0           +
//  2                     3           3                                             enter
//  3      0       1
//  3      1       2
//  3      2       3
//  3      3
//  3                     0           1                  1           -  
//  3                     1           1                                             enter                            
