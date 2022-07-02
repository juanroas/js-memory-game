class JogoDaMemoria {  
    // se mandar um obj = { tela: 1, idade: 2, etc:3}
    // vai ignorar o resto das propiedades e pedar somente a propriedade
    // tela
    constructor({tela}){
        this.tela = tela
        // caminho do arquivo, sempre relativo
        // ao index.html
        this.heroiIniciais = [
            {img: './arquivos/batman.png', name:'batman'},
            {img: './arquivos/flash.png', name:'flash'},
            {img: './arquivos/spider_man.png', name:'spider_man'},
            {img: './arquivos/thor.png', name:'thor'}
        ]
    }

    // para usar o this, não podesmo usar static!
    inicializar(){
        // vai pegar todas as funções da classe tela!
        // coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroiIniciais)
    }
}