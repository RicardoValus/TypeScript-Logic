function verificarSeExiste(numeros: Array<number>, numero: number): boolean {
    return numeros.includes(numero);
}

let arrDeNumeros: Array<number> = [1, 2, 3];

console.log(verificarSeExiste(arrDeNumeros, 2)); 
console.log(verificarSeExiste(arrDeNumeros, 5));
