function encontrarNumeroPar(numeros) {
    numeros.forEach(function (num) {
        if (num % 2 === 0) {
            console.log(num);
        }
    });
}
;
var valores = [1, 2, 3, 4];
encontrarNumeroPar(valores);
