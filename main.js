function criarCartao(pergunta,resposta){
    let conteudo = document.getElementByid("conteudo")
    let cartao = document.createElement()
     cartao.classList = 'cartao'

     cartao.innerHMTL = '<div class="cartao--pergunta">qual o nome do protagonista de cyberpunk2077</div>
          <div class="cartao--resposta">o nome do peronagem é "V."</div>'
     
     
     conteudo.appendChild(cartao)

}




criarCartao(1,2)