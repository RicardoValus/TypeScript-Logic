function encontrarNumeroRepetido(numeros: Array<number>) {
    let numeroMaisFrequente = 0;
    let maiorFrequencia = 0;

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

    console.log(`o numero mais repetido é: ${numeroMaisFrequente}`);
}

let valores: Array<number> = [1, 2, 2, 3, 3, 3];
encontrarNumeroRepetido(valores);
