function somarElementos(numeros: number[]): number {
    let soma: number = 0;

    for (let num of numeros) {
        soma += num;
    }

    return soma;
}

let valores: number[] = [1, 2, 3, 4, 5];

console.log(somarElementos(valores));