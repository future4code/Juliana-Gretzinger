// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const alturaRetangulo = prompt('Escreva a altura do retângulo')
  const larguraRetangulo = prompt('Escreva a largura do retângulo:')
  const areaRetangulo = alturaRetangulo * larguraRetangulo

  console.log('a área do retângulo é' + areaRetangulo + 'm2')

  // escreva seu código aqui
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = prompt("Escreva o ano em que estamos:)
  const anoNascimento = prompt("Escreva o ano em que você nasceu:")
  const idade = (anoAtual - anoNascimento)

  console.log("Você tem" + idade + "anos")

}

// Exercício 3
function calculaIMC() {

 const peso = prompt("Escreva o seu peso:")
 const altura = prompt("Escreva a sua altura:")
 const imc = peso / (altura x altura);

 console.log("O seu IMC é" + imc)

}

// Exercício 4
function imprimeInformacoesUsuario() {

  const nome = prompt("Escreva o seu nome:")
  const idade = prompt("Escreva a sua idade:")
  const email = prompt("Escreva o seu email:")

  console.log("Seu nome é" + nome + "você tem" + idade + "anos" + "e seu email é" + email)
  
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const frase = prompt("Escreva alguma coisa:")

  console.log(frase .toUpperCase)

}

// Exercício 7
function calculaIngressosEspetaculo() {

const valorEspetaculo = prompt("Qual é o valor do espetáculo?")
const valorIngresso = prompt("Quanto custa um ingresso?")
const quantidadeIngressos = valorEspetaculo / valorIngresso 

console.log("Precisarão ser vendidos" + quantidadeIngressos + "ingressos")


}

// Exercício 8
function checaStringsMesmoTamanho() {

  const primeiraString = prompt("Escreva algo em texto:")
  const segundaString = prompt("Escreva algo em texto, outra vez:")

  if (primeiraString > segundaString)
    console.log ("A primeira string é maior que a segunda string")
  else if (primeiraString < segundaString)
    console.log ("A primeira string é menor do que a segunda string")
  else 
  console.log ("As strings são do mesmo tamanho")

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  
  const outraPrimeiraString = prompt("Escreva algo em texto:")
  const outraSegundaString = prompt("Escreva algo em texto, de novo:")

  if (outraPrimeiraString .toLowerCase === outraSegundaString .toLowerCase)
    console.log ("As strings são iguais")
  else if
  console.log ("As strings não são iguais")

}

// Exercício 10
function checaRenovacaoRG() {
  
  const anoAtual = prompt ("Qual é o ano atual?")
  const anoNasceu = prompt ("Em que ano você nasceu?")
  const anoEmissao = prompt ("Quando foi emitida a sua carteira de identidade?")
  constRenovacao = kdk

  if (anoNasceu < 1970)

  if (anoNasceu > 1970)


}

// Exercício 11
function checaAnoBissexto() {
  
  const numeroEntrada = prompt("Digite um número:")

  if ((numeroEntrada % 400 == 0) || (numeroEntrada % 4 == 0) || (numeroEntrada % 100 == 0 && numeroEntrada % 400 != 0)
  console.log("Este ano é bissexto")
  
  else (

  console.log("Este ano não é bissexto")


}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  
  const idade = prompt("Você possui 18 anos ou mais?")
  const ensino = prompt("Você possui ensino médio completo?")
  const tempo = prompt("Você tem disponibilidade de tempo no horário do curso?")

  if (idade === "sim")
  if (ensino === "sim")
  if (tempo === "sim")
  console.log ("Parabéns! Você está apto para estudar na Labenu")
  }

{} if else (
  console.log ("Infelizmente você não está apto para estudar na Labenu")


{}