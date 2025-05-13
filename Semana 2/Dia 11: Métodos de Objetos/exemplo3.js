var contaBancaria = {
    titular: "Ricardo",
    saldo: 1000,
    depositar: function (valor) {
        this.saldo += valor;
        console.log("Dep\u00F3sito de R$".concat(valor, " realizado. Novo saldo: R$").concat(this.saldo));
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
        }
        else {
            this.saldo -= valor;
            console.log("Saque de R$".concat(valor, " realizado. Novo saldo: R$").concat(this.saldo));
        }
    }
};
contaBancaria.depositar(500);
contaBancaria.sacar(300);
contaBancaria.sacar(1500);
