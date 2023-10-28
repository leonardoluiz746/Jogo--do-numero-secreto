// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do numero secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um numero de 0 a 10';

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio;
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    resposiveVoice.speak(texto,'Brasilian portuguese female',{rate:1.2});
};

exibirMensagemInicial();
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número de 0 a 10');
}


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto com ${tentativas} 
        ${palavraTentativa} !`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disable');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeelementosNalista = ListaDeNumerosSorteados.length

    if(quantidadeDeelementosNalista == numeroLimite) {
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
}

function limparCampo() {
     chete = documente.querySelector ('input');
     chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio ();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial;
    document.getElementById('reiniciar').setAttribute('disable',true)
}
