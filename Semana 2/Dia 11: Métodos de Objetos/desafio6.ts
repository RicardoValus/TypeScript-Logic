const carro = {
    marca: 'Chevrolet',
    modelo: 'Prisma',
    velocidade: 0,
    ligado: false,
    ligar() {
        if (carro.ligado == false) {
            carro.ligado = true;
            console.log('Ligou o carro');
        }
    },
    desligar() {
        if (carro.ligado == true) {
            carro.ligado = false;
            console.log('Desligou o carro');
        }
    },
    acelerar() {
        if (carro.ligado === true) {
            carro.velocidade += 10;
        }
    },
    status() {
        console.log('Status do carro', 'velocidade', carro.velocidade, 'ligado', carro.ligado);
    }
}

carro.ligar();
carro.acelerar();
carro.status();
carro.desligar();