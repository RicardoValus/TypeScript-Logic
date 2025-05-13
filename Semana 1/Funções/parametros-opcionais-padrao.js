function cumprimentar(nome, saudacao) {
    return "".concat(saudacao || "Olá", ", ").concat(nome, "!");
}
console.log(cumprimentar("Ricardo"));
console.log(cumprimentar("Ricardo", "Bom dia"));
