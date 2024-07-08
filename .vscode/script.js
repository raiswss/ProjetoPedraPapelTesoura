const opcoes = {
    1: { nome: 'pedra', img: 'imagens/pedra.png', pedra: 'EMPATE', papel: 'PERDEU', tesoura: 'GANHOU'},
    2: { nome: 'papel', img: 'imagens/papel (1).png', pedra: 'GANHOU', papel: 'EMPATE', tesoura: 'PERDEU' },
    3: { nome: 'tesoura', img: 'imagens/tesoura.png', pedra: 'PERDEU', papel: 'GANHOU', tesoura: 'EMPATE'}
}

    let escolhaJogador ={}
    let escolhaComputador= {}

function escolherJogada(num) {
    escolhaJogador = opcoes[num]
}

let numComp = Math.floor((Math.random()*3)+1)
escolhaComputador = opcoes[numComp]


