var cadastro = {
    usuarios: [
        { nome: "Ricardo", idade: 21, email: "Ricardo@email.com" },
        { nome: "Manu", idade: 21, email: "Manu@email.com" },
        { nome: "Tedro", idade: 21, email: "Tedro@email.com" },
    ],
    adicionarUsuario: function (nome, idade, email) {
        var usuario = this.usuarios.find(function (u) { return u.nome === nome; });
        if (usuario) {
            console.log('Este usuário já existe');
        }
        else {
            this.usuarios.push({ nome: nome, idade: idade, email: email });
            console.log("Novo usu\u00E1rio adicionado: ".concat(nome, ", ").concat(idade, ", ").concat(email));
        }
        console.log('Add Cadastro atualizado', cadastro.usuarios);
    },
    removerUsuario: function (nome) {
        var index = this.usuarios.findIndex(function (u) { return u.nome === nome; });
        if (index !== -1) {
            this.usuarios.splice(index, 1);
            console.log("Usu\u00E1rio ".concat(nome, " removido com sucesso."));
        }
        else {
            console.log("Usu\u00E1rio ".concat(nome, " n\u00E3o encontrado."));
        }
        console.log('Cadastro atualizado:', this.usuarios);
    }
};
cadastro.adicionarUsuario('Tereza', 40, 'Tereza@email.com');
cadastro.adicionarUsuario('Pedro', 50, 'Pedro@email.com');
cadastro.removerUsuario('Tedro');
