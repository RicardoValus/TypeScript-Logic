const contador = {
    valor: 1,
    incrementar() {
        contador.valor += 1;
        console.log('Valor incrementado', contador.valor);
    },

    zerar() {
        contador.valor = 0;
        console.log('Valor zerado', contador.valor);
    }
}

contador.incrementar();
contador.zerar();