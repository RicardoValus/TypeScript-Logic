function modificarSaldo(contaBancaria, novoSaldo) {
    contaBancaria.saldo = novoSaldo;
}
var contaBancaria = {
    titular: 'Ricardo',
    saldo: 10
};
console.log('antes', contaBancaria);
modificarSaldo(contaBancaria, 500);
console.log('modificado', contaBancaria);
