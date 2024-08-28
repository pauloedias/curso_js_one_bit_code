let base
let altura
let raio

function areaTriangulo () {
    base = prompt("Digite o valor da base: ")
    altura = prompt("Digite o valor da altura: ")
    let area = (base * altura) / 2

    return alert(`O resultado da área do triângulo é ${area}!`)
}

function areaRetangulo () {
    base = prompt("Digite o valor da base: ")
    altura = prompt("Digite o valor da altura: ")
    let area = (base * altura)

    return alert(`O resultado da área do retângulo é ${area}!`)
}

function areaQuadrado() {
    lado = prompt("Digite o valor do lado: ")
    let area = lado * lado

    return alert(`O resultado da área do quadrado é ${area}!`)
}

function areaTrapezio() {
    baseMaior = prompt("Digite o valor da base maior: ")
    baseMenor = prompt("Digite o valor da base menor: ")
    altura = prompt("Digite o valor da altura: ")
    let area = (baseMaior * baseMenor) * altura / 2

    return alert(`O resultado da área do trapézio é ${area}!`)
}

function areaCirculo() {
    raio = prompt("Digite o valor do raio: ")
    let area = 3.14 * (raio**2)

    return alert(`O resultado da área do circulo é ${area}!`)
}

do {
    opcoes = prompt
    ("Escolha uma das opções abaixo: \n"+
        "\n1. Cálculo área do triângulo " +
        "\n2. Cálculo área do retângulo " +
        "\n3. Cálculo área do quadrado " +
        "\n4. Cálculo área do trapézio " +
        "\n5. Cálculo área do círculo " +
        "\n6. Sair "
    )

    switch (opcoes) {
        case "1":
            areaTriangulo()
            break
        case "2":
            areaRetangulo()
            break
        case "3":
            areaQuadrado()
            break
        case "4":
            areaTrapezio()
            break
        case "5":
            areaCirculo()
            break
        case "6":
            alert("Encerando...")
            break
        default:
            alert("Digite uma opção válida!")
            break
    }
} while (opcoes !== "6")