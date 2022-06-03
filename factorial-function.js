function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
        // console.log(factorial);
    }
    return factorial;
}

let firstFactorial = getFactorial(7);
console.log('factorial of 7 is ', firstFactorial);