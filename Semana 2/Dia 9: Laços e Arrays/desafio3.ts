function somarNumeros(numerosParaSomar: Array<number>): number {

    let soma: number = 0;

    for (let i = 0; i < numerosParaSomar.length; i++) {
        soma += numerosParaSomar[i];

    }
    console.log(soma);
    return soma;
}

let arrayDeNumerosParaSomar: Array<number> = [1, 2, 3];

somarNumeros(arrayDeNumerosParaSomar);