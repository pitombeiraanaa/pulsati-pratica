const botao = document.getElementById("meu-botao");
const paragrafo = document.getElementById("meu-paragrafo");

botao.addEventListener("click", function() {
  paragrafo.textContent = "Novo conteúdo do parágrafo!";
});