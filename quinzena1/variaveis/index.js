/* exercícios de interpretação de código

exercício 1: o que vai aparecer no console quando esse código for rodado?

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b) 

resposta: (10, 5)

exercício 2: o que vai aparecer no console quando esse código for rodado?

let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c)

resposta: (10, 10, 10)

exercício 3: sugira melhores nomes para as variáveis:

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

p = horasTrabalhadas
t = salarioDia

exercícios de escrita de código: 

exercício 1: */ 

//let nome
//let idade 

//console.log (typeof nome)
//console.log (typeof idade)

// o tipo undefined é impresso pois não foram definidos valores para as variáveis

let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é a sua idade?")

console.log ("Olá", nome, "você tem", idade, "anos")
