// metodos estátivos não podem acessar o 'this'
// por isso, não vamos colocar o util no construtor
const util = Util;

const ID_CONTEUDO = "conteudo";
const ID_BTN_JOGAR = "jogar";
const ID_MENSAGEM = "mensagem";
const CLASSE_INVISIVEL = "invisible";
const ID_CARREGANDO = "carregando";
const ID_CONTADOR = "contador";

const MENSAGENS = {
  sucesso: {
    texto: "Combinação correta!",
    classe: "alert-success",
  },
  erro: {
    texto: "Combinação incorreta!",
    classe: "alert-danger",
  },
};
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

  static configurarBotaoVerificarSelecao(funcaoOnClick) {
    window.verificaSelecao = funcaoOnClick;
  }

  static alterarConteudoHTML(condigoHTML) {
    const conteudo = document.getElementById(ID_CONTEUDO);
    conteudo.innerHTML = condigoHTML;
  }

  static gerarStringHTMLPelaImagem(itens) {
    //para cada item da lista, vai executar a funcao obterCodigoHTML
    // ao final, vai concatenar tudo em uma unica string
    // muda de Array para String
    return itens.map(Tela.obterCodigoHtml).join("");
  }

  static atualizarImagens(itens) {
    const codigoHtml = Tela.gerarStringHTMLPelaImagem(itens);
    Tela.alterarConteudoHTML(codigoHtml);
  }

  static configurarBotaoJogar(funcaoOnClick) {
    const btnJogar = document.getElementById(ID_BTN_JOGAR);
    btnJogar.onclick = funcaoOnClick;
  }

  static exibirHerois(nomeDoHeroi, img) {
    const elementHTML = document.getElementsByName(nomeDoHeroi);
    // para cada elemento encontrado na tela, vamos alterar a imagem
    // para cada imagem incial dele
    // com o forEach, para cada item, dentro dos () setamos o valor
    // da imagem
    elementHTML.forEach((item) => (item.src = img));
  }

  static async exibirMensagem(sucesso = true) {
    const elemento = document.getElementById(ID_MENSAGEM);
    if (sucesso) {
      elemento.classList.remove(MENSAGENS.erro.classe);
      elemento.classList.add(MENSAGENS.sucesso.classe);
      elemento.innerText = MENSAGENS.sucesso.texto;
    } else {
      elemento.classList.remove(MENSAGENS.sucesso.classe);
      elemento.classList.add(MENSAGENS.erro.classe);
      elemento.innerText = MENSAGENS.erro.texto;
    }
    elemento.classList.remove(CLASSE_INVISIVEL);
    await util.timeout(1000);
    elemento.classList.add(CLASSE_INVISIVEL);
  }

  static exibirCarregando(mostar = true) {
    const carregando = document.getElementById(ID_CARREGANDO);
    if (mostar) {
      carregando.classList.remove(CLASSE_INVISIVEL);
      return;
    }
    carregando.classList.add(CLASSE_INVISIVEL);
  }
}
