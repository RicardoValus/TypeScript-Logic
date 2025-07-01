// Crie uma função pura que receba um array de números e retorne a média dos valores, sem alterar o array original e sem usar variáveis globais.
function media(numeros: Array<number>): number {
    let total: number = 0;

    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];

    }
    return total / numeros.length;

}

console.log(media([1, 2]));