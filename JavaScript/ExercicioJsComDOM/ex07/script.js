const botao = document.querySelector('#botao');
      const conteudo = document.querySelector('#conteudo');

      botao.addEventListener('click', function() {
        if (conteudo.style.display === 'none') {
          conteudo.style.display = 'block';
        } else {
          conteudo.style.display = 'none';
        }
      });