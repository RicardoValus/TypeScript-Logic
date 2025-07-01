function upperCase(palavras) {
    var novasPalavras = palavras.map(function (s) { return s.toUpperCase(); });
    return novasPalavras;
}
console.log(upperCase(['ricardo', 'manu']));
