// factorial recursion n*(n-1)!

function recursionFactorial(n) {
    if (n == 1) {
        return 1;
    }

    return n * recursionFactorial(n - 1);

}

recursionFactorial(5);
