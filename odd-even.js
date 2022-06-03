function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const myNumber = 3097;
const isMyNumberEven = isEven(myNumber);
console.log('My number is Even', isMyNumberEven);

const herNumber = 3808;
const isHerNumberEven = isEven(herNumber);
console.log('Her number is Even', isHerNumberEven);

//is Odd function
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}

const isMyNumberOdd = isOdd(myNumber);
console.log(isMyNumberOdd);

const isHerNumberOdd = isOdd(herNumber);
console.log(isHerNumberOdd);