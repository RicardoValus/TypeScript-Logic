function calculadora(a: number, b: number, str: string): void {
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