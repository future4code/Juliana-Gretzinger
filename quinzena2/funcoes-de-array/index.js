// INTERPRETAÇÃO

// ESCRITA DE CÓDIGO

// exercício 1 

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 // a) crie um novo array só com os nomes dos doguinhos: 

 function extrairNome(pets){
    return pets.nome
    }

 const nomeDosPets = pets.map(extrairNome)
 console.log(nomeDosPets)

 // b) crie um novo array apenas com os doguin salsicha:

 function salsichinhas(pets){ 
 if (raca === "Salsicha")
     return salsichinhas
 }

 let dogsSalsicha = pets.filter(salsichinhas)
 console.log(dogsSalsicha)

 // c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
 // A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

 function poodles(pets){
     if (raca === "Poodle")
     return poodles
 }

 let dogsPoodle = pets.filter(poodles)
 let primeiroPoodle = "Madame"
 let segundoPoodle = "Fluffy"

 if (poodles === "Madame") {

    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${primeiroPoodle}!`)
 }

 if (poodles === "Fluffy") {

    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${segundoPoodle}!`)
 }

 
// exercício 2 

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // a) crie um array que contenha apenas o nome de cada item:

 function extraiNomeProdutos(produtos) { 
    return produtos.nome
 }

 let nomeProdutos = produtos.map(extraiNomeProdutos)
 console.log(nomeProdutos)

 // b) crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

 let descontoProdutos = (valor, index, array) => {
     let valorSemDesconto = valor.preco
     let valorDeDesconto = valorSemDesconto * 0.05
     let valorFinal = valorSemDesconto - valorDeDesconto

     return valorFinal.toFixed(2)
 }

 let variavelDesconto = produtos.filter(descontoProdutos)
 console.log(variavelDesconto)


// c) crie um novo array que contenha apenas os objetos da categoria bebidas:

function extraiBebidas(produtos) 
    if (categoria === "Bebidas") {
        return extraiBebidas
}

let bebidas = produtos.filter(extraiBebidas)
console.log(bebidas)

