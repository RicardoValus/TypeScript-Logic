var bibliotera = [
    {
        titulo: 'Verity',
        autor: 'Ricardo',
        publicação: { ano: 2004, editora: 'Turvense' }
    },
    {
        titulo: 'Um de nós está mentindo',
        autor: 'Marco',
        publicação: { ano: 2008, editora: 'Turvense' }
    },
    {
        titulo: 'Naruto',
        autor: 'Japa',
        publicação: { ano: 2002, editora: 'Japonesa' }
    }
];
function buscarLivrosPorAutor(biblioteca, autor) {
    return biblioteca.filter(function (livro) { return livro.autor.toLowerCase() === autor.toLowerCase(); });
}
console.log(buscarLivrosPorAutor(bibliotera, 'Ricardo'));
