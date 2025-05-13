var carro = {
    marca: 'Chevrolet',
    modelo: 'Prisma',
    velocidade: 0,
    ligado: false,
    ligar: function () {
        if (carro.ligado == false) {
            carro.ligado = true;
            console.log('Ligou o carro');
        }
    },
    desligar: function () {
        if (carro.ligado == true) {
            carro.ligado = false;
            console.log('Desligou o carro');
        }
    },
    acelerar: function () {
        if (carro.ligado === true) {
            carro.velocidade += 10;
        }
    },
    status: function () {
        console.log('Status do carro', 'velocidade', carro.velocidade, 'ligado', carro.ligado);
    }
};
carro.ligar();
carro.acelerar();
carro.status();
carro.desligar();
