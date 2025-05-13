function encontrarNumeroPar(numeros: Array<number>) {

    numeros.forEach(num => {
        if(num % 2 === 0){
            console.log(num);
        }
    });

};

let valores: Array<number> = [1, 2, 3, 4];

encontrarNumeroPar(valores);