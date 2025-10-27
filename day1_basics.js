//Program 1: Checks if a number is even or odd
// const readline = require("readline");

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// r1.question("Input Number: ", (answer) =>{
//     if((parseInt(answer))%2 == 0){
//         console.log("The number is Even!");
//     }else{
//         console.log("The number is Odd!");
//     }
//     r1.close;
// });

//second variation using prompt (for web)
// let num = prompt("Input Number: ");
// if((parseInt(num))%2 == 0){
//     console.log("The Number is Even");
// }else{
//     console.log("The number is Odd")
// }

//Program 2: Print all numbers from 1 to 100 that are divisible by both 3 and 5.
// for (let index = 1; index <= 100; index++) {
//         if((index%3==0) && (index%5==0)){
//             console.log(index);
//         }
// }

//Program 3: String Reversal Function. returns the reverse version of the the input.

function reverseString(str){
    console.log(str.reverse())
}

reverseString("hello");
