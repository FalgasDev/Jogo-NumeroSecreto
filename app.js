let listaDeNumerosSorteados = [];
let numeroMaximo = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function mudarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function mensagemInicial() {
    mudarTextoNaTela('h1', 'Jogo do número aleatório');
    mudarTextoNaTela('p', 'insira um número de 1 a 10');
}

mensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        mudarTextoNaTela('h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        mudarTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        mudarTextoNaTela('p', chute > numeroSecreto ? 'O número secreto é menor' : 'O número secreto é maior');
        tentativas++;
        limparCampo();
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantDeElementosNaLista == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    let input = document.querySelector('input');
    input.value = '';
}