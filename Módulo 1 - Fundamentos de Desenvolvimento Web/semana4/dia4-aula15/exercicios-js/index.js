function iniciaExercicio(ex) {
    console.clear()
    console.log("***** " + ex.toUpperCase() + " - INÍCIO *****")
}

function encerraExercicio(ex) {
    console.log("***** " + ex.toUpperCase() + " - FIM *****")
    vejaNoConsole(ex)
}

function vejaNoConsole(ex) {
    alert("Veja o " + ex + " no console")
}

function exercicio1() {
    iniciaExercicio("Exercício 1")
    const pessoas = [
        { nome: "Darvas", idade: 20 },
        { nome: "Goli", idade: 10 },
        { nome: "Paulinha", idade: 12 },
        { nome: "Artur", idade: 89 },
        { nome: "Soter", idade: 55 },
        { nome: "Miau", idade: 1 },
        { nome: "Lu", idade: 32 }
    ]
    const adultos = pessoas.filter((pessoa) => {
        return pessoa.idade >= 20
    })

    const naoAdultos = pessoas.filter((pessoa) => {
        return pessoa.idade < 20
    })

    console.log("a. Os Adultos são: ", adultos)
    console.log("b. As criaças e os adolescentes são: ", naoAdultos)
    encerraExercicio("Exercício 1")
}

function exercicio2() {
    iniciaExercicio("Exercício 2")
    const array = [1, 2, 3, 4, 5, 6]
    const dobro = array.map((item) => {
        return 2 * item
    })

    const triplos = array.map((item) => {
        return (3 * item).toString()
    })

    const arrayDeParidade = array.map((item) => {
        if (item % 2 === 0) {
            return item + " é par"
        }
        return item + " é ímpar"
    })

    console.log("a. Resultado: ", dobro)
    console.log("b. Resultado: ", triplos)
    console.log("c. Resultado: ", arrayDeParidade)
    encerraExercicio("Exercício 2")
}

function exercicio3() {
    iniciaExercicio("Exercício 3")
    const pessoas = [
        { nome: "Darvas", idade: 20, altura: 1.2 },
        { nome: "Goli", idade: 10, altura: 1.8 },
        { nome: "Paulinha", idade: 12, altura: 2.0 },
        { nome: "Artur", idade: 89, altura: 1.3 },
        { nome: "Soter", idade: 55, altura: 1.0 },
        { nome: "Miau", idade: 1, alutra: 2.3 },
        { nome: "Lu", idade: 32, alutra: 1.9 }
    ]

    const podemEntrar = pessoas.filter((pessoa) => {
        return pessoa.idade >= 14 && pessoa.idade < 60 && pessoa.altura >= 1.5
    })


    const naoPodemEntrar = pessoas.filter((pessoa) => {
        return pessoa.idade < 14 || pessoa.idade >= 60 || pessoa.altura < 1.5
    })

    console.log("a. Resultado: ", podemEntrar)
    console.log("b. Resultado: ", naoPodemEntrar)

    encerraExercicio("Exercício 3")
}

function exercicio4() {
    iniciaExercicio("Exercício 4")
    const consultas = [
        { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
        { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
        { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
        { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
    ]

    let mensagens = consultas.map((consulta) => {
        let mensagemFinal = "Olá, "
        let palavraDeTratamento
        let lembrar

        if (consulta.genero === "masculino") {
            palavraDeTratamento = "Sr. "
            lembrar = "lembrá-lo"
        } else {
            palavraDeTratamento = "Sra. "
            lembrar = "lembrá-la"
        }

        mensagemFinal += palavraDeTratamento
        mensagemFinal += consulta.nome + ". "

        if (consulta.cancelada) {
            mensagemFinal += "Infelizmente, sua consulta marcada para o dia " + consulta.dataDaConsulta
            mensagemFinal += " foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la"
        } else {
            mensagemFinal += "Estamos enviando esta mensagem para " + lembrar
            mensagemFinal += " da sua consulta no dia " + consulta.dataDaConsulta
            mensagemFinal += ". Por favor, acuse o recebimento deste e-mail."
        }

        return mensagemFinal
    })

    console.log("Array com emails: ", mensagens)

    encerraExercicio("Exercício 4")
}

function exercicio5() {
    iniciaExercicio("Exercício 5")
    const contas = [
        { cliente: "Goli", saldoTotal: 1000, compras: [100, 200, 300] },
        { cliente: "Paulinha", saldoTotal: 7500, compras: [200, 1040] },
        { cliente: "Darvas", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
        { cliente: "Lu", saldoTotal: 100, compras: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, compras: [] },
        { cliente: "Miau", saldoTotal: -300, compras: [800] }
    ]

    contas.forEach((item) => {
        item.compras.forEach((valor) => {
            item.saldoTotal -= valor
        })
    })

    encerraExercicio("Exercício 5")
}