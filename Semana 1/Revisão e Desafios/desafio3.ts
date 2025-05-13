function opLog(a: number, b: number): void {
    let soma = a + b;

    if (soma >= 10 && a % 2 === 0 && b % 2 === 0) {
        console.log(`a soma dos números é maior que dez: ${soma} e ambos os números são pares`);
    } else {
        console.log(`a soma dos números não é maior que dez: ${soma} e ambos os números podem não serem pares: ${a}, ${b}`);
    }
}

opLog(12, 4);