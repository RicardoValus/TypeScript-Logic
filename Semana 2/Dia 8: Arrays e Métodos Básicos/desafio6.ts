function numerosPares(numeros: number[]): void {

    let numerosMapeados = numeros.filter(num => num % 2 === 0);

    console.log(numerosMapeados);
}

let arrNumeros: number[] = [1, 2, 3, 4];

numerosPares(arrNumeros);