const usuario = {
    nome: "Ricardo",
    logado: true,
    login() {
        usuario.logado = true;
        console.log('Usuário logado', usuario.logado);
    },
    logout() {
        usuario.logado = false;
        console.log('Usuário deslogado', usuario.logado);
    }
}

usuario.login();
usuario.logout();