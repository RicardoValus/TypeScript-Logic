const carro = {
    marca: 'Honda',
    modelo: 'Civic',
    velocidade: 0,

    acelerar() {
        this.velocidade += 10;
        console.log(`Acelerando... Velocidade atual: ${this.velocidade} km/h`);
    }
};

carro.acelerar();
carro.acelerar();
