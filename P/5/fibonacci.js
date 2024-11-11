function fibonacci(n) {
    let a = 1, b = 1;

    if (n === 1) return true;

    while (b < n) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    return b === n;
}
