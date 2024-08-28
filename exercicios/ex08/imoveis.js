let escolha
let imoveis = []
let nImoveis = 0
do {
    escolha = prompt( `Número de Imóveis Cadastrados: ${nImoveis}\n`+
        "\nEscolha uma das opções abaixo:" +
        "\n1) Salvar imóvel" +
        "\n2) Listar imóveis salvos" +
        "\n3) Sair"
    )

    switch (escolha) {
        case "1":
            let nome = prompt("Digite o nome do proprietário: ")
            let quantidadeQuartos = prompt("Digite a quantidade de quartos: ")
            let quantidadeBanheiros = prompt("Digite a quantidade de banheiros: ")
            let garagem = prompt("O apartamento possui garagem? (Sim/Não)")
            imoveis.push(imovel={
                nomeProprietario: nome,
                quartos: quantidadeQuartos,
                banheiros: quantidadeBanheiros,
                garagem: garagem, 
            })
            nImoveis++
            break
        
        case "2":
            let exibirimoveis = ""
            for (let i = 0; i<imoveis.length; i++){
                exibirimoveis += `\n Imovel ${i + 1}`
                exibirimoveis += "\nNome do Proprietário: "+imoveis[i].nomeProprietario
                exibirimoveis += "\nQuantidade de quartos: "+imoveis[i].quartos
                exibirimoveis += "\nQuantidade de banheiros: "+imoveis[i].banheiros
                exibirimoveis += "\nPossui garagem? " + imoveis[i].garagem + "\n"
            } 
            alert(exibirimoveis)
            break
        
        case "3":
            alert("Saindo...")
            break
        
        default:
            alert("Escolha uma opção válida!")
    }
} while (escolha !== "3")