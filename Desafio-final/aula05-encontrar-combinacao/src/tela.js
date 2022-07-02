const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"
class Tela {
  static obterCodigoHtml(item) {
    return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;" onclick="window.verificaSelecao('${item.id}','${item.nome}')">
                <img class="card-img-top" src="${item.img}" name="${item.nome}">
            </div>
            <br />
        </div>
        `;
  }

  static configurarBotaoVerificarSelecao( funcaoOnClick){
    window.verificaSelecao = funcaoOnClick
  }

  static alterarConteudoHTML(condigoHTML){
    const conteudo = document.getElementById(ID_CONTEUDO)
    conteudo.innerHTML = condigoHTML
  }

  static gerarStringHTMLPelaImagem(itens){
    //para cada item da lista, vai executar a funcao obterCodigoHTML
    // ao final, vai concatenar tudo em uma unica string
    // muda de Array para String
    return itens.map(Tela.obterCodigoHtml).join('')
  }

  static atualizarImagens(itens){
    const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens)
    Tela.alterarConteudoHTML(codigoHtml)
  }

  static configurarBotaoJogar(funcaoOnClick){
    const btnJogar = document.getElementById(ID_BTN_JOGAR)
    btnJogar.onclick = funcaoOnClick
  }
}
