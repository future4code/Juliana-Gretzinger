// EXERCÍCIO 01 : Escreva uma função que recebe um array como parâmetro e retorne este array invertido. Obs: evite o uso da função reverse


function inverteArray(array) {

  let invertido = []
  for (let i = array.length - 1; i >= 0; i--) {
    invertido.push(array[i])
  }
  return invertido

}

// EXERCÍCIO 02 : Escreva uma função que recebe um array de números e retorna um array com os números pares elevados a 2.

function retornaNumerosParesElevadosADois(array) {

  let paresElevadosa2 = []
  let numerosPares = []
  for(let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numerosPares.push(array[i] * array[i])

    }
  }
  return numerosPares 
}

// EXERCÍCIO 03 : Escreva uma função que receba um array de números e retorne um novo array com apenas os números pares desse array de entrada.

function retornaNumerosPares(array) {

  let pares = []
   for (let i = 0; i < array.length; i++){
    if (array[i] % 2 === 0) {
      pares.push(array[i])
    }  
    }
    return pares

  }

// EXERCÍCIO 04 : Escreva uma função que receba um array de números e retorne o maior número dele.

function retornaMaiorNumero(array) {

  let maiorNumero = []
    for (let i = 0; i < array.length; i++) {
    if (maiorNumero < array[i]) {
    maiorNumero = array[i]
}
    }
return maiorNumero

}

// EXERCÍCIO 05 :  Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.

function retornaQuantidadeElementos(array) {
    
 return array.length

}


// EXERCÍCIO 06 : 

function retornaExpressoesBooleanas() {

  return [false, false, true, true, true]

}

// EXERCÍCIO 07 : Escreva uma função que, recebendo um número N como parâmetro, retorne os N primeiros números pares
// (por exemplo, se N for 3, você deve imprimir 0, 2 e 4; se N for 5, deve retornar 0, 2, 4, 6 e 8).

function retornaNNumerosPares(n) {

  const novoArray = []

  for (let number = 0; novoArray.length < n; number++) {
    if (number % 2 === 0) {
      novoArray.push(number)
    }
  }
  return novoArray

}

// EXERCÍCIO 08 : Se um triângulo possuir os três lados iguais, ele é chamado de "Equilátero". Se possuir, dois 
// (e somente 2) lados iguais, diz-se que ele é "Isósceles". Se os três lados tiverem medidas diferentes, ele é "Escaleno".
// Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: a, b, c e retorne se ele é equilátero, isósceles ou escaleno.

function checaTriangulo(a, b, c) {
  
 if (a != b && b !=c) {
  return 'Escaleno'
 } else if (a === b && b === c) {
    return 'Equilátero'
    } else {
    return 'Isósceles'
    
   }
}

// EXERCÍCIO 09 : Escreva uma função que, dado dois números, retorne um objeto indicando:

// i. qual é o maior,

// ii. determine se o maior é divisível pelo menor (use o operador `%`) e

// iii. determine a diferença entre eles (o resultado deve ser um **número positivo** sempre)

function comparaDoisNumeros(num1, num2) {

  let maiorNumero
  let menorNumero
  let maiorDivisivelPorMenor

  if (num1 > num2) {
    maiorNumero = num1
    menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  }

  maiorDivisivelPorMenor = maiorNumero % menorNumero === 0

  const diferenca = maiorNumero - menorNumero

  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca
  }

}

// EXERCÍCIO 10: Escreva uma função que receba um array de números e retorne um novo array com apenas 2 valores (NESTA ORDEM):
// segundo maior e o segundo menor número do array original. (Desafio: tentem fazer sem usar função de ordenação de array.)

function segundoMaiorEMenor(array) {


    let menor = Infinity
    let maior = -Infinity
    let segundoMenor = Infinity
    let segundoMaior = -Infinity
    let novoArray = []
  
    for (let i of array) {
      if (i < menor) {
        menor = i
      }
      if (i > maior) {
        maior = i
      }
    }
  
    for (let i of array) {
      if (i < segundoMenor && i !== menor) {
        segundoMenor = i
      }
      if (i > segundoMaior && i !== maior) {
        segundoMaior = i
      }
    }
    novoArray.push(segundoMaior)
    novoArray.push(segundoMenor)
  
    return novoArray
  }


// EXERCÍCIO 11: Escreva uma função que recebe um array de números e retorne outro array com os números em ordem crescente. 

function ordenaArray(array) {

  const lenght = array.length
  for (let i = 0; i < lenght; i++) {
    for (let j = 0; j < lenght; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }
    }
  }
  return array
} 

// EXERCÍCIO 12: Crie uma função que retorne um objeto que representa o filme favorito do Astrodev. 
// Ele deve ter as propriedades: nome, ano, diretor e atores, sendo que filme e diretor devem ser strings, ano deve ser um number e atores deve ser um array de strings.

function filmeFavorito() {

  let filmeFavorito = {
  nome: "O Diabo Veste Prada",
  ano: 2006,
  diretor: "David Frankel",
  atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]


  }

  return filmeFavorito
  

}

// EXERCÍCIO 13: Crie uma função que retorne a seguinte string, baseada nos valores do objeto que representa o filme favorito do Astrodev no penúltimo exercício feito:
// Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR(A) e estrelado por ATOR 1, ATRIZ 2, ATOR n. A string deve ser impressa acessando os valores do objeto.

function imprimeChamada() {

  let filmeFavorito = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
  
    }
   
    let chamada = `Venha assistir ao filme ${filmeFavorito.nome}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores}.`
    return chamada
}

// EXERCÍCIO 14: 

function criaRetangulo(lado1, lado2) {

  let retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: (2 *(lado1 + lado2)),
    area: (lado1 * lado2)
  }

  return retangulo

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

  return {
    ...pessoa, 
    nome: 'ANÔNIMO'
    }

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
