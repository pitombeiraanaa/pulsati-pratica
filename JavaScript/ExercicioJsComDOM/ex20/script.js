// seleciona o botão e o elemento que será removido
const botao = document.getElementById('remover');
const elemento = document.getElementById('elemento');

// adiciona o evento de clique no botão
botao.addEventListener('click', function() {
  // remove o elemento da página
  elemento.remove();
});
