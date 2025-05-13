const produtos = [
    { nome: "Camisa", preco: 35 },
    { nome: "Meia", preco: 10 },
    { nome: "Jaqueta", preco: 80 },
];

const produtosFiltrados = produtos.filter(produto => produto.preco > 30);
const produtosMapeados = produtos.map(produto => produto.nome);

console.log(produtosFiltrados);
console.log(produtosMapeados);