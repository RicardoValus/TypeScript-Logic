function imutabilidade(numeros) {
    var novosNumeros = numeros.map(function (n) { return n * 2; });
    return novosNumeros;
}
console.log(imutabilidade([1, 2, 3]));
