var carro = {
    marca: 'Honda',
    modelo: 'Civic',
    velocidade: 0,
    acelerar: function () {
        this.velocidade += 10;
        console.log("Acelerando... Velocidade atual: ".concat(this.velocidade, " km/h"));
    }
};
carro.acelerar();
carro.acelerar();
