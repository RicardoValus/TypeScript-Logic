var arr = [1, 2, 3, 4, 5, 6];
var arrFiltrados = arr.filter(function (n) { return n % 2 === 0; });
var arrMapeados = arrFiltrados.map(function (n) { return n * 3; });
var arrSoma = arrMapeados.reduce(function (acumulador, atual) { return acumulador + atual; }, 0);
console.log(arrFiltrados);
console.log(arrMapeados);
console.log(arrSoma);
