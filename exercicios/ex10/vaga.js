function criarNovaVaga(){
    const nomeVaga = prompt("Forneça um nome para a vaga: ")
    const descricao = prompt("Forneça uma descrição para a vaga: ")
    const dataLimite = prompt("Forneça uma data limite para inscrição na vaga: ")
    const resposta = confirm("Você tem certeza que quer cadastrar essa vaga?")
    if (resposta) {
        vagas.push({
            nomeVaga,
            descricao,
            dataLimite,
            candidatosInscritos: 0,
            nomeDosCandidatos: [],
        })
    } else {
        alert("Tente Novamente")                
    }
}

function listarVagasDisponiveis(){
    let exibirVagas = ""
    for(let i = 0; i < vagas.length; i++) {
        exibirVagas += `\nIndice da vaga: ${i}` +
        `\nNome da vaga: ${vagas[i].nomeVaga}` +
        `\nNúmero de candidatos inscritos: ${vagas[i].candidatosInscritos}`
    }
    alert(exibirVagas)
}

function vizualizarVaga(indice){
    alert(vagas[indice].nomeVaga +
        "\n" + vagas[indice].descricao +
        "\n" + vagas[indice].dataLimite +
        "\n" + vagas[indice].nomeDosCandidatos.length +
        "\n" + vagas[indice].nomeDosCandidatos
    )
    
}

function increverCandidato(){
    let nomeCandidato = prompt("Digite o nome do candidato: ")
    let indice = prompt("Digite o indice da vaga:")
    let confirmacao = confirm("Essa é a vaga pretendida?"+
        "\n" + vagas[indice].nomeVaga +
        "\n" + vagas[indice].descricao +
        "\n" + vagas[indice].dataLimite
    )
    if (confirmacao) {
        vagas[indice].nomeDosCandidatos.push(nomeCandidato)
        vagas[indice].candidatosInscritos++
        alert("Inscrição Realizada !")
    }
}

function excluirVaga(){
    let indice = prompt("Digite o indice da vaga: ")
    vizualizarVaga(indice)
    let escolha = confirm("Gostaria de excluir essa vaga?")
    if (escolha){
        vagas.splice(indice, 1)
        alert("Vaga excluida !")
    }
}

let vagas = []

do{
    opcao = prompt(
        "Escolha uma das opções abaixo:" +
        "\n1. Listar vagas disponiveis" +
        "\n2. Criar uma nova vaga" +
        "\n3. Vizualizar uma vaga" +
        "\n4. Inscrever um candidato em uma vaga" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
    )

    switch (opcao) {
        case "1":
            listarVagasDisponiveis()
            break
        case "2":
            criarNovaVaga()
            break
        case "3":
            let indice = prompt("Digite o indice da vaga: ")
            vizualizarVaga(indice)
            break
        case "4":
            increverCandidato()
            break
        case "5":
            excluirVaga()
            break
        case "6":
            alert("Encerrando o programa...")
            break
        default:
            alert("Digite uma escolha válida!")
            break
    }

} while (opcao !== "6")