var botao = document.getElementById("meuBotao");
botao.addEventListener("click", adicionarAtributo);

function adicionarAtributo() {
  var element = document.getElementById("meuElemento");
  element.setAttribute("meuAtributo", "valorDoAtributo");
}