/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// exercício 8 

if (Number(carta1.valor === 11) && Number(carta2.valor === 11)) {

console.log("O somatório das duas cartas do USUÁRIO não pode ser maior que 21. Um novo sorteio será realizado.")

const terceiroSorteio = comprarCarta()
const terceiroSorteio2 = comprarCarta()
const somatorioTerceiroSorteioUsuario = (Number(terceiroSorteio.valor) + Number(terceiroSorteio2.valor))
      
console.log("No novo sorteio, PRIMEIRA carta tirada pelo USUÁRIO foi: " + (terceiroSorteio.texto) + " e vale " + (terceiroSorteio.valor) + " pontos.")
console.log("No novo sorteio, SEGUNDA carta tirada pelo USUÁRIO foi: " + (terceiroSorteio2.texto) + " e vale " + (terceiroSorteio2.valor) + " pontos.")
console.log(`O somatório do USUÁRIO neste sorteio foi: ${somatorioTerceiroSorteioUsuario} pontos.`)


}

if (Number(cartaComputador.valor === 11) && Number(carta2Computador.valor === 11)) {

   console.log("O somatório das duas cartas do COMPUTADOR não pode ser maior que 21. Um novo sorteio será realizado.")

   const terceiroSorteioComputador = comprarCarta()
   const terceiroSorteio2Computador = comprarCarta()
   const somatorioTerceiroSorteioComputador = (Number(terceiroSorteioComputador.valor) + Number(terceiroSorteio2Computador))

   console.log("No novo sorteio, a PRIMEIRA carta tirada pelo COMPUTADOR foi: " + (terceiroSorteioComputador.texto) + " e vale " + (terceiroSorteioComputador.valor) + " pontos.")
   console.log("No novo sorteio, a SEGUNDA carta tirada pelo COMPUTADOR foi: " + (terceiroSorteio2Computador.texto) + " e vale " + (terceiroSorteio2Computador.valor) + " pontos.")
   console.log(`O somatório do COMPUTADOR neste sorteio foi: ${somatorioTerceiroSorteioComputador} pontos.`)
}

// exercício 9 

// mostra as duas cartas tiradas pelo usuário + a primeira carta do computador. 
// pergunta se o usuário deseja comprar uma nova carta. 

console.log(`Essas foram as cartas do USUÁRIO nesta rodada: ${carta.texto}, ${carta2.texto}`)
console.log(`Essa foi a primeira carta do COMPUTADOR nesta rodada: ${cartaComputador.texto}, ${carta2Computador.texto}`)

if (window.confirm) {
	`As cartas do USUÁRIO nesta rodada: ${carta.texto}, ${carta2.texto}. A primeira carta do COMPUTADOR é ${cartaComputador.texto}` +
	"\n" +  
	"USUÁRIO, deseja comprar mais uma carta?"
}

// exercício 10 

// a cada carta comprada pelo usuário, seu valor é somado ao das outras cartas. >> 
// o usuário pode comprar quantas cartas quiser, até chegar ao somatório de 21. 
// se suas cartas somarem 21, o usuário perde.

// assim que o usuário chegar no limite da pontuação, a mensagem de fim de jogo deve ser mostrada, 
// indicando quem venceu. 
// usar confirm e alert >>> confirm quando for fazer uma PERGUNTA, e alert apenas para emitir um AVISO

/* "Quer iniciar uma nova rodada?"
 //Responde ok 

"Suas cartas são 3♣️ J♥️. A carta revelada do computador é Q♠️."
"Deseja comprar mais uma carta?"
//Responde ok 

"Suas cartas são 3♣️ J♥️ 5♣️ . A carta revelada do computador é Q♠️." 
"Deseja comprar mais uma carta?"
//Responde ok//

//Mensagem de fim de jogo 
"Suas cartas são 3♣️ J♥️ 5♣️ 4♣️ . Sua pontuação é 22."
"As cartas do computador são Q♠️ K♦️ . A pontuação do computador é 20." 
"O computador ganhou!" ()*/

const cartaNova = comprarCarta()
const somatorio = Number(cartaNova.valor) + Number(carta.valor) + Number(carta2.valor)

// fazer um array de cartas? 

if (somatorio >= 21) {

   alert("A soma das cartas do USUÁRIO foi 21 ou mais. O COMPUTADOR venceu,")

}

else {

   comprarCarta()

   if ((somatorio >= 21)){

   }
}


