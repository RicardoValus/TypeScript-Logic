const estoque = {
    produtos: [
        { nome: 'Chaleira', quantidade: 2 },
        { nome: 'Enxada', quantidade: 3 }
    ],

    adicionarProduto(nome: string, qtd: number) {

        const produto = this.produtos.find(p => p.nome === nome);

        if (produto) {
            produto.quantidade += qtd;
            console.log(`${qtd} unidades adicionadas ao produto existente: ${nome}`);
        } else {
            this.produtos.push({ nome, quantidade: qtd });
            console.log(`Novo produto adicionado: ${nome} (${qtd} unidades)`);
        }

        console.log('Add Estoque atualizado', estoque.produtos);
    },

    removerProduto(nome: string, qtd: number) {
        const produto = this.produtos.find(p => p.nome === nome);

        if (produto && produto.quantidade > qtd) {
            produto.quantidade -= qtd;
            console.log(`${qtd} unidades removidas ao produto existente: ${nome}`);
        } else {
            console.log('Quantidade insuficiente para remover ou não existe');
        }

        console.log('Rm Estoque atualizado', estoque.produtos);
    },
}

estoque.adicionarProduto('Colher', 2);
estoque.adicionarProduto('Enxada', 10);
estoque.removerProduto('Chaleira', 1);
estoque.removerProduto('Enxada', 50);