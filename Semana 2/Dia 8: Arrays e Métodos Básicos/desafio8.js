function arr(numeros) {
    var numerosDobrados = numeros.map(function (num) { return num * 2; });
    console.log(numerosDobrados);
}
var numerosParaDobrar = [1, 2, 3];
arr(numerosParaDobrar);
