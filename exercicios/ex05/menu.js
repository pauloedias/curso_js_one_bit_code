do {
    menu = prompt(
        "Escolha uma opção:" +
        "\n1)" +
        "\n2)" +
        "\n3)" +
        "\n4)" +
        "\n5)Encerrar"
)

    if (menu === null) {
        alert("Escolha uma opção válida!")
    } else {
        alert(`A opção ${menu} foi escolhida!`)  
    }

} while(menu !== "5") 

alert("O sistema esta sendo encerrado!")