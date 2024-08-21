let baralho = ['Ás de paus', 'Coringa', 'Ás de Copas', 'Rei de Espadas']
let escolha

do{
    let numCartas = baralho.length

    escolha = prompt(`O baralho tem ${numCartas} cartas!`+
        "\nEscolha uma das opções abaixo: " +
        "\n1)Adicionar uma carta"+
        "\n2)Puxar uma carta"+
        "\n3)Sair"
    )

    switch (escolha) {
        case "1":
            let cartaAdicionada = prompt("Digite o nome da carta: ")
            baralho.unshift(cartaAdicionada)
            break
        case "2":
            cartaPuxada = baralho.shift()
            if (cartaPuxada === undefined){
                alert("Não existem mais cartas no baralho, adicione novas cartas!")
                break
            } else {
                alert(`A carta puxada foi ${cartaPuxada}`)
                break
            }
        case "3":
            break
        default:
            alert("Digite uma opção válida!")
    }

} while (escolha !== "3")