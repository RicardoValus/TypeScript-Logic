function encontrarMenorNumero(numeros) {
    var menor = numeros[0];
    for (var i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    return menor;
}
var valores = [3, 7, 2, 9, 15, 6];
console.log("o menor número é:", encontrarMenorNumero(valores));
