function opLog(a, b) {
    var soma = a + b;
    if (soma >= 10 && a % 2 === 0 && b % 2 === 0) {
        console.log("a soma dos n\u00FAmeros \u00E9 maior que dez: ".concat(soma, " e ambos os n\u00FAmeros s\u00E3o pares"));
    }
    else {
        console.log("a soma dos n\u00FAmeros n\u00E3o \u00E9 maior que dez: ".concat(soma, " e ambos os n\u00FAmeros podem n\u00E3o serem pares: ").concat(a, ", ").concat(b));
    }
}
opLog(12, 4);
