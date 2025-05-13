const lampada = {
    ligada: false,

    alternar() {
        if (lampada.ligada === false) {
            lampada.ligada = true
            console.log('Ligou a lampada');
        } else {
            lampada.ligada = false
            console.log('Desligou a lampada');
        }
    }
};

lampada.alternar();
lampada.alternar();