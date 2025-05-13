function encontrarMenorNumero(numeros: Array<number>): number {

    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    return menor;

}

let valores: number[] = [3, 7, 2, 9, 15, 6];
console.log("o menor número é:", encontrarMenorNumero(valores));