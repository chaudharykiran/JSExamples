const fibonacciDynamic = (n) => {
    let fib = Array(n + 2).fill(0)
    fib[1] = 1

    for (let i = 2; i < (n + 1); i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }

    return fib[n]
}

console.log(fibonacciDynamic(11))