var produtos = [
    { nome: "Camisa", preco: 35 },
    { nome: "Meia", preco: 10 },
    { nome: "Jaqueta", preco: 80 },
];
var produtosFiltrados = produtos.filter(function (produto) { return produto.preco > 30; });
var produtosMapeados = produtos.map(function (produto) { return produto.nome; });
console.log(produtosFiltrados);
console.log(produtosMapeados);
