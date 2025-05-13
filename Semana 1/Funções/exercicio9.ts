function palindromo(str: string): boolean {
    let strInvertida = str.split('').reverse().join('');
    return str.toLowerCase() === strInvertida.toLowerCase();
}

console.log(palindromo("ele"));
console.log(palindromo("ela"));