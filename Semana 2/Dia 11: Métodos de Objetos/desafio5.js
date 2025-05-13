var estoque = {
    produtos: [
        { nome: 'Chaleira', quantidade: 2 },
        { nome: 'Enxada', quantidade: 3 }
    ],
    adicionarProduto: function (nome, qtd) {
        var produto = this.produtos.find(function (p) { return p.nome === nome; });
        if (produto) {
            produto.quantidade += qtd;
            console.log("".concat(qtd, " unidades adicionadas ao produto existente: ").concat(nome));
        }
        else {
            this.produtos.push({ nome: nome, quantidade: qtd });
            console.log("Novo produto adicionado: ".concat(nome, " (").concat(qtd, " unidades)"));
        }
        console.log('Add Estoque atualizado', estoque.produtos);
    },
    removerProduto: function (nome, qtd) {
        var produto = this.produtos.find(function (p) { return p.nome === nome; });
        if (produto && produto.quantidade > qtd) {
            produto.quantidade -= qtd;
            console.log("".concat(qtd, " unidades removidas ao produto existente: ").concat(nome));
        }
        else {
            console.log('Quantidade insuficiente para remover ou não existe');
        }
        console.log('Rm Estoque atualizado', estoque.produtos);
    },
};
estoque.adicionarProduto('Colher', 2);
estoque.adicionarProduto('Enxada', 10);
estoque.removerProduto('Chaleira', 1);
estoque.removerProduto('Enxada', 50);
