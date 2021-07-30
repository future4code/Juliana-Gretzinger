// INTERPRETAÇÃO

// exercício 1 

/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

>>>>> a) o que será impresso no console?

>>>>> RESPOSTA: 

Matheus Nachtergaele
Virginia Cavendish
canal: "Globo"
horario: "14h"

// exercício 2

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

a) O que vai ser impresso no console?

{
nome: "Juca",
idade: 3,
raca: "SRD"
}
{
nome: "Juba",
idade: 3,
raca: "SRD"
}
{
nome: "Jubo",
idade: 3,
raca: "SRD"
} 

b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

>>> a sintaxe spread copia as propriedades de um objeto, sem copiar o objeto em si.
    dessa forma, o objeto pode ter os valores de suas propriedades alteradas. 


 // ESCRITA DE CÓDIGO

// exercício 1 

// a)

const pessoa = {

    nome: "Gabriela",
    apelidos: ["Gabi", "Gab", "Bibi"]
}

function saudacao () { 

console.log(`Olá, o meu nome é ${pessoa.nome}, mas você pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ou ${pessoa.apelidos[2]}`)

}

saudacao()


// b) 

const novosApelidos = {
...pessoa,
apelidos: ["Bi", "Ga", "Bibinha"]

}

saudacao(novosApelidos)
console.log(saudacao)



// exercício 2 

const primeiraPessoa = {

    nome: "Paula",
    idade: 27,
    profissao: "bióloga"

}

const segundaPessoa = {
    
    nome: "Carolina",
    idade: 27,
    profissao: "veterinária"

}

const primeiroArray = []
const segundoArray = []

function primeiraFuncao(primeiraPessoa) {

    primeiroArray.push(primeiraPessoa.nome)
    primeiroArray.push(primeiraPessoa.nome.lenght)
    primeiroArray.push(primeiraPessoa.idade)
    primeiroArray.push(primeiraPessoa.profissao)
    primeiroArray.push(primeiraPessoa.profissao.lenght)
}

function segundaFuncao(segundaPessoa) {

    segundoArray.push(segundaPessoa.nome)
    segundoArray.push(segundaPessoa.nome.lenght)
    segundoArray.push(segundaPessoa.idade)
    segundoArray.push(segundaPessoa.profissao)
    segundoArray.push(segundaPessoa.profissao.lenght)

}   

primeiraFuncao()
segundaFuncao()

console.log(primeiroArray)
console.log(segundoArray)



// exercício 3

const carrinho = []

const fruta1 = {

    nome: "morango",
    disponibilidade: true
}

const fruta2 = {

    nome: "abacaxi",
    disponibilidade: true
}

const fruta3 = {

    nome: "laranja",
    disponibilidade: true

}

function frutas() {

carrinho.push(fruta1)
carrinho.push(fruta2)
carrinho.push(fruta3)

} 

frutas() 
console.log(carrinho)

*/
