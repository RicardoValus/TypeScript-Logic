const livro: {
    titulo: string;
    autor: string;
    anoPublicacao: number;
    preco?: number;
} = {
    titulo: 'Verity',
    autor: 'Colen',
    anoPublicacao: 1994
};

console.log(livro);

livro.preco = 50;

console.log(livro);