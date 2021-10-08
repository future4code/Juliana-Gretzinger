// INTERPRETAÇÃO:

/* exercício 1 


a) testa se um número é par ou ímpar
b) números pares
c) números ímpares


// exercício 2 

a) o código funciona como uma lista dos produtos disponíveis e seus preços
b) a mensagem impressa no console será: "O preço da fruta maçã é R$ 2,25"
c)


// exercício 3 

a) a primeira linha do código pede que o usuário digite um número, convertendo esse número de string para number, e armazenando este valor em uma variável.
b) se o número inserido fosse 10, a mensagem impressa seria: "Esse número passou no teste". 
c)


*/


// ESCRITA DE CÓDIGO: 

// exercício 1

const idadeUsuario = prompt("Digite a sua idade:")

if (Number(idadeUsuario >= 18)) {

    console.log("Você pode dirigir!")

} else { 

    console.log("Você não pode dirigir!")

}

// exercício 2

const turnoUsuario = prompt("Em qual turno você estuda? Digite M para manhã, V para vespertino e N para noturno:")

if (turnoUsuario  === "M") {

    console.log("Bom dia!!!")

} if (turnoUsuario === "V")

    console.log("Boa tarde!!!")

if (turnoUsuario === "N") {

    console.log("Boa noite!!!")

} else { 

    console.log("Você precisa digitar: M, N ou V.")
}

// exercício 3

const turnoUsuario2 

switch (turnoUsuario2) {

    case "M":
        console.log("Bom dia!!!")
        break
    case "V":
        console.log("Boa tarde!!!")
        break    
    case "N":
        console.log("Boa noite!!!")
        break
    default: 
    console.log("Você precisa digitar: M, N ou V.")

}

// exercício 4

// só filme genero fantasia ingresso até 15 reais

const generoFilme = prompt("Qual o gênero do filme que vocês vão ver?") 
const valorIngresso = prompt("Quanto custa o ingresso?")

if (generoFilme.toLowerCase === "fantasia" && valorIngresso < Number(valorIngresso < 15)) {

    console.log("Bom filme!!!")

} else {

    console.log("Escolha outro filme!!! :(")

}

// DESAFIOS

// exercício 1 

const generoFilme = prompt("Qual o gênero do filme que vocês vão ver?") 
const valorIngresso = prompt("Quanto custa o ingresso?")


if (generoFilme.toLowerCase === "fantasia" && valorIngresso < Number(valorIngresso < 15)) {

    const lanchinho = prompt("Qual lanchinho você vai comer durante o filme?")

        if (lanchinho === "pipoca")

        console.log("Bom filme!!!")
        console.log("E aproveite a sua pipoquinha :))")

        if (lanchinho != "pipoca") {

            console.log("Bom filme!!!")
            console.log(`E aproveite o/a ${lanchinho} :))`)
        }

} else {

    console.log("Escolha outro filme!!! :(")

}


