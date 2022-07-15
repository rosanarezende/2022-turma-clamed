// Aula 02

//////////////////////////////////////////////////////////////////
// DOM
//////////////////////////////////////////////////////////////////

// ==== Acessar ====

// Pelo ID
const divPrincipal = document.getElementById("conteudo-principal");

// Pela Classe
const subtitulo = document.getElementsByClassName("subtitulo")[0];

// Pela tag
const lista = document.getElementsByTagName('ul')

// Pelo seletor CSS
const botao = document.querySelector("#btn-1"); // id #
const paragrafo2 = document.querySelector(".paragrafo-2"); // classe .


// ======== Alterar elemento ========
// alterar texto do subtitulo
subtitulo.innerHTML = 'Porque aprender a utilizar o DOM?!'
// alterar cor do botão
botao.style.backgroundColor = '#f00'
// alterar o tamanho da fonte do paragrafo2
paragrafo2.style.fontSize = '30px'


// ======== Criar elemento ========
// Criar uma div com um parágrafo
const divQueCriamos = document.createElement('div')
divQueCriamos.innerHTML = '<p>Este é um parágrafo</p>'


// ======== Adicionar elemento ========
// Para ver na página, adicionar na div principal
divPrincipal.appendChild(divQueCriamos)
// adicionar um novo elemento na lista
lista[0].innerHTML += '<li>Criar elementos</li>'


// ======== Remover elemento ========
// divPrincipal.removeChild(divQueCriamos);


//////////////////////////////////////////////////////////////////
// Events
//////////////////////////////////////////////////////////////////

// ====== onclick ======
const input = document.getElementById("meu-input");
function imprimeInput() {
  console.log(input.value);
}

const resposta = document.getElementById("resposta-clique-aqui");
function insereParagrafo() {
  resposta.innerHTML += "<p id='sou-paragrafo'> Sou um parágrafo</p>";
}
function removeParagrafo() {
  const paragrafo = document.getElementById("sou-paragrafo")
  resposta.removeChild(paragrafo);
}

// ====== onmouseout ======
const divPai = document.getElementById("div-pai");
const divQueQueroRemoverEVoltar = document.getElementById("resposta-botao-remover-voltar");
function removerDiv(){
  divPai.removeChild(divQueQueroRemoverEVoltar);
}

// ====== onmouseover ======
function voltaDiv(){
  divPai.appendChild(divQueQueroRemoverEVoltar);
}


// ====== addEventListener ======
const botao3 = document.getElementById("terceiro-botao");
const conteudo = document.getElementById("conteudo")

botao3.addEventListener("click", function() {
  conteudo.innerHTML = "Conteudo aqui"
})
