let numeros: number[] = [3, 7, 2, 9, 15, 6];

let maiorNumero = numeros.reduce((maior, atual) => (atual > maior ? atual : maior));

console.log("O maior número é:", maiorNumero);
