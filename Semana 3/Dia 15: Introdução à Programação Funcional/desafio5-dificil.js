function media(numeros) {
    var total = 0;
    for (var i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }
    return total / numeros.length;
}
console.log(media([1, 2]));
