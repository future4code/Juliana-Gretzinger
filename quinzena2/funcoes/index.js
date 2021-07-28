
// ESCRITA DE CÓDIGO 

// exercício 1 

 /*unction sobreMim () {
    console.log("Eu sou a Juliana, tenho 27 anos, moro no Rio de Janeiro e sou artista visual")

 }

 function sobreMimDiferente () {

    let nome = 'Juliana'
    let idade = 27
    let cidade = 'Rio de Janeiro'
    let profissao = 'artista visual'

    console.log(`Eu sou ${nome}, tenho ${idade} anos, vivo no ${cidade} e sou ${profissao}`)*/

 //}

 // exercício 2 - escreva as seguintes funções: 

 // a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função,
// faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

  /*function primeiraFuncao () {
    let primeiroNumero = 10
    let segundoNumero = 30

    let soma = primeiroNumero + segundoNumero

    return soma*/

  

  //primeiraFuncao()
  //console.log(soma)

  // b) Faça uma função que recebe 2 números 
  // e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

  /*function segundaFuncao () {

    let primeiroNumero = 50
    let segundoNumero = 25

    let maiorQue = (primeiroNumero > segundoNumero)
    console.log(maiorQue)*/

  //}

  // c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.

  /*function terceiraFuncao () {
      let numero = 24
      let parOuImpar = (numero % 2 === 0)
      console.log(parOuImpar)*/
    
  //}

  // d) Faça uma função que recebe uma mensagem (`string`) 
  // como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

/* function quartaFuncao () {

     let mensagem = ("Essa é a mensagem de teste para o exercício")
     console.log(mensagem.lenght)
     console.log(mensagem.toUpperCase)*/
 //}


 // exercício 3 

 // Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
 // Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores 
 // inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações.

 let primeiroValor = Number(prompt("Digite um número:"))
 let segundoValor = Number(prompt("Digite outro número:"))

 function soma () {

    let numero1 = primeiroValor
    let numero2 = segundoValor
   
    let som = (numero1 + numero2)
 }

 function subtracao () {

    let numero1 = primeiroValor
    let numero2 = segundoValor

    let sub = (numero1 - numero2)

 }

 function multiplicacao () {
    let numero1 = primeiroValor
    let numero2 = segundoValor

    let multi = (numero1 * numero2)
 }

function divisao () {
    let numero1 = primeiroValor
    let numero2 = segundoValor
    let div = (numero1 / numero2)
}

soma (primeiroValor, segundoValor)
subtracao (primeiroValor, segundoValor)
multiplicacao (primeiroValor, segundoValor)
divisao (primeiroValor, segundoValor)

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
