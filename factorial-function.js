//Factorial with function

function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= 5; i++) {
        factorial = factorial * i;
        console.log(i, factorial);
    }
    console.log(factorial);
}

getFactorial(7);