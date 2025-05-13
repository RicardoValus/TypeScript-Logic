function cumprimentar(nome: string, saudacao?: string): string {
    return `${saudacao || "Olá"}, ${nome}!`;
}

console.log(cumprimentar("Ricardo"));
console.log(cumprimentar("Ricardo", "Bom dia"));