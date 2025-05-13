var contador = {
    valor: 1,
    incrementar: function () {
        contador.valor += 1;
        console.log('Valor incrementado', contador.valor);
    },
    zerar: function () {
        contador.valor = 0;
        console.log('Valor zerado', contador.valor);
    }
};
contador.incrementar();
contador.zerar();
