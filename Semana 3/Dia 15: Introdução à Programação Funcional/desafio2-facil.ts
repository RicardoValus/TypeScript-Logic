// Crie uma função que receba um array e retorne um novo array com todos os elementos dobrados, sem modificar o original.
function imutabilidade(numeros: number[]) {

    const novosNumeros = numeros.map(n => n * 2);

    return novosNumeros;
}

console.log(imutabilidade([1, 2, 3]));