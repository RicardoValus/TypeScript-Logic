var numeros = [1, 2, 3, 4];
var soma = numeros.reduce(function (acumulador, atual) { return acumulador + atual; }, 0);
console.log(soma);
