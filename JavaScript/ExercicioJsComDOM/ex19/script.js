const meuBotao = document.querySelector('#meuBotao');

meuBotao.addEventListener('click', () => {
  const novoElemento = document.createElement('p');
  novoElemento.textContent = 'Novo elemento criado!';
  document.body.appendChild(novoElemento);
});