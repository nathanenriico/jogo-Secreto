let listasNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function texoTela(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function mensgaemInicial() {
   texoTela('h1', 'Descubra o numero secreto');
   texoTela('p', 'Digite um numero de 1 a 10');  
}

mensgaemInicial();

function verificarChute() {
   let chute = document.querySelector('input').value;
   if (chute == numeroSecreto){
      let letrasTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
      texoTela('h1',`Parabens! Voce acertou em ${tentativas} ${letrasTentativas}`);
      texoTela('p', 'Obrigado por jogar!!');
      document.getElementById('reiniciar').removeAttribute('disabled');

   }
   else if(chute > numeroSecreto){
      texoTela('h1','Ops voce Errou');
      texoTela('p', 'Tente um numero menor!!');
      limparCampo();
      tentativas++;
   }
   else if(chute < numeroSecreto){
      texoTela('h1','Ops voce Errou');
      texoTela('p', 'Tente um numero maior');
      limparCampo();
      tentativas++;
   }
}

function gerarNumeroAleatorio() {
 let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
 let quantidadeDeNumeros = listasNumerosSorteados.length;

 if(quantidadeDeNumeros == numeroLimite){
   listasNumerosSorteados = [];
 }

 if(listasNumerosSorteados.includes(numeroEscolhido)){
   return gerarNumeroAleatorio();  
 } 

 else{
      listasNumerosSorteados.push(numeroEscolhido);
      console.log(listasNumerosSorteados);
      return numeroEscolhido;
 }

}

function limparCampo() {
   chute = document.querySelector('input');
   chute.value = '';
}

function reniciarJogo() {
   numeroSecreto = gerarNumeroAleatorio();
   tentativas = 1;
   limparCampo();
   mensgaemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);

}
