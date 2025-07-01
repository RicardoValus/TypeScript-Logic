// Desenvolva uma função chamada filtrarEOrdenar que receba um array de objetos representando produtos, e retorne uma nova lista com apenas os produtos cujo preço seja maior que 50, ordenados do mais barato para o mais caro.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function filtrarEOrdenar(produtos) {
    // 1. Filtra os produtos com preço maior que 50
    var filtrados = produtos.filter(function (produto) { return produto.preco > 50; });
    // 2. Cria uma nova lista ordenada pelo preço (menor para maior)
    var ordenados = __spreadArray([], filtrados, true).sort(function (a, b) { return a.preco - b.preco; });
    return ordenados;
}
// Testando a função
var listaOriginal = [
    { nome: "Camiseta", preco: 30 },
    { nome: "Tênis", preco: 120 },
    { nome: "Boné", preco: 60 },
    { nome: "Meia", preco: 20 },
    { nome: "Jaqueta", preco: 200 }
];
var resultado = filtrarEOrdenar(listaOriginal);
console.log("Original:", listaOriginal); // Imutável
console.log("Resultado:", resultado); // Filtrado e ordenado
