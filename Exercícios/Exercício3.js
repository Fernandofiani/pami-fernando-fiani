var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    return Livro;
}());
var titulo = "Dom Casmurro";
var autor = "Machado de Assis";
var anoPublicacao = 1899;
var NovoLivro = new Livro(titulo, autor, anoPublicacao);
function ExibirLivro1() {
    console.log(NovoLivro);
}
ExibirLivro1();
