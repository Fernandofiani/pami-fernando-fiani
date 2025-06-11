class Livro{
   titulo : string;
       autor : string;    
       anoPublicacao : number;

       constructor(titulo:string,autor:string,anoPublicacao:number){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
       }
    }

        let titulo = "Dom Casmurro";
    let autor = "Machado de Assis";
    let anoPublicacao = 1899;
    let NovoLivro = new Livro (titulo,autor,anoPublicacao);

    function ExibirLivro1(){
        console.log(NovoLivro);
    }

    ExibirLivro1();