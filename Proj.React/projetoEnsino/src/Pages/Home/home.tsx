import "./home.css"
export function Home(){
    return(
        
            <main>
    <div className="transparente">
      <div className="textoMain">
        <h1>Por que aprender a programar?</h1>
        <h2>Porque é divertido e você pode construir coisas!</h2>
        <span>Aprenda a criar um site bonito e com facilidade.</span>
       
          <div>
           <button className="botaoMain">Iniciar</button>
          </div>
    </div>


      <div className="box">
        <div className="box1">
          
          <div className="html">
            <p className="p1"> 01/<span> <b> HTML</b></span></p>
            <img className="imghtml" src="../src/Images/html.png" />
            <p className="p1Box1">Curso de linguagem JavaScript, voltado para iniciantes e para quem 
              quiser aprender mais sobre ECMAScript, a versão padronizada do JS. 
               Conteúdo básico em
               6 módulos que vão desde o conhecimento da linguagem até o uso de funções.</p>
               <div className="botaoHtml">
                <button>Ver mais...</button>
              </div>
          </div>
        </div>


        
        <div className="box2">
          <p className="p2">02/ <span><b> CSS</b></span></p>
          <div className="css">
            <img className="imgcss" src="../src/Images/css-3.png"/>
            <p className="p2Box2">Aprender a codificar HTML sem aprender CSS é como aprender a ler, mas não a escrever. Todo o seu trabalho de desenvolvimento web será perdido se você não otimizá-lo para diferentes tamanhos de tela...</p>
            <div>
              <button>Ver mais...</button>
            </div>
          </div>
        </div>


        <div className="box3">
          <p className="p3">03/ <span> <b> JavaScript</b></span></p>
          <div className="js">
            <img className="imgjs" src="../src/Images/javascript (1).png" />
            <p className="p3Box3">JavaScript é a principal linguagem de programação utilizada na construção do front-end de uma aplicação Web, dando vida ao HTML e CSS. </p>
          </div>
          <div>
            <button>Ver mais...</button>
          </div>
        </div>

     </div>
      </div>
    </main>
      
    )
}