function fatorial(a) {
    var resultado = 1;
    for (var b = 1; b <= a; b++) {
        resultado *= b;
    }
    return resultado;
}
console.log(fatorial(4));
