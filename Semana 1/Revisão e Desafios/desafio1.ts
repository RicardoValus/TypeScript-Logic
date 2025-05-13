function ehPrimo(n: number): boolean {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

console.log(ehPrimo(2));
console.log(ehPrimo(3));
console.log(ehPrimo(4));
console.log(ehPrimo(5));
console.log(ehPrimo(25));
console.log(ehPrimo(29)); 