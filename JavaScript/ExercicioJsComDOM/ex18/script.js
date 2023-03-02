function removerElemento() {
  // Encontra o elemento a ser removido
  var elementoRemovido = document.getElementById("id-do-elemento-a-remover");

  // Remove o elemento da página
  elementoRemovido.parentNode.removeChild(elementoRemovido);
}
