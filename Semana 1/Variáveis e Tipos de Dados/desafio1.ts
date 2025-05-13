let carro: { marca: string; modelo: string; ano: number; automatico: boolean } = {
    marca: "Chevrolet",
    modelo: "Prisma",
    ano: 2010,
    automatico: false
}


let frutas: string[] = ["Uva", " Maracuja", " Morango", " Tomate"];

console.log(`Carro: ${JSON.stringify(carro)}, Frutas: ${frutas}`);
