//Etapa2
function etapa2() {
    const querJogar = confirm("Quer iniciar uma nova rodada?")

    if (querJogar) {
        const cartasUsuario = [comprarCarta(), comprarCarta()]

        const cartasComputador = [comprarCarta(), comprarCarta()]

        let pontuacaoUsuario = 0

        let querMais = confirm("Suas cartas são " + cartasUsuario[0].texto + " " + cartasUsuario[1].texto + ". A carta revelada do computador é " + cartasComputador[0].texto + ". Deseja comprar mais uma carta?")

        while (querMais) {
            const novaCarta = comprarCarta()

            cartasUsuario.push(novaCarta)

            pontuacaoUsuario = 0

            for (let carta of cartasUsuario) {
                pontuacaoUsuario += carta.valor
            }

            if (pontuacaoUsuario < 21) {
                let stringCartas = ""

                for (let carta of cartasUsuario) {
                    stringCartas += carta.texto + " "
                }

                querMais = confirm("Suas cartas são " + stringCartas + ". A carta revelada do computador é " + cartasComputador[0].texto + ". Deseja comprar mais uma carta?")

            } else {
                querMais = false
            }
        }

        pontuacaoUsuario = 0

        for (let carta of cartasUsuario) {
            pontuacaoUsuario += carta.valor
        }

        let pontuacaoComputador = 0

        for (let carta of cartasComputador) {
            pontuacaoComputador += carta.valor
        }

        let computadorQuerMais = pontuacaoUsuario <= 21 && pontuacaoComputador <= pontuacaoUsuario

        while (computadorQuerMais) {
            const novaCarta = comprarCarta()

            cartasComputador.push(novaCarta)

            pontuacaoComputador = 0

            for (let carta of cartasComputador) {
                pontuacaoComputador += carta.valor
            }

            computadorQuerMais = pontuacaoUsuario <= 21 && pontuacaoComputador <= pontuacaoUsuario
        }

        let vencedor

        if (pontuacaoUsuario > 21) {
            resultado = "O computador ganhou!"
        } else if (pontuacaoComputador > 21) {
            resultado = "O usuário ganhou!"
        } else if (pontuacaoComputador > pontuacaoUsuario) {
            resultado = "O computador ganhou!"
        } else if (pontuacaoComputador < pontuacaoUsuario) {
            resultado = "O usuário ganhou!"
        } else {
            resultado = "Empate!"
        }

        let stringCartasUsuario = ""
        let stringCartasComputador = ""

        for (let carta of cartasUsuario) {
            stringCartasUsuario += carta.texto + " "
        }

        for (let carta of cartasComputador) {
            stringCartasComputador += carta.texto + " "
        }

        alert("Suas cartas são " + stringCartasUsuario + ". Sua pontuação é " + pontuacaoUsuario + ". As cartas do computador são " + stringCartasComputador + ". A pontuação do computador é " + pontuacaoComputador + ". " + resultado)
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