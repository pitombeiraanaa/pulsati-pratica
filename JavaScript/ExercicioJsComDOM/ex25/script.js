var botao = document.getElementById("meuBotao");
botao.addEventListener("click", removerAtributo);

function removerAtributo() {
  var element = document.getElementById("meuElemento");
  element.removeAttribute("meuAtributo");
}
