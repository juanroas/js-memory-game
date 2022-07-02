class JogoDaMemoria {  
    // se mandar um obj = { tela: 1, idade: 2, etc:3}
    // vai ignorar o resto das propiedades e pedar somente a propriedade
    // tela
    constructor({tela}){
        this.tela = tela
        // caminho do arquivo, sempre relativo
        // ao index.html
        this.heroiIniciais = [
            {img: './arquivos/batman.png', nome:'batman'},
            {img: './arquivos/flash.png', nome:'flash'},
            {img: './arquivos/spider_man.png', nome:'spider_man'},
            {img: './arquivos/thor.png', nome:'thor'}
        ]
        this.iconePadrao = './arquivos/ninja.png'
        this.heroisEscondidos = []
    }

    // para usar o this, não podesmo usar static!
    inicializar(){
        // vai pegar todas as funções da classe tela!
        // coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroiIniciais)
        // força a tela a usar o this de jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }

    embaralhar(){
        const copias = this.heroiIniciais
        //duplicar os itens
        .concat(this.heroiIniciais)
        //entrar em cada item e criar um id aleatorio
        .map(item => {
            return Object.assign({}, item, {id:Math.random() / 0.5})
        })
        //ordernar aleatorio
        .sort(() => Math.random() - 0.5)

        this.tela.atualizarImagens(copias)
        // vamos esperar 1 segundo para atualizar a tela
        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000);
    }

    esconderHerois(herois){
        // vamos trocar a imagem de todos os herois existentes
        // pelo icone padrão
        // como fizemos no construtor, vamos extrair somente o necessário 
        // usando a sintaxe ({ chave:1 }) estamos falando que vamos retornar
        // o que tiver dentro dos parentes
        // quando nao usamos : (exemplo do id), o JS entende que o nome
        // é o memso valor. EX. id: id, vira id, 
        const heroisOcultos = herois.map(({nome, id }) => ({
            id,
            nome,
            img: this.iconePadrao 
        }))
        // atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
        // guardamos os herois para trabalhar com eles depois
        this.heroisOcultos = heroisOcultos        
    }

    jogar(){
       this.embaralhar()
    }
}