// Declarações e Variaveis

//var, let e const

// var x = 10;
// console.log(x);
// var  x =20;
// console.log(x);

// if(true){
//     let nome="Fiap";
//     console.log(nome)
// }
// var pode redaclarar e acessar fora do escopo
// let nao pode nem redeclarar e nem acessar fora do escopo

// let  taxaJuros = 0.85;
// taxaJuros= 0.50;
// console.log(taxaJuros)

// var exemplo1= "Olá dev var";
// console.log(exemplo1)

// let exemplo2= "Ola dev let"
// console.log(exemplo2)

// const exemplo3="Ola dev const"
// console.log(typeof exemplo3)

// let exepmlo4=20;
// console.log(exepmlo4)

// let exemplo5 = true;
// console.log(exemplo5)

// let exemplo6={};
// console.log(typeof exemplo6)

// let exemplo7=["java","Python","C#"]
// console.log(exemplo7)

// //variavel indefinida
// let exemplo8;
// console.log(exemplo8)

// let exemplo9=null;
// console.log(exemplo9)



// const valor1=20;
// const valor2=10;

// console.log(valor1+ valor2)
// console.log(valor1/ valor2)
// console.log(valor1- valor2)
// console.log(valor1* valor2)

// //Operadores lógicos

// console.log(valor1>valor2)
// console.log(valor1 >10 && valor2 !=20 )
// console.log(valor2 < 5|| valor1 <50)

// // Operadores de comparacao

// console.log(valor1 < valor2)
// console.log(valor1 >= valor2)
// console.log(valor1 <= valor2)
// console.log(valor1 != valor2)
// console.log(valor1 == valor2)
// console.log(valor1 === valor2)
// console.log("O valor é", valor2)

// const p = 2000
// const d = 500

// let precofinal = p -d

// console.log(precofinal)

// const token=100;
// const usuarioLogado=1;
// const transacaoAutorizada= usuarioLogado === 1 && token >=10;
// console.log ("Transação agutorizada com sucesso", transacaoAutorizada)

// if(true){
//     console.log("É verdadeiro")
// }

// let nome = "Fiap";
// if(nome=="Fiap"){
//     console.log("nome verdadeiro")
// }
// else{
//     console.log("nome errado")
// }

// //if encadeado/aninhado
// let idade = 59;
// if(idade<=13){
//     console.log("É uma crança")
// }else if (idade>13 && idade <=18){
//     console.log("É um adolescente")
// }else if (idade > 18 && idade < 60){
//     console.log("É um adulto")
// }else{
//     console.log("É um idoso")
// }

// // switch case

// let times = "santos";

// switch(times){
//         case "santos":
//             console.log("Um time idoso")
//             break;
//         case "sao paulo":
//             console.log("Time panetone")
//             break;
//         case "palmeiras":
//             console.log("SEM MUNDIAL")
//             break;
//         case "corinthians":
//             console.log("timão êo")
//             break;
//         default:
//             console.log("É tão ruiim quanto a selação brasileira")
//             break;
// }

// // ternario

// let salario=100;
// let resultado = salario == 100 ? "Salário Certo" : "Salário Errado"

// // ? é if e : é else 

// let usuario="fiap"
// let userlogado=usuario ==="fiap" ?"logado com sucesso":"usuário inválido"
// console.log(userlogado);

// function verificarParImpar(numero){
//     return numero % 2 === 0 ?"par":"impar"

// }
// console.log(verificarParImpar(10))

// ESTRUTURA DE REPETICAO

// for - estrutura de repeticao utilizada quando sabemos previamente quantas vezes o codigo vai ser executado

// declação, operação, incremento

for(let i=1; i<5; i++){
    console.log("Numero", i)
}

// for para array

const linguagens = ["java", "python", "c#", "php"];

for(let i=0; i < linguagens.length ; i++){
    console.log("Linguagem", i , ":", linguagens[i])
}

const tecnologias=["JS", "HTML", "CSS"]

for(const tech of tecnologias){    // tech of tecnologias, da o apelido tech pra vairiavel
    console.log("Estudando", tech)
}

const carros ={marca: "volks", modelo: "fusca", ano: 1980}

for(let dados in carros){
    console.log(dados, ":", carros[dados]) //dados in carros, entra dentro do objeto
}

//while - diferente do for, o while não sabemos a quantidade de vezes que o código vai executar

let i =1;
while (i <5){
    console.log("contagem", i)
    i++;
}

// let numero; //declaracao de variavel indefinida

// while(numero !== "0"){
//     numero = prompt("Digite o que quiser (ou 0 para sair)")
//     console.log("eu sei o que voce digitou: ", numero)
// }

// console.log("Fim do programa")

// do while( Executa ao meons uma vez)

// utilidade = tem que escolher pra continuar, fazer opcoes por exemplo
let contador = 10;
do {
    console.log("vai executar pelo mneos uma vez")
    contador++;
}while(contador <=5)


//declaracao da variavel indefinida
let palpite;

// gerar um numero aleatorio entre 1 e 10
const sorteio =Math.floor(Math.random()*10) //math floor vai arredondar pra baixo

do{
    palpite = parseInt(prompt("Digite um numero entre 1 e 10")) //parseInt pra permitir so inteiros no prompt
    if (isNaN(palpite)){               //isNaN validacao "se nao for numero"
        alert("saindo do jogo")
        break;
    }
    if(palpite !== sorteio){
        alert("Você perdeu R$100,00")
    }
}while (palpite !== sorteio)

    if(palpite == sorteio)
        alert("Parabéns! Você acertou e ganhou R$100,00")