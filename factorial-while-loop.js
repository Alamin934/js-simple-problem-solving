/*
function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

let myFactorial = getFactorial(6);
console.log(myFactorial);
*/

// dicrement value of factorial

function decrementFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    console.log(factorial);
}
decrementFactorial(7);


// function getFactorial2(number) {
//     let factorial = 1;
//     for (let i = number; i >= 1; i--) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }
// let myFactorial = getFactorial2(6);
// console.log(myFactorial);