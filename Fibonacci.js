function fibonacciArray(n) {
    const result = [0, 1];

    function calculateFibonacci(index) {
        if (index <= 1) {
            return index;
        } else {
            const fibValue =
                calculateFibonacci(index - 1) + calculateFibonacci(index - 2);
            return fibValue;
        }
    }

    for (let i = 2; i < n; i++) {
        result.push(calculateFibonacci(i));
    }

    return result;
}

console.log(fibonacciArray(8));
