const cadastro = {
    usuarios: [
        { nome: "Ricardo", idade: 21, email: "Ricardo@email.com" },
        { nome: "Manu", idade: 21, email: "Manu@email.com" },
        { nome: "Tedro", idade: 21, email: "Tedro@email.com" },
    ],

    adicionarUsuario(nome: string, idade: number, email: string) {
        const usuario = this.usuarios.find(u => u.nome === nome);

        if (usuario) {
            console.log('Este usuário já existe');
        } else {
            this.usuarios.push({ nome, idade, email });
            console.log(`Novo usuário adicionado: ${nome}, ${idade}, ${email}`);
        }

        console.log('Add Cadastro atualizado', cadastro.usuarios);
    },

    removerUsuario(nome) {
        const index = this.usuarios.findIndex(u => u.nome === nome);

        if (index !== -1) {
            this.usuarios.splice(index, 1);
            console.log(`Usuário ${nome} removido com sucesso.`);
        } else {
            console.log(`Usuário ${nome} não encontrado.`);
        }
        console.log('Cadastro atualizado:', this.usuarios);
    }


}

cadastro.adicionarUsuario('Tereza', 40, 'Tereza@email.com');
cadastro.adicionarUsuario('Pedro', 50, 'Pedro@email.com');
cadastro.removerUsuario('Tedro');