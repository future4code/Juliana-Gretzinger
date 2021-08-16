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

console.log("Que bom que você veio jogar Blackjack!")
console.log("                     BOA SORTE!!!!!!!!                    ")

if (window.confirm("Deseja iniciar uma nova rodada?")) {

const carta = comprarCarta()
const carta2 = comprarCarta()
  
   console.log("A primeira carta tirada pelo USUÁRIO é: " + (carta.texto) + " e vale " + (carta.valor) + " pontos.")
   console.log("A segunda carta tirada pelo USUÁRIO é: " + (carta2.texto) + " e vale " + (carta2.valor) + " pontos.")


const somatorioUsuario = (Number(carta.valor) + Number(carta2.valor))

   console.log (`O USUÁRIO somou ${somatorioUsuario} pontos.`)

const cartaComputador = comprarCarta()
const carta2Computador = comprarCarta()

   console.log("A primeira carta tirada pelo COMPUTADOR é: " + (cartaComputador.texto) + " e vale " + (cartaComputador.valor) + " pontos.")
   console.log("A segunda carta tirada pelo COMPUTADOR é: " + (carta2Computador.texto) + " e vale " + (carta2Computador.valor) + " pontos.")
      
const somatorioComputador = (Number(cartaComputador.valor) + Number(carta2Computador.valor))
   console.log(`O COMPUTADOR somou ${somatorioComputador} pontos.`)


   if (somatorioUsuario > somatorioComputador) {
      console.log (">>>>>>>> O USUÁRIO VENCEU <<<<<<<<")
   }

  if (somatorioComputador > somatorioUsuario) {
     console.log (">>>>>>>> O COMPUTADOR VENCEU <<<<<<<<")
  }

  if (somatorioComputador === somatorioUsuario) {
     console.log(">>>>>>>> O USUÁRIO E O COMPUTADOR EMPATARAM")
  }


} else {
      
   console.log("O jogo acabou")

   }