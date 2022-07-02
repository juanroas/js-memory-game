const ID_CONTEUDO = "conteudo"
class Tela {
  static obterCodigoHtml(item) {
    return `
        <div class="col-md-3">
            <div class="card" style="width: 50%;">
                <img class="card-img-top" src="${item.img}" name="${item.nome}">
            </div>
            <br />
        </div>
        `;
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
}
