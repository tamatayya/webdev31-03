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

if(true){
    console.log("É verdadeiro")
}

let nome = "Fiap";
if(nome=="Fiap"){
    console.log("nome verdadeiro")
}
else{
    console.log("nome errado")
}

//if encadeado/aninhado
let idade = 59;
if(idade<=13){
    console.log("É uma crança")
}else if (idade>13 && idade <=18){
    console.log("É um adolescente")
}else if (idade > 18 && idade < 60){
    console.log("É um adulto")
}else{
    console.log("É um idoso")
}

// switch case

let times = "santos";

switch(times){
        case "santos":
            console.log("Um time idoso")
            break;
        case "sao paulo":
            console.log("Time panetone")
            break;
        case "palmeiras":
            console.log("SEM MUNDIAL")
            break;
        case "corinthians":
            console.log("timão êo")
            break;
        default:
            console.log("É tão ruiim quanto a selação brasileira")
            break;
}

// ternario

let salario=100;
let resultado = salario == 100 ? "Salário Certo" : "Salário Errado"

// ? é if e : é else 

let usuario="fiap"
let userlogado=usuario ==="fiap" ?"logado com sucesso":"usuário inválido"
console.log(userlogado);

function verificarParImpar(numero){
    return numero % 2 === 0 ?"par":"impar"

}
console.log(verificarParImpar(10))