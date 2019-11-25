const inputDeValor = document.getElementById("input-valor")
const inputDeTipo = document.getElementById("input-tipo")
const inputDeDescricao = document.getElementById("input-descricao")

const filtroDeValorMaximo = document.getElementById("filtro-valor-maximo")
const filtroDeValorMinimo = document.getElementById("filtro-valor-minimo")
const filtroDeTipo = document.getElementById("filtro-tipo")

const containerDeDespesas = document.getElementById("container-de-despesas")
const containerDoExtrato = document.getElementById("container-do-extrato")

const textoDoValorTotal = document.getElementById("valor-total")

const arrayDeDespesas = []

let valorTotal = 0

class Despesa {
    constructor(valor, tipo, descricao) {
        this.valor = valor
        this.tipo = tipo
        this.descricao = descricao
    }
}

function cadastrar() {
    const valor = Number(inputDeValor.value)
    const tipo = inputDeTipo.value
    const descricao = inputDeDescricao.value

    const despesa = new Despesa(valor, tipo, descricao)

    arrayDeDespesas.push(despesa)
    mostraDespesasDetalhadas(arrayDeDespesas)

    valorTotal += valor
    mostraExtrato()
}

function filtrar() {
    let filtrados = arrayDeDespesas

    if (filtroDeValorMaximo.value !== "") {
        filtrados = filtrados.filter((despesa) => {
            return despesa.valor <= Number(filtroDeValorMaximo.value)
        })
    }

    if (filtroDeValorMinimo.value !== "") {
        filtrados = filtrados.filter((despesa) => {
            return despesa.valor >= Number(filtroDeValorMinimo.value)
        })
    }

    if (filtroDeTipo.value !== "") {
        filtrados = filtrados.filter((despesa) => {
            return despesa.tipo === filtroDeTipo.value
        })
    }

    mostraDespesasDetalhadas(filtrados)
}

function limparFiltros() {
    filtroDeValorMaximo.value = ""
    filtroDeValorMinimo.value = ""
    filtroDeTipo.value = ""
    mostraDespesasDetalhadas(arrayDeDespesas)
}

function mostraDespesasDetalhadas(despesasParaMostrar) {
    const elementosDeDespesa = despesasParaMostrar.map((despesa) => {
        return "<div class='container-da-despesa'>" +
            "<p> Valor: " + despesa.valor + "</p>" +
            "<p> Tipo: " + despesa.tipo + "</p>" +
            "<p> Descrição: " + despesa.descricao + "</p>" +
            "</div>"
    })

    containerDeDespesas.innerHTML = ""

    elementosDeDespesa.forEach((item) => {
        containerDeDespesas.innerHTML += item
    })
}

function mostraExtrato() {
    textoDoValorTotal.innerHTML = "Valor Total: R$" + valorTotal
    const elementosDeExtrato = arrayDeDespesas.map((despesa) => {
        return "<div class='container-da-extrato'>" +
            "<p>" + despesa.tipo + " - " + despesa.valor + "</p>" +
            "</div>"
    })

    containerDoExtrato.innerHTML = ""

    elementosDeExtrato.forEach((item) => {
        containerDoExtrato.innerHTML += item
    })
}