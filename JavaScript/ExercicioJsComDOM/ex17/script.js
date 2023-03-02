function adicionarElemento() {
    // Cria um novo elemento <p>
    var novoElemento = document.createElement("p");
    
    // Cria um texto para o novo elemento
    var texto = document.createTextNode("Este é um novo elemento adicionado à página!");
    
    // Adiciona o texto ao elemento <p>
    novoElemento.appendChild(texto);
    
    // Adiciona o novo elemento ao final do elemento <body>
    document.body.appendChild(novoElemento);
  }
  