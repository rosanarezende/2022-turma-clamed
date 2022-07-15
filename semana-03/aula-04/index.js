// Aula 04

////////////////
// Timeout 
////////////////

// Sintaxe mais simples
// const olaMundo = function() {
//   console.log('Olá Mundo')
// }
// setTimeout(olaMundo, 5000)

// com função interna não nomeada
// setTimeout(function() {
//   console.log('Olá Mundo')
// }, 5000)


// // // Sintaxe com +3 ou mais parâmetros
// const olaMundo2 = function(aluno1 = "", aluno2 = "") {
//   console.log('Olá Mundo' + aluno1 + aluno2)
// }
// setTimeout(olaMundo2, 5000, " Silas", " Eduardo")


// // Pega o valor do input e coloca no console depois de 5 segundos
// const botao = document.getElementById("botao1")
// botao.addEventListener("click", function() {
//   const input = document.getElementById("meu-input")
//   const olaMundo3 = function(aluno1 = "") {
//     console.log('Olá Mundo' + aluno1)
//   }
//   setTimeout(olaMundo3, 5000, input.value)
// })


// // ======== Parar setTimeout ========

// let numero = 0
// const apareceConsoleDoValorDeX = function() {
//   console.log('O valor do número é 0')
// }
// // setTimeout(apareceConsoleDoValorDeX, 2000)



// // ====== clearTimeout() ======
// const meuSetTimeout = setTimeout(apareceConsoleDoValorDeX, 1500)

// // se eu mudo o valor do número ,continuará aparecendo que ele é 0
// numero = 5

// // para que isso não aconteça, eu preciso :
//   // - atribuir o timeout para uma variável
//   // - pará-lo se numero for != 0
// if (numero !== 0) {
//   clearTimeout(meuSetTimeout)
// }


//////////////////
// Interval
//////////////////

// function fuiChamada(quem) {
//   console.log(`Fui chamada por ${quem}`)
// } 
// const chamarFuncao = setInterval(fuiChamada, 2000, "Varley")

// // // ===== clearInterval ======
// const botao = document.getElementById("botao");
// botao.addEventListener("click", function() {
//   clearInterval(chamarFuncao)
// })
