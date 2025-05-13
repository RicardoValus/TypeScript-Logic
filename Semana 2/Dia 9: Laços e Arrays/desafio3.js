function somarNumeros(numerosParaSomar) {
    var soma = 0;
    for (var i = 0; i < numerosParaSomar.length; i++) {
        soma += numerosParaSomar[i];
    }
    console.log(soma);
    return soma;
}
var arrayDeNumerosParaSomar = [1, 2, 3];
somarNumeros(arrayDeNumerosParaSomar);
