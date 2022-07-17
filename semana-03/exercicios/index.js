// Lembre-se que as respostas abaixo são apenas sugestões.
// Você pode ter diferentes soluções, com código mais simples ou mais complexos.
// Teste suas soluções e veja quais funcionam melhor.


/////////////////////////////
// ====== QUESTÃO 1 ====== //
/////////////////////////////

const informaParOuImpar = function(numero) {
  if (numero % 2 === 0) {
    return 'par'
  } 
  else if (numero % 2 === 1) {
    return 'impar'
  } 
  else {
    return 'informe um número para prosseguir'
  }
}
// console.log(informaParOuImpar(1)) // impar
// console.log(informaParOuImpar(2)) // par
// console.log(informaParOuImpar()) // "informe um número para prosseguir"


/////////////////////////////
// ====== QUESTÃO 2 ====== //
/////////////////////////////

// Forma + simples, mas a função faz + de uma coisa
function imprimeElementosERetornaQuantidade(array) {
  for (elemento of array) {
    console.log(elemento)
  }
  return array.length
}
// console.log(imprimeElementosERetornaQuantidade(["a", "b", "c", "d"])) // imprime a, b, c, d e retorna 4


// Refatorando
function imprimeElementos(array) {
  for (elemento of array) {
    console.log(elemento)
  }
}
function retornaQuantidade(array) {
  return array.length
}
function resposta(array) {
  imprimeElementos(array)
  console.log(retornaQuantidade(array))
}
// resposta(["a", "b", "c", "d"]) // imprime a, b, c, d e retorna 4


/////////////////////////////
// ====== QUESTÃO 3 ====== //
/////////////////////////////

const calculaQuantidadeDeParesEImpares = function(array) {
  let quantidadeDePares = 0
  let quantidadeDeImpares = 0
  for (elemento of array) {
    if (elemento % 2 === 0) {
      quantidadeDePares++
    }
    else if (elemento % 2 === 1) {
      quantidadeDeImpares++
    }
  }
  // se retornar com [], acessa com função[0]
  // se retornar com {}, acessa com função.quantidadeDePares
  return { quantidadeDePares, quantidadeDeImpares }
}

const imprimeQuantidadeDeItensEParesEImpares = function(array) {
  // const quantidadeDePares = calculaQuantidadeDeParesEImpares(array).quantidadeDePares
  // const quantidadeDeImpares = calculaQuantidadeDeParesEImpares(array).quantidadeDeImpares

  // você pode usar desestruturação de objetos JS para simplificar o código - procure na internet :)
  const { quantidadeDePares, quantidadeDeImpares } = calculaQuantidadeDeParesEImpares(array)
  console.log(`A quantidade informada foi ${array.length}, a de valores pares foi ${quantidadeDePares}, e a de valores ímpares foi ${quantidadeDeImpares}`)
}
// imprimeQuantidadeDeItensEParesEImpares([1, 2, 3, 4, 5]) // A quantidade informada foi 5, a de valores pares foi 2, e a de valores ímpares foi 3


/////////////////////////////
// ====== QUESTÃO 4 ====== //
/////////////////////////////

// const divTextos = document.getElementById("textos")

// const span1 = document.createElement("span")
// span1.innerText = "texto 1"
// divTextos.appendChild(span1)

// const span2 = document.createElement("span")
// span2.innerText = "texto 2"
// divTextos.appendChild(span2)

// const span3 = document.createElement("span")
// span3.innerText = "texto 3"
// divTextos.appendChild(span3)

// const span4 = document.createElement("span")
// span4.innerText = "texto 4"
// divTextos.appendChild(span4)

// const span5 = document.createElement("span")
// span5.innerText = "texto 5"
// divTextos.appendChild(span5)


/////////////////////////////
// ====== QUESTÃO 5 ====== //
/////////////////////////////

// const textos = ["texto 1", "texto 2", "texto 3", "texto 4", "texto 5"]

// function adicionaTextos(listaDeTextos) {
//   const divTextos = document.getElementById("textos")
//   for (texto of listaDeTextos) {
//     const span = document.createElement("span")
//     span.innerText = texto
//     // se a questão pedisse para adicionar cor pelo JS
//     // span.style.color = "blue"
//     divTextos.appendChild(span)
//   }
// }
// adicionaTextos(textos)


/////////////////////////////
// ====== QUESTÃO 6 ====== //
/////////////////////////////

function criaBrinquedo(){
  const input = document.getElementById("input-brinquedo")
  const valorDoInput = input.value

  // li é uma tag que representa o elemento de uma lista (ul)
  const brinquedo = document.createElement("li")
  brinquedo.innerText = valorDoInput

  // ul é uma tag que representa uma lista
  const listaDeBrinquedos = document.getElementById("lista-brinquedos")
  listaDeBrinquedos.appendChild(brinquedo)
}

/////////////////////////////
// ====== QUESTÃO 8 ====== //
/////////////////////////////

function adicionaMensagem(){
  const input = document.getElementById("input-mensagem")
  const valorDoInput = input.value

  const mensagem = document.getElementById("aparece-mensagem")
  mensagem.innerHTML = valorDoInput
}

function salvaMensagem(){
  const input = document.getElementById("input-mensagem")
  const valorDoInput = input.value
  const mensagem = document.getElementById("aparece-mensagem")
  const valorDaMensagem = mensagem.innerHTML

  // a proteção é para não salvar uma mensagem vazia, esteja ela no input ou na tela
  if (valorDoInput.length === 0 && valorDaMensagem.length === 0) {
    alert("Por favor, informe uma mensagem")
  }
  else {
    localStorage.setItem("mensagem", valorDoInput)
    // além disso, você pode informar que a mensagem foi salva com sucesso, por exemplo
    alert("Mensagem salva com sucesso")
  }
}

function mostraMensagem() {
  const mensagemDoLocalStorage = localStorage.getItem("mensagem")
  const divApareceMensagem = document.getElementById("aparece-mensagem")
  if (mensagemDoLocalStorage === null) {
    divApareceMensagem.innerHTML = "Não há mensagem salva"
  }
  else {
    // como é uma string não precisamos usar JSON.parse
    divApareceMensagem.innerHTML = mensagemDoLocalStorage
  }
}
