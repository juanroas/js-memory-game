function onLoad() {
   const dependecias = {
    tela: Tela // a classe é global
   }
   //inicializamos o jogo da memoria
   const jogoDaMemoria = new JogoDaMemoria(dependecias)
   jogoDaMemoria.inicializar()
}

window.onload = onLoad