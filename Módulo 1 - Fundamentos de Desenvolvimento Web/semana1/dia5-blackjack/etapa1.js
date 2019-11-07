//Etapa1
function etapa1() {
    const querJogar = confirm("Quer iniciar uma nova rodada?")

    if (querJogar) {
        const cartaUsuario1 = comprarCarta()
        const cartaUsuario2 = comprarCarta()

        const cartaComputador1 = comprarCarta()
        const cartaComputador2 = comprarCarta()

        const pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
        const pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor

        console.log("Usuário - cartas:", cartaUsuario1.texto, cartaUsuario2.texto, "- pontuação", pontuacaoUsuario)
        console.log("Computador - cartas:", cartaComputador1.texto, cartaComputador2.texto, "- pontuação", pontuacaoComputador)

        if (pontuacaoComputador === pontuacaoUsuario) {
            console.log("Empate!")
        } else if (pontuacaoComputador > pontuacaoUsuario) {
            console.log("O computador ganhou!")
        } else {
            console.log("O usuário ganhou!")
        }
    } else {
        console.log("O jogo acabou!")
    }
}

function comprarCarta() {
    // Cria array de cartas
    const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    // Cria array de naipes
    const naipes = ["♦️", "♥️", "♣️", "♠️"]

    // Sorteia uma carta
    const numero = cartas[Math.floor(Math.random() * 13)]

    // Sorteia um naipe
    const naipe = naipes[Math.floor(Math.random() * 4)]

    let valor

    // Verifica se é uma das letras e coloca o valor correspondente na variável valor
    if (numero === "A") {
        valor = 11
    } else if (numero === "J" || numero === "Q" || numero === "K") {
        valor = 10
    } else { // Se nao for uma das letras, só converte a string para número
        valor = Number(numero)
    }

    // Cria um objeto da carta com as propriedades que vamos precisar, o nome (?) e o valor
    const carta = {
        texto: numero + naipe,
        valor: valor
    }

    return carta
}