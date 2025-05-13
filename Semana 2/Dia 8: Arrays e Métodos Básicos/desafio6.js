function numerosPares(numeros) {
    var numerosMapeados = numeros.filter(function (num) { return num % 2 === 0; });
    console.log(numerosMapeados);
}
var arrNumeros = [1, 2, 3, 4];
numerosPares(arrNumeros);
