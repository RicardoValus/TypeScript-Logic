const arr: number[] = [100, 200, 50];

const soma = arr.reduce((acumulador, atual) => acumulador + atual, 0);

console.log(soma);