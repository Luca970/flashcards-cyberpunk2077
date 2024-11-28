function criarCartao(pergunta, resposta){
     let conteudo = document.getElementById("conteudo")
     let cartao = document.createElement("article")
     cartao.classList = "cartao"
 
     cartao.innerHTML =  <h2>melee</h2>
     <div class="cartao--conteudo">
         <div class="cartao--pergunta"><img src="./melee.png" alt=""></div>
         <div class="cartao--resposta">
         <p>Solar Eruption</p>
         </div>
 
     </div>
 
     conteudo.appendChild(cartao)
 }
 criarCartao(1,2)