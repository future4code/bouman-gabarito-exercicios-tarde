let alunos = []

function criarUsuario() {
    const nome = document.getElementById("nome").value
    const idade = Number(document.getElementById("idade").value)
    const tel = document.getElementById("tel").value
    if (nome === "") {
        alert("Você deve informar um nome!")
        return
    }
    if (idade === 0) {
        alert("Você deve informar uma idade!")
        return
    }
    if (tel === "") {
        alert("Você deve informar um telefone!")
        return
    }
    alert("Usuário criado com sucesso!")
    return {
        nome,
        idade,
        tel
    }
}

function cliqueEmEnviar() {
    alunos.push(criarUsuario())
    mostraAlunos()
}

function limparAlunos() {
    alunos = []
    mostraAlunos()
}

function mostraAlunos() {
    const container = document.getElementById("lista-alunos")
    container.innerHTML = ""
    for (const aluno of alunos) {
        container.innerHTML += "<article>" + "<div>" + criaParagrafo("Nome: " + aluno.nome) +
            criaParagrafo("Idade: " + aluno.idade) + criaParagrafo("Tel: " + aluno.tel) + "</div>" +
            "<p onclick=\"deletarAluno('" + aluno.nome + "')\"> X </p>" + "</article>"
    }
}

function deletarAluno(nome) {
    for (let i = 0; i < alunos.length; i++) {
        const aluno = alunos[i]
        if (aluno.nome === nome) {
            alunos.splice(i, 1)
        }
        mostraAlunos()
    }
}

function criaParagrafo(texto) {
    return "<p>" + texto + "</p>"
}

window.onload = main

function main() {
    console.log(alunos)
}