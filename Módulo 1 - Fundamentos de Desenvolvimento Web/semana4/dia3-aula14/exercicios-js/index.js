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
Este código percorre os itens do array numeros.
Se o número for par (divisível por 2), ele é
adicionado no array1. Se for ímpar (não divisível),
é adicionado no array2.
Em seguida, ele imprime a quantidade de números,
o array com os números pares e o array com os 
números ímpares
    `)
    const numeros = [25, 12, 55, 64, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283]
    const array1 = []
    const array2 = []
    for (let numero of numeros) {
        if (numero % 2 === 0) {
            array1.push(numero)
        } else {
            array2.push(numero)
        }
    }
    console.log("Quantidade de números: ", numeros.length)
    console.log(array1)
    console.log(array2)
    encerraExercicio("Exercício 1")
}

function exercicio2() {
    iniciaExercicio("Exercício 2")
    console.log(`
Este código percorre os itens do array numeros.
Ele verifica se cada um dos itens é maior que o numero1
(quando for, substituio o numero1 pelo valor do item em questão).
Ele verifica, também, se cada um dos itens é menor que 
o numero2 (e faz a mesma substituição)
Como o numero1 começa com o valor Infinity (maior
valor que pode assumir), ele termina contendo
o menor número do array. Além disso, on numero2
começa com zero; assim, ele termina com o maior 
numero do array (caso todos sejam positivos).
Assim, ele primeiro imprime o menor valor do numeros (-10);
e, em seguida, imprime o maior (1590)
        `)
    const numeros = [25, 12, 55, 64, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283,
        1, 99, 13, 31, 83, 131, 1.1, -10, 25, 1590
    ]
    let numero1 = Infinity
    let numero2 = 0
    for (let numero of numeros) {
        if (numero < numero1) {
            numero1 = numero
        }

        if (numero > numero2) {
            numero2 = numero
        }
    }
    console.log(numero1)
    console.log(numero2)
    encerraExercicio("Exercício 2")
}

function exercicio3() {
    iniciaExercicio("Exercício 3")
    console.log(`
Não funciona. Faltaram três coisas:
1. Inicializar a variavel com a quantidade
Isto pode ser feito, solicitando que
o usuário escreva

2. Faltou atualizar a variavel do loop
O index/contador, representado pela 
variavel i, não é atualizado dentro do loop
Desta forma, o loop seria infinito

3. A condição de parada está errada
Do jeito que está, o código sempre
vai imprimir um número a mais. 
Devemos trocar a condição para
i < quantidadeDeNumerosPares
        `)

    const quantidadeDeNumerosPares = Number(prompt("Informe a quantidade de números pares"))
    let i = 0
    while (i < quantidadeDeNumerosPares) {
        console.log(i * 2)
        i++
    }

    encerraExercicio("Exercício 3")
}

function exercicio4() {
    iniciaExercicio("Exercício 4")
    console.log("***** Item A - INÍCIO *****")

    function classificaTriangulo(a, b, c) {
        if (a === b && a === c && c === b) {
            console.log("Equilátero")
        } else if (a !== b && a !== c && c !== a) {
            console.log("Escaleno")
        } else {
            console.log("Isósceles")
        }
    }
    console.log("Lados: 1, 2, 3")
    classificaTriangulo(1, 2, 3)

    console.log("Lados: 2, 2, 3")
    classificaTriangulo(2, 2, 3)

    console.log("Lados: 2, 2, 2")
    classificaTriangulo(2, 2, 2)

    console.log("***** Item A - FIM *****")

    console.log("***** Item B - INÍCIO *****")
    class Triangulo {
        constructor(a, b, c) {
            this.a = a
            this.b = b
            this.c = c
        }

        classificaTriangulo = () => {
            if (this.a === this.b && this.a === this.c && this.c === this.b) {
                console.log("Equilátero")
            } else if (this.a !== this.b && this.a !== this.c && this.c !== this.a) {
                console.log("Escaleno")
            } else {
                console.log("Isósceles")
            }
        }
    }
    console.log("Lados: 1, 2, 3")
    let triangulo = new Triangulo(1, 2, 3)
    triangulo.classificaTriangulo()

    console.log("Lados: 2, 2, 3")
    triangulo = new Triangulo(2, 2, 3)
    triangulo.classificaTriangulo()

    console.log("Lados: 2, 2, 2")
    triangulo = new Triangulo(2, 2, 2)
    triangulo.classificaTriangulo()
    console.log("***** Item B - FIM *****")
    encerraExercicio("Exercício 4")
}

function exercicio5() {
    iniciaExercicio("Exercício 5")
    const a = Number(prompt("Indique um número: "))
    const b = Number(prompt("Indique outro número: "))


    console.log("ENTRADA: ")
    console.log(a + " e " + b)
    console.log("\nSAÍDA: ")
    let maior = b
    let menor = a
    if (a > b) {
        maior = a
        menor = b
    }
    console.log("O maior é: ", maior)
    console.log(menor + " não é divisível por " + maior)
    if (maior % menor === 0) {
        console.log(maior + " é divisível por " + menor)
    } else {
        console.log(maior + " não é divisível por " + menor)
    }

    console.log("A diferença entre eles é", maior - menor)

    encerraExercicio("Exercício 5")
}

function exercicio5Extra() {
    iniciaExercicio("Exercício 5 - Item Extra")
    const a = Number(prompt("Indique um número: "))
    const b = Number(prompt("Indique outro número: "))

    class InformacaoNumeros {
        constructor(numA, numB) {
            this.a = numA
            this.b = numB
            this.maior = 0
            this.menor = 0
        }

        pegaMaiorEMenor = () => {
            this.maior = b
            this.menor = a
            if (a > b) {
                this.maior = a
                this.menor = b
            }
        }

        verificaSeEhDivisivel = () => {
            this.ehDivisivel = this.maior % this.menor === 0
        }

        executa = () => {
            this.pegaMaiorEMenor()
            this.verificaSeEhDivisivel()
            console.log("ENTRADA: ")
            console.log(a + " e " + b)
            console.log("\nSAÍDA: ")

            console.log("O maior é:", this.maior)
            if (this.ehDivisivel) {
                console.log(this.maior + " é divisível por " + this.menor)
            } else {
                console.log(this.maior + " não é divisível por " + this.menor)
            }


            console.log("A diferença entre eles é", this.maior - this.menor)

        }

    }

    const info = new InformacaoNumeros(a, b)
    info.executa()

    encerraExercicio("Exercício 5 - Item Extra")
}