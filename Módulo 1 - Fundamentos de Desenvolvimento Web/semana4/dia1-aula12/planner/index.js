function limpaCampo() {
    document.getElementById("novaTask").value = "";
}

function riscaTarefa(event) {
    const target = event.target;

    target.classList.toggle("tarefa-feita");
}

function criarTarefa() {
    const nomeDaNovaTarefa = document.getElementById("novaTask").value;
    const diaDaSemanaSelecionado = document.getElementById("diaDaSemana").value;
    const listaDeTarefasSelecionada = document.querySelector("#" + diaDaSemanaSelecionado + " > .content")

    const novaTarefa = document.createElement("li");
    novaTarefa.innerText = nomeDaNovaTarefa;
    novaTarefa.onclick = riscaTarefa;

    if (nomeDaNovaTarefa !== "") {
        listaDeTarefasSelecionada.append(novaTarefa);
        limpaCampo();
    } else {
        alert("Opa! Você não inseriu o nome da tarefa");
    }
}

function apagaTodasAsTarefas() {
    const todasAsTarefas = document.querySelectorAll(".content")

    if (confirm("Você tem certeza que deseja apagar todas as tarefas?")) {
        for (let diaDaSemana of todasAsTarefas) {
            diaDaSemana.innerHTML = "";
        }
    }
}