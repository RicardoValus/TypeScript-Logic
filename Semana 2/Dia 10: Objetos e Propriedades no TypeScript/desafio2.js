var filme = {
    nome: "Velozes e furiosos",
    genero: "Corrida",
    duracao: "2hr"
};
console.log(filme);
filme.genero = "Carros";
console.log(filme);
delete filme.duracao;
console.log(filme);
