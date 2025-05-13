function removerDuplicadas(numeros: number[]): number[] {
    let numeroMaisFrequente = 0;
    let maiorFrequencia = 0;

    // Verificar qual número aparece mais vezes
    for (let i = 0; i < numeros.length; i++) {
        let frequenciaAtual = 0;

        for (let j = 0; j < numeros.length; j++) {
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
    let novoArray: number[] = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] !== numeroMaisFrequente) {
            novoArray.push(numeros[i]);
        }
    }

    console.log(`O número mais repetido é: ${numeroMaisFrequente}`);
    return novoArray;
}

// Exemplo de uso
let valores: number[] = [1, 2, 3, 2, 4, 2, 5];
let resultado = removerDuplicadas(valores);
console.log("Array sem o número mais frequente:", resultado);
