var carrinho = {
    itens: [
        { nome: "Enxada", preco: 10 },
        { nome: "Martelo", preco: 25 },
        { nome: "Pá", preco: 15 }
    ],
    total: function () {
        var soma = 0;
        for (var i = 0; i < carrinho.itens.length; i++) {
            var item = this.itens[i];
            soma += item.preco;
        }
        return soma;
    }
};
console.log("Total do carrinho: R$".concat(carrinho.total()));
