function modificarSaldo(contaBancaria: { titular: string, saldo: number }, novoSaldo: number) {
    contaBancaria.saldo = novoSaldo;
}

let contaBancaria = {
    titular: 'Ricardo',
    saldo: 10
}

console.log('antes', contaBancaria);

modificarSaldo(contaBancaria, 500);

console.log('modificado', contaBancaria.saldo);