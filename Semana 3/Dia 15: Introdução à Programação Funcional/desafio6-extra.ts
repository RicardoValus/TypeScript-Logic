// Desenvolva uma função chamada filtrarEOrdenar que receba um array de objetos representando produtos, e retorne uma nova lista com apenas os produtos cujo preço seja maior que 50, ordenados do mais barato para o mais caro.

// 📌 Regras:

//     Não modifique o array original.

//     Use funções puras e imutabilidade.

//     Evite qualquer uso de variáveis globais.

type Produto = {
    nome: string;
    preco: number;
};

function filtrarEOrdenar(produtos: Produto[]): Produto[] {
    // 1. Filtra os produtos com preço maior que 50
    const filtrados = produtos.filter(produto => produto.preco > 50);

    // 2. Cria uma nova lista ordenada pelo preço (menor para maior)
    const ordenados = [...filtrados].sort((a, b) => a.preco - b.preco);

    return ordenados;
}

// Testando a função
const listaOriginal: Produto[] = [
    { nome: "Camiseta", preco: 30 },
    { nome: "Tênis", preco: 120 },
    { nome: "Boné", preco: 60 },
    { nome: "Meia", preco: 20 },
    { nome: "Jaqueta", preco: 200 }
];

const resultado = filtrarEOrdenar(listaOriginal);

console.log("Original:", listaOriginal); // Imutável
console.log("Resultado:", resultado);    // Filtrado e ordenado
