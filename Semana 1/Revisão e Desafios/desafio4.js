function calculadora(a, b, str) {
    switch (str) {
        case '+':
            console.log('a + b', a + b);
            break;
        case '-':
            console.log('a - b', a - b);
            break;
        case '*':
            console.log('a * b', a * b);
            break;
        case '/':
            console.log('a / b', a / b);
            break;
        case '%':
            console.log('a % b', a % b);
        default: console.log('expressão inválida');
    }
}
calculadora(3, 4, '-');
