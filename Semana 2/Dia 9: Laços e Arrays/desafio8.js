function removerDuplicadas(numeros) {
    var numeroMaisFrequente = 0;
    var maiorFrequencia = 0;
    // Verificar qual número aparece mais vezes
    for (var i = 0; i < numeros.length; i++) {
        var frequenciaAtual = 0;
        for (var j = 0; j < numeros.length; j++) {
            if (numeros[i] === numeros[j]) {
                frequenciaAtual++;
            }
        }
        if (frequenciaAtual > maiorFrequencia) {
            maiorFrequencia = frequenciaAtual;
            numeroMaisFrequente = numeros[i];
        }
    }
    // Criar um novo array sem o número mais frequente
    var novoArray = [];
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] !== numeroMaisFrequente) {
            novoArray.push(numeros[i]);
        }
    }
    console.log("O n\u00FAmero mais repetido \u00E9: ".concat(numeroMaisFrequente));
    return novoArray;
}
// Exemplo de uso
var valores = [1, 2, 3, 2, 4, 2, 5];
var resultado = removerDuplicadas(valores);
console.log("Array sem o número mais frequente:", resultado);
