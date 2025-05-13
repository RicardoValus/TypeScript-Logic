function verificarSeExiste(numeros, numero) {
    return numeros.includes(numero);
}
var arrDeNumeros = [1, 2, 3];
console.log(verificarSeExiste(arrDeNumeros, 2));
console.log(verificarSeExiste(arrDeNumeros, 5));
