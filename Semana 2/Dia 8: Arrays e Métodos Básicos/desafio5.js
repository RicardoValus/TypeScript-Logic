function somarElementos(numeros) {
    var soma = 0;
    for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
        var num = numeros_1[_i];
        soma += num;
    }
    return soma;
}
var valores = [1, 2, 3, 4, 5];
console.log(somarElementos(valores));
