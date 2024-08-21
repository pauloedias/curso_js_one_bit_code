nome = prompt("Digite seu nome: ")

let resposta = prompt("Você já visitou alguma cidade? \nsim \nnão")

let cidades = []

while(resposta !== 'não') {
    let cidade = prompt("Digite o nome da cidade que você visitou ?")

    cidades.push(cidade)

    resposta = prompt("Você já visitou alguma cidade? \nsim \nnão")

}

alert(`${nome} você já visitou ${cidades.length} cidades. \n As cidades que voce visitou foram: ${cidades}`)