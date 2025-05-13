var usuario = {
    nome: "Ricardo",
    logado: true,
    login: function () {
        usuario.logado = true;
        console.log('Usuário logado', usuario.logado);
    },
    logout: function () {
        usuario.logado = false;
        console.log('Usuário deslogado', usuario.logado);
    }
};
usuario.login();
usuario.logout();
