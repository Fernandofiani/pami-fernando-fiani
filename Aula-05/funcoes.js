//Função que retorna tipos
function saudacao(nome) {
    return "Ola, ".concat(nome);
}
console.log(saudacao('Leandro'));
//Utilizando a interface  usuario fica assim:
function exibirUsuario(usuario) {
    console.log("nome: ".concat(usuario.nome));
    console.log("idade: ".concat(usuario.idade));
}
exibirUsuario({ nome: 'Marcos', idade: 22 });
//exemplo de uma função que retorna arrays e tem parametros opcionais
function listarNomes(nome) {
    nome.forEach(function (nome) { return console.log(nome); });
}
listarNomes(['Ana', 'Bruno', 'Carlos']);
