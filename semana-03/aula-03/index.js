// Aula 03


// ========== Create ==========

// string
localStorage.setItem("nome", "Varley")

// array
const meuArray = [1, 2, 3, 4, 5]
localStorage.setItem("meuArray", meuArray)

// Objeto JavaScript
const user = {
  id: "12345",
  name: "John Doe",
  email: "john.doe@gmail.com",
  active: true
};
const meuObjeto = {
  numero: 1
}
localStorage.setItem("user", JSON.stringify(user))
localStorage.setItem("usuario", JSON.stringify(user))
localStorage.setItem("meuObjeto", JSON.stringify(meuObjeto))


// com addEventListener
const botao = document.getElementById("botao")
botao.addEventListener("click", function() {
  const input = document.getElementById("meu-input");
  localStorage.setItem("name", JSON.stringify(input.value))
})

// com função no HTML
function imprimeInput() {
  const input = document.getElementById("meu-input");
  localStorage.setItem("name", JSON.stringify(input.value))
}


// // ===== Ler =====
const conteudo = document.getElementById("conteudo")

// // STRING
const nome2 = localStorage.getItem("name")
conteudo.innerHTML = nome2

// // OBJETO
const meuUsuario = localStorage.getItem("user")
// // errado
// conteudo.innerHTML = meuUsuario.name
// //certo
// conteudo.innerHTML = JSON.parse(meuUsuario).name


// // ===== Remover =====
localStorage.removeItem("name")


// // ===== Remover todos =====
localStorage.clear()
