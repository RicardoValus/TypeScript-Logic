function fatorial(a: number): number {
    let resultado: number = 1;

    for (let b = 1; b <= a; b++) {
        resultado *= b; 
        //esse operador é igual a resultado = resultado * b;
    }

    return resultado;
}

console.log(fatorial(4));