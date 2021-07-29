// *** exercícios de interpretação de código *** 

// exercício 1 

/* a) undefined 
   b) null
   c) 11
   d) 13 
   e) array (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12]
   f) 9
   
 // exercício 2 

 resposta: SUBI NUM ONIBUS EM MIRROCOS 



// *** exercícios de escrita de código *** 

//                               exercício 1 

//const nome = prompt("Digite o seu nome:")
//const email = prompt("Digite o seu email:")

//console.log("O email " + email + " foi cadastrado com sucesso. Seja bem vindo(a), " + nome)


// exercício 2 

/*let comidasFavoritas = [pizza, lasanha, sushi, farofa, açai]
console.log(comidasFavoritas)

console.log("Essas são as minhas comidas favoritas:" + 
comidasFavoritas[1],
comidasFavoritas[2],
comidasFavoritas[3],
comidasFavoritas[4],
comidasFavoritas[5])

favoritaUsuario = prompt("Digite a sua comida favorita:")

comidasFavoritas.splice(1, 1)
let novaLista = (comidasFavoritas[1] = favoritaUsuario)

console.log(novaLista)*/

// exercício 3 

let listaTarefas = []

tarefa1 = prompt("Escreva uma tarefa que você precise fazer:")
tarefa2 = prompt("Escreva uma segunda tarefaque você precise fazer:")
tarefa3 = prompt("Escreva uma terceira tarefa que você precise fazer")

listaTarefas = [tarefa1, tarefa2, tarefa3]
console.log(listaTarefas)

tarefaRemovida = prompt("Escreva o índice de uma das tarefas que você já realizou: 0, 1 ou 2")
Number(tarefaRemovida) 
listaTarefas.splice(tarefaRemovida, 1)

console.log(ListaTarefas)
