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
    console.log(`
Este código mostra que 
`)
    encerraExercicio("Exercício 1")
}

function exercicio2() {
    iniciaExercicio("Exercício 2")
    console.log(`
Objetos podem ser usados quando queremos isolar
algumas informações diferentes (mas relacionadas) 
em uma só variável. Devem ser usados quando vamos
representar algum elemento do "mundo real", um
"objeto".
Arrays podem ser usados quando queremos guardar
informaçõed diferentes, relacionadas entre si,
e que devem obdecer a uma determinada ordem.
Normalmente, não é aconselhável de se guardarem 
tipos de valores diferentes no mesmo array.
    `)
    encerraExercicio("Exercício 2")
}

function exercicio3() {
    iniciaExercicio("Exercício 3")

    function criaRetangulo(lado1, lado2) {
        const retangulo = {
            largura: lado1,
            altura: lado2,
            perimetro: 2 * (lado1 + lado2),
            area: lado1 * lado2
        }
        return retangulo
    }
    console.log("Retangulo com lado1 = 5 e lado2 = 3")
    console.log(criaRetangulo(5, 3))
    encerraExercicio("Exercício 3")
}

function exercicio4() {
    iniciaExercicio("Exercício 4")
    const pessoa = {
        nome: "Goli",
        email: "joao@email.com",
        idade: 23,
        endereco: "Rua Butanta, 461"
    }

    function anonimizarPessoa(info) {
        return {
            ...info,
            nome: "ANÔNIMO"
        }
    }

    console.log("Pessoa anonimizada:", anonimizarPessoa(pessoa))
    console.log("Pessoa: ", pessoa)

    encerraExercicio("Exercício 4")
}

function exercicio5() {
    iniciaExercicio("Exercício 5")

    const filmeFavorito = {
        titulo: "Bastardos Inglórios",
        ano: 2009,
        diretor: "Quentin Tarantino",
        elenco: ["Brad Pitt", "Diane Krueger", "Mélanie Laurent", "Christoph Waltz"],
        imprimeInformacoes: undefined
    }

    function imprimeFilme() {
        let resultado = "Venha assistir ao filme " + this.titulo +
            ", de " + this.ano +
            ", dirigido por " + this.diretor

        let estrelados = " e estrelado por "
        for (let i = 0; i < this.elenco.length; i++) {
            estrelados += this.elenco[i]
            if (i !== this.elenco.length - 1) {
                estrelados += ", "
            }
        }
        resultado += estrelados
        console.log(resultado)
    }

    filmeFavorito.imprimeInformacoes = imprimeFilme
    filmeFavorito.imprimeInformacoes()

    encerraExercicio("Exercício 5")
}