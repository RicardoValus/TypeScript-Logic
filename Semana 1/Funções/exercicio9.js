function palindromo(str) {
    var strInvertida = str.split('').reverse().join('');
    return str.toLowerCase() === strInvertida.toLowerCase();
}
console.log(palindromo("ele"));
console.log(palindromo("ela"));
