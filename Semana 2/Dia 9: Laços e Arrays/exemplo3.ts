function encontrarMaiorNumero(numeros: number[]): number {
    let maior = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }

    return maior;
}

let valores: number[] = [3, 7, 2, 9, 15, 6];
console.log("O maior número é:", encontrarMaiorNumero(valores));
