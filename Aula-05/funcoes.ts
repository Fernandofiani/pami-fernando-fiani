//Função que retorna tipos
function saudacao(nome :String ): string{

    return `Ola, ${nome}`;
}
console.log(saudacao('Leandro'));
 
//Interface para objeto usuário
interface usuario{
    nome:string;
    idade:number;
    email?:String;
}

//Utilizando a interface  usuario fica assim:

function exibirUsuario(usuario: usuario):void{
    console.log(`nome: ${usuario.nome}`);
    console.log(`idade: ${usuario.idade}`)


}

exibirUsuario({nome: 'Marcos', idade: 22});


//exemplo de uma função que retorna arrays e tem parametros opcionais

function listarNomes(nome: string[]):void{
    nome.forEach(nome => console.log(nome));
}   

listarNomes(['Ana','Bruno','Carlos'])