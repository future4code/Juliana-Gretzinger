// *** INTERPRETAÇÃO DE CÓDIGO ***

// exercício 1: diga o que será impresso em cada console:

/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

console 1: false
console 2: false
console 3: true
console : boolean 



exercício 2: por que o código não funciona direito?
 
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = (primeiroNumero + segundoNumero)

console.log(soma)

RESPOSTA: o código, ao invés de somar os valores inseridos, está concatenando eles. 
isso ocorre porque o comando prompt sempre vai retonar uma variável do tipo STRING, ao invés de NUMBER 
(que é o tipo certo para realizar operações aritméticas)


exercício 3: para o código anterior, sugira uma conversão para que ocorra a soma dos valores inseridos. 

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

function adicao () {
    let soma = parseInt(primeiroNumero) + parseInt(segundoNumero)
}

const soma = (primeiroNumero + segundoNumero)
console.log(soma)

// *** ESCRITA DE CÓDIGO*** 

// exercício 1 */ 

//let idade1 = parseInt(prompt("Qual é a sua idade?")
//let idade2 = parseInt(prompt("Qual é idade do seu melhor amigo?")
//console.log

// exercício 2

//numeroInicial = parseInt(prompt("Digite um número par:"))

//console.log = (numeroInicial % 2)

// exercício 3

/*let idade = parseInt(prompt("Qual é a sua idade?"))

idadeMeses = parseInt(idade * 12) // 12 = meses em 1 ano
idadeDias = parseInt(idade * 365) // 365 = dias em 1 ano
idadeHoras = parseInt(idade * 8760) // 24 x 365 = 8760 horas em 1 ano

console.log("A sua idade é:" , idade, "anos")
console.log("A sua idade em meses é:" , idadeMeses, "meses")
console.log("A sua idade em dias é:" , idadeDias, "dias")
console.log("A sua idade em horas é:" , idadeHoras, "horas")

// exercício 4:

let primeiroNumero = parseInt(prompt("Digite um número:"))
let segundoNumero = parseInt(prompt("Digite um outro número:"))

console.log(
    "O primeiro número é maior que o segundo?",
        (primeiroNumero > segundoNumero)
    )

console.log(
    "O primeiro número é igual ao segundo?",
        (primeiroNumero === segundoNumero)
)

console.log(
    "o primeiro número é divisível pelo segundo número?",
        (primeiroNumero % segundoNumero === 0)
)

console.log(
    "o segundo número é divisível pelo primeiro número?",
    (segundoNumero % primeiroNumero === 0)
)


