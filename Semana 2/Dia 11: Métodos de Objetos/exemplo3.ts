const contaBancaria = {
    titular: "Ricardo",
    saldo: 1000,

    depositar(valor: number) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    },

    sacar(valor: number) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        }
    }
};

contaBancaria.depositar(500);
contaBancaria.sacar(300);
contaBancaria.sacar(1500);