const aluno = {
    nome: "Ricardo",
    nota1: 25,
    nota2: 30,
    mediaNota: 0,

    media() {
        aluno.mediaNota = (aluno.nota1 + aluno.nota2) / 2;
        console.log(aluno.mediaNota);
    }
}

aluno.media();
