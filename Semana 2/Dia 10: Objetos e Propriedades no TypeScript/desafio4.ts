const carrinho = {
    itens: [
        { nome: "Enxada", preco: 10 },
        { nome: "Martelo", preco: 25 },
        { nome: "Pá", preco: 15 }
    ],
    total() {
        let soma = 0;

        for (let i = 0; i < carrinho.itens.length; i++) {
            const item = this.itens[i];
            soma += item.preco;
        }

        return soma;
    }
};

console.log(`Total do carrinho: R$${carrinho.total()}`);