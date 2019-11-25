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
Este código solicita que o usuário indique o valor da cotação 
do Dólar. Ele calcula, através de uma função, o valor que U$100
teriam, em reais, na cotação informada pelo usuário. Ele imprime
o valor no console
	`)

    function conversorDeMoeda(valorEmDolar) {
        const cotacao = Number(prompt("Informe o valor da cotação do Dólar"))
        return "R$" + (cotacao * valorEmDolar)
    }

    const meuDinheiro = conversorDeMoeda(100)
    console.log("O valorde U$100 é", meuDinheiro)

    encerraExercicio("Exercício 1")
}

function exercicio2() {
    iniciaExercicio("Exercício 2")
    console.log(`
Podemos percorrer um array, usando o loop
while, for(let i = 0; i < arra.length; i++) ou 
for(const item of array)
Abaixo, percorremos o mesmo array usando essas 
três formas
	`)

    const array = ['a', 'b', 'c', 'd', 'e']
    console.log("O array é: ", array)

    console.log("I. usando while")
    let index = 0
    while (index < array.length) {
        console.log(index + " - " + array[index])
        index++
    }

    console.log("II. usando for")
    for (index = 0; index < array.length; index++) {
        console.log(index + " - " + array[index])
    }

    console.log("III. usando for of")
    for (const item of array) {
        console.log(array.indexOf(item) + " - " + item)
    }
    encerraExercicio("Exercício 2")
}

function exercicio3() {
    iniciaExercicio("Exercício 3")
    const booleano1 = true
    const booleano2 = false
    const booleano3 = !booleano2
    const booleano4 = !booleano3

    console.log("a. booleano1 && booleano2 && !booleano4 = " + false)
    console.log("b. (booleano1 && booleano2) || !booleano3 = " + false)
    console.log("c. (booleano2 || booleano3) && (booleano4 || booleano1) = " + true)
    console.log("d. !(booleano2 && booleano3) || !(booleano1 && booleano3) = " + true)
    console.log("e. !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3) = " + true)

    encerraExercicio("Exercício 3")
}

function exercicio4() {
    iniciaExercicio("Exercício 4")

    const helloF4 = () => {
        alert("Hello Future4")
    }

    helloF4()

    encerraExercicio("Exercício 4")
}

function exercicio5() {
    iniciaExercicio("Exercício 5")

    function imprimeMaiorESegundoMaior(array) {
        const arrayOrdenado = array.sort((a, b) => a - b)
        console.log(arrayOrdenado)
        if (arrayOrdenado.length > 1) {
            console.log("Segundo Menor: ", arrayOrdenado[1])
            console.log("Segundo Maior: ", arrayOrdenado[arrayOrdenado.length - 2])
        } else {
            console.log("Segundo Menor: ", arrayOrdenado[0])
            console.log("Segundo Maior: ", arrayOrdenado[0])
        }
    }

    let array = [1, 2, 3]
    console.log("Para o array: ", array)
    imprimeMaiorESegundoMaior(array)

    array = [10, 8, 23, 11, 1]
    console.log("Para o array: ", array)
    imprimeMaiorESegundoMaior(array)

    array = [10, 8, 23, 11, 1, 25, 9, 12, 30]
    console.log("Para o array: ", array)
    imprimeMaiorESegundoMaior(array)

    array = [1]
    console.log("Para o array: ", array)
    imprimeMaiorESegundoMaior(array)

    array = [1, 2]
    console.log("Para o array: ", array)
    imprimeMaiorESegundoMaior(array)

    encerraExercicio("Exercício 5")

}