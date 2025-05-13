interface Carro {
    marca: string;
    modelo: string;
    ano: number;
}

let carro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};

console.log(carro.marca);