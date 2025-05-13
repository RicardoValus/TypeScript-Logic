function calcular(n1, n2, str) {
    switch (str) {
        case '+': return n1 + n2;
        case '-': return n1 - n2;
        case '*': return n1 * n2;
        case '/': return n1 / n2;
        default: throw new Error("Operação inválida");
    }
}
console.log(calcular(10, 5, '*'));
console.log(calcular(8, 2, '/'));
console.log(calcular(4, 2, 'x'));
