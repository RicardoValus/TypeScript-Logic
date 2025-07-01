// Crie uma função que receba um array de strings e retorne um novo array com todas as strings em maiúsculas (sem alterar o original).
function upperCase(palavras: string[]){
    const novasPalavras = palavras.map(s => s.toUpperCase());

    return novasPalavras;
}

console.log(upperCase(['ricardo', 'manu']));