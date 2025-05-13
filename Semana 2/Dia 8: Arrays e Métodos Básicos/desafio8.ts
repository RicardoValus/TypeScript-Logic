function arr(numeros: Array<number>): void {

    let numerosDobrados = numeros.map(num => num * 2);

    console.log(numerosDobrados)
}

let numerosParaDobrar: Array<number> = [1, 2, 3];

arr(numerosParaDobrar);