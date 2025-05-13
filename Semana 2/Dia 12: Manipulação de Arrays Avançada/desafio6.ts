const arr: Array<number> = [1, 2, 3, 4, 5, 6];

const arrFiltrados = arr.filter(n => n % 2 === 0);
const arrMapeados = arrFiltrados.map(n => n * 3);
const arrSoma = arrMapeados.reduce((acumulador, atual) => acumulador + atual, 0);

console.log(arrFiltrados);
console.log(arrMapeados);
console.log(arrSoma);