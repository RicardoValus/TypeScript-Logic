interface Aluno {
    nome: string;
    idade: number;
    curso?: string; //só da para deletar uma propriedade se ela for opcional
    notaFinal: number;
}

let aluno: Aluno = {
    nome: 'Ricardo',
    idade: 20,
    curso: 'ADS',
    notaFinal: 100
}

delete aluno.curso;

console.log(aluno);