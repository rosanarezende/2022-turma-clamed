// Aula 01


///////////////////////////////////////////////////////////
// 1 - Crie uma função não nomeada que recebe um número e 
// devolva uma string dizendo se é par ou ímpar.
///////////////////////////////////////////////////////////

// Função não nomeada criada pelos alunos em aula
var informarParImpar = function (num1){
  var resultado;
  if(num1 % 2 == 0){
      resultado = 'Par'
  } else if(num1 %2 == 1){
      resultado = 'Ímpar'
  } else{ resultado = "inválido"}

  return resultado
}

// Função nomeada alternativa para o mesmo problema 
function informarParOuImpar(num1){
  // converter uma string para um número
  var numeroProtegido = Number(num1)

  if(numeroProtegido % 2 == 0){
      return 'Par'
  } else if(numeroProtegido %2 != 0){
      return 'Ímpar'
  } else{ 
    return "inválido"
  }
}
console.log(informarParOuImpar()) // inválido
console.log(informarParOuImpar(2)) // Par
console.log(informarParOuImpar(3)) // Ímpar


///////////////////////////////////////////////////////////
// 2 - Crie uma função nomeada que recebe um array de elementos, 
// imprima cada um dos elementos e em seguida retorne a 
// quantidade de elementos no array (seu tamanho).
///////////////////////////////////////////////////////////

// alunos em sala
function imprimirElementosDaLista(lista = []) {
  for (let item of lista) {
    console.log(item);
  }
  let quantidade = "Quantidade de elementos: " + lista.length;
  return quantidade;
}
console.log(imprimirElementosDaLista(["PS5", "XBox", "Switch", "PC"]));


// resolução do professor
const imprimeElementosDaLista = function(lista){
  for (let item of lista){
    console.log (item);
  }
}
const retornaAQuantidadeDaLista = function (lista){
  let quantidade = "A quantidade de elementos da lista são " + lista.length;
  return quantidade
}

function meuProgramaSobreListas(lista = []){
  imprimeElementosDaLista(lista)
  retornaAQuantidadeDaLista(lista)
}
meuProgramaSobreListas(["oi", "turu", "bom"])



///////////////////////////////////////////////////////////
// EXTRA - Explicando retorno de Função
///////////////////////////////////////////////////////////

// se for sem retorno (console.log) não é possível atribuir o valor a uma variável pois o o resultado será undefined
// como há retorno, podemos reaproveitar o resultado da função informarParOuImparNumaFrase
function informarParOuImpar(num1){
  // converter uma string para um número
  var numeroProtegido = Number(num1)
  if(numeroProtegido % 2 == 0){
      return'Par'
  } else if(numeroProtegido %2 != 0){
    return'Ímpar'
  } else{ 
    return "inválido"
  }
}

const resultado = informarParOuImpar(1)

function informarParOuImparNumaFrase(num) {
  // return "O número ", num, " é ", resultado
  
  // ou usar template string 
  retun `O número ${num} é ${resultado}`
}
console.log(informarParOuImparNumaFrase(2))


///////////////////////////////////////////////////////////
// EXTRA - Função com mais de um retorno
///////////////////////////////////////////////////////////

// ==== Retorna um objeto ====
function calcular(a, b) {
  const soma = a + b
  const subtracao = a - b
  const divisao = a / b
  const multiplicacao = a * b

  return {
    soma,
    subtracao,
    divisao,
    multiplicacao
  }
}

console.log(calcular(1, 2).soma) // 3
console.log(calcular(1, 2).subtracao) // -1
console.log(calcular(1, 2).divisao) // 0.5
console.log(calcular(1, 2).multiplicacao) // 2

// ==== Retorna um array ====
function calcular2(a, b) {
  const soma = a + b
  const subtracao = a - b
  const divisao = a / b
  const multiplicacao = a * b

  return [soma, subtracao, divisao, multiplicacao]
}

console.log(calcular2(1, 2)[0]) // 3
console.log(calcular2(1, 2)[1]) // -1
console.log(calcular2(1, 2)[2]) // 0.5
console.log(calcular2(1, 2)[3]) // 2
