var pessoa = {
    nome: "Ricardo",
    idade: 21
};
function ola() {
    console.log("Ol\u00E1, ".concat(pessoa.nome, ", voc\u00EA tem ").concat(pessoa.idade, " anos!"));
}
ola();
